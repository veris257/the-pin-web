import { setCurrentUserIndex } from '../model/user.js'

export const LoginService = {
    loginAs: function(userIndex = 0) {
        setCurrentUserIndex(userIndex)
    },
}