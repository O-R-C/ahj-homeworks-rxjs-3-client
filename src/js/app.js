import setTitle from './setTitle'
import data from './data'
import Stats from '@/components/Stats/Stats'
import { projectsStoreInstance } from '@store/projectsStore'

setTitle('Project Management Dashboard')

new Stats('body', projectsStoreInstance)

Object.keys(data).forEach((key) => {
  projectsStoreInstance.dispatch('SET_TASK', {
    project: key,
    tasks: data[key],
  })
})
