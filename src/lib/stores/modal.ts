import { writable } from 'svelte/store'

/**
 * This store is to track if a modal is open or not.
 * Example use-case: If a modal is open but a drawer is also open, the drawer shouldn't close from user-interactions with the modal due to the click-outside action. When isModalStoreOpen is true, then the closeDrawer function will not close the drawer.
 */

export const isModalStoreOpen = writable(false)

export const closeModalStore = () => isModalStoreOpen.update(() => false)
