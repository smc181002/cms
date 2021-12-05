<script>
  import axios from 'axios';
  import {goto} from '$app/navigation';
  import {page as Page} from '$app/stores';
  import Header from '$lib/header/Header.svelte';
  import ListRooms from '$lib/hms/ListRooms.svelte';
  import ListHostelRequests from '$lib/hms/ListHostelRequests.svelte';
  import {endpoint} from '../../stores/endpoint.js'
  /* import TutList from '$lib/tuts/TutList.svelte' */
  /* import { cookiePromise } from '$lib/functions/getCookie'; */
  /* let url = "http://192.168.0.102:3001/page/" */
  /* let url = "http://c080-49-204-229-55.ngrok.io/page/" */
  /* let url = "http://localhost:3001/api/library/addNewBook/" */
  /* $: url = `http://localhost:3001/api/library/listBooks?page=${page}` */
  let page = 1;
  let endpointList = ['listRooms', 'listRequests'];
  let endpoint_value = 'listRooms';
  let url;
  async function getData(endpoint, page) {
    url = `http://localhost:3001/api/admin/hostel/${endpoint}?page=${page}`;
    try{
      return await axios.get(url, {withCredentials: true});
    } catch (err) {
      console.log(err);
    }
  }

  async function allocateRoom(userid) {
    url = `http://localhost:3001/api/admin/hostel/allocateRoom`;
    try{
      location.reload()
      return await axios.post(url, {userid}, {withCredentials: true});
    } catch (err) {
      console.log(err);
    }
  }

  /* endpoint.subscribe(value => c(endpoint_value = value)); */
  $: getDataPromise = getData($endpoint, page);
  /* const pageIncrement = () => page++ */

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<Header title="Hostel Portal" />
<main>
  <div class="px-16">
    <button class="cms-btn mr-2 my-4 {($endpoint === endpointList[0]) ? 'cms-btn-blue' : 'cms-btn'}" on:click="{() => endpoint.set(endpointList[0])}">List All Rooms</button>
    <button class="cms-btn mr-2 my-4 {($endpoint === endpointList[1]) ? 'cms-btn-blue' : 'cms-btn'}"  on:click="{() => endpoint.set(endpointList[1])}">List Hostel Requests</button>
    {#await getDataPromise then data}

      {#if ($endpoint === endpointList[0])}
        <ListRooms data={data.data}/>
      {:else if ($endpoint === endpointList[1])}
        <ListHostelRequests data={data.data} allocateRoom={allocateRoom}/>
      {/if}
    {/await}
  </div>
</main>
