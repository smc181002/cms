<script>
  import axios from 'axios';
  import Header from '$lib/header/Header.svelte';
  /* import { cookiePromise } from '$lib/functions/getCookie'; */
  /* import { goto } from '$app/navigation'; */
  /* let url = "http://192.168.0.102:3001/page/" */
  /* let url = "http://c080-49-204-229-55.ngrok.io/page/" */
  /* let url = "http://localhost:3001/api/library/addNewBook/" */
  /* $: url = `http://localhost:3001/api/library/listBooks?page=${page}` */
  let page = 1;
  let url;

  async function addPage(data) {
    url = `http://localhost:3001/api/tutorials/addNewPage`;
    try{
      let post =  await axios.post(url, data, {withCredentials: true});

      return post;
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e){
    /* addPage(e.target.elements[1].value); */
    let title = e.target.elements[0].value;
    let data = e.target.elements[1].value;
    addPage({title, data});
  }


</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<Header title="Online Tutorials" />

<form on:submit|preventDefault="{handleSubmit}" class="flex flex-col">
  <label for="">Title</label>
  <input type="text">
  <label for="">Data</label>
  <textarea name="" id="" cols="30" rows="10"></textarea>
  <button>save</button>
</form>
