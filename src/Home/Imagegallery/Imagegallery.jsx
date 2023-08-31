
import {useState} from 'react'
import './Imagegallery.css'

function ImageGallery(props) {
    const [count, setCount] = useState(0)

    return(
        <>
        <div className="cardImg">
            <img className="roundedImg" src={props.image} alt=""/>
        </div>
        </>
    )
}
export default ImageGallery