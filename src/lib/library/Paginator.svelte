<script>
  export let data;
  export let page;
</script>

<ul class="flex mb-2">
  {#each Array.from({length: data.data.totalPages }, (_, i) => i + 1) as pageNo (pageNo) }
    <li>
      <button 
        class="{(pageNo == data.data.page) ? 'bg-blue-600 text-white shadow' : 'border border-gray'} cms-btn w-12 rounded-lg mr-2 hover:bg-blue-500 hover:text-white"
        on:click="{() => (page = pageNo)}"
      >
        {pageNo}
        {console.log(pageNo)}
      </button>
    </li>
  {/each}
</ul>


