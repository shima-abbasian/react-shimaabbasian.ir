import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./MainAboutUs.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function MainAboutUs() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="row holderabouteme">
                <div className="col-md-6 holderText left" dir="rtl">
                    <p>درباره من</p>
                    <span><FontAwesomeIcon icon="fa-solid fa-chevron-left" className="icon"/></span>
                    <span>من به عنوان یک عکاس تبلیغاتی، همیشه سعی می‌کنم تا با
                        استفاده از تخصص و تجربه خود، بهترین نتیجه را برای مشتریانم بدست آورم. از آنجایی که عکاسی برای من یک شغل جذاب و پر از لذت است،
                        همیشه با انگیزه واشتیاق بالا به پروژه‌های خود می‌پردازم و تلاش می‌کنم تا بهترین عکس‌ها را برای مشتریانم تولید کنم.
                    </span>
                    <br/>
                    <br/>
                    <span><FontAwesomeIcon icon="fa-solid fa-chevron-left" className="icon"/></span>
                    <span>
                        در کنار این کار، همواره به دنبال بهبود دانش علمی
                        خود هستم و سعی می‌کنم تا با استفاده از تکنولوژی‌های جدید و نوآورانه، بهترین نتیجه را برای پروژه‌های خود بدست آورم. در نهایت، با افتخار می‌گویم که تاکنون
                        در پروژه‌های مختلفی برای سایت‌های داخلی و خارجی عکاسی کرده‌ام و همیشه سعی می‌کنم تا با بهترین نتیجه، اعتماد مشتریانم را به دست آورم</span>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <span><FontAwesomeIcon icon="fa-solid fa-chevron-left" className="icon"/></span>
                    <span>برای ارتباط با من،  مشاوره عکاسی و سفارش عکس می‌توانید از طریق راه های ارتباطی زیر با من در تماس باشید</span>
                    <br/>
                    <br/>
                    <p>
                        <span><FontAwesomeIcon icon="fab fa-instagram" className="iconInsta"/></span>
                        <a href="https://instagram.com/shima.advertising.studio">shima.advertising.studio</a>
                    </p>
                    <p>
                        <span><FontAwesomeIcon icon="fab fa-instagram" className="iconInsta"/></span>
                        <a href="https://instagram.com/shima.food.studio">shima.food.studio</a></p>
                    <p>
                        <span><FontAwesomeIcon icon="far fa-envelope" className="iconInsta"/></span>
                        <a>shima.abbasian.24@gmail.com</a>
                    </p>
                    <p>
                        <span><FontAwesomeIcon icon="fa fa-phone" className="iconInsta"/></span>
                        <a>09370584947</a>
                    </p>
                </div>
                <div className="col-md-6 holderText right" dir="rtl">
                    <img src="./public/pics/1.jpg" alt=""/>
                </div>
            </div>
        </>
    )
}

export default MainAboutUs
