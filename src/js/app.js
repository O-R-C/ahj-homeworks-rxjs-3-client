import setTitle from './setTitle'
import Stats from '@/components/Stats/Stats'
import Tasks from '@/components/Tasks/Tasks'
import { projectsStoreInstance } from '@store/projectsStore'

setTitle('Project Management Dashboard')

new Stats('body', projectsStoreInstance)
new Tasks('body', projectsStoreInstance)
