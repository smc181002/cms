<script>
  import axios from 'axios';
  import {goto} from '$app/navigation';
  import {page as Page} from '$app/stores';
  import Header from '$lib/header/Header.svelte';
  import TutList from '$lib/tuts/TutList.svelte'
  import { cookiePromise } from '$lib/functions/getCookie';
  /* let url = "http://192.168.0.102:3001/page/" */
  /* let url = "http://c080-49-204-229-55.ngrok.io/page/" */
  /* let url = "http://localhost:3001/api/library/addNewBook/" */
  /* $: url = `http://localhost:3001/api/library/listBooks?page=${page}` */
  let page = 1;
  let url;
  async function getData(page) {
    url = `http://localhost:3001/api/tutorials/listPages?page=${page}`;
    try{
      return await axios.get(url, {withCredentials: true});
    } catch (err) {
      console.log(err);
    }
  }

  $: getDataPromise = getData(page);
  /* const pageIncrement = () => page++ */

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<Header title="Online Tutorials" />
<main>
  <div class="px-16">
    <h1 class="text-left my-6">Books</h1>
    {#await cookiePromise then user}
      {#if (user.split("-")[1] == 'librarian' || user.split("-")[1] == 'admin') }
        <button class="cms-btn cms-btn-blue my-4" on:click="{() => goto($Page.path + '/add')}">
          Add New Tutorials Page
        </button>
      {/if}
    {/await}
    {#await getDataPromise then data}
    <ul class="flex mb-2">
      {#each Array.from({length: data.data.totalPages }, (_, i) => i + 1) as pageNo (pageNo) }
        <li>
          <button 
            class="{(pageNo == data.data.page) ? 'bg-blue-600 text-white shadow' : 'border border-gray'} cms-btn w-12 rounded-lg  mr-2 hover:bg-blue-500 hover:text-white"
            on:click="{() => (page = pageNo)}"
          >
            {pageNo}
          </button>
        </li>
      {/each}
    </ul>
    <TutList data={data.data} />
    {/await}
  </div>
</main>
