<script>
  import axios from 'axios';
  import Header from '$lib/header/Header.svelte';
  import BookList from '$lib/library/BookList.svelte';
  import { cookiePromise } from '$lib/functions/getCookie';
  import { goto } from '$app/navigation';
  /* let url = "http://192.168.0.102:3001/page/" */
  /* let url = "http://c080-49-204-229-55.ngrok.io/page/" */
  /* let url = "http://localhost:3001/api/library/addNewBook/" */
  /* $: url = `http://localhost:3001/api/library/listBooks?page=${page}` */
  cookiePromise.then(user => {
    let role = user.split("-")[1];
    if (role == 'librarian' || role == 'admin') goto('/library/edit')
  })
  let page = 1;
  let url;
  async function getData(page) {
    url = `http://localhost:3001/api/library/listBooks?page=${page}`;
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

<Header title="library" />

<main class="flex flex-col gap-4 h-full">

  <div class="hero flex flex-col w-full justify-items-center items-center mt-24">
    <h1 class="mb-5">Earn as much knowledge as you can from anywhere</h1>
    <div>One of the largest library resources in the whole world is at your fingertips.</div>
    <form class="relative mt-14">
      <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input class="cms-textfield py-3 pl-10 w-80 px-2 w-96" type="text" placeholder="Enter a book name you want to find" >
      <button class="cms-btn cms-btn-blue ml-2">Find the Book</button>
    </form>
  </div>

  <div>
    <div class="px-16">
      <h1 class="text-left mb-6">Books</h1>
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
      <BookList data={data.data} />
      {/await}
    </div>
  </div>


</main>
