import products from '../../../../backend/products.json'
import { HighlightedProduct } from './HighlightedProduct'
import './Featured.css'

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
                    {featuredProducts.map(featuredProduct => {
                        return (
                            <div data-label={featuredProduct.label} className={ featuredProduct.label === "New" ? "product-card new" : featuredProduct.label != null ? "product-card discount" : "product-card"}>
                                <div className="featured-image-container" key={featuredProduct.id}>
                                    <img src={featuredProduct.image} alt={featuredProduct.name + " Image"} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <HighlightedProduct chosenFeaturedProduct={chosenFeaturedProduct} />
            </div>
        </section>
    )
}