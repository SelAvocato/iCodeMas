import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

export function Header() {
    return (
        <header>
            <div class="header-left">
                <p class="header-title">iCodeMas</p>
                <div class="search-container">
                    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                            d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                    </svg>
                    <form action="" method='get'>
                        <input id="header-search-input" type="text" placeholder="Search" />
                    </form>
                </div>
            </div>
            <div class="header-right">
                <div class="anchor-links">
                    <a href="#featured">Featured</a>
                    <a href="#shop">Shop</a>
                    <a href="#faq">FAQ</a>
                </div>
                <div class="bag-container">
                    <img className='bag-icon' src="https://img.icons8.com/pastel-glyph/64/paper-bag--v2.png" alt="paper-bag" />
                    <div class="bag-red-dot">3</div>
                </div>
            </div>
        </header>
    )
}