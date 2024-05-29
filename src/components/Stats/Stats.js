import Stats_UI from './Stats_UI'

/**
 * Component representing a stats widget.
 *
 * @class
 */
export default class Stats {
  /**
   * UI component instance
   * @private
   */
  #ui

  /**
   * Store instance
   * @private
   */
  #store

  /**
   * Constructor.
   * @param {HTMLElement} element - App element.
   * @param {Object} store - Projects store.
   * @throws {Error} Store is not provided
   */
  constructor(element, store) {
    if (!store) {
      throw new Error('Store is not provided')
    }

    this.#store = store
    this.#ui = new Stats_UI(element)

    this.#init()
  }

  /**
   * Initializes component.
   */
  #init() {
    this.#subscribes()
  }

  /**
   * Subscribes to projects store and renders the component.
   */
  #subscribes() {
    this.#store.projects$.subscribe((projects) => {
      this.#ui.render(projects)
    })
  }
}
