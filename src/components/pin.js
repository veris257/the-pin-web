import { renderTemplateToContainer } from '../helpers/dom.js'
import { pinModalComponent } from '../components/pinModal.js'
import { users } from '../model/user.js'
import { navigateTo } from '../router/index.js'

// This component injects $thisElement in every function because it is instantiated multiple times in parallel
// It is the only component in this situation for the whole app
// That's the reason why though the structure is the same, some function parameters difer from the common implementation
export const pinComponent = {
    name: 'pin',
    template: ({ user, src }) => `
        <div class="grid-gallery__item">
            <img class="grid-gallery__image" src="${src}">
            <p class="pin__user user__name">${user}</p>
        </div>
    `,
    getChildren: function ($thisElement) {
        return {
            $pinImage: $thisElement.querySelector('.grid-gallery__image'),
            $pinUsername: $thisElement.querySelector('.pin__user'),
        }
    },
    listeners: function ($thisElement, action, pin, renderModal) {
        // action = [add, remove]

        const actionEventListener = action === 'remove'
            ? 'removeEventListener'
            : 'addEventListener'

        const {
            $pinImage,
            $pinUsername,
        } = this.getChildren($thisElement)

        $pinImage[actionEventListener]('click', renderModal)
        $pinUsername[actionEventListener]('click', () => {
            const pinUsername = pin.user
            const user = users.find(({ user }) => user === pinUsername)
            navigateTo('userProfile', { user })
        })
    },
    render: function ($container, pin) {
        const $thisElement = renderTemplateToContainer($container, this.template, pin, true)
        this.listeners($thisElement, 'add', pin, () => pinModalComponent.render($container, pin))
        return $thisElement
    },
    destroy: function ($thisElement, pin) {
        this.listeners($thisElement, 'remove', pin, () => pinModalComponent.destroy($container, pin))
        $thisElement.remove()
    },
}
