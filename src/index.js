import { navigateTo } from './router/index.js'

import { USER_RAUL, USER_VERO } from './model/user.js'

import { initSearch } from './components/search.js'
import { initMenu } from './components/menu.js'
import { init } from './components/toast.js'

import { loginUser } from './services/login.js'
import { getPinsFromLocalStorage } from './services/storage.js'

// Initialize app
getPinsFromLocalStorage()
loginUser(USER_VERO)
initSearch()
initMenu()
setInterval(init, 100000)
navigateTo('gallery')
