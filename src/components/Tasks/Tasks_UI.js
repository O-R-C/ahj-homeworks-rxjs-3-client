import BaseUI from '@js/Classes/BaseUI'
import getElement from '@js/getElement'
import Widget from '@ui/Widget/Widget'
import TasksRow from '@ui/TasksRow/TasksRow'
import styles from './Tasks.module.css'

/**
 * Tasks UI component class.
 *
 * @class
 */
export default class Tasks_UI extends BaseUI {
  /**
   * Constructor for the Tasks_UI class.
   *
   * @param {HTMLElement} element - The HTML element to attach the UI to.
   */
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

  /**
   * Creates the main application component.
   *
   * @returns {HTMLElement} The created application component.
   */
  createApp() {
    const app = Widget('Tasks')
    return app
  }

  /**
   * Renders the headers section of the application.
   *
   * @param {string} currentProject - The name of the current project.
   */
  renderHeaders(currentProject) {
    this.#clearCurrentProject()

    this.currentProject.textContent = currentProject
  }

  #clearCurrentProject() {
    this.currentProject.textContent = ''
  }

  /**
   * Renders the tasks list section of the application.
   *
   * @param {Object} tasks - The tasks data.
   */
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

  /**
   * Renders the projects list section of the application.
   *
   * @param {Object} projects - The projects data.
   */
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

  /**
   * Toggles the visibility of the projects list.
   */
  toggleProjectsList() {
    this.projectsList.classList.toggle(styles['active'])
  }
}
