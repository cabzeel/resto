import React from 'react'
import images from '../../constants/images';

import Slider from '../../components/slider/Slider';
import { Link } from 'react-router-dom';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Hero.css'

const Hero = () => {
  const imageFolder = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
  return (
    <section className='app__home-hero section__padding '>
        <div className='app__home-wrapper-info'>
          <SubHeading title='Chase the new flavour' />
          <h1 
            className='app__home-hero-h1'
          >
            african flavors at their finest
          </h1>
          <p>
          Experience the rich, vibrant tastes of traditional African cuisine crafted with love and passion. At Comfort's African Chops, we bring the heart of African culinary heritage to your table, serving unforgettable dishes that nourish both body and soul.
          </p>
          <Link to='/menu'>
            <button
              className='custom__button'
            >
              Explore Menu
            </button>
          </Link>
        </div>

        <div className='app__home-hero_img'>
          <Slider images={imageFolder} />
        </div>
    </section>
  )
}

export default Hero