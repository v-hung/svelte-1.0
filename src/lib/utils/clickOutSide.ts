export function clickOutside(node: HTMLElement) {
  const handleClick = (event: Event) => {
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('clickOutside', node as CustomEventInit)
      )
    }
  }

  document.addEventListener('click', handleClick, false);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, false);
    }
  }
}