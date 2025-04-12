import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading'

import './AboutPage.css';
import images  from '../../constants/images';
import Chef from '../../container/Chef/Chef';
import Laurels from '../../container/Laurels/Laurels';
const AboutPage = () => (
  <div className='app__aboutPage section__padding' id='about'>
   
    <SubHeading title='Our Story' />
    <div className='app__aboutPage-content'>
        <div className='app__aboutPage-content_about'>
          <h1>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
          <p>"Our kitchen is a fusion of traditional and modern techniques, carefully balancing bold, authentic flavors with a touch of contemporary flair. We invite you to join us on a culinary journey that celebrates culture, creativity, and the art of fine dining."</p>
          <a href='#faq'>
            <button type='button' className='custom__button'>Know More</button>
          </a>
        </div>
        <div className='app__aboutPage-content_knife flex__center'>
          <img src={images.laurel01} alt='knife__img' />
        </div>

        <div className='app__aboutPage-content_history'>
          <h1>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
          <p>"Our story began with a vision to showcase Africa's rich flavors. Our founder, a proud Cameroonian, blends family recipes with global culinary trends. After working in renowned international restaurants, he opened this establishment, merging African hospitality with modern dining."</p>
          <a href='#services'>
            <button type='button' className='custom__button'>Know More</button>
          </a>
        </div>
       
    </div>

    <Chef />
    <Laurels />
    
  </div>
);

export default AboutPage; 