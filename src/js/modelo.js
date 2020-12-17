export const pins = [
    {
        id: 0,
        user: '@verovelazquez',
        title: 'Example1',
        src: 'src/img/building/imagen1.jpg',
        link: 'www.instagram.com/veris257',
        tags: ['building', 'otro', 'otro', 'otro'],
        creationDate: new Date(),
    },
    {
        id: 0,
        user: '@raulhuelamo',
        title: 'Example2',
        src: 'src/img/lights/imagen1.jpg',
        link: 'www.instagram.com/veris257',
        tags: ['lights', 'otro', 'otro', 'otro'],
        creationDate: new Date(),
    },
    {
        id: 0,
        user: '@evaplaza',
        title: 'Example3',
        src: 'src/img/people/imagen2.jpg',
        link: 'www.instagram.com/veris257',
        tags: ['people', 'otro', 'otro', 'otro'],
        creationDate: new Date(),
    },
    {
        id: 0,
        user: '@saraalcantara',
        title: 'Example4',
        src: 'src/img/building/imagen2.jpg',
        link: 'www.instagram.com/veris257',
        tags: ['building', 'otro', 'otro', 'otro'],
        creationDate: new Date(),
    },
    {
        id: 0,
        user: '@lauralara',
        title: 'Example5',
        src: 'src/img/people/imagen3.jpg',
        link: 'www.instagram.com/veris257',
        tags: ['people', 'otro', 'otro', 'otro'],
        creationDate: new Date(),
    },
    {
        id: 0,
        user: '@carlosmasedo',
        title: 'Example6',
        src: 'src/img/lights/imagen4.jpg',
        link: 'www.instagram.com/veris257',
        tags: ['lights', 'otro', 'otro', 'otro'],
        creationDate: new Date(),
    },
]

function createGallery() {
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