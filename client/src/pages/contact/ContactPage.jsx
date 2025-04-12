import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email service)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className='app__contact section__padding' id='contact'>
      <div className='app__contact-header'>
        <SubHeading title='Get in Touch' />
        <h1>Contact Us</h1>
        <p >We'd love to hear from you! Reach out through any of these channels.</p>
      </div>

      <div className='app__contact-content'>
        <div className='app__contact-info'>
          <div className='contact-card'>
            <div className='contact-icon'>
              <FaMapMarkerAlt />
            </div>
            <h3>Our Location</h3>
            <p>123 Food Street, Houston, Texas 77001</p>
            <button className='custom__button'>Get Directions</button>
          </div>

          <div className='contact-card'>
            <div className='contact-icon'>
              <FaPhone />
            </div>
            <h3>Phone</h3>
            <p>+1 (713) 555-1234</p>
            <p>+1 (832) 555-5678</p>
          </div>

          <div className='contact-card'>
            <div className='contact-icon'>
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>info@comfortschops.com</p>
            <p>reservations@comfortschops.com</p>
          </div>

          
        </div>

        <div className='app__contact-form'>
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Your Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Your Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Your Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='5'
                required
              ></textarea>
            </div>
            <button type='submit' className='custom__button'>Send Message</button>
          </form>
        </div>
      </div>

      <div className='app__contact-map'>
        <img src={images.findus} alt='Our location' />
        <div className='map-overlay'>
          <button className='custom__button'>Open in Google Maps</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;