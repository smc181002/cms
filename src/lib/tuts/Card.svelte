<script>
  export let docs;
  import axios from 'axios';
  import {goto} from '$app/navigation';
  import {page} from '$app/stores';
  /* import {marked} from 'marked'; */

  let {_id, title, userid} = docs;
  async function getUser() {
    let url = `http://localhost:3001/api/misc/getUserName/${userid}`;
    try{
      return await axios.get(url, {withCredentials: true});
    } catch (err) {
      console.log(err);
    }
  }
  console.log(`${$page.path}/${_id}`)
  const goToPage = () => goto(`${$page.path}/${_id}`)
  /* const goToPage = () => console.log(`${$page.path}/${_id}`) */
</script>

<main class="flex shadow appearance-none border rounded cursor-pointer hover:shadow-lg transition-shadow active:shadow-xl" on:click="{goToPage}">
  <div class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto font-semibold text-left truncate mb-6">
        {title}
      </h1>
      <div class="w-full flex-none text-sm font-medium text-gray-500 mt-1 mb-4">
        {#await getUser() then user}
          {user.data.user}
        {/await}
      </div>
    </div>
  </div>
</main>
