import { renderTemplateToContainer } from '../helpers/dom.js'
import { navigateTo } from '../router/index.js'
import { currentUser } from '../model/user.js'
import { galleryView } from './gallery.js'

export const userProfileView = {
    name: 'user',
    template: ({ name, user, photoprofile }) => `
        <section id="user">
            <div class="modal-button">
                <button class="button__gohome button__gogallery">
                    <svg width="25px" height="25px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z" fill="#5B5551"/>
                        </svg>
                </button>
            </div>
            <div class="profile__info">
                <div class="info__img">
                    <img src="${photoprofile}" alt="${name} - ${user}" />
                </div>
                <h2 id="user_name" class="h2__title">${name}</h2>
                <p class="pin__user">${user}</p>
            </div>
            <div class="container board__title">
                <p>ALL PINS</p>
            </div>
            <div class="container board__pins"></div>
        </section>
    `,
    getChildren: function () {
        return {
            $buttonCloseProfile: document.querySelector('.button__gogallery'),
        }
    },
    listeners: function (action) {
        // action = [add, remove]

        const actionEventListener = action === 'remove'
            ? 'removeEventListener'
            : 'addEventListener'

        const {
            $buttonCloseProfile,
        } = this.getChildren()

        $buttonCloseProfile[actionEventListener]('click', () => navigateTo('gallery'))
    },
    render: function ($container, { user = currentUser } = {}) {
        renderTemplateToContainer($container, this.template, user)
        this.listeners('add')

        const $galleryContainer = document.querySelector('.board__pins')
        galleryView.render($galleryContainer, {
            user,
            randomize: false
        })
    },
    destroy: function () {
        galleryView.destroy()
        this.listeners('remove')
        document.querySelector('#user').remove()
    },
}
