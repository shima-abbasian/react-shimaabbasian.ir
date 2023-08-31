import {useState} from 'react'
import ImageGallery from "./Imagegallery/Imagegallery.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import TitleHeader from "./Titleheader/Title header.jsx";
import Footer from "./Footer/Footer.jsx";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Navbar/>
            <TitleHeader/>
            <div className="containers">
                <ImageGallery image="./public/pics/IMG_0402.jpg" description="xiaomi" />
                <ImageGallery image="./public/pics/IMG_1704.jpg" description="cookie"/>
                <ImageGallery image="./public/pics/IMG_0895.jpg" description="black mask"/>
                <ImageGallery image="./public/pics/IMG_13700.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1215.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1299.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1428.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1457.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1535.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1576.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1668.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1704.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1835.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_1973.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_3011.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_3043.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_3120.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_3142.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_7952.jpg" description="fruts"/>
                <ImageGallery image="./public/pics/IMG_8065.jpg" description="fruts"/>
            </div>
            <div className="text-center mb-5 " >
                <button>Visit the Instagram page to see more pictures</button>

            </div>
            <Footer/>

        </>
    )
}

export default Home
