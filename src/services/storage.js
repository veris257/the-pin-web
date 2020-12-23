export const Storage = {
    init: function (key, value = '') {
        const currentValue = this.get(key)

        if (!currentValue) {
            this.clear(key, value)
            return true
        }

        return false
    },
    get: function(key) {
        const value = localStorage.getItem(key)
        return JSON.parse(value)
    },
    set: function(key, value) {
        const stringValue = JSON.stringify(value)
        return localStorage.setItem(key, stringValue)
    },
    clear: function (key, value = '') {
        this.set(key, value)
    },
}
