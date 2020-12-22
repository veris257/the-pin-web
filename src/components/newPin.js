import { createElementFromHtml } from '../helpers/dom.js'
import { navigateTo } from '../router/index.js'
import { validationForm } from '../helpers/validation.js'
import { addHidden, removeHidden } from '../helpers/addClass.js'

const $wrapperContainer = document.querySelector('#container_principal')

const newPinFormTemplate = () => `
    <section class="form__registration">
        <div class="modal-button">
            <button id="goBack" class="button__goback">
                <svg width="25px" height="25px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z" fill="#5B5551"/>
                </svg>
            </button>
        </div>
        <span class="error_form hidden" id="">Please fill in the form or click on the back to cancel</span>
        <form action="" id="formPin" class="container">
            <input class="input__txt input__title" name="title" type="text" required placeholder="Add a title">
            <span class="error_validation hidden" id="">This field is required</span>
            <input class="input__txt" type="text" name="tags" required placeholder="Add hashtags">
            <span class="error_validation hidden" id="">This field is required</span>
            <input class="input__txt" type="text" name="link" required placeholder="Add link">
            <span class="error_validation hidden" id="">This field is required</span>
            <div class="file-area">
                <input type="file" name="images" id="inputFile" required="required" multiple="multiple"/>
                <div class="file-dummy">
                    <div class="default">Please select some files</div>
                </div>
            </div>
            <input class="button__send" type="submit" value="UPLOAD">
        </form>
    </section>
`

export function renderPinForm() {
    const formHtml = newPinFormTemplate()
    const $form = createElementFromHtml(formHtml)

    $wrapperContainer.appendChild($form)

    // validationForm()

    const $uploadButton = document.querySelector('.button__send')
    $uploadButton.addEventListener('click', (e) => {
    const $invalidForm = document.querySelector('.error_form')
        if(!validationForm()) {
            e.preventDefault()
            removeHidden($invalidForm)
        }
    })

    const $buttonCloseForm = document.querySelector('.button__goback')
    $buttonCloseForm.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.form__registration').remove()
        navigateTo('gallery')
    })
}

export function destroyPinForm(params) {
    document.querySelector('.form__registration').remove()
}