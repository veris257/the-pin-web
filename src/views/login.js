import { createElementFromHtml } from '../helpers/dom.js'

const templateLogin = (title) => `
<section id="form-login" class="form__registration">
    <form action="" clas>
        <div class="modal-button">
            <button id="goBack" class="button__goback"><svg width="25px" height="25px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z" fill="#5B5551"/>
                </svg></button>
        </div>
        <div class="container">
            <h2 class="h1_title">${title}</h2>
            <input class="input__login" type="text" placeholder="jane@example.com">
            <input class="input__login" type="text" placeholder="*******">
            <input class="button__send" type="submit" value="NEXT">
        </div>
    </form>
</section>

`

function renderFormUser(title) {
    e.preventDefault()

    const titleForm = title

    const $wrapperContainer = document.querySelector('#container_main')

    const $formLogIn = createElementFromHtml(templateLogin(titleForm))
    $wrapperContainer.appendChild($formLogIn)

}

export const loginView = {
    name: 'login',
    template: () => ``,
    render: function () {},
    destroy: function () {},
}