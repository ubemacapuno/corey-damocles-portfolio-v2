/// <reference types="@sveltejs/kit" />

declare const __VERSION__: string
// Global Elements
declare const Button: (typeof import('./elements/Button.svelte'))['default']
declare const IconButton: (typeof import('./elements/IconButton.svelte'))['default']
declare const P: (typeof import('./elements/P.svelte'))['default']
declare const Icon: (typeof import('./elements/Icon.svelte'))['default']
declare const Flex: (typeof import('./elements/Flex.svelte'))['default']
declare const Grid: (typeof import('./elements/Grid.svelte'))['default']
declare const Divider: (typeof import('./elements/Divider.svelte'))['default']
declare const onMount: (typeof import('svelte'))['onMount']
