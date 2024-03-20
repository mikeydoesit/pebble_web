import PocketBase, { ClientResponseError } from 'pocketbase';
import { writable } from 'svelte/store'
import { PUBLIC_POCKETBASE_URL } from '$env/static/public'

export const pocketbase = new PocketBase(PUBLIC_POCKETBASE_URL);

export const currentUser = writable(pocketbase.authStore.model);

pocketbase.authStore.onChange(() => {
    currentUser.set(pocketbase.authStore.model);
});

export function errorMessage(error) {
    const errorObj = ClientResponseError;
    console.error(errorObj.message);
    return errorObj.message;
}