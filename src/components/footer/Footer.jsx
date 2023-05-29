import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='container__footer-big'>
    <div className='container__footer'>
        <div className="container__footer-companyname">
            <img src={Logo} alt="" />
            <h1>Tremolo</h1>
        </div>
        <div className="container__footer-products">
            <h2><a href='#products'>Products</a></h2>
            <p><a href='#acoustic'>Acoustic guitars</a></p>
            <p><a href='#electric'>Electric guitars</a></p>
            <p><a href='#bass'>Bass guitars</a></p>
            <p><a href='#amp'>Amplifiers</a></p>
            <p><a href='#accessories'>Accessories</a></p>
        </div>
        <div className='container__footer-navlinks'>
            <h2>Links</h2>
            <p><a href='#'>Home</a></p>
            <p><a href='#products'>Products</a></p>
            {/* <p><a>FAQs</a></p> */}
            <p><a href='#about'>About</a></p>
            <p><a href='#contact'>Contact Us</a></p>
        </div>
        <div className="contact__footer-socials">
        <BsFacebook  className='socials'/>
        <BsInstagram className='socials'/>
        <BsTwitter  className='socials'/>
        <BsYoutube  className='socials'/>
      </div>
    </div>
    <div className="contact__footer-copyright">
        <p>&copy;2023 Tremolo</p>
    </div>
    </div>
  )
}

export default Footer