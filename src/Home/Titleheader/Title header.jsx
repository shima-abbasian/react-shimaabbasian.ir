import {useState} from 'react'
import './Titleheader.css'
function TitleHeader() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="row ">
                <div className="col-sm-12 holderH1">
                    <h1>I'm <span>Shima Abbasian</span> a Professional Photographer from Tehran city</h1>
                </div>
            </div>
        </>
    )
}

export default TitleHeader
