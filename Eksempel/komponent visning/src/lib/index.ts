/// <reference types="svelte" />
declare module "$lib/components/*.svelte" {
	export { SvelteComponent as default } from "svelte";
}

// place files you want to import through the `$lib` alias in this folder.
