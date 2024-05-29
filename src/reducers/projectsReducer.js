import { SET_TASK, TOGGLE_TASK } from '../actions/actionTypes'

const initialState = {
  projects: {},
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
          [action.payload.project]: state.projects[action.payload.project].map((task) => {
            if (task.id === action.payload.id) {
              return {
                ...task,
                status: task.status === 'open' ? 'closed' : 'open',
              }
            }
            return task
          }),
        },
      }
    default:
      return state
  }
}
