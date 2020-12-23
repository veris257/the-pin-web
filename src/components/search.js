import { navigateTo } from '../router/index.js'

export function doSearch($tagsContainer, $inputSearch) {
    const { value } = $inputSearch

    if (!value.length) {
        clearTags()
        navigateTo('gallery')
        return
    }

    const tags = processTags(value)
    if (!tags.length) return

    $inputSearch.value = ''
    renderTags($tagsContainer, tags)

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

function renderTags($container, tags) {
    clearTags()

    const $wrapperTags = document.createElement('div')
    $wrapperTags.classList.add('search__tags')

    tags.forEach(tag => {
        const $tags = document.createElement('p')
        $tags.classList.add('modal-pin__hashtag')
        $tags.innerHTML += `#${tag}`
        $wrapperTags.appendChild($tags)
        $container.insertBefore($wrapperTags, $container.childNodes[0])
    })
}

function clearTags() {
    document.querySelector('.search__tags')?.remove()
}

export const searchComponent = {
    name: 'search',
    template: () => ``,
    getChildren: function () {
        return {
            $inputButton: document.querySelector('.search__button'),
            $inputSearch: document.querySelector('.search__input'),
            $tagsContainer: document.querySelector('#container_main'),
            $tags: document.querySelector('.search__tags'),
        }
    },
    listeners: function (action) {
        // action = [add, remove]

        const actionEventListener = action === 'remove'
            ? 'removeEventListener'
            : 'addEventListener'

        const {
            $inputButton,
            $inputSearch,
            $tagsContainer,
        } = this.getChildren()

        $inputButton[actionEventListener]('click', e => {
            e.currentTarget.parentElement.classList.toggle('menu_mobile__search--active')
        })

        $inputSearch[actionEventListener]('keydown', e => {
            const ENTER_KEY = 13
            if (e.keyCode !== ENTER_KEY) return
            e.preventDefault()
            doSearch($tagsContainer, $inputSearch)
        })
    },
    render: function () {
        this.listeners('add')
    },
    destroy: function () {
        const { $tags } = this.getChildren()
        $tags.remove()
        this.listeners('remove')
    },
}
