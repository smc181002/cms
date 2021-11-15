<script>
  import { createEventDispatcher } from 'svelte';
  import EditCard from '$lib/library/EditCard.svelte'
  export let data;
  export let deleteBook;
  const dispatch = createEventDispatcher();
</script>

<main class="w-3/5">
  <button class="cms-btn cms-btn-blue mb-4" on:click="{() => dispatch('open')}">Add New Book</button>
  {#each data.docs as docs (docs._id)}
    <div class="mb-4">
      <EditCard docs={docs} on:delete={() => deleteBook(docs._id)}/>
    </div>
  {/each}
</main>
