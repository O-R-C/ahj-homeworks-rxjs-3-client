import { v4 as uuidv4 } from 'uuid'

export const data = {
  iOS: [
    { title: 'Push Notifications', status: 'open', id: uuidv4() },
    { title: 'Apple Pay Support', status: 'open', id: uuidv4() },
    { title: 'l18n', status: 'open', id: uuidv4() },
    { title: 'AppStore Publication', status: 'open', id: uuidv4() },
  ],
  'REST Backend': [
    { title: 'GET', status: 'open', id: uuidv4() },
    { title: 'POST', status: 'open', id: uuidv4() },
    { title: 'PUT', status: 'open', id: uuidv4() },
    { title: 'DELETE', status: 'open', id: uuidv4() },
  ],
  Frontend: [
    { title: 'HTML', status: 'open', id: uuidv4() },
    { title: 'CSS', status: 'open', id: uuidv4() },
    { title: 'JS', status: 'open', id: uuidv4() },
    { title: 'React', status: 'open', id: uuidv4() },
    { title: 'Animations', status: 'open', id: uuidv4() },
    { title: 'Geolocation', status: 'open', id: uuidv4() },
  ],
  Android: [
    { title: 'Push Notifications', status: 'open', id: uuidv4() },
    { title: 'Google Maps', status: 'open', id: uuidv4() },
    { title: 'Google Analytics', status: 'open', id: uuidv4() },
    { title: 'Google Play Publication', status: 'open', id: uuidv4() },
  ],
}

export default data
