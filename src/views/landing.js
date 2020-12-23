import { renderTemplateToContainer } from '../helpers/dom.js'
import { navigateTo } from '../router/index.js'
import { LoginService } from '../services/login.js'

export const landingView = {
    name: 'landing',
    template: () => `
        <section class="container_home">
            <div class="home__img">
                <img src="assets/img/logo__mobile2.png" alt="">
            </div>
            <div class="home__login">
                <button class="button__login" id="btn-login">ENTER</button>
            </div>
        </section>
    `,
    getChildren: function () {
        return {
            $loginButton: document.querySelector('#btn-login'),
        }
    },
    listeners: function (action) {
        // action = [add, remove]

        const actionEventListener = action === 'remove'
            ? 'removeEventListener'
            : 'addEventListener'

        const {
            $loginButton,
        } = this.getChildren()

        $loginButton[actionEventListener]('click', () => {
            LoginService.loginAs(0)
            navigateTo('gallery')
        })
    },
    render: function ($container) {
        renderTemplateToContainer($container, this.template)
        this.listeners('add')
    },
    destroy: function () {
        this.listeners('remove')
        document.querySelector('.container_home').remove()
    },
}
