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
    this.#createHeaders()
  }

  #addElements() {
    this.widgetHeaders = this.app.querySelector(`div[class^=headers]`)
    this.items = this.app.querySelector(`div[class^=items]`)
  }

  #createHeaders() {
    this.headers = getElement({ tag: 'div', classes: styles['headers'] })
    this.projectsList = getElement({ tag: 'div', classes: styles['project-list'] })
    this.currentProject = getElement({ tag: 'span', classes: styles['current-project'] })

    this.headers.append(this.projectsList, this.currentProject)
    this.widgetHeaders.append(this.headers)
  }

  createApp() {
    const app = Widget('Tasks')
    return app
  }

  renderHeaders(currentProject) {
    this.#clearCurrentProject()

    this.currentProject.textContent = currentProject
  }

  #clearCurrentProject() {
    this.currentProject.textContent = ''
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

  renderProjectsList(projects) {
    this.#clearProjectsList()

    projects.forEach((project) => {
      const link = getElement({ tag: 'span', classes: styles['project-list-item'], textContent: project })
      this.projectsList.append(link)
    })
  }

  #clearProjectsList() {
    this.projectsList.innerHTML = ''
  }

  toggleProjectsList() {
    this.projectsList.classList.toggle(styles['active'])
  }
}
