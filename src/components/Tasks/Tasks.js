import Tasks_UI from './Tasks_UI'
import { TOGGLE_TASK, SET_CURRENT_PROJECT } from '@/actions/actionTypes'

/**
 * Tasks component class.
 *
 * @class
 * @extends {BaseUI}
 */
export default class Tasks {
  #ui
  #store

  /**
   * Constructor for the Tasks class.
   *
   * @param {HTMLElement} element - The HTML element to attach the UI to.
   * @param {Store} store - The store of the application.
   */
  constructor(element, store) {
    if (!store) {
      throw new Error('Store is not provided')
    }

    this.#store = store
    this.#ui = new Tasks_UI(element)

    this.#init()
  }

  /**
   * Initializes the component.
   */
  #init() {
    this.#subscribes()
    this.#addListeners()

    this.#store.dispatch('INIT_PROJECTS')
  }

  /**
   * Subscribes to the store.
   */
  #subscribes() {
    this.#store.currentProject$.subscribe(({ currentProject, tasks }) => {
      if (!currentProject || !tasks) return

      this.#ui.renderHeaders(currentProject)

      this.#ui.renderTasks(tasks)
    })

    this.#store.projects$.subscribe((projects) => {
      this.#ui.renderProjectsList(Object.keys(projects))
    })
  }

  /**
   * Adds listeners to the UI elements.
   */
  #addListeners() {
    this.#ui.items.addEventListener('click', this.#handleItemsClick)
    this.#ui.headers.addEventListener('click', this.#handleHeadersClick)
    this.#ui.projectsList.addEventListener('click', this.#handleProjectClick)
  }

  /**
   * Handles clicks on the items list.
   *
   * @param {MouseEvent} e - The event object.
   */
  #handleItemsClick = (e) => {
    const checkbox = e.target.closest('input[type=checkbox]')

    if (!checkbox) return

    this.#store.dispatch(TOGGLE_TASK, checkbox.dataset.id)
  }

  /**
   * Handles clicks on the headers section.
   *
   * @param {MouseEvent} e - The event object.
   */
  #handleHeadersClick = (e) => {
    const link = e.target.closest('span[class^=current-project]')

    if (!link) return

    this.#ui.toggleProjectsList()
  }

  /**
   * Handles clicks on the projects list.
   *
   * @param {MouseEvent} e - The event object.
   */
  #handleProjectClick = (e) => {
    const link = e.target.closest('span[class^=project-list-item]')

    if (!link) return

    this.#store.dispatch(SET_CURRENT_PROJECT, link.textContent)

    this.#ui.toggleProjectsList()
  }
}
