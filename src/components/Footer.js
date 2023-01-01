import React from 'react'
import { FaTwitter, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
         <h2>Mes réseaux : </h2>
        <div className="icon">
          <a href="https://twitter.com/NDuminil"><FaTwitter size={35} color = "white"/></a>
          <a href="https://www.linkedin.com/in/noah-duminil-85431a220/"><FaLinkedin size={35} color = "white"/></a>
          <a href="https://github.com/NoahDum"><FaGithubSquare size={35} color = "white"/></a>
        </div>
    </div>
  )
}

export default Footer