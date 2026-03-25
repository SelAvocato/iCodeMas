import { Filter } from "./Filter"

export function ShopContainerOptions() {
    return (

        <div className="shop-container-options">
            <button id="collection-filter-button">
                <p className="collection-filter-text">Filters on</p>
                <svg className="filter-angle-left" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640">
                    <path
                        d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
                </svg>
            </button>
            <div className="collection-sort">
                <button id="sort-dropdown">
                    <p className="sort-dropdown-text">Most recent</p>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640">
                        <path
                            d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                    </svg>
                </button>
            </div>
            <div className="column-count-wrapper">
                <div className="column-one">I</div>
                <div className="column-two">II</div>
                <div className="column-three">III</div>
                <div className="column-four">IV</div>
            </div>

            <Filter />
        </div>
    )
}