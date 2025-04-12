import React from 'react';
import './SubHeading.css'

import images  from '../../constants/images'
const SubHeading = ({ title }) => (
  <div className='sub__heading'>
    <p> {title}</p>

    <img src={images.spoon} className='spoon__image' alt='spoon'/>
  </div>
);

export default SubHeading;
