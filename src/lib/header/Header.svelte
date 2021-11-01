<script>
  import { goto } from '$app/navigation';
  export let title;
  /* import {isLogged} from '../../stores/auth'; */
  import { getCookieValueByName, cookiePromise } from '$lib/functions/getCookie';

  /* console.log(getCookieValueByName("user")); */
  /* cookieUser = getCookieValueByName("user"); */
  /* username = cookieUser.split("-")[0] */

</script>

<nav class="flex p-5">
  <div class="flex-grow flex items-center">
    <div class="font-custom text-xl text-blue-500 flex items-center">{title}</div>
  </div>

  <div>
    {#await cookiePromise then cookieValue}
      {#if (cookieValue === "") }
        <button class="cms-btn cms-btn-blue" on:click="{() => goto('/login')}">Login</button>
      {:else}
        <span>Hello, {cookieValue.split("-")[0]}</span>
      {/if}
    {/await}
  </div>

</nav>

<style>
  nav {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
</style>
