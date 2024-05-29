import setTitle from './setTitle'
import data from './data'
import Stats from '@/components/Stats/Stats'
import Tasks from '@/components/Tasks/Tasks'
import { projectsStoreInstance } from '@store/projectsStore'
import { SET_TASK } from '@/actions/actionTypes'

setTitle('Project Management Dashboard')

new Stats('body', projectsStoreInstance)
new Tasks('body', projectsStoreInstance)

Object.keys(data).forEach((key) => {
  projectsStoreInstance.dispatch(SET_TASK, {
    project: key,
    tasks: data[key],
  })
})
