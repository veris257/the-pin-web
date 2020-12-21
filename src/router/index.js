import { renderGallery, destroyGallery } from '../components/gallery.js'
import { processPinsUser, destroyUserProfile } from '../components/userProfile.js'
import { renderPinForm, destroyPinForm } from '../components/newPin.js'

import { currentUser } from '../model/user.js'

let currentRoute = null

const routes = {
    gallery: {
        name: 'gallery',
        onEnter: ({ tags } = {}) => renderGallery({ tags }),
        onLeave: destroyGallery,
    },
    userProfile: {
        name: 'userProfile',
        onEnter: ({ user = currentUser } = {}) => {
            processPinsUser(user)
        },
        onLeave: destroyUserProfile,
    },
    newPinForm: {
        name: 'newPinForm',
        onEnter: () => {
            renderPinForm()
        },
        onLeave: destroyPinForm,
    },
}

export function navigateTo(routeKey, params) {
    const route = routes[routeKey]

    if (!route) {
        console.error(`Route unknown: ${routeKey}`)
        return
    }

    if (currentRoute) currentRoute.onLeave(params)
    route.onEnter(params)

    currentRoute = route
}
