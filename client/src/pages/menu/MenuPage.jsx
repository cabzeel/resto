import React, { useState } from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import { soupsAndStews, smallChopsSnacksAppetizers, protein } from '../../constants/data'; 
import { FaShoppingBasket, FaFilter, FaTimes } from 'react-icons/fa';
import './MenuPage.css';

const MenuPage = () => {
  // State management
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState(8);

  // Combine and filter menu items
  const allMenuItems = [
    ...soupsAndStews.map(item => ({ ...item, category: 'soups' })),
    ...protein.map(item => ({ ...item, category: 'proteins' })),
    ...smallChopsSnacksAppetizers.map(item => ({ ...item, category: 'snacks' }))
  ];

  const filteredItems = activeFilter === 'all' 
    ? allMenuItems 
    : allMenuItems.filter(item => item.category === activeFilter);

  // Cart functions
  const handleAddToCart = (dish) => {
    setCartItems(prev => [...prev, dish]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price.replace('$', ''));
  }, 0);

  const handleSubmitOrder = () => {
    const orderDetails = cartItems.map(item => `${item.title} - ${item.price}`).join('\n');
    const whatsappLink = `https://api.whatsapp.com/send?phone=32466094817&text=${encodeURIComponent(
      `Order Details:\n${orderDetails}\n\nTotal: $${cartTotal.toFixed(2)}`
    )}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className={`app__menu section__padding flex__center ${isCartOpen ? 'cart-open' : ''}`} id='menu'>
      {/* Cart Icon */}
      <div className='cart-icon' onClick={() => setIsCartOpen(!isCartOpen)}>
        <FaShoppingBasket className='basket-icon' />
        {cartItems.length > 0 && <span className='cart-count'>{cartItems.length}</span>}
      </div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'active' : ''}`}>
        <div className='cart-header'>
          <h2>Your Order</h2>
          <button className='close-cart' onClick={() => setIsCartOpen(false)}>
            <FaTimes />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <p className='empty-cart'>Your cart is empty</p>
        ) : (
          <>
            <ul className='cart-items'>
              {cartItems.map((item, index) => (
                <li key={index} className='cart-item'>
                  <div className='cart-item__info'>
                    <span className='item-title'>{item.title}</span>
                    <span className='item-price'>{item.price}</span>
                  </div>
                  <button 
                    onClick={() => handleRemoveFromCart(index)}
                    className='cart-item__remove'
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            <div className='cart-total'>
              <span>Total:</span>
              <span className='total-price'>${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleSubmitOrder} 
              className='custom__button cart-submit'
              disabled={cartItems.length === 0}
            >
              Submit Order via WhatsApp
            </button>
          </>
        )}
      </div>

      {/* Overlay */}
      {isCartOpen && <div className='cart-overlay' onClick={() => setIsCartOpen(false)} />}

      {/* Menu Content */}
      <div className='menu-content'>
        <div className='app__menu-header'>
          <SubHeading title='Our Menu' />
          <h1 className='headtext'>Dine With Us</h1>
        </div>

        {/* Filter Controls */}
        <div className='menu-filters'>
          {['all', 'soups', 'proteins', 'snacks'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? <FaFilter /> : null}
              {filter === 'all' ? 'All Items' : 
               filter === 'soups' ? 'Soups & Stews' :
               filter === 'proteins' ? 'Proteins' : 'Snacks & Appetizers'}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className='menu-grid'>
          {filteredItems.slice(0, visibleItems).map((item, index) => (
            <div key={`${item.category}-${index}`} className='menu-item'>
              <div className='menu-item__content'>
                <h3>{item.title}</h3>
                <p className='tags'>{item.tag}</p>
                <p className='price'>{item.price}</p>
              </div>
              <button 
                onClick={() => handleAddToCart(item)}
                className='custom__button add-to-cart'
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {visibleItems < filteredItems.length && (
          <button onClick={() => setVisibleItems(prev => prev + 8)} className='custom__button view-more'>
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuPage;