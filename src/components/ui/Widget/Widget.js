import getElement from '@/js/getElement'
import styles from './Widget.module.css'

/**
 * Creates a widget component with a title and content.
 *
 * @param {string} title - The title of the widget.
 * @return {HTMLElement} - The created widget element.
 */
export const Widget = (title) => {
  const widget = getElement({ tag: 'div', classes: styles['widget'] })
  const titleElement = getElement({ tag: 'h3', classes: styles['title'], textContent: title })
  const content = getElement({ tag: 'div', classes: styles['content'] })
  const headers = getElement({ tag: 'div', classes: styles['headers'] })
  const items = getElement({ tag: 'div', classes: styles['items'] })

  content.append(headers, items)
  widget.append(titleElement, content)

  return widget
}

export default Widget
