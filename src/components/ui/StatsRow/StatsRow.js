import getElement from '@/js/getElement'
import styles from './StatsRow.module.css'

/**
 * Creates a StatsRow component with two elements.
 *
 * @param {HTMLElement} firstElement - The first element to be displayed in the row.
 * @param {HTMLElement} secondElement - The second element to be displayed in the row.
 * @return {HTMLElement} The created StatsRow component.
 */
export const StatsRow = (firstElement, secondElement) => {
  const row = getElement({ tag: 'div', classes: styles['stats-row'] })
  const secondWrapper = getElement({ tag: 'div', classes: styles['second-wrapper'] })

  secondWrapper.append(secondElement)
  row.append(firstElement, secondWrapper)
  return row
}

export default StatsRow
