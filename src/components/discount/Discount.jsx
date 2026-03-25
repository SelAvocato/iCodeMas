import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import './Discount.css'

export function Discount(){
    return(
        <div id="discount-container" className="shown">
            <p id="discount-text">Use code “XMAS” for a 20% discount at checkout.</p>
            <FontAwesomeIcon id="discount-close" icon={faX} 
                onClick={() => {
                    const container = document.getElementById('discount-container')
                    container.classList.replace('shown', 'hidden')
                }}
            />
        </div>
    )
}