import { SET_TASK, TOGGLE_TASK, SET_CURRENT_PROJECT } from './actionTypes'

export const taskSet = ({ project, tasks }) => ({
  type: SET_TASK,
  payload: { project, tasks },
})

export const taskToggle = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
})

export const setCurrentProject = (project) => ({
  type: SET_CURRENT_PROJECT,
  payload: project,
})
