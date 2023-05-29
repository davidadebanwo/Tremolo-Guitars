import React from 'react'
import './contact.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { useRef } from 'react';


const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r4nw599', 'template_l8gcwa8', form.current, 'xJ1F3n_a1y_-cvCWN')
      
    e.target.reset()
  };
  return (
    <div id='contact' className='contact__container'>
     
     <div className="contact__container-social-address">
      <div className="contact__container-socials">
        <BsFacebook  className='socials'/>
        <BsInstagram className='socials'/>
        <BsTwitter  className='socials'/>
        <BsYoutube  className='socials'/>
      </div>
      <div className="contact__container-address">
        <div className="contact__container-address-each">
          <h2>USA Head Office: </h2>
          <p>P.O. Box 283 8562 Fusce Rd.<br/>
Frederick Nebraska 20620<br/>
tel: (372) 587-2335</p>
        </div>
        <div className="contact__container-address-each">
          <h2>West Africa head Office: </h2>
          <p>606-3727 Ullamcorper. Street<br/>
Roseville NH 11523<br/>
tel: (786) 713-8616</p>
        </div>
        <div className="contact__container-address-each">
          <h2>Europe head Office:</h2>
          <p>Ap #867-859 Sit Rd.<br/>
Azusa New Slope 39531<br/>
tel: (793) 151-6230</p>
        </div>
        <div className="contact__container-address-each">
          <h2>Asia Head Office:</h2>
          <p>7292 Dictum Av.<br/>
San Antonio MI 47096<br/>
tel: (492) 709-6392</p>
        </div>
      </div>

    </div> 
        {/* <div className="line"></div> */}

        <div className="contact__container-form">
          <div className="contact__container-form-title">
            <h1>Contact Us</h1>
            <p>Contact us for more information</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__container-form-form">
            <label>
              <h4>First name:</h4>
              <input  className='inputs' name="firstname" type="text" required/>
            </label>

            <label>
              <h4>Last name:</h4>
              <input className='inputs' name='lastname' type="text" required/>
            </label>

            <label>
              <h4>Email:</h4>
              <input  className='inputs' name="email" type="email" required/>
            </label>

            <label>
              <h4>Message:</h4>
              <textarea name="message" required/>
            </label>

            
            <input type="submit" value="Submit" className="submit"/>
            {/* <div className="submit">
              <h3>Submit</h3>
            </div> */}
          </form>
           
        </div>
    </div>
  )
}

export default Contact