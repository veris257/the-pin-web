export function createElementFromHtml(htmlString, tagName = 'div') {
    const $el = document.createElement(tagName)
    $el.innerHTML = htmlString.trim()
    return $el.firstChild
}
