import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import SubHeading  from '../../components/SubHeading/SubHeading';
import images  from '../../constants/images';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => { 
  
  const scrollRef = React.useRef(null)

  const scroll = (dir) => {
    const { current }  = scrollRef;

    if(dir === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  
  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram' />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color: '#aaa', marginTop:'2rem'}}>Welcome to Comfort's African Chops! Explore our delicious dishes crafted with fresh, local ingredients and a passion for flavor. From cozy meals to festive gatherings, every moment is a celebration. Follow us for culinary inspiration and join our food journey!</p>
      <a href='https://www.instagram.com/comforts_afri_chop?igsh=MXhtb2wwYjZoMHR0cw=='>
        <button type='button' className='custom__button'>View More</button>
      </a>
    </div>
    <div  className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) =>  ( 
          <div className='app__gallery-images_card flex__center' key={`galery_image-${index + 1}` }>
              <img  src={image} alt='gallery'/>
              <a href='https://www.instagram.com/comforts_afri_chop?igsh=MXhtb2wwYjZoMHR0cw=='>
              <BsInstagram className='gallery__image-icon'/>
              </a>
              
            </div>
          ))}
      </div>
      <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />

      </div>
    </div>
  </div>
  )
};

export default Gallery;
