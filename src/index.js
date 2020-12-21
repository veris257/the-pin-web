import { navigateTo } from './router/index.js'

import { USER_RAUL, USER_VERO } from './model/user.js'

import { initSearch } from './components/search.js'
import { initMenu } from './components/menu.js'

import { loginUser } from './services/login.js'

// Initialize app
loginUser(USER_VERO)
initSearch()
initMenu()
navigateTo('gallery')
