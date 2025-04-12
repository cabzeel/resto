import React from 'react';

import images  from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Chef.css';

const Chef = () => (
  <div className='app__about-chef section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.owner} alt='chef'/>
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" />
        <h1>What we believe in</h1>
        <div className='app__about-chef-content'>
          <div className='app__about-chef-content_quote'>
            <img src={images.quote} alt='quote'/>
            <p> Cooking is like love;</p>
          </div>
          <p>it should be entered into with passion and creativity. Good food is the foundation of genuine happiness, bringing people together and creating a universal experience.</p>
        </div>
        <div className='app__about-chef-sign'>
          <p>Comfort</p>
          <p>Chef and Founder</p>

        </div>
      </div>
  </div>
);

export default Chef;
