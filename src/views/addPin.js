import { navigateTo } from '../router/index.js'
import { validatePin } from '../helpers/validation.js'
import { show, hide } from '../helpers/addClass.js'
import { renderTemplateToContainer } from '../helpers/dom.js'
import { currentUser } from '../model/user.js'
import { savePin } from '../model/pin.js'

export const addPinView = {
    name: 'addPin',
    template: () => `
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
    `,
    getChildren: function () {
        return {
            $uploadButton: document.querySelector('.button__send'),
            $invalidForm: document.querySelector('.error_form'),
            $buttonCloseForm: document.querySelector('.button__goback'),
            $titleField: document.querySelector('[name=title]'),
            $tagsField: document.querySelector('[name=tags]'),
            $linkField: document.querySelector('[name=link]'),
            $imageField: document.querySelector('[name=images]'),
            $fileDummy: document.querySelector('.file-dummy'),
        }
    },
    listeners: function (action) {
        // action = [add, remove]

        const actionEventListener = action === 'remove'
            ? 'removeEventListener'
            : 'addEventListener'

        const {
            $uploadButton,
            $buttonCloseForm,
            $imageField,
        } = this.getChildren()

        $uploadButton[actionEventListener]('click', event => {
            event.preventDefault()
            this.submit()
        })
        $buttonCloseForm[actionEventListener]('click', () => navigateTo('gallery'))
        $imageField[actionEventListener]('change', () => this.onUpload.apply(this))
    },
    getPinFromForm: function () {
        const {
            $titleField,
            $tagsField,
            $linkField,
            $imageField,
        } = this.getChildren()

        return {
            user: currentUser.user,
            title: $titleField.value,
            src: `assets/img/${$imageField.files[0]?.name}`,
            link: $linkField.value,
            tags: $tagsField.value.split(' '),
            creationDate: new Date()
        }
    },
    onUpload: function () {
        const {
            $fileDummy,
            $imageField,
        } = this.getChildren()

        $fileDummy.innerHTML = ''
        $fileDummy.style.background = `url(assets/img/${$imageField.files[0].name}) center center / cover no-repeat`
        $fileDummy.style.height = `150px`
    },
    submit: function () {
        const pin = this.getPinFromForm()
        const { isValid, errors } = validatePin(pin)

        const { $invalidForm } = this.getChildren()
        hide($invalidForm)

        if (!isValid) {
            console.log(errors)
            show($invalidForm)
            return
        }

        savePin(pin)
        navigateTo('gallery', { randomize: false })
    },
    render: function ($container) {
        renderTemplateToContainer($container, this.template)
        this.listeners('add')
    },
    destroy: function () {
        this.listeners('remove')
        document.querySelector('.form__registration').remove()
    },
}
