import { navigateTo } from '../router/index.js'

const $wrapperContainer = document.querySelector('#container_principal')

const $inputButton = document.querySelector('.search__button')
const $inputSearch = document.querySelector('.search__input')

export function initSearch() {
    $inputButton.addEventListener('click', e => {
        e.currentTarget.parentElement.classList.toggle('menu_mobile__search--active')
    })

    $inputSearch.addEventListener('keydown', e => {
        const ENTER_KEY = 13
        if (e.keyCode !== ENTER_KEY) return
        e.preventDefault()
        doSearch()
    })
}

export function doSearch() {
    const { value } = $inputSearch

    if (!value.length) {
        clearTags()
        navigateTo('gallery')
        return
    }

    const tags = processTags(value)
    if (!tags.length) return

    $inputSearch.value = ''
    renderTags(tags)

    navigateTo('gallery', { tags })
}

function processTags(valueInput){
    const tags = valueInput
        .trim()
        .replace(/ +(?= )/g, '')
        .toLowerCase()
        .split(' ')

    return Array.from(new Set(tags))
}

function renderTags(tags) {
    clearTags()

    const $wrapperTags = document.createElement('div')
    $wrapperTags.classList.add('search__tags')

    tags.forEach(tag => {
        const $tags = document.createElement('p')
        $tags.classList.add('modal-pin__hashtag')
        $tags.innerHTML += `#${tag}`
        $wrapperTags.appendChild($tags)
        $wrapperContainer.insertBefore($wrapperTags, $wrapperContainer.childNodes[0])
    })
}

function clearTags() {
    document.querySelector('.search__tags')?.remove()
}
