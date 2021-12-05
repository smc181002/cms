<script>
  export let data;
  export let allocateRoom;
  console.log(data);
</script>

{#each data.docs as doc (doc._id)}
  <div class="flex p-6 rounded border shadow my-6 text-gray-800">
    <div class="flex-1">
    {doc.name}
    </div>
    <button class="cms-btn cms-btn-blue" on:click="{allocateRoom(doc._id)}">Allocate room</button>
  </div>
{/each}
