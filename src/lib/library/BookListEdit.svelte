<script>
  import EditCard from '$lib/library/EditCard.svelte'
  /* import ViewCard from '$lib/library/ViewCard.svelte' */
  export let data;
</script>

<main class="w-3/5">
  <button class="cms-btn cms-btn-blue">Add New Book</button>
  {#each data.docs as docs (docs._id)}
    <div class="mb-4">
      <EditCard docs={docs}/>
    </div>
  {/each}
</main>
