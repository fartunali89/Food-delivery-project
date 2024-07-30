import React from 'react'
import { assets } from '../assets/images/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div  className='fooder' id='fooder'> 
      <div className='footer-contact'>
      <div className='footer-contact-left'>
      <img  src={assets.logo} alt='' className='logo'/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, assumenda! Illum enim totam dolores quod laudantium minima, beatae obcaecati, nemo ea ratione ut? Necessitatibus repellat magni rem facilis nesciunt impedit!</p>

      <div className='footer-social.icons'>
        <img src={assets.facebook_icon} alt=''/>
        <img src={assets.twitter_icon} alt=''/>
          <img src={assets.linkedin_icon} alt=''/>


      </div>
       </div>
      <div className='footer-contact-center'>
        <h2> COMPANY </h2>
        <ul>
          <li>Home</li>
          <li>Food</li>
          <li>Delivery</li>
          <li>privery</li>
        </ul>
      </div>
      <div className='footer-contact-right'>
        <h1>GET IN TOUCH</h1>
        <li>+25250097654265</li>
        <li>contact@Tasty Treat.com</li>
      </div>
      </div>
      <hr/>
      <p className='footer-copyright'> Copyright 2024 Tomato - All Right Reserved   </p>
    </div>
    
  
  )
}

export default Footer
