import { createElementFromHtml } from '../helpers/dom.js'

const $wrapperContainer = document.querySelector('#container_principal')

const userProfileTemplate = ({ name, user, photoprofile }) => `
    <section id="user">
        <div class="profile__info">
            <div class="info__img">
                <img src="${photoprofile}" alt="${name} - ${user}" />
            </div>
            <h2 id="user_name" class="h2__title">${name}</h2>
            <p class="pin__user">${user}</p>
        </div>
        <div class="container profile__table">
            <div class="table__title">
                <p>ALL TABLES</p>
                <p>ALL PINS</p>
            </div>
            <div class="table__tables">
            </div>
        </div>
    </section>
`

export function renderUserProfile(user) {
    const userProfileHtml = userProfileTemplate(user)
    const $userProfile = createElementFromHtml(userProfileHtml)

    $wrapperContainer.appendChild($userProfile)
}

export function destroyUserProfile() {
    // TODO: Destoy all user profile components
    // TODO: Destroy user profile (event listeners)
    document.querySelector('#user').remove()
}
