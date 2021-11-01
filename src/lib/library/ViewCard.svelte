<script>
  export let docs;
  let {_id, title, type, author, publication, coverPic} = docs;
  /* <h1 class="font-custom text-4xl mb-2 text-left">{title}</h1> */
  /* <p class="mb-3">{subtitle}</p> */
/*  */
  /* <button class="cms-btn cms-btn-blue mt-3 no-underline" on:click="{() => goto(button.link)}">{button.text}</button> */
</script>

<main class="flex shadow appearance-none border rounded">
  <div class="flex-none w-40 relative rounded">
    <img src="{coverPic}" alt="" class="rounded-l absolute inset-0 w-full h-full object-cover" />
  </div>
  <div class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h2 class="flex-auto font-semibold text-left truncate">
        {title}
      </h2>
      <div class="w-full flex-none text-sm font-medium text-gray-500 mt-1 mb-4">
        Written by {author}
      </div>

      <ul class="text-gray-600">
        <li> Publication: {publication} </li>
        <li> Type: {type} </li>
        <li> Title: {title} </li>
        <li> Author: {author} </li>
      </ul>
    </div>
  </div>
</main>
