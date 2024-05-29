import BaseUI from '@js/Classes/BaseUI'
import getElement from '@js/getElement'
import Widget from '@ui/Widget/Widget'
import TasksRow from '@ui/TasksRow/TasksRow'
import styles from './Tasks.module.css'

export default class Tasks_UI extends BaseUI {
  constructor(element) {
    super(element)

    this.#init()
  }

  #init() {
    this.#addElements()
  }

  #addElements() {
    this.headers = this.app.querySelector(`div[class^=headers]`)
    this.items = this.app.querySelector(`div[class^=items]`)
  }

  createApp() {
    const app = Widget('Tasks')
    return app
  }

  renderHeaders(currentProject) {
    this.clearHeaders()

    const headers = getElement({ tag: 'div', classes: styles['headers'], textContent: 'Project:' })
    const link = getElement({ tag: 'span', classes: styles['project-list'], textContent: currentProject })

    headers.append(link)
    this.headers.append(headers)
  }

  clearHeaders() {
    this.headers.innerHTML = ''
  }

  renderTasks(tasks) {
    this.#clearItems()

    tasks.forEach((task) => {
      const row = TasksRow(task)
      this.items.append(row)
    })
  }

  #clearItems() {
    this.items.innerHTML = ''
  }
}
