export const validatePin = ({
    title,
    tags,
    link,
    src,
}) => {

    let isValid = true
    const errors = []

    if (!title.length) {
        isValid = false
        errors.push({
            field: 'title',
            message: 'Title is mandatory'
        })
    }

    if (title.length < 3) {
        isValid = false
        errors.push({
            field: 'title',
            message: 'Title must be min. 3 chars long'
        })
    }

    if (title.length > 20) {
        isValid = false
        errors.push({
            field: 'title',
            message: 'Title must be max. 20 chars long'
        })
    }

    console.log(tags)
    if (!tags.length || !tags[0].length) {
        isValid = false
        errors.push({
            field: 'tags',
            message: 'At least one tag is required'
        })
    }

    const validLinkRegex = new RegExp(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)
    const isValidLink = validLinkRegex.test(link)
    if (!isValidLink) {
        isValid = false
        errors.push({
            field: 'link',
            message: 'A valid link is mandatory'
        })
    }

    const isValidImage = ['.jpg', '.jpeg', '.png'].some(ext => src.includes(ext))
    if (!isValidImage) {
        isValid = false
        errors.push({
            field: 'images',
            message: 'An image is required (JPG or PNG)'
        })
    }

    return { isValid, errors }
}
