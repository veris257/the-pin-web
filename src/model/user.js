export const USER_VERO = 0
export const USER_RAUL = 1

export const users = [
    {
        id: 0,
        user: '@verovelazquez',
        name: 'Verónica Velázquez',
        photoprofile: 'assets/img/foto3.jpg',
        tables: [
            {
                tname: 'Title Table1',
                pins: ['assets/img/building/imagen1.jpg', 'assets/img/lights/imagen1.jpg', 'assets/img/building/imagen1.jpg', 'assets/img/building/imagen1.jpg']
            },

            {
                tname: 'Title Table2',
                pins: ['assets/img/building/imagen2.jpg', 'assets/img/lights/imagen2.jpg', 'assets/img/people/imagen2.jpg', 'assets/img/building/imagen1.jpg']
            },

            {
                tname: 'Title Table3',
                pins: ['assets/img/building/imagen3.jpg', 'assets/img/lights/imagen3.jpg', 'assets/img/people/imagen3.jpg', 'assets/img/building/imagen1.jpg']
            },

            {
                tname: 'Title Table4',
                pins: ['assets/img/building/imagen4.jpg', 'assets/img/lights/imagen4.jpg', 'assets/img/people/imagen4.jpg', 'assets/img/building/imagen1.jpg']
            }
        ],
        pins: ['assets/img/building/imagen1.jpg', 'assets/img/building/imagen1.jpg', 'assets/img/building/imagen1.jpg', 'assets/img/building/imagen1.jpg']
    },
    {
        id: 0,
        user: '@raulhuelamo',
        name: 'Raúl Huélamo',
        photoprofile: 'assets/img/foto1.jpg',
        tables: [
            {
                tname: 'Title Table1',
                pins: ['assets/img/building/imagen4.jpg', 'assets/img/lights/imagen4.jpg', 'assets/img/building/imagen4.jpg', 'assets/img/building/imagen4.jpg']
            },

            {
                tname: 'Title Table2',
                pins: ['assets/img/building/imagen2.jpg', 'assets/img/lights/imagen2.jpg', 'assets/img/people/imagen2.jpg', 'assets/img/building/imagen1.jpg']
            },

            {
                tname: 'Title Table3',
                pins: ['assets/img/building/imagen3.jpg', 'assets/img/lights/imagen3.jpg', 'assets/img/people/imagen3.jpg', 'assets/img/building/imagen1.jpg']
            },

            {
                tname: 'Title Table4',
                pins: ['assets/img/building/imagen4.jpg', 'assets/img/lights/imagen4.jpg', 'assets/img/people/imagen4.jpg', 'assets/img/building/imagen1.jpg']
            }
        ],
        pins: ['assets/img/building/imagen1.jpg', 'assets/img/building/imagen1.jpg', 'assets/img/building/imagen1.jpg', 'assets/img/building/imagen1.jpg']
    }
]

export let currentUser
export const setCurrentUserIndex = userIndex => currentUser = users[userIndex]
