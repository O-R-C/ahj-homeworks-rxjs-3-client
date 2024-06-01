import Tasks_UI from './Tasks_UI'
import { TOGGLE_TASK, SET_CURRENT_PROJECT } from '@/actions/actionTypes'

export default class Tasks {
  #ui
  #store

  constructor(element, store) {
    if (!store) {
      throw new Error('Store is not provided')
    }

    this.#store = store
    this.#ui = new Tasks_UI(element)

    this.#init()
  }

  #init() {
    this.#subscribes()
    this.#addListeners()
  }

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

  #addListeners() {
    this.#ui.items.addEventListener('click', this.#handleItemsClick)
    this.#ui.headers.addEventListener('click', this.#handleHeadersClick)
    this.#ui.projectsList.addEventListener('click', this.#handleProjectClick)
  }

  #handleItemsClick = (e) => {
    const checkbox = e.target.closest('input[type=checkbox]')

    if (!checkbox) return

    this.#store.dispatch(TOGGLE_TASK, checkbox.dataset.id)
  }

  #handleHeadersClick = (e) => {
    const link = e.target.closest('span[class^=current-project]')

    if (!link) return

    this.#ui.toggleProjectsList()
  }

  #handleProjectClick = (e) => {
    const link = e.target.closest('span[class^=project-list-item]')

    if (!link) return

    this.#store.dispatch(SET_CURRENT_PROJECT, link.textContent)

    this.#ui.toggleProjectsList()
  }
}
