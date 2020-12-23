import { renderTemplateToContainer } from '../helpers/dom.js'
import { navigateTo } from '../router/index.js'
import { searchComponent } from './search.js'
import { toastComponent } from './toast.js'

export const menuComponent = {
    name: 'menu',
    template: () => `
        <header class="header_home">
            <div class="header__top">
                <div class="menu_mobile__logo">
                    <img id="gohome" src="assets/img/logo__mobile.png" alt="logo-mobile"></a>
                </div>
                <div class="menu_mobile__search">
                    <input type="text" class="search__input"placeholder="Search">
                    <button id="search" class="search__button">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7867 6.5C12.7867 9.53757 10.3242 12 7.28668 12C4.24912 12 1.78668 9.53757 1.78668 6.5C1.78668 3.46243 4.24912 1 7.28668 1C10.3242 1 12.7867 3.46243 12.7867 6.5ZM11.5158 11.4362C10.379 12.411 8.90163 13 7.28668 13C3.69683 13 0.786682 10.0899 0.786682 6.5C0.786682 2.91015 3.69683 0 7.28668 0C10.8765 0 13.7867 2.91015 13.7867 6.5C13.7867 8.11495 13.1977 9.59234 12.2229 10.7291L16.6402 15.1464L15.9331 15.8536L11.5158 11.4362Z" fill="#645D59"/>
                        </svg>
                    </button>
                </div>
                <div class="menu_mobile__notification">
                    <button id="notification" class="notification__button">
                        <svg width="15" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.92701 11.5266L3.6897 11.0341C3.24801 10.1174 3 9.08908 3 8C3 4.13401 6.13401 1 10 1C13.866 1 17 4.13401 17 8C17 11.866 13.866 15 10 15C8.89526 15 7.85296 14.7448 6.92628 14.2911L6.65842 14.1599L6.36249 14.1969L1.94388 14.7492L3.64047 11.9923L3.92701 11.5266ZM0.671856 14.9082L0 16L1.27203 15.841L6.48652 15.1892C7.5471 15.7085 8.73951 16 10 16C14.4183 16 18 12.4183 18 8C18 3.58172 14.4183 0 10 0C5.58172 0 2 3.58172 2 8C2 9.24258 2.28329 10.419 2.78881 11.4682L0.671856 14.9082Z" fill="#645D59"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="menu_nav__mobile">
                <nav class="nav_items">
                    <div class="nav_item">
                        <button id="home" href="index.html">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.707107 8.48528L1.77817 7.41421V13.0563V13.0564V14.0563H13.7782V13.0564V13.0563V7.41421L14.8492 8.48528L15.5563 7.77817L8.48528 0.707107L7.77817 0L7.07107 0.707107L0 7.77817L0.707107 8.48528ZM2.77817 13.0563V6.41421L7.77817 1.41421L12.7782 6.41421V13.0563H9.77817V9.05638V8.05638H5.77817V9.05638V13.0563H2.77817ZM6.77817 9.05638V13.0563H8.77817V9.05638H6.77817Z" fill="#D0BEA7"/>
                            </svg>
                        </button>
                    </div>
                    <div class="nav_item">
                        <button id="create">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0H6V6H0V7H6V13H7V7H13V6H7V0Z" fill="#5B5551"/>
                            </svg>
                        </button>
                    </div>
                    <div class="nav_item">
                        <button id="profile">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.21739 9.47827C3.33591 9.47827 1 11.8142 1 14.6957V16H11.4348V14.6957C11.4348 11.8142 9.09888 9.47827 6.21739 9.47827Z" stroke="#D0BEA7"/>
                            <ellipse cx="6.21752" cy="4.91304" rx="3.91307" ry="3.91304" stroke="#D0BEA7" stroke-linecap="square"/>
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    `,
    getChildren: function () {
        return {
            $homeMenuImg: document.querySelector('#gohome'),
            $homeMenuButton: document.querySelector('#home'),
            $createMenuButton: document.querySelector('#create'),
            $userProfileMenuButton: document.querySelector('#profile'),
        }
    },
    listeners: function (action) {
        // action = [add, remove]

        const actionEventListener = action === 'remove'
            ? 'removeEventListener'
            : 'addEventListener'

        const {
            $homeMenuImg,
            $homeMenuButton,
            $createMenuButton,
            $userProfileMenuButton,
        } = this.getChildren()

        $homeMenuImg[actionEventListener]('click', () => navigateTo('gallery'))
        $userProfileMenuButton[actionEventListener]('click', () => navigateTo('userProfile'))
        $createMenuButton[actionEventListener]('click', () => navigateTo('addPin'))
        $homeMenuButton[actionEventListener]('click', () => {
            try {
                searchComponent.destroy()
            } catch {} finally {
                navigateTo('gallery')
            }
        })
    },
    render: function ($container) {
        renderTemplateToContainer($container, this.template, {}, true)
        searchComponent.render()
        toastComponent.render()
        this.listeners('add')
    },
    destroy: function () {
        searchComponent.destroy()
        toastComponent.destroy()
        this.listeners('remove')
        document.querySelector('.header_home').remove()
    },
}
