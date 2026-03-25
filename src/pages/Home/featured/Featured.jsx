import products from '../../../../backend/products.json'

export function Featured() {
    const featuredProducts = products.filter(p => { return p.isFeatured })
    const chosenFeaturedProduct = featuredProducts[0]
    
    return (
        <section id="featured">
            <p className="section-header">Featured Products</p>
            <p className="section-subtitle">Discover the magic of the season with our handpicked Featured Products. From
                enchanting decorations to delightful gifts, these curated items are sure to add a touch of joy to your
                festive celebrations.</p>
            <div className="featured-products-container">
                <div className="featured-products-wrapper">
                    <div className="product-card">
                        {featuredProducts.map(featuredProduct => {
                            return(
                                <div className="featured-image-container" key={featuredProduct.id}>
                                    <img src={featuredProduct.image} alt={featuredProduct.name + " Image"} />
                                </div>
                            )
                        }) }
                    </div>
                </div>
                <div className="chosen-featured-product-container">
                    <div className="chosen-featured-product-img">
                        <img src={chosenFeaturedProduct.image} alt={chosenFeaturedProduct.name + " Image"} />
                    </div>
                    <div className="chosen-featured-product-details-container">
                        <p className="chosen-featured-product-name">{chosenFeaturedProduct.name}</p>
                        <p className="chosen-featured-product-price">${chosenFeaturedProduct.price}</p>
                        <div className="chosen-featured-product-ratings-wrapper">
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                    fill="none">
                                    <path
                                        d="M11.4127 17.76L4.35926 21.7082L5.93459 13.7799L0 8.2918L8.02704 7.34006L11.4127 0L14.7983 7.34006L22.8253 8.2918L16.8908 13.7799L18.4661 21.7082L11.4127 17.76Z"
                                        fill="#FFCB66" />
                                </svg>
                            </div>
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                    fill="none">
                                    <path
                                        d="M11.4127 17.76L4.35926 21.7082L5.93459 13.7799L0 8.2918L8.02704 7.34006L11.4127 0L14.7983 7.34006L22.8253 8.2918L16.8908 13.7799L18.4661 21.7082L11.4127 17.76Z"
                                        fill="#FFCB66" />
                                </svg>
                            </div>
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                    fill="none">
                                    <path
                                        d="M11.4127 17.76L4.35926 21.7082L5.93459 13.7799L0 8.2918L8.02704 7.34006L11.4127 0L14.7983 7.34006L22.8253 8.2918L16.8908 13.7799L18.4661 21.7082L11.4127 17.76Z"
                                        fill="#FFCB66" />
                                </svg>
                            </div>
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                    fill="none">
                                    <path
                                        d="M11.4127 17.76L4.35926 21.7082L5.93459 13.7799L0 8.2918L8.02704 7.34006L11.4127 0L14.7983 7.34006L22.8253 8.2918L16.8908 13.7799L18.4661 21.7082L11.4127 17.76Z"
                                        fill="#FFCB66" />
                                </svg>
                            </div>
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                    fill="none">
                                    <path
                                        d="M11.4127 15.468L15.6594 17.8451L14.7109 13.0717L18.284 9.7674L13.4511 9.19434L11.4127 4.77502V15.468ZM11.4127 17.76L4.35926 21.7082L5.93459 13.7799L0 8.2918L8.02704 7.34006L11.4127 0L14.7983 7.34006L22.8253 8.2918L16.8908 13.7799L18.4661 21.7082L11.4127 17.76Z"
                                        fill="#FFCB66" />
                                </svg>
                            </div>
                        </div>
                        <p className="chosen-featured-product-details">Perfect for adding a festive touch to any space, this
                            miniature tree brings the magic of Christmas right into your home. Crafted with care, it’s a
                            delightful ...</p>
                        <button id="add-to-cart-button">
                            Add to cart
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640">
                                <path
                                    d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}