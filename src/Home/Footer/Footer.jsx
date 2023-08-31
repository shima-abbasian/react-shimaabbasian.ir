import {useState} from 'react'
import './Footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function Footer() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="holderFooter">
               <i className="fa-solid fa-cart-shopping">
                   <FontAwesomeIcon icon="fa-solid fa-globe" className="icon"/>

               </i> <span>Designed by  </span><a href="https://rastebazaar.ir"><span> rastebazzar.ir</span></a>
            </div>
        </>
    )
}

export default Footer
