import type { Shortcut } from '$constants/shortcuts'

/**
 * Shortcut action
 *
 * @example
 * <button use:shortcut={{code: 'KeyA', alt: true, callback: () => console.log('Alt+A')}}>Click me</button>
 *
 * ? This ties a shortcut to an element and will trigger the click event on the element
 */

export const shortcut = (
	node: HTMLElement,
	params: Shortcut & {
		callback?: () => void
	}
) => {
	let handler: (e: KeyboardEvent) => void
	const removeHandler = () => window.removeEventListener('keydown', handler),
		setHandler = () => {
			removeHandler()
			if (!params) return
			handler = (e) => {
				if (
					!!params.alt != e.altKey ||
					!!params.shift != e.shiftKey ||
					!!params.control != (e.ctrlKey || e.metaKey) ||
					params.code != e.code
				)
					return
				e.preventDefault()
				params.callback ? params.callback() : node.click()
			}
			window.addEventListener('keydown', handler)
		}
	setHandler()
	return {
		update: setHandler,
		destroy: removeHandler
	}
}

/* Hotkey characters */
export const HOTKEYS = {
	modals: {
		close_modal: {
			code: 'Escape',
			keyDisplay: 'Esc',
			description: 'Close all modals, pop-ups, and drawers'
		}
	}
}
