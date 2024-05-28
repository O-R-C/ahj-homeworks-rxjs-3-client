import getElement from '@/js/getElement'
import styles from './StatsRow.module.css'

export const StatsRow = (firstElement, secondElement) => {
  const row = getElement({ tag: 'div', classes: styles['stats-row'] })
  const secondWrapper = getElement({ tag: 'div', classes: styles['second-wrapper'] })

  secondWrapper.append(secondElement)
  row.append(firstElement, secondWrapper)
  return row
}

export default StatsRow
