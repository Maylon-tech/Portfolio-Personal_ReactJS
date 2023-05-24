
import "../styles/components/socialcontent.sass"

import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram
} from 'react-icons/fa'


const socialNetworks = [
    {
        name: "linkedin",
        icon: <FaLinkedinIn />
    },
    {
        name: "github",
        icon: <FaGithub />
    },
    {
        name: "instagram",
        icon: <FaInstagram />
    },
]

const SocialContent = () => {
  return (
    <section id='socialContent'>
        {
            socialNetworks.map((network) => (
                <a href="#" 
                    className='social-btn' 
                    id={network.name}
                    key={network.name}
                >
                    {network.icon}
                </a>
            ))
        }
    </section>
  )
}

export default SocialContent