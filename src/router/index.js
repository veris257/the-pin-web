import { renderGallery, destroyGallery } from '../components/gallery.js'
import { renderUserProfile, destroyUserProfile } from '../components/userProfile.js'

import { currentUser } from '../model/user.js'

let currentRoute = null

const routes = {
    gallery: {
        name: 'gallery',
        onEnter: renderGallery,
        onLeave: destroyGallery,
    },
    userProfile: {
        name: 'userProfile',
        onEnter: () => {
            renderUserProfile(currentUser)
        },
        onLeave: destroyUserProfile,
    },
}

export function navigateTo(routeKey) {
    const route = routes[routeKey]

    if (!route) {
        console.error(`Route unknown: ${routeKey}`)
        return
    }

    if (currentRoute) currentRoute.onLeave()
    route.onEnter()

    currentRoute = route
}
