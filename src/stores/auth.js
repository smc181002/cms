import { writable } from 'svelte/store';
import { browser } from '$app/env'; 

// let isLoggedIn
let isLogged;
if (browser) {
  const isLoggedIn= localStorage.getItem("isLoggedIn");

  isLogged = writable(isLoggedIn);
  isLogged.subscribe(value => {
    localStorage.setItem("isLoggedIn", value);
  })
}
export {isLogged};
