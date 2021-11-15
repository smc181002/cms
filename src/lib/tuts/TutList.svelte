<script>
  import Card from '$lib/tuts/Card.svelte'
  export let data;
</script>

<main class="w-3/5">
  {#each data.docs as docs (docs._id)}
    <div class="mb-4">
      <Card docs={docs}/>
    </div>
  {/each}
</main>
