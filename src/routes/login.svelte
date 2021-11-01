<script>
  import { goto } from '$app/navigation';
	import Header from '$lib/header/Header.svelte';
  import axios from 'axios';


  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let [email, password] = ["", ""];
  let [emailErr, passwordErr] = [false, false];
  let [emailErrMsg, passwordErrMsg] = ["Please fill the Email.", "Please fill the Password."];

  let url = "http://localhost:3001/api/login"

  const emailFocus = () => (emailErrMsg = "");
  const passwordFocus = () => (passwordErrMsg = "");

  async function handleSubmit() {
    if (email == "") {
      emailErrMsg = "Please fill the Email.";
      emailErr = true;
    }
    else if (!emailRegex.test(email)) {
      emailErrMsg = "Please Enter a valid Email Address.";
      emailErr = true;
    } else {
      emailErr = false;
      emailErrMsg = "";
    }

    if (password == "") {
      passwordErrMsg = "Please fill the Password.";
      passwordErr = true;
    } else {
      passwordErr = false;
      passwordErrMsg = "";
    }

    if (emailErr || passwordErr) {
      return false;
    }

    try {
      let data = await axios.post(url, {email, password}, {withCredentials: true});
      if (data.data.user) {
        goto("/");
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
  <Header title="Login"/>
</div>

<main class="flex flex-col justify-center items-center h-screen">
  <form class="bg-white px-8 pt-6 pb-8" on:submit|preventDefault={handleSubmit}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="cms-textfield {(emailErr) && 'cms-error'}" on:focus={emailFocus} id="email" type="text" placeholder="Email" bind:value={email} autocomplete="off">
      <p class="cms-error-box {(emailErr) ? 'block': 'hidden'}">{emailErrMsg}</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="cms-textfield {(passwordErr) ? 'cms-error' : ''}" on:focus={passwordFocus} id="password" type="password" placeholder="******************" bind:value={password}>
      <p class="cms-error-box {(passwordErr) ? 'block': 'hidden'}">{passwordErrMsg}</p>
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="cms-btn cms-btn-blue">
        Login
      </button>
    </div>
  </form>
</main>
