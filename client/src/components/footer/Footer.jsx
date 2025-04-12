import React from 'react';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='app__footer section__padding'>
      <div className='footer__container'>
        <div className='footer__about'>
          <img src={images.logo1} />
          <h3>Open Hours</h3>
          <div className='open__hours'>
            <h5>Monday - Friday : </h5>
            <p>7:00AM - 3pm</p>
          </div>

          <div className='open__hours'>
            <h5>Saturday - Sunday : </h5>
            <p>7:00AM - 3pm</p>
          </div>
        </div>
        <div className='footer__nav'>
          <Link to='/home' className='footer__nav-item'>Home</Link>
          <Link to='/about' className='footer__nav-item'>About</Link>
          <Link to='/services' className='footer__nav-item'>Services</Link>
          <Link to='/menu' className='footer__nav-item'>Menu</Link>
          <Link to='/contact' className='footer__nav-item'>Contact</Link>
        </div>
        <div className='footer__newsletter'>
          <h3>Join Our Newsletter</h3>
          <input 
            placeholder='enter your email'
            type='email'
            name='email'
          />
          <button className='custom__button'>
            SignUp
          </button>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; <span id="year">2025</span> zeeltech. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer