import setTitle from './setTitle'
import data from './data'
console.log('🚀 ~ data:', data)
import Stats from '@/components/Stats/Stats'
import { projectsStoreInstance } from '@store/projectsStore'

setTitle('Project Management Dashboard')

projectsStoreInstance.projects$.subscribe((projects) => {
  console.log(projects)
})

Object.keys(data).forEach((key) => {
  projectsStoreInstance.dispatch('SET_TASK', {
    project: key,
    tasks: data[key],
  })
})

new Stats('body')
