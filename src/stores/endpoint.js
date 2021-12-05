import { writable } from 'svelte/store';
import { browser } from '$app/env'; 

// let isLoggedIn
export const endpoint = writable('listRooms');
