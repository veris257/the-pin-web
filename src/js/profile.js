import { users } from './model/user.js'
import { addHidden } from './recurses/addClass.js'

const $buttonProfile = document.querySelector('#profile')
const $wrapperGallery = document.querySelector('#gallery')

$buttonProfile.addEventListener('click', openProfilePage)

function openProfilePage() {
    addHidden($wrapperGallery)

    //TODO: Check which user is
    const $infoPhoto = document.querySelector('.info__img')
    const $photoProfile = document.createElement('img')
    $photoProfile.src = users[0].photoprofile;
    $infoPhoto.appendChild($photoProfile)

    const $userName = document.querySelector('#user_name')
    $userName.innerHTML = users[0].name

    const $userUser = document.querySelector('.pin__user')
    $userUser.innerHTML = users[0].user

    const $wrapperPrincipalTable = document.querySelector('.table__tables')
    const numTables = users[0].tables
    
    numTables.forEach((table, ind) => {
        const $wrapperTable = document.createElement('div')
        $wrapperTable.classList.add('table__wrapper')

        const $wrapperBox = document.createElement('div')
        $wrapperBox.classList.add('table__box')
        $wrapperTable.appendChild($wrapperBox)

        const $titleTable = document.createElement('p')
        $titleTable.classList.add('table__name')
        $titleTable.innerHTML = table.tname
        $wrapperTable.appendChild($titleTable)

        $wrapperPrincipalTable.appendChild($wrapperTable)
    })
} 
