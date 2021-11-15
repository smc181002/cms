<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let docs;
  let {_id, title, type, author, publication, coverPic} = docs;
</script>

<main class="flex shadow appearance-none border rounded relative">
  <div class="flex-none w-40 relative rounded">
    <img src="{coverPic}" alt="" class="rounded-l absolute inset-0 w-full h-full object-cover" />
  </div>
  <div class="flex-auto p-7">
    <div class="flex flex-wrap">
      <h2 class="flex-auto font-semibold text-left">
        <input class="disabled:bg-transparent" type="text" bind:value="{title}" disabled>
      </h2>
      <div class="w-full flex-none text-sm font-medium text-gray-500 mt-1 mb-4">
        Written by <input class="disabled:bg-transparent" type="text" bind:value="{author}" disabled>
      </div>

      <ul class="text-gray-600">
        <li> Publication: <input type="text" class="disabled:bg-transparent" bind:value="{publication}" disabled> </li>
        <li> Type: <input class="disabled:bg-transparent" type="text" bind:value="{type}" disabled></li>
        <li> Title: <input class="disabled:bg-transparent" type="text" bind:value="{title}" disabled> </li>
        <li> Author: <input class="disabled:bg-transparent" type="text" bind:value="{author}" disabled> </li>
      </ul>
      
      <div class="absolute right-4 flex ">
        <button class="cms-btn px-2 rounded mr-2 hover:bg-blue-500 hover:text-white flex text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        <button class="cms-btn px-2 rounded mr-2 hover:bg-red-500 hover:text-white flex text-gray-700" on:click="{() => dispatch('delete')}">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>         
        </button>
      </div>
    </div>
  </div>
</main>
