import { pins } from '../model/pin.js'

import { renderPin } from './pin.js'

import { randomizeArray } from '../helpers/array.js'
import { createElementFromHtml } from '../helpers/dom.js'

const $wrapperContainer = document.querySelector('#container_principal')

const galleryTemplate = () => `
    <section id="gallery" class="grid-gallery" />
`

export function renderGallery() {
    const galleryHtml = galleryTemplate()
    const $gallery = createElementFromHtml(galleryHtml)

    $wrapperContainer.appendChild($gallery)

    const randomPins = randomizeArray(pins)
    randomPins.forEach(renderPin)
}

export function destroyGallery() {
    // TODO: Destoy all pins
    // TODO: Destroy gallery (event listeners)
    document.querySelector('#gallery').remove()
}
