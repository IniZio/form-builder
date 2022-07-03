export function focusOnElement(element: HTMLElement, timeout: number = 1000): void {
  const tabindex = element.getAttribute('tabindex');
  element.setAttribute("tabindex", "-1");
  element.focus();
  setTimeout(() => {
    if (tabindex != null) {
      element.setAttribute("tabindex", tabindex)
    } else {
      element.removeAttribute("tabindex")
    }
  }, timeout);
}