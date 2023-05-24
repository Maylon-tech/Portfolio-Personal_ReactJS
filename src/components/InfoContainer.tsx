import "../styles/components/infocontainer.sass"

import {
    AiFillPhone,
    AiOutlineMail,
    AiFillEnvironment
} from "react-icons/ai"

const InfoContainer = () => {
  return (
    <div id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Phone</h3>
                <p>(48)999988-7766</p>
            </div>
        </div>

        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-Mail</h3>
                <p>techflow258@gmail.com</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Location</h3>
                <p>Aichi-ken Hekinan-shi JP</p>
            </div>
        </div>
    </div>
  )
}

export default InfoContainer