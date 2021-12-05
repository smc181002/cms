<script>
  import { goto } from '$app/navigation';
  import axios from 'axios';
  export let title;
  /* import {isLogged} from '../../stores/auth'; */
  import { browser } from '$app/env'; 
  import { getCookieValueByName, cookiePromise } from '$lib/functions/getCookie';

  /* console.log(getCookieValueByName("user")); */
  /* cookieUser = getCookieValueByName("user"); */
  /* username = cookieUser.split("-")[0] */

  async function logout() {
    let url = `http://localhost:3001/api/logout`;
    try{
      /* if (browser) { */
      location.reload()
      /* } */
      /* console.log("test") */
      return await axios.get(url, {withCredentials: true});
    } catch (err) {
      console.log(err);
    }
  }

</script>

<nav class="flex p-5">
  <div class="flex-grow flex items-center">
    <div on:click="{() => goto('/')}" class="mr-4 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <div class="font-custom text-xl text-blue-500 flex items-center">{title}</div>
  </div>

  <div>
    {#await cookiePromise then cookieValue}
      {#if (cookieValue === "") }
        <button class="cms-btn cms-btn-blue" on:click="{() => goto('/login')}">Login</button>
      {:else}
        <span>Hello, {cookieValue.split("-")[0]}</span>
        {#if (cookieValue.split("-")[1] === "admin") }
          <a href="/admin" class="prose text-blue-400">Admin Console</a>
        {/if}
        <button class="cms-btn cms-btn-blue" on:click="{logout}">Logout</button>

      {/if}
    {/await}
  </div>

</nav>

<style>
  nav {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
</style>
