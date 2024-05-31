import { SET_TASK, TOGGLE_TASK, SET_CURRENT_PROJECT } from '../actions/actionTypes'

const initialState = {
  projects: {},
  currentProject: null,
}

/**
 * Reduces the state based on the given action type.
 *
 * @param {Object} state - The current state of the projects reducer.
 * @param {Object} action - The action object containing the type and payload.
 * @return {Object} The updated state after applying the action.
 */
export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        projects: {
          ...state.projects,
          [action.payload.project]: action.payload.tasks,
        },
      }
    case TOGGLE_TASK:
      return {
        ...state,
        projects: {
          ...state.projects,
          [state.currentProject]: state.projects[state.currentProject].map((task) => {
            if (task.id === action.payload) {
              return {
                ...task,
                status: task.status === 'open' ? 'closed' : 'open',
              }
            }
            return task
          }),
        },
      }
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.payload,
      }
    default:
      return state
  }
}
