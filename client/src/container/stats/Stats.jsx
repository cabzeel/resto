import React from 'react';
import { FaUtensils, FaSmile, FaAward, FaUserFriends } from 'react-icons/fa';
import './stats.css';

const Stats = () => {
  return (
    <section className="app__stats section__padding">
      <div className="app__stats-container">
        {/* Stat Item 1 */}
        <div className="stat__item">
          <div className="stat__icon">
            <FaUtensils />
          </div>
          <div className="stat__content">
            <h3 className="stat__number">250+</h3>
            <p className="stat__label">Menu Items</p>
          </div>
        </div>

        {/* Stat Item 2 */}
        <div className="stat__item">
          <div className="stat__icon">
            <FaSmile />
          </div>
          <div className="stat__content">
            <h3 className="stat__number">98%</h3>
            <p className="stat__label">Customer Satisfaction</p>
          </div>
        </div>

        {/* Stat Item 3 */}
        <div className="stat__item">
          <div className="stat__icon">
            <FaAward />
          </div>
          <div className="stat__content">
            <h3 className="stat__number">15</h3>
            <p className="stat__label">Industry Awards</p>
          </div>
        </div>

        {/* Stat Item 4 */}
        <div className="stat__item">
          <div className="stat__icon">
            <FaUserFriends />
          </div>
          <div className="stat__content">
            <h3 className="stat__number">10,000+</h3>
            <p className="stat__label">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;