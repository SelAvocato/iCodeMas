import { ShopContainerOptions } from "./ShopContainerOptions"
import { ProductsContainer } from "./ProductsContainer"

export function Shop() {
    return (

        <section id="shop">
            <p className="shop-title">Christmas collection</p>
            <p className="shop-subtitle">From charming ornaments to cozy winter essentials, explore a wonderland of festive
                delights.</p>

            <div className="shop-container">
                <ShopContainerOptions />
                <ProductsContainer />
            </div>
        </section>
    )
}