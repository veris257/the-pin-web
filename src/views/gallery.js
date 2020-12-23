import { getFilteredPins } from '../model/pin.js'

import { pinComponent } from '../components/pin.js'

import { randomizeArray } from '../helpers/array.js'
import { renderTemplateToContainer } from '../helpers/dom.js'

const currentPinElements = []

export const galleryView = {
    name: 'gallery',
    template: () => `<section id="gallery" class="grid-gallery" />`,
    render: function ($container, {
        randomize = true,
        tags,
        user,
    } = {}) {
        renderTemplateToContainer($container, this.template)

        let pinsToShow = getFilteredPins({ tags, user })
        if (randomize) pinsToShow = randomizeArray(pinsToShow)

        if (pinsToShow.length) {
            const $pinContainer = $container.querySelector('#gallery')

            pinsToShow.forEach(pin => {
                const $pin = pinComponent.render($pinContainer, pin)
                currentPinElements.push([$pin, pin])
            })
        } else {
            // TODO: Show empty list message
        }
    },
    destroy: function () {
        currentPinElements.forEach(([ $pin, pin ]) => pinComponent.destroy($pin, pin))
        document.querySelector('#gallery').remove()
    },
}
