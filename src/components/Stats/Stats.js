import Stats_UI from './Stats_UI'

export default class Stats {
  #ui

  constructor(element) {
    this.#ui = new Stats_UI(element)
  }
}
