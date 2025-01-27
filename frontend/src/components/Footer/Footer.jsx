import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer ' id ='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique vitae autem repudiandae possimus excepturi dolorum earum quis temporibus itaque, soluta ratione sequi voluptate accusantium officia nostrum consectetur, deserunt, nobis non.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>

            <div className="fotter-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 55-55-55</li>
                    <li>contact@gmail.com</li>
                </ul>

            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2025 0 tomato.com - All Right Reserved</p>

      
    </div>
  )
}

export default Footer
