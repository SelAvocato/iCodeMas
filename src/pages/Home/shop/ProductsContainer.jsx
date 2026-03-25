import products from '../../../../backend/products.json'
import { Product } from './Product'
import { Pagination } from './Pagination'
import { useState } from 'react'


export function ProductsContainer() {
    const [currentPage, setCurrentPage] = useState(1)
    
    const productsPerPage = 1

    const productStartIndex = (currentPage - 1) * productsPerPage
    const productEndIndex = productStartIndex + productsPerPage

    const displayedProducts = products.slice(productStartIndex, productEndIndex)

    return (
        <div className="products-container">
            <div className="products-wrapper">
                {displayedProducts.map(product => {
                    return (
                        <Product key={product.id} product={product} />
                    )
                })}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage} />
        </div>
    )
}