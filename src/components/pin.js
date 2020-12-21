import { createElementFromHtml } from '../helpers/dom.js'
import { renderModal } from '../components/pinModal.js'
import { renderUserProfile } from './userProfile.js'
import { users } from '../model/user.js'
import { navigateTo } from '../router/index.js'

const pinTemplate = ({ user, src }) => `
    <div class="grid-gallery__item">
        <img class="grid-gallery__image" src="${src}">
        <p class="pin__user user__name">${user}</p>
    </div>
`

export function renderPin(pin) {
    const $gridGallery = document.querySelector('#gallery')

    const galleryItemHtml = pinTemplate(pin)
    const $galleryItem = createElementFromHtml(galleryItemHtml)

    $gridGallery.appendChild($galleryItem)

    $galleryItem.querySelector('.grid-gallery__image').addEventListener('click', () => {
        renderModal(pin)
    })

    $galleryItem.querySelector('.pin__user').addEventListener('click', () => {
        const pinUsername = pin.user
        const user = users.find(({ user }) => user === pinUsername)
        navigateTo('userProfile', { user })
    })
}

export function destroyPin() {
    $galleryItem.querySelector('.grid-gallery__image').removeEventListener('click')
    $galleryItem.querySelector('.pin__user').removeEventListener('click')


    document.querySelector('.grid-gallery__item').remove()
}
