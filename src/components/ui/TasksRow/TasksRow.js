import getElement from '@/js/getElement'
import styles from './TasksRow.module.css'

/**
 * Creates a task row.
 *
 * @param {object} task - The task object.
 * @returns {HTMLElement} - The created task row.
 */
export const TasksRow = (task) => {
  const row = getElement({ tag: 'div', classes: styles['tasks-row'] })
  const checkboxWrapper = getElement({ tag: 'label', classes: styles['checkbox-wrapper'] })
  const checkbox = getElement({
    tag: 'input',
    type: 'checkbox',
    classes: styles['checkbox'],
    data: { id: task.id },
  })
  const checkboxMark = getElement({ tag: 'span', classes: styles['checkbox-mark'] })
  const titleElement = getElement({ tag: 'span', textContent: task.title })

  if (task.status === 'open') {
    checkbox.checked = false
  } else {
    checkbox.checked = true
  }

  checkboxWrapper.append(checkbox, checkboxMark)
  row.append(checkboxWrapper, titleElement)
  return row
}

export default TasksRow
