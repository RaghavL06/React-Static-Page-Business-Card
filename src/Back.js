import logo from './back_logo.png'
import "./index.css"

export default function Back(){
    return (
        <div className="back">
            <img src={logo}/>
            <div className="content">
                <h2 className="content--name">RAGHAV LOKNATH</h2>
                <h6 className="content--spe">COMPUTER SCIENCE ENGINEER</h6>
                <p className="content--link">@gmail.com</p>
                <p className="content--link">@twitter.com</p>
                <p className="content--link">@instagram.com</p>
                <p className="content--address">ADDRESS DUBAI DUBAI STATE, DUBAI CAPITAL, DUBAI THERU</p>
            </div>
        </div>
    )
}