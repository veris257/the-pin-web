import { createElementFromHtml } from '../helpers/dom.js'
// import { renderModal } from '../components/pinModal.js'

const pinTemplate = ({ user, src }) => `
    <div class="grid-gallery__item">
        <img class="grid-gallery__image" src="${src}">
        <p class="pin__user">${user}</p>
    </div>
`

export function renderPin(pin) {
    const $gridGallery = document.querySelector('#gallery')

    const galleryItemHtml = pinTemplate(pin)
    const $galleryItem = createElementFromHtml(galleryItemHtml)

    $gridGallery.appendChild($galleryItem)

    $galleryItem.querySelector('.grid-gallery__image').addEventListener('click', () => {
        
        // TODO: Show Pin modal
        renderModal(pin)
    })

    $galleryItem.querySelector('.pin__user').addEventListener('click', () => {
        // TODO: Navigate to user profile
    })
}

export function destroyPin() {
    // TODO: Destroy pin (event listeners)
    // TODO: Destroy pin (element)
}
