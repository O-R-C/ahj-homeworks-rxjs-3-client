import { SET_TASK, TOGGLE_TASK } from './actionTypes'

export const taskSet = ({ project, tasks }) => ({
  type: SET_TASK,
  payload: { project, tasks },
})

export const taskToggle = ({ project, id }) => ({
  type: TOGGLE_TASK,
  payload: { project, id },
})
