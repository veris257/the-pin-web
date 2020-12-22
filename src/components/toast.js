import { createElementFromHtml } from "../helpers/dom.js"

const templeteLike = () => `
    <div class="toast arrow-top toast--visible">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="icon/action/favorite_24px">
            <path id="icon/action/favorite_24px_2" d="M13.3497 20.3072C12.5897 20.9972 11.4197 20.9972 10.6597 20.2972L10.5497 20.1972C5.29966 15.4472 1.86966 12.3372 1.99966 8.4572C2.05966 6.7572 2.92966 5.1272 4.33966 4.1672C6.97966 2.3672 10.2397 3.2072 11.9997 5.2672C13.7597 3.2072 17.0197 2.3572 19.6597 4.1672C21.0697 5.1272 21.9397 6.7572 21.9997 8.4572C22.1397 12.3372 18.6997 15.4472 13.4497 20.2172L13.3497 20.3072Z" fill="#645D59"></path>
            </g>
        </svg>
    </div>
`

export function init() {
    const $divHeader = document.querySelector('.header__top')
    const $like = createElementFromHtml(templeteLike())
    $divHeader.appendChild($like)

    setTimeout(() => {
        const $divToast = document.querySelector('.toast')
        $divToast.remove('toast--visible');
    }, 50000);
}


