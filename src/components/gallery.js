import { pins } from '../model/pin.js'

import { renderPin } from './pin.js'

import { randomizeArray } from '../helpers/array.js'
import { createElementFromHtml } from '../helpers/dom.js'

const $wrapperContainer = document.querySelector('#container_principal')

const galleryTemplate = () => `
    <section id="gallery" class="grid-gallery" />
`

export function renderGallery({ tags = [] } = {}) {
    const galleryHtml = galleryTemplate()
    const $gallery = createElementFromHtml(galleryHtml)

    $wrapperContainer.appendChild($gallery)

    let pinsToShow = []

    if (tags?.length) {
        pinsToShow = pins.filter(pin => {
            return tags.some(tag => pin.tags.includes(tag))
        })
    } else {
        pinsToShow = randomizeArray(pins)
    }

    if (pinsToShow.length) {
        pinsToShow.forEach(renderPin)
    } else {
        // TODO: Show empty list message
    }
}

export function destroyGallery() {
    // TODO: Destoy all pins
    // TODO: Destroy gallery (event listeners)
    document.querySelector('#gallery').remove()
}
