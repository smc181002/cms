<script>
  import {slide} from 'svelte/transition';
  /* let visible = true; */
  export let sections = [
    {
      name: "SMC",
      email: "email@gmail.com",
      role: "student",
    },
    {
      name: "SMC",
      email: "email2@gmail.com",
      role: "student",
    },
  ]

  sections = sections.map(section => ({...section, active: false}));

	const expand = (section) => {
		sections = sections.map(s => {
      if (s.active !== true) s.active = false
			if (s.email === section.email) {
				s.active = !s.active
			}
			return s
		})
	}
</script>

{#each sections as section}
<div class="accordion p-4 rounded border mb-4">
  <div class="cursor-pointer flex items-center" on:click={() => expand(section) }> 
    <div class="flex-1 text-gray-700 flex text-xl"><img class="rounded-full" src="https://ui-avatars.com/api/?size=32&name={section.name}" alt=""><span class="ml-2">{section.name}</span></div>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </div>
	{#if section.active}
		<div class="slider mt-3 px-4" transition:slide>
			<p>Name: {section.name}</p>
			<p>Email: {section.email}</p>
			<p>Role: {section.role}</p>
		</div>
	{/if}
</div>
{/each}
