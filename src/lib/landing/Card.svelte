<script>
  export let title;
  export let subtitle;
  export let button;
  import { goto } from '$app/navigation';
</script>

<main class="w-1/2 my-6 p-4">
  <h1 class="font-custom text-4xl mb-2 text-left">{title}</h1>
  <p class="mb-3">{subtitle}</p>

  <button class="btn btn-blue mt-3 no-underline" on:click="{() => goto(button.link)}">{button.text}</button>
</main>

<style>
  .btn {
    @apply py-3 px-4 rounded transition-all;
  }

  .btn-blue {
    @apply bg-blue-500 text-white;
  }

  .btn-blue:hover {
    @apply bg-blue-700;
    text-decoration: none;
    cursor: pointer;
  }

  .btn-blue:active {
    @apply bg-blue-400;
  }
</style>
