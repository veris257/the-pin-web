import { navigateTo } from '../router/index.js'
import { addNewPin } from '../helpers/addPin.js'


export const validationForm = () => {

    const $inputText = document.querySelectorAll('.input__txt')
    const $spanError = document.querySelector('.error_validation')

    let validation = true
    let valueForm = []
    $inputText.forEach(input => {
        if (input.value === "" || !/[a-zA-Z0-9.]+/.test(input.value)) {
            validation = false
        } else {
            valueForm.push(input.value)
            validation = true
        }
    })
    const $inputFile = document.querySelector('#inputFile').files[0].name;
    valueForm.push($inputFile)

    if (validation) {
        addNewPin(valueForm)
        navigateTo('gallery')
        //TODO: Resert form
    }
}