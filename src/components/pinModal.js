
import { createElementFromHtml } from '../helpers/dom.js'

const $wrapperContainer = document.querySelector('#container_principal')

const modalTemplate = ({ user, src, tags, link, title }) => `
    <div class="modal-item">
        <div class="modal-item-pin">
            <div class="modal-button">
                <button class="button__goback">
                    <svg width="25px" height="25px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z" fill="#5B5551"/>
                        </svg>
                </button>
            </div>
            <div class="modal-pin">
                <div class="modal-pin__img">
                    <img src="${src}" alt="">
                </div>
                <p class="pin__user">${user}</p>
                <div class="pin__title">${title}</div>
                <p class="modal-pin__hashtag">
                    ${tags}
                </p>
                <p class="modal-pin__link">${link}</p>
            </div>
        </div>
    </div>
`

export function renderModal(pin) {
    const modalItemHtml = modalTemplate(pin)
    const $modalItem = createElementFromHtml(modalItemHtml)
    $wrapperContainer.appendChild($modalItem)

    const $buttonCloseModal = document.querySelector('.button__goback')
    $buttonCloseModal.addEventListener('click', () => {
        document.querySelector('.modal-item').remove()
    })

    const $backgroundModal = document.querySelector('.modal-item')
    $backgroundModal.addEventListener('click', () => {
        document.querySelector('.modal-item').remove()
    })
}

