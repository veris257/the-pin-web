import { navigateTo } from '../router/index.js'
import { renderSearchBar } from '../components/search.js'

const $homeMenuButton = document.querySelector('#home')
const $searchMenuButton = document.querySelector('#search')
const $userProfileMenuButton = document.querySelector('#profile')

export function initMenu() {
    $homeMenuButton.addEventListener('click', () => navigateTo('gallery'))
    $userProfileMenuButton.addEventListener('click', () => navigateTo('userProfile'))
    $searchMenuButton.addEventListener('click', renderSearchBar)
}
