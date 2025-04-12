import React, { useState } from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { FaUtensils, FaUserTie, FaClipboardList, FaCalendarAlt, FaUsers, FaPlus, FaMinus } from 'react-icons/fa';
import './ServicesPage.css'
import data from '../../constants/data';

const ServicesPage = () => {

  const [openFAQ, setOpenFAQ] = useState(false);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? false : index);
  };
  const services = [
    {
      title: "Event Catering",
      description: "Professional catering services for weddings, corporate events, and special occasions.",
      icon: <FaUtensils />
    },
    {
      title: "Private Chef Experience",
      description: "Exclusive dining experiences with our talented chefs in your home.",
      icon: <FaUserTie />
    },
    {
      title: "Menu Customization",
      description: "Tailored menus designed to your specific tastes and dietary needs.",
      icon: <FaClipboardList />
    },
    {
      title: "Event Planning",
      description: "Complete event coordination to ensure flawless execution.",
      icon: <FaCalendarAlt />
    },
    {
      title: "Staffing Solutions",
      description: "Professional waitstaff and service personnel for any event size.",
      icon: <FaUsers />
    }
  ];

  return (
    <div className='services__page section__padding'>
      <SubHeading title={'our services'} />
      <h1 className='services__title'>What Can We Do?</h1>
      <div className='services__content'>
        <ul className='services-list'>
          {services.map((service, index) => (
            <li key={index} className='service-card'>
              <div className='service-icon'>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='app__services-content_faq' id='faq'>
        <SubHeading title={'FAQ'} />
        <h1>I want to know...</h1>
        {data.faqData.map((faq, index) => ( // Updated to use data.faqData
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleFAQ(index)}>
              <h2> Me: {faq.question}</h2>
              <span className='faq-icon'>
                {openFAQ === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {openFAQ === index && <p className='faq-answer'>Chef: {faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesPage;