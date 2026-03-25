import products from '../../../../backend/products.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export function Pagination({ currentPage, setCurrentPage, productsPerPage }) {

    const maxPage = Math.ceil(products.length / productsPerPage)

    const paginationRange = 2

    const rangeStart = Math.max(2, currentPage - paginationRange)
    const rangeEnd = Math.min(maxPage - 1, currentPage + paginationRange)
    const pageNumbersRange = []
    for (let i = rangeStart; i <= rangeEnd; i++) {
        pageNumbersRange.push(i)
    }

    return (
        <div className="pagination">
            {currentPage > 1
                &&
                <button
                    onClick={() => { setCurrentPage(p => p - 1) }}
                    disabled={currentPage === 1}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            }

            <button
                onClick={() => { setCurrentPage(1) }}
                style={currentPage === 1
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "white" }
                }
            >
                1
            </button>

            {currentPage > paginationRange + 2
                && <button>...</button>
            }

            {pageNumbersRange.map(pageNum => {
                return (
                    <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        style={pageNum === currentPage
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "white" }
                        }
                    >
                        {pageNum}
                    </button>
                )
            })}

            {currentPage < maxPage - (paginationRange + 1) && <button>...</button>}
            
            <button
                onClick={() => { setCurrentPage(maxPage) }}
                style={currentPage === maxPage
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "white" }
                }
            >
                {maxPage}
            </button>

            {currentPage < maxPage &&
                <button
                    onClick={() => { setCurrentPage(p => p + 1) }}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            }

        </div>
    )
}