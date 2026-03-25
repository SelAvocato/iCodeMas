import './Footer.css'

export function Footer() {
    return (
        <section id="footer">
            <div className="footer-wrapper">
                <div className="footer-column brand">
                    <p className="brand-name">iCodeMas</p>
                    <p className="brand-description">At iCodeMas, we believe in spreading joy, creating memories, and making every moment magical. Embrace the spirit of iCodeMas and make your holidays merry and bright!</p>
                </div>
                <div className="footer-column">
                    <p className="column-header">Products</p>
                    <a href="#" className="product-link" >Cookies</a>
                    <a href="#" className="product-link" >Candies</a>
                    <a href="#" className="product-link" >Ornaments</a>
                    <a href="#" className="product-link" >Accessories</a>
                </div>
                <div className="footer-column">
                    <p className="column-header">Client</p>
                    <a href="#" className="client-link" >Find a store</a>
                    <a href="#" className="client-link" >Newsletter</a>
                    <a href="#" className="client-link" >Cookies Policy</a>
                </div>
                <div className="footer-column">
                    <p className="column-header">About</p>
                    <a href="#" className="about-link" >Our mission</a>
                    <a href="#" className="about-link" >Return policy</a>
                    <a href="#" className="about-link" >Contact</a>
                </div>
            </div>
            <p className="copyright">©2023 iCodeThis. All Rights Reserved.</p>
        </section>
    )
}