import Tasks_UI from './Tasks_UI'
import { TOGGLE_TASK } from '@/actions/actionTypes'

export default class Tasks {
  #ui
  #store
  #currentProject = null

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
    this.#store.projects$.subscribe((projects) => {
      const alphabetFirstProject = Object.keys(projects).sort((a, b) => a.localeCompare(b))[0]
      this.#currentProject = alphabetFirstProject
      this.#ui.renderHeaders(alphabetFirstProject)

      this.#ui.renderTasks(projects[alphabetFirstProject])
    })
  }

  #addListeners() {
    this.#ui.items.addEventListener('click', (event) => {
      const checkbox = event.target.closest('input[type=checkbox]')

      if (!checkbox) return

      const id = checkbox.dataset.id
      this.#store.dispatch(TOGGLE_TASK, { project: this.#currentProject, id })
    })
  }
}
