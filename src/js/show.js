import { pins } from './modelo.js'


const $pinImg = document.querySelectorAll('.grid-gallery__image')

$pinImg.forEach(pinImg => {
    pinImg.addEventListener('click', (event) => {
        const $clickedPin = event.currentTarget
        const PinSrcHttp = $clickedPin.src
        const PinSrc = PinSrcHttp.replace('http://127.0.0.1:5500/', '')
        openModal(PinSrc, pins)
    })
})

function openModal(PinSrc, pins) {
    let indice = 0
    pins.forEach((ele, ind)=> {
        if (PinSrc === ele.src) {
            indice = ind;
        }
    })
    const pin = pins[indice];

    const $modalItem = document.createElement('div')
    $modalItem.classList.add('modal-item')

    const $modalButton = document.createElement('div')
    $modalButton.classList.add('modal-button')
    const $buttonGoBack = document.createElement('button')
    $buttonGoBack.classList.add('button__goback')
    $buttonGoBack.innerHTML = `
        <svg width="25px" height="25px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z" fill="#5B5551"/>
        </svg>`
    $modalButton.appendChild($buttonGoBack)
    $modalItem.appendChild($modalButton)

    const $modalPin = document.createElement('article')
    $modalPin.classList.add('modal-pin')

    const $modalPinImg = document.createElement('div')
    $modalPinImg .classList.add('modal-pin__img')
    $modalPinImg.style.backgroundImage = `url(${pin.src})`;

    $modalPin.appendChild($modalPinImg)

    const $modalPinUser = document.createElement('div')
    $modalPinUser .classList.add('pin__user')
    $modalPinUser.innerHTML = `${pin.user}`
    $modalPin.appendChild($modalPinUser)

    const $modalPinTitle = document.createElement('div')
    $modalPinTitle .classList.add('pin__title')
    $modalPinTitle.innerHTML = `${pin.title}`
    $modalPin.appendChild($modalPinTitle)

    const eachTags = pin.tags.join(' #')

    const $modalPinHashtag = document.createElement('div')
    $modalPinHashtag .classList.add('modal-pin__hashtag')
    $modalPinHashtag.innerHTML = `${eachTags}`
    $modalPin.appendChild($modalPinHashtag)

    const $modalPinLink = document.createElement('div')
    $modalPinLink .classList.add('modal-pin__link')
    $modalPinLink.innerHTML = `Entra en el <a class="modal-pin__link" href="${pin.link}">link</a> para ver los detalles del sitio web`
    $modalPin.appendChild($modalPinLink)

    $modalItem.appendChild($modalPin)
    document.body.appendChild($modalItem)

    $buttonGoBack.addEventListener('click', () => {
        document.body.removeChild($modalItem)
    })
}

