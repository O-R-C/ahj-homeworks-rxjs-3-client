import getElement from '@/js/getElement'
import styles from './TasksRow.module.css'

export const TasksRow = (title) => {
  const row = getElement({ tag: 'div', classes: styles['tasks-row'] })
  const checkboxWrapper = getElement({ tag: 'label', classes: styles['checkbox-wrapper'] })
  const checkbox = getElement({
    tag: 'input',
    type: 'checkbox',
    classes: styles['checkbox'],
  })
  const checkboxMark = getElement({ tag: 'span', classes: styles['checkbox-mark'] })
  const titleElement = getElement({ tag: 'span', textContent: title })

  checkboxWrapper.append(checkbox, checkboxMark)
  row.append(checkboxWrapper, titleElement)
  return row
}

export default TasksRow
