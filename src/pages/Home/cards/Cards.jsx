import Car from '/car.png'
import Sleigh from '/sleigh.png'
import './Cards.css'

export function Cards() {
    return (
        <section id="cards">
            <div className="card-container shop-now">
                <div className="img-container">
                    <img src={Car} alt="" />
                </div>
                <div className="card-footer-container">
                    <div className="card-description">
                        <p className="card-title">Christmas collection</p>
                        <p className="convincing-message">Shop collection now</p>
                    </div>
                    <a href='#shop' className="card-button shop">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640">
                            <path
                                d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="card-container gift-card">
                <div className="img-container">
                    <img src={Sleigh} alt="" />
                </div>
                <div className="card-footer-container">
                    <div className="card-description">
                        <p className="card-title">Gift card</p>
                        <p className="convincing-message">Share the spirit with our Gift Cards</p>
                    </div>
                    <button className="card-button gift">
                        Get Gift
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640">
                            <path
                                d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}