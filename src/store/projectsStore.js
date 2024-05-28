import { projectsReducer } from '@/reducers/projectsReducer'
import { Subject, scan, share, startWith } from 'rxjs'
import { map } from 'rxjs/operators'

/**
 * Class representing a projects store.
 *
 * @class
 * @property {Subject} actions$ - the actions subject.
 * @property {Observable} state$ - the state observable.
 */
export default class projectsStore {
  constructor() {
    this.actions$ = new Subject()
    this.state$ = this.actions$.asObservable().pipe(
      startWith({
        type: 'INIT',
      }),
      scan((state, action) => projectsReducer(state, action), { projects: {} }),
      share(),
    )
  }

  /**
   * Dispatches an action with a payload.
   *
   * @param {string} action - the action type.
   * @param {Object} payload - the action payload.
   */
  dispatch = (action, payload = null) => this.actions$.next({ type: action, payload })

  /**
   * Returns an observable that emits the posts array from the state object.
   *
   * @return {Observable<Array>} An observable that emits the posts array from the state object.
   */
  get projects$() {
    return this.state$.pipe(map((state) => state.projects))
  }
}

export const projectsStoreInstance = new projectsStore()