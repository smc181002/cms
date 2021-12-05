<script>
  import { goto } from '$app/navigation';
	import Header from '$lib/header/Header.svelte';
  import axios from 'axios';


  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let [roomNo, block] = ["", ""];
  /* let [emailErr, passwordErr] = [false, false]; */
  /* let [emailErrMsg, passwordErrMsg] = ["Please fill the Email.", "Please fill the Password."]; */

  let url = "http://localhost:3001/api/admin/hostel/addRoom"
/*  */
  /* const emailFocus = () => (emailErrMsg = ""); */
  /* const passwordFocus = () => (passwordErrMsg = ""); */

  async function handleSubmit() {
    /* if (email == "") { */
      /* emailErrMsg = "Please fill the Email."; */
      /* emailErr = true; */
    /* } */
    /* else if (!emailRegex.test(email)) { */
      /* emailErrMsg = "Please Enter a valid Email Address."; */
      /* emailErr = true; */
    /* } else { */
      /* emailErr = false; */
      /* emailErrMsg = ""; */
    /* } */
/*  */
    /* if (password == "") { */
      /* passwordErrMsg = "Please fill the Password."; */
      /* passwordErr = true; */
    /* } else { */
      /* passwordErr = false; */
      /* passwordErrMsg = ""; */
    /* } */
/*  */
    /* if (emailErr || passwordErr) { */
      /* return false; */
    /* } */

    try {
      console.log({roomNo, block})
      let data = await axios.post(url, {roomNo, block}, {withCredentials: true});
      console.log(data)
      if (data.data) {
        goto("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  }
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="absolute top-0 w-full">
  <Header title="Create New User"/>
</div>

<main class="flex flex-col justify-center items-center h-screen">
  <form class="bg-white px-8 pt-6 pb-8" on:submit|preventDefault={handleSubmit}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Room No
      </label>
      <input class="cms-textfield" id="roomNo" type="text" placeholder="Room No" bind:value={roomNo} autocomplete="off">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Block
      </label>
      <select class="cms-select" id="block" bind:value={block} >
        <option value="I">I</option>
        <option value="J">J</option>
        <option value="K">K</option>
        <option value="L">L</option>
      </select>
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="cms-btn cms-btn-blue">
        Add New Room
      </button>
    </div>
  </form>
</main>
