<script>
  import {page} from '$app/stores';
  import axios from 'axios';
  import {marked} from 'marked';

  import Header from '$lib/header/Header.svelte';

/* import {Highlight} from 'svelte-highlight'; */
  /* import "svelte-highlight/src/styles/atom-one-dark.css"; */


  let url;
  async function getData() {
    url = `http://localhost:3001/api/tutorials/listPage/${$page.params.tut}`;
    try{
      return await axios.get(url, {withCredentials: true});
    } catch (err) {
      console.log(err);
    }
  }

</script>
<main>
  <Header title="Online Tutorials" />
  {#await getData() then data}
    <h1 class="my-12 text-8xl md:text-7xl sm:text-5xl"> {data.data.title} </h1>
    <div class="prose lg:prose-xl mx-auto mb-12">
      {@html marked(data.data.data)}
    </div>
  {/await}

</main>
