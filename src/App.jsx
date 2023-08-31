import {useState} from 'react'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Home from "./Home/Home.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import {Routes,Route} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
            </Routes>
        </>
    )
}
export default App
    library.add(fab, fas, far)