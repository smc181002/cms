<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  /* let url = "http://192.168.0.102:3001/page/" */
  /* let url = "http://c080-49-204-229-55.ngrok.io/page/" */
  /* let url = "http://localhost:3001/api/library/addNewBook/" */
  let url = "https://localhost/page"
  let data;
  onMount(async function handleSubmit() {
    try {
      data = await axios.get(url, {withCredentials: true});
      console.log(data)
    } catch (err) {
      console.log(err);
      data = {result: "Access Denied"}
    }
  })
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="flex gap-4 h-full">
  {JSON.stringify(data, null, 2)}
</main>

<style>
</style>

