import { navigateTo } from '../router/index.js'

const $homeMenuButton = document.querySelector('#home')
const $userProfileMenuButton = document.querySelector('#profile')

export function initMenu() {
    $homeMenuButton.addEventListener('click', () => navigateTo('gallery'))
    $userProfileMenuButton.addEventListener('click', () => navigateTo('userProfile'))
}

