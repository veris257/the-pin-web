import { renderGallery, destroyGallery } from '../components/gallery.js'
import { renderUserProfile, destroyUserProfile } from '../components/userProfile.js'

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
            renderUserProfile(user)
        },
        onLeave: destroyUserProfile,
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
