import getElement from '@/js/getElement'
import styles from './Widget.module.css'

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
