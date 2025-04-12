import React from 'react'
import './HomePage.css'
import Hero from '../../container/hero/Hero'
import Stats from '../../container/stats/Stats'
import SignatureDishes from '../../container/signatureDishes/SignatureDishes'
import TodaysSpecial from '../../container/todaysSpecial/TodaysSpecial'
import Gallery from '../../container/Gallery/Gallery'



const HomePage = () => {
  
  return (
    <div className='app__home'>
      <Hero />
      <Stats />
      <SignatureDishes />
      <TodaysSpecial />
      <Gallery />
    </div>
  )
}

export default HomePage