export function scrollTo(node: HTMLElement, targetId: string): { destroy: () => void } {
	const handleClick = () => {
		const target = document.getElementById(targetId)
		if (target) {
			const navHeight = 72 // Height of the sticky nav bar in pixels

			// Adjust targetPosition to account for the sticky nav bar
			const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight
			window.scrollTo({ top: targetPosition, behavior: 'smooth' })
		}
	}

	node.addEventListener('click', handleClick)

	return {
		destroy() {
			node.removeEventListener('click', handleClick)
		}
	}
}
