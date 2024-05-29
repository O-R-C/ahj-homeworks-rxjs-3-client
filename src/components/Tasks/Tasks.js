import Tasks_UI from './Tasks_UI'

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
  }

  #subscribes() {
    this.#store.projects$.subscribe((projects) => {
      const alphabetFirstProject = Object.keys(projects).sort((a, b) => a.localeCompare(b))[0]
      this.#ui.renderHeaders(alphabetFirstProject)

      this.#ui.renderTasks(projects[alphabetFirstProject])
    })
  }
}
