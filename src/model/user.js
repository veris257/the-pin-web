import { Storage } from '../services/storage.js'

export let currentUser
export const setCurrentUserIndex = userIndex => currentUser = users[userIndex]

export const USER_STORAGE_NAME = 'users'
Storage.init(USER_STORAGE_NAME, [])

export const users = Storage.get(USER_STORAGE_NAME)

/*
{
    user: '@verovelazquez',
    name: 'Verónica Velázquez',
    password: '12345',
    photoprofile: 'assets/img/foto3.jpg',
}
*/
