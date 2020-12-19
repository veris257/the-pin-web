import { pins } from './model/pin.js'
import { addHidden } from './recurses/addClass.js'

<<<<<<< HEAD
=======
const $logoHome = document.querySelector('#gohome')
const $buttonHome = document.querySelector('#home')

$logoHome.addEventListener('click', createGallery())
$buttonHome.addEventListener('click', createGallery())


>>>>>>> 8d94bfbe421759c33264743eb650ebb40ffc3377
export function createGallery() {
    pins.forEach(( {user, src} ) => {
    
        const $gridGallery = document.querySelector('#gallery')
    
        const $galleryItem = document.createElement('div')
        $galleryItem.classList.add('grid-gallery__item')
    
        const $pinLinkImg = document.createElement('a')
        const $pinImg = document.createElement('img')
        $pinImg.classList.add('grid-gallery__image')
        $pinImg.src = src
        $pinLinkImg.appendChild($pinImg)
    
        const $pinLinkUser = document.createElement('a')
        $pinLinkUser.innerHTML = `${user}`
    
        $galleryItem.appendChild($pinLinkImg)
        $galleryItem.appendChild($pinLinkUser)
        $gridGallery.appendChild($galleryItem)
    });
}
createGallery(pins)