import { Storage } from '../services/storage.js'

export const PIN_STORAGE_NAME = 'pins'
Storage.init(PIN_STORAGE_NAME, [])

export const pins = Storage.get(PIN_STORAGE_NAME)

export function getFilteredPins({ tags, user } = {}) {
    let resultPins = [...pins]

    if (tags?.length) {
        resultPins = resultPins.filter(pin => {
            return tags.some(tag => pin.tags.includes(tag))
        })
    }

    if (user) {
        resultPins = resultPins.filter(pin => {
            return pin.user === user.user
        })
    }

    return resultPins
}

export function savePin(pin) {
    pins.push(pin)
    Storage.set(PIN_STORAGE_NAME, pins)
}

/*
{
    user: '@verovelazquez',
    title: 'Example1',
    src: 'assets/img/building/imagen1.jpg',
    link: 'www.instagram.com/veris257',
    tags: ['building', 'window', 'white'],
    creationDate: '2020-12-22T23:53:42.243Z',
}
*/
