import React, { useEffect } from "react";
import Email from '../images/email.svg'
import Phone from '../images/phone.svg'
import Map from '../images/location.png'
import 'animate.css'

 export default function Contact() {
  useEffect(()=> {
    document.title = 'Contact'
})
   const socials = [
    {
      icon: Map,
      name: 'Bukhara, Kogon city, Birdamlik',
      title: 'Address'
    },
    {
      icon: Phone,
      name: <a href="tel:+998912460922">+998-91-246-09-22</a>,
      title: 'Call Us'
    },
    {
      icon: Email,
      name: <a href='mailto:sharopovaziz22@gmail.com'>sharopovaziz22@gmail.com</a>,
      title: 'Email Us'
    }
   ]
    return (
      <div className="container-home">
        <div className='Contact'>
          <h1 className="p_title animate__animated animate__fadeInLeft" id='con'>Send Me A Message</h1>
          <div className="form-flex">
          <form className="p_title animate__animated animate__fadeInLeft" name='contact' data-netlify='true'>
            <div className="names">
              <div>
            <label htmlFor="name">Name*</label><br />
              <input
               type="text"
               id='name'
               name='name'
               placeholder='Your Name'
               required
               />
            </div>
            <div>
            <label htmlFor="number">Phone*</label><br />
              <input
               type="number"
               id='number'
               name='number'
               placeholder='Your Number'
               required
               />
               </div>
            </div>
            <label htmlFor="message">Message</label><br />
              <textarea name="message" id="message" placeholder='Your Message' cols="30" rows="10"></textarea><br /> 
            <button type="submit">Submit</button>
          </form>
          <div className="contact_map">
          <iframe title="Kogon" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac89dde93f0f72815ada0bdb09b8abd573b0f00531be3306f157d33ca620c7063&amp;source=constructor" frameborder="0"></iframe>
         </div>
          </div>
          <h1 className='contact_h1 animate__animated animate__fadeInLeft'>Get in touch</h1>
            <div className="infos contact_h1 animate__animated animate__bounce animate__delay-2s">
              {socials.length > 0 &&
              socials.map((social, index) => (
                <div className="info" key={index}>
                  <img src={social.icon} alt="" />
                  <h3>{social.name}</h3>
                  <h4>{social.title}</h4>
                </div>
              ))         
              }
        </div>                
        </div>
        </div>
    )
}

