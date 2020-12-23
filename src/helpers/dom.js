export function createElementFromHtml(htmlString, tagName = 'div') {
    const $el = document.createElement(tagName)
    $el.innerHTML = htmlString.trim()
    return $el.firstChild
}

export function renderTemplateToContainer($container, template, params = {}, prepend = false) {
    const html = template(params)
    const $element = createElementFromHtml(html)

    if (prepend) $container.prepend($element)
    else $container.appendChild($element)

    return $element
}
