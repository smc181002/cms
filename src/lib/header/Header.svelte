<script>
  import { goto } from '$app/navigation';
  export let title;
  import {isLogged} from '../../stores/auth';

</script>

<nav class="flex p-4">
  <div class="flex-grow flex items-center">
    <div class="font-custom text-xl text-blue-500 flex items-center">{title}</div>
  </div>

  <div>
    {#if (isLogged == true) }
      <button class="btn btn-blue" on:click="{() => goto('/login')}">Login</button>
    {:else}
      <span>Hello, User</span>
    {/if}
  </div>

</nav>

<style>

  nav {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  
  .btn {
    @apply py-2 px-4 rounded transition-all;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
  .btn-blue:active {
    @apply bg-blue-400;
  }
</style>
