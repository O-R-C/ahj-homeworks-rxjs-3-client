import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import Widget from '../ui/Widget/Widget'
import styles from './Stats.module.css'
import StatsRow from '../ui/StatsRow/StatsRow'

export default class Stats_UI extends BaseUI {
  #items
  #headers

  constructor(element) {
    super(element)

    this.#init()
  }

  #init() {
    this.#addElements()
    this.#createHeaders()
  }

  #addElements() {
    this.#headers = this.app.querySelector(`div[class^=headers]`)
    this.#items = this.app.querySelector(`div[class^=items]`)
  }

  createApp() {
    const app = Widget('Stats')
    return app
  }

  #createHeaders() {
    const headers = StatsRow(
      getElement({ tag: 'div', textContent: 'Project' }),
      getElement({ tag: 'div', textContent: 'Open' }),
    )
    this.#headers.append(headers)
  }
}
