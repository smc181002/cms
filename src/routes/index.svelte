<script context="module">
  export const prerender = true;
  import { browser } from '$app/env'; 
</script>

<script>
	import Header from '$lib/header/Header.svelte';
	import Announce from '$lib/landing/Announce.svelte';
  import Card from '$lib/landing/Card.svelte';

  import { getCookieValueByName } from '$lib/functions/getCookie';

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
      button: {text: 'Go to Online Tutorials', link: '/tutorials'},
    },
  ]

  if(browser) {
    console.log(getCookieValueByName('user'));
  }
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="fixed w-full z-20 bg-white">
  <Header title="college management"/>
</div>

<main class="flex gap-4 h-full">
  <div class="flex-grow p-4 h-full">
    <main class="min-h-full mt-20">
      {#each data as { title, subtitle, button }}
        <Card title={title} subtitle={subtitle} button={button}/>
      {/each}

    </main>
  </div>
  <div class="flex-1 fixed right-0 w-1/3 h-screen mt-20">
    <Announce />
  </div>
</main>
