import { SET_TASK } from '../actions/actionTypes'

const initialState = {
  projects: {},
}

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
    default:
      return state
  }
}
