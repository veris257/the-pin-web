import { landingView } from '../views/landing.js'
import { loginView } from '../views/login.js'
import { galleryView } from '../views/gallery.js'
import { addPinView } from '../views/addPin.js'
import { userProfileView } from '../views/userProfile.js'
import { menuComponent } from '../components/menu.js'

let currentRoute = null

const routes = {
    landing: {
        route: '/',
        view: landingView,
        options: {
            marbleBackground: true,
        },
    },
    login: {
        route: '/',
        view: loginView,
    },
    gallery: {
        route: '/gallery',
        view: galleryView,
        options: {
            displayNavigation: true,
        },
    },
    userProfile: {
        route: '/user',
        view: userProfileView,
        options: {
            displayNavigation: true,
        },
    },
    addPin: {
        route: '/add',
        view: addPinView,
        options: {
            displayNavigation: true,
        },
    },
}

const $container = document.querySelector('#container_main')

function setupBackground({ marbleBackground = false } = {}) {
    if (marbleBackground) {
        document.body.classList.add('marble-background')
    } else {
        document.body.classList.remove('marble-background')
    }
}

let currentViewHasNavigation = false

function setupNavigation({ displayNavigation = false } = {}) {
    if (displayNavigation && !currentViewHasNavigation) {
        menuComponent.render(document.body)
    } else if (!displayNavigation && currentViewHasNavigation) {
        menuComponent.destroy()
    }

    currentViewHasNavigation = displayNavigation
}

export function navigateTo(routeKey, params) {
    const route = routes[routeKey]

    if (!route) {
        console.error(`Route unknown: ${routeKey}`)
        return
    }

    if (currentRoute) currentRoute.view.destroy(params)

    const { options } = route
    setupBackground(options)
    setupNavigation(options)

    route.view.render($container, params)

    currentRoute = route
}
