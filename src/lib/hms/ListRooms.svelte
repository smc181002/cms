<script>
  export let data;
</script>

{#each data.docs as doc (doc._id)}
  <div class="p-6 rounded border shadow my-6 text-gray-800">
    <div>RoomNo: {doc.roomNo}</div>
    <div>Block: {doc.block}</div>
    <div>User List: </div>
    <ul class="ml-2">
    {#if doc.students.length === 0}
      <em class="text-gray-400">Empty</em>
    {/if}
    {#each doc.students as student}
      <li>{student.name} | {student.email}</li>
    {/each}
    </ul>
  </div>
{/each}
