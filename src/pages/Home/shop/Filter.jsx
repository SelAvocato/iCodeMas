export function Filter() {
    return (

        <div className="filer-collection-container">
            <aside className="filter-sidebar">
                <p className="filter-sidebar-header">Filters</p>
                <div className="filter-sidebar-category-container">
                    <p className="filter-sidebar-category-header">Category</p>
                    <div className="category-filter-options">
                        <div className="category-filter-cookies">
                            <input type="checkbox" id="cookie-checkbox" />
                            <label for="cookie-checkbox">Cookies</label>
                        </div>
                        <div className="category-filter-candles">
                            <input type="checkbox" id="candie-checkbox" />
                            <label for="candie-checkbox">Candies</label>
                        </div>
                        <div className="category-filter-ornaments">
                            <input type="checkbox" id="ornament-checkbox" />
                            <label for="ornament-checkbox">Ornaments</label>
                        </div>
                        <div className="category-filter-accessories">
                            <input type="checkbox" id="accessory-checkbox" />
                            <label for="accessory-checkbox">Accessories</label>
                        </div>
                    </div>
                </div>
                <div className="filter-sidebar-colors-container">
                    <p className="filter-sidebar-colors-header">Colors</p>
                    <div className="colors-filter-options">
                        <div className="colors-filter-red">
                            <input type="checkbox" id="red-checkbox" />
                            <label for="red-checkbox">Red</label>
                        </div>
                        <div className="colors-filter-white">
                            <input type="checkbox" id="white-checkbox" />
                            <label for="white-checkbox">White</label>
                        </div>
                        <div className="colors-filter-green">
                            <input type="checkbox" id="green-checkbox" />
                            <label for="green-checkbox">Green</label>
                        </div>
                        <div className="colors-filter-brown">
                            <input type="checkbox" id="brown-checkbox" />
                            <label for="brown-checkbox">Brown</label>
                        </div>
                    </div>
                </div>
                <div className="filter-sidebar-size-container">
                    <p className="filter-sidebar-size-header">Size</p>
                    <div className="size-filter-options">
                        <div className="size-filter-small">
                            <input type="checkbox" id="small-checkbox" />
                            <label for="small-checkbox">Small</label>
                        </div>
                        <div className="size-filter-medium">
                            <input type="checkbox" id="medium-checkbox" />
                            <label for="medium-checkbox">Medium</label>
                        </div>
                        <div className="size-filter-large">
                            <input type="checkbox" id="large-checkbox" />
                            <label for="large-checkbox">Large</label>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}