import React from 'react'
import Avatar from '../img/profile.png'
import "../styles/components/sidebar.sass"
import SocialContent from './SocialContent'
import InfoContainer from './InfoContainer'


const Sidebar = () => {
  return (
    <aside id='sidebar'>
        <img src={Avatar} alt="avatar pircure" />
        <p className="title">Desenvolvedor</p>
        <SocialContent />
        <InfoContainer />
        <a href="#" className='btn'>
            Download Currculum
        </a>
    </aside>
  )
}

export default Sidebar