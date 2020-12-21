
import { pins } from '../model/pin.js'
import { addHidden } from '../helpers/addClass.js'

const $wrapperContainer = document.querySelector('#container_principal')

export function renderSearchBar() {

    const inputSearch = document.querySelector('.search__input')

    inputSearch.addEventListener('keydown', e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            processTags(e.target.value);
            addHidden($formSearch);
        }
    });
}

let splitted = []

function processTags(valueInput){
    splitted = valueInput.toLowerCase().split(' ');
    printTag(splitted)
    searchMathch(splitted)
}
function printTag(splitted) {
    const $wrapperTags = document.createElement('div')
    $wrapperTags.classList.add('search__tags')
    splitted.forEach(tag => {
        const $tags = document.createElement('p')
        $tags.classList.add('modal-pin__hashtag')
        $tags.innerHTML += `#${tag}`
        $wrapperTags.appendChild($tags)
        $wrapperContainer.insertBefore($wrapperTags, $wrapperContainer.childNodes[0])
    })
}

function searchMathch(splitted) {
    for(let pin of pins) {
        const allTags =  pin.tags
        splitted.forEach(split => {
            const result = allTags.map((tag, ind) => {
                if (split === tag) return tag
            })
            console.log(result);
            return result
        })
    }

}

