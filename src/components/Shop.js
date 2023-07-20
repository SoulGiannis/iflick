import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Shop.css';
import iflicktv from '../images/iflick7.png'
import iflicktv8 from '../images/iflick8.png'
import iflicktv10 from '../images/iflick10.png'
import iflicktv11 from '../images/iflick11.PNG'
import iflick24 from '../images/iflick24.png'
import iflick65 from '../images/iflick65.png'

const tvData = [
  {
    id: 1,
    brand: 'iFlick',
    size: '24 inches',
    price: '₹6999 36% off',
    originalprice:'₹10999',
    delivery:'free home delivery Cash On Delivery',
    description: 'Experience immersive viewing with this 55-inch Samsung TV...',
    images: [
      iflick24, // Add your own image path
    ],
  },
  {
    id: 2,
    brand: 'iFlick',
    size: '32 inches',
    price: '₹7999 40% off',
    originalprice:'₹12999',
    delivery:'free home delivery Cash On Delivery',
    description: 'Experience immersive viewing with this 55-inch Samsung TV...',
    images: [
      iflicktv10, // Add your own image path
    ],
  },
  {
    id: 3,
    brand: 'iFlick',
    size: '43 inches',
    price: '₹13899 40% off',
    originalprice:'₹22999',
    delivery:'free home delivery Cash On Delivery',
    description: 'Experience immersive viewing with this 55-inch Samsung TV...',
    images: [
      iflicktv8, // Add your own image path
    ],
  },
  {
    id: 4,
    brand: 'iFlick',
    size: '50 inches',
    price: '₹25999 28% off',
    originalprice:'₹35999',
    delivery:'free home delivery Cash On Delivery',
    description: 'Experience immersive viewing with this 55-inch Samsung TV...',
    images: [
      iflicktv, // Add your own image path
    ],
  },
  {
    id: 5,
    brand: 'iFLick',
    size: '55 inches',
    price: '₹29890 33% off',
    originalprice:'₹44999',
    delivery:'free home delivery Cash On Delivery',
    description: 'Experience immersive viewing with this 55-inch Samsung TV...',
    images: [
      iflicktv11, // Add your own image path
    ],
  },
  {
    id: 6,
    brand: 'iFLick',
    size: '65 inches',
    price: '₹48999 32% off',
    originalprice:'₹71999',
    delivery:'free home delivery Cash On Delivery',
    description: 'Experience immersive viewing with this 55-inch Samsung TV...',
    images: [
      iflick65, // Add your own image path
    ],
  },
  // Add more TV data objects as needed
];

const Shop = () => {
  return (
    <>
      <h1 className='head'>Welcome to iFlick Shop</h1>
        <div className="tv-list">
                  {tvData.map(tv => (
                    <a href={`/details/${tv.id}`} className="tv-card" key={tv.id}>
              <div className="tv-card" key={tv.id}>
                <div className="details-column">
                  <h2>{tv.brand}</h2>
                  <p>Size: {tv.size}</p>
                  <div class="price">
                    <p class="price-label">Price: {tv.price}</p>
                    <p class="original-price">{tv.originalprice}</p>
                  </div>
                  <p className='shop-info'>{tv.description}</p>
                  <p className='shop-info'>{tv.delivery}</p>
                </div>
                <div className="image-column">
                  <div className="tv-images">
                    {tv.images.map((image, index) => (
                      <img src={image} width={500} alt={`TV ${index + 1}`} key={index} />
                      ))}
                  </div>
                          <button className="order-button">Order Now</button>
                </div>
              </div>
          </a>
      ))}
    </div>
  </>
  )
}

export default Shop