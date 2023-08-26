import './styles/footer.css'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className=' section footer'>
            <div className="footer__container">

                <div className="footer__title">
                    <p>-2023, ShoesHaven@inc</p>
                </div>

                <ul className='footer__menu'>

                    <li className='footer__list'>
                        <button className='footer__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                <g fill="#84cc16" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                            </svg>
                        </button>
                    </li>
                    <li className='footer__list'>
                        <button className='footer__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                <g fill="#84cc16" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
                            </svg>
                        </button>
                    </li>
                    <li className='footer__list'>
                        <button className='footer__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                <g fill="#84cc16" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8,8)"><path d="M28,8.55859c-0.88281,0.39063 -1.83203,0.65625 -2.82812,0.77344c1.01563,-0.60937 1.79688,-1.57422 2.16406,-2.72266c-0.94922,0.5625 -2.00391,0.97266 -3.125,1.19531c-0.89844,-0.95703 -2.17969,-1.55859 -3.59375,-1.55859c-2.71875,0 -4.92578,2.20703 -4.92578,4.92578c0,0.38672 0.04297,0.76172 0.12891,1.12109c-4.09375,-0.20312 -7.72266,-2.16406 -10.14844,-5.14453c-0.42578,0.72656 -0.66797,1.57422 -0.66797,2.47656c0,1.70703 0.86719,3.21484 2.19141,4.09766c-0.80859,-0.02734 -1.56641,-0.24609 -2.23047,-0.61719c0,0.02344 0,0.04297 0,0.0625c0,2.38672 1.69531,4.37891 3.94922,4.82813c-0.41406,0.11328 -0.84766,0.17578 -1.29688,0.17578c-0.31641,0 -0.62891,-0.03125 -0.92578,-0.08984c0.625,1.95703 2.44531,3.37891 4.59766,3.42188c-1.68359,1.32031 -3.80859,2.10547 -6.11328,2.10547c-0.39844,0 -0.78906,-0.02344 -1.17578,-0.07031c2.17969,1.39844 4.76563,2.21484 7.54688,2.21484c9.05859,0 14.01172,-7.50391 14.01172,-14.01172c0,-0.21094 -0.00781,-0.42578 -0.01562,-0.63672c0.96094,-0.69531 1.79688,-1.5625 2.45703,-2.54687z"></path></g></g>
                            </svg>
                        </button>
                    </li>
                    <li className='footer__list'>
                        <button className='footer__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                <g fill="#84cc16" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.757,0 -5,2.243 -5,5v32c0,2.757 2.243,5 5,5h32c2.757,0 5,-2.243 5,-5v-32c0,-2.757 -2.243,-5 -5,-5zM37.006,22.323c-0.227,0.021 -0.457,0.035 -0.69,0.035c-2.623,0 -4.928,-1.349 -6.269,-3.388c0,5.349 0,11.435 0,11.537c0,4.709 -3.818,8.527 -8.527,8.527c-4.709,0 -8.527,-3.818 -8.527,-8.527c0,-4.709 3.818,-8.527 8.527,-8.527c0.178,0 0.352,0.016 0.527,0.027v4.202c-0.175,-0.021 -0.347,-0.053 -0.527,-0.053c-2.404,0 -4.352,1.948 -4.352,4.352c0,2.404 1.948,4.352 4.352,4.352c2.404,0 4.527,-1.894 4.527,-4.298c0,-0.095 0.042,-19.594 0.042,-19.594h4.016c0.378,3.591 3.277,6.425 6.901,6.685z"></path></g></g>
                            </svg>
                        </button>
                    </li>
                </ul>


            </div>
        </footer>
    )
}

export default Footer