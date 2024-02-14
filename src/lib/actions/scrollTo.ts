export function scrollTo(
	node: HTMLElement,
	targetId: string,
	offset: number = 0
): { destroy: () => void } {
	const handleClick = () => {
		const target = document.getElementById(targetId)
		if (target) {
			const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
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
