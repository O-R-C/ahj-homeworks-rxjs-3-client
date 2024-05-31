import setTitle from './setTitle'
import data from './data'
import Stats from '@/components/Stats/Stats'
import Tasks from '@/components/Tasks/Tasks'
import { projectsStoreInstance } from '@store/projectsStore'
import { SET_TASK, SET_CURRENT_PROJECT } from '@/actions/actionTypes'

setTitle('Project Management Dashboard')

new Stats('body', projectsStoreInstance)
new Tasks('body', projectsStoreInstance)

projectsStoreInstance.dispatch(SET_CURRENT_PROJECT, Object.keys(data)[0])

Object.keys(data).forEach((key) => {
  projectsStoreInstance.dispatch(SET_TASK, {
    project: key,
    tasks: data[key],
  })
})
