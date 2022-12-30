import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
         <h2>Mes réseaux : </h2>
        <div className="icon">
          <FaInstagram size={35} color = "white"/>
          <FaTwitter size={35} color = "white"/>
          <FaLinkedin size={35} color = "white"/>
          <FaGithubSquare size={35} color = "white"/>
        </div>
    </div>
  )
}

export default Footer