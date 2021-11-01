<script>
  import ViewCard from '$lib/library/ViewCard.svelte'
  export let data;
</script>

<main class="w-3/5">
  {#each data.docs as docs (docs._id)}
    <div class="mb-4">
      <ViewCard docs={docs}/>
    </div>
  {/each}
</main>
