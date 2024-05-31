import Tasks_UI from './Tasks_UI'
import { TOGGLE_TASK } from '@/actions/actionTypes'

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
      if (!currentProject) return

      this.#ui.renderHeaders(currentProject)

      this.#ui.renderTasks(tasks)
    })
  }

  #addListeners() {
    this.#ui.items.addEventListener('click', this.#handleItemsClick)
    this.#ui.headers.addEventListener('click', this.#handleHeadersClick)
  }

  #handleItemsClick = (e) => {
    const checkbox = e.target.closest('input[type=checkbox]')

    if (!checkbox) return

    this.#store.dispatch(TOGGLE_TASK, checkbox.dataset.id)
  }

  #handleHeadersClick = (e) => {
    const projectsList = e.target.closest('div[class^=project-list]')

    if (!projectsList) return
  }
}
