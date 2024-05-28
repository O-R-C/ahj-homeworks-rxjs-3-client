import { SET_TASK } from './actionTypes'

export const taskSet = ({ project, tasks }) => ({
  type: SET_TASK,
  payload: { project, tasks },
})
