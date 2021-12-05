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
  /* let page = 1; */
  let url;
  async function getData() {
    url = `http://localhost:3001/api/hostel/myHostel`;
    try{
      return await axios.get(url, {withCredentials: true});
    } catch (err) {
      console.log(err);
    }
  }

  $: getDataPromise = getData();
  /* const pageIncrement = () => page++ */
    /* {#await getDataPromise then data} */
    /* <TutList data={data.data} /> */
    /* {/await} */

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<Header title="Hostel Portal" />
<main>
  <div class="px-16">
    {#await cookiePromise then user}
      {#if (user.split("-")[1] == 'admin') }
      <h1 class="text-left my-6">Admin Links</h1>
        <ul>
          <li><a class="prose text-blue-600" href="/hms/listRooms">Hostel Room Requests</a></li>
          <li><a class="prose text-blue-600" href="/hms/listRooms">List Hostel Rooms</a></li>
        </ul>
      {:else if (user.split("-")[1] == 'student') }
        <h1 class="text-left my-6">Allocated Room</h1>
        {#await getDataPromise then data}
          {#if (data.data.hostelRoom !== undefined) }
            <div class="shadow p-4">
              <p>Room No: {data.data.hostelRoom.roomNo}</p>
              <p>Block: {data.data.hostelRoom.block}</p>
            </div>
          {:else}
            <div>Your hostel request is not yet accepted. Please contact the admin</div>
          {/if}
        {/await}
      {/if}
    {/await}
  </div>
</main>
