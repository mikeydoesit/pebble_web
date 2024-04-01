import { writable } from 'svelte/store'

export const userNumber = writable('');
export const userName = writable('');
export const avatar = writable('');
export const userEmail = writable('');
export const password = writable('');
export const passwordConfirm = writable('');
export const passwordSet = writable(false);
