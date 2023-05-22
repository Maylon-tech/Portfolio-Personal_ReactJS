import React from 'react'
import Avatar from '../img/profilepic.png'
import "../styles/components/sidebar.sass"


const Sidebar = () => {
  return (
    <aside id='sidebar'>
        <img src={Avatar} alt="avatar pircure" />
        <p className="title">Desenvolvedor</p>
        <p>redes sociais</p>
        <p>informações de contato</p>
        <a href="#" className='btn'>
            Download Currculum
        </a>
    </aside>
  )
}

export default Sidebar