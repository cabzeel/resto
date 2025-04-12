import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import {awards} from '../../constants/data';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => ( 
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='award' />
    <div className='app__laurels_awards-card_content'>
      <p>{title}</p>
      <p>{subtitle}</p>

    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & Recognition' />
      <h1>Our Laurels</h1>

      <div className='app__laurels_awards'>
        {awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurel02} alt='Laurels'  />
    </div>
  </div>
);

export default Laurels;
