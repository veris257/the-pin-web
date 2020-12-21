export const USER_VERO = 0
export const USER_RAUL = 1

export const users = [
    {
        user: '@verovelazquez',
        name: 'Verónica Velázquez',
        photoprofile: 'assets/img/foto3.jpg',
    },
    {
        user: '@raulhuelamo',
        name: 'Raúl Huélamo',
        photoprofile: 'assets/img/foto1.jpg',
    },
    {
        user: '@evaplaza',
        name: 'Eva Plaza',
        photoprofile: 'assets/img/foto1.jpg',
    },
    {
        user: '@saraalcantara',
        name: 'Sara Alcantara',
        photoprofile: 'assets/img/foto1.jpg',
    },
    {
        user: '@carlosmasedo',
        name: 'Carlos Masedo',
        photoprofile: 'assets/img/foto1.jpg',
    },
    {
        user: '@lauralara',
        name: 'Laura Lara',
        photoprofile: 'assets/img/foto1.jpg',
    }
]

export let currentUser
export const setCurrentUserIndex = userIndex => currentUser = users[userIndex]
