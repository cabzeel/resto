import React from 'react'
import './TodaysSpecial.css'
import SubHeading from '../../components/SubHeading/SubHeading';
import { africanMenu } from '../signatureDishes/data';
import { Link } from 'react-router-dom';


const TodaysSpecial = () => {
  const dishesArr = africanMenu.slice(3, 6);
  return (
    <section className='section__padding todays__special'>
      <SubHeading title="today's special"/>
      <h1>Mouth Watering Dishes today</h1>

      <div className='todaysSpecial__container'>
          {
            dishesArr.map(({imageUrl, name, price, category, description}) => (
              <div key={name} className='card'>
                <img src={imageUrl} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>
                <div>
                  <h5>${price}</h5>
                  <h5>{category}</h5>
                </div>
                <Link to='/menu'>
                  <button className='custom__button'>
                    Order Now!
                  </button>
                </Link>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default TodaysSpecial