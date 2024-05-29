import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import Widget from '../ui/Widget/Widget'
import styles from './Stats.module.css'
import StatsRow from '../ui/StatsRow/StatsRow'

/**
 * Stats UI component class.
 *
 * @class
 */
export default class Stats_UI extends BaseUI {
  /**
   * Container element for items.
   * @type {HTMLElement}
   */
  #items

  /**
   * Container element for headers.
   * @type {HTMLElement}
   */
  #headers

  /**
   * Constructor.
   * @param {HTMLElement} element - App element.
   */
  constructor(element) {
    super(element)

    this.#init()
  }

  /**
   * Initializes component.
   */
  #init() {
    this.#addElements()
    this.#createHeaders()
  }

  /**
   * Adds elements to app.
   */
  #addElements() {
    this.#headers = this.app.querySelector(`div[class^=headers]`)
    this.#items = this.app.querySelector(`div[class^=items]`)
  }

  /**
   * Creates app element.
   * @returns {HTMLElement} - App element.
   */
  createApp() {
    const app = Widget('Stats')
    return app
  }

  /**
   * Creates headers.
   */
  #createHeaders() {
    const headers = StatsRow(
      getElement({ tag: 'div', textContent: 'Project' }),
      getElement({ tag: 'div', textContent: 'Open' }),
    )
    this.#headers.append(headers)
  }

  /**
   * Renders component.
   * @param {Object} projects - Projects data.
   */
  render(projects) {
    this.#clear()

    Object.keys(projects).forEach((project) => {
      const countOpen = projects[project].filter((task) => task.status === 'open').length || '0'
      const row = StatsRow(
        getElement({ tag: 'div', textContent: project }),
        getElement({ tag: 'div', textContent: countOpen, classes: styles['count-open'] }),
      )
      this.#items.append(row)
    })
  }

  /**
   * Clears items container.
   */
  #clear() {
    this.#items.innerHTML = ''
  }
}
