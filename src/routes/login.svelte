<script>
  import { goto } from '$app/navigation';
	import Header from '$lib/header/Header.svelte';
  import axios from 'axios';
  import {isLogged} from '../stores/auth';

  let email = "";
  let password = "";

  let emailErr = false;
  let passwordErr = false;

  let emailErrMsg = "Please fill the Email.";
  let passwordErrMsg = "Please fill the Password";

  /* let url = "http://c080-49-204-229-55.ngrok.io/api/login" */
  /* let url = "http://192.168.0.102:3001/api/login" */
  let url = "http://localhost:3001/api/login"
  /* let url = "https://localhost/api/login" */

  const emailFocus = () => (emailErrMsg = "");
  const passwordFocus = () => (passwordErrMsg = "");

  async function handleSubmit() {
    (email === "") ? (emailErr = true) : (emailErr = false) ;
    (password === "") && (passwordErr = true);

    if (emailErr) {
      if (email = "") {
        emailErrMsg = "Please fill the Email.";
      }
      return false;
    } else {
        emailErr = false;
        emailErrMsg = "";
    }

    if (passwordErr) {
      if (email = "") {
        passwordErrMsg = "Please fill the Email.";
      }
      return false;
    } else {
        passwordErr = false;
        passwordErrMsg = "";
    }


    try {
      let data = await axios.post(url, {email, password}, {withCredentials: true});
      if (data.data.user) {
        isLogged.set(true);
        goto("/");
      }
    } catch (err) {
      isLogged.set(false);
      console.log(err);
    }
    /* return response.json(); */
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
      <input class="textfield {(emailErr) && 'error'} focus:outline-none focus:shadow-outline" on:focus={emailFocus} id="email" type="text" placeholder="Email" bind:value={email} autocomplete="off">
      <p class="error-box {(emailErr) ? 'block': 'hidden'}">{emailErrMsg}</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="textfield {(passwordErr) ? 'error' : ''} focus:outline-none focus:shadow-outline" on:focus={passwordFocus} id="password" type="password" placeholder="******************" bind:value={password}>
      <p class="error-box {(passwordErr) ? 'block': 'hidden'}">{passwordErrMsg}</p>
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Login
      </button>
    </div>
  </form>
</main>

<!--
<Header title="Login"/>
</main>
-->

<style>
  .textfield {
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ;
  }

  .error {
    @apply border border-red-500; 
  }

  .error-box {
    @apply text-red-500 text-xs italic;
  }


</style>

