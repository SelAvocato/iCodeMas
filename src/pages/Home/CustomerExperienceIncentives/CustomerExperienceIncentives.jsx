export function CustomerExperienceIncentives() {
    return (
        <section id="customer-experience-incentives-container">
            <div className="cei wrapper">
                <div className="card free-shipping">
                    <div className="card-image-container">
                        <img src="free-shipping-img.png" alt="Free Shipping Image" />
                    </div>
                    <div className="card-details">
                        <p className="card-title">Free shipping</p>
                        <p className="card-description">Free shipping on all orders over $19.99</p>
                    </div>
                </div>
                <div className="card money-back-guarantee">
                    <div className="card-image-container">
                        <img src="money-back-guarantee-img.png" alt="" />
                    </div>
                    <div className="card-details">
                        <p className="card-title">Money back guarantee</p>
                        <p className="card-description">Within 30 days of purchase</p>
                    </div>
                </div>
                <div className="card online-support">
                    <div className="card-image-container">
                        <img src="online-support-img.png" alt="" />
                    </div>
                    <div className="card-details">
                        <p className="card-title">Online support</p>
                        <p className="card-description">Our online support is here for you</p>
                    </div>
                </div>
            </div>
        </section>
    )
}