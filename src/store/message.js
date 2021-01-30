// store.js
import { writable } from 'svelte/store';

export const message = writable({
	type: "",
	from: "",
	message: ""
})
