<script>
  import axios from 'axios';
  import {goto} from '$app/navigation';
  import {page as Page} from '$app/stores';
  import Header from '$lib/header/Header.svelte';
  import Accordion from '$lib/Accordion.svelte';
  import TutList from '$lib/tuts/TutList.svelte'
  import { cookiePromise } from '$lib/functions/getCookie';
  /* let url = "http://192.168.0.102:3001/page/" */
  /* let url = "http://c080-49-204-229-55.ngrok.io/page/" */
  /* let url = "http://localhost:3001/api/library/addNewBook/" */
  /* $: url = `http://localhost:3001/api/library/listBooks?page=${page}` */
  let page = 1;
  let url;
  async function getData(page) {
    url = `http://localhost:3001/api/admin/listUsers?page=${page}`;
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

<Header title="Admin Console" />
<main>
  <div class="px-16">
    <h1 class="text-left my-6">Quick Links</h1>
    <ul>
      <li><a class="prose text-blue-600" href="/admin/addUser">Add User</a></li>
      <li><a class="prose text-blue-600" href="/admin/addNewRoom">Add New Room Information</a></li>
      <li><a class="prose text-blue-600" href="/hms/listRooms">Hostel Room Requests</a></li>
      <li><a class="prose text-blue-600" href="/hms/listRooms">List Hostel Rooms</a></li>
    </ul>
  </div>
  <div class="px-16">
    <h1 class="text-left my-6">Users</h1>
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
      <Accordion sections={data.data.docs} />
    {/await}
  </div>
</main>
