import {useState} from 'react'
import './Navbar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'

function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className=" background ">
                <div className="row containerNavbar">
                    <div className="col-md-6  col-sm-6 col-6 logoNavbar">
                        <FontAwesomeIcon icon="fa-solid fa-camera" className="iconcamera me-2"/>
                        <h1><a href="#" className="navTitle">Photo Folio</a></h1>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 headerNavbar">
                        <ul className="ulMenu">
                            <li><Link to='/' className="titleMenu active">Home</Link></li>
                            <li><Link to='./AboutUs' className="titleMenu ">About</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
