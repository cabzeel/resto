import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { africanMenu } from './data';
import './SignatureDishes.css'
import { Link } from 'react-router-dom';

const SignatureDishes = () => {
  const dishesArr = africanMenu.slice(0, 3);
  return (
    <section className='signatureDishes section__padding'>
      <SubHeading title={'Signature Dishes'} />
      <h1>Our Best Selling Yet</h1>
      <div className='signatureDishes__container'>
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

export default SignatureDishes