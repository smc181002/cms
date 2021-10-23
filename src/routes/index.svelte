<script context="module">
  export const prerender = true;
</script>

<script>
	import Header from '$lib/header/Header.svelte';
	import Announce from '$lib/landing/Announce.svelte';
  import Card from '$lib/landing/Card.svelte';

  let data = [
    {
      title: 'Get Knowledge from our College Library',
      subtitle: 'Access endless resources of knowledge with the help of our college library resources ranging from ebooks to research journals.',
      button: {text: 'Go to Library', link: '/library'},
    },
    {
      title: 'Everything about your Hostels is here',
      subtitle: 'Access endless resources of knowledge with the help of our college library resources ranging from ebooks to research journals.',
      button: {text: 'Go to Hostel Management', link: '/hms'},
    },
    {
      title: 'Library is not enough? choose online learning for any resource',
      subtitle: 'Access endless resources of knowledge with the help of our college library resources ranging from ebooks to research journals.',
      button: {text: 'Go to Online Tutorials', link: '/online-tuts'},
    },
  ]
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<Header title="college management"/>

<main class="flex gap-4 h-full">
  <div class="flex-grow p-4 h-full">
    <main class="min-h-full">
      {#each data as { title, subtitle, button }}
        <Card title={title} subtitle={subtitle} button={button}/>
      {/each}

    </main>
  </div>
  <div class="flex-1 fixed right-0 w-1/3 h-screen">
    <Announce />
  </div>
</main>

<style>
  .btn {
    @apply p-2 rounded-full transition-all;
  }
  .btn-blue {
    top: 10rem;
    transform: translateX(-50%);
    z-index: 4;
    @apply bg-white text-blue-500;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
  .btn-blue:active {
    @apply bg-blue-400;
  }
</style>
