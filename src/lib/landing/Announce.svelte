<script>
  /* import { goto } from '$app/nagivation'; */

  let data = [
    {
        value: "College is reopening from Oct 15 and everyone is requested to come to the university for finishing their lab praticals and research."
    },
    {
        value: "College is reopening from Oct 15 and everyone is requested to come to the university for finishing their lab praticals and research."
    },
    {
        value: "College is reopening from Oct 15 and everyone is requested to come to the university for finishing their lab praticals and research."
    },
  ];
</script>

<main class="flex flex-col bg-green-600 relative w-full h-screen p-6">
  <h1 class="text-white w-full text-left text-3xl mb-4"> Announcements </h1>

  {#each data as {value} }
    <p class="text-white my-2 ml-1">{value}</p>
  {/each}
</main>
