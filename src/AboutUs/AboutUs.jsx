import {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navbar from "../Home/Navbar/Navbar.jsx";
import Footer from "../Home/Footer/Footer.jsx";
import MainAboutUs from "./MainAboutUs/MainAboutUs.jsx";
function AboutUs() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Navbar/>
            <MainAboutUs />
            <Footer/>
        </>
    )
}

export default AboutUs
