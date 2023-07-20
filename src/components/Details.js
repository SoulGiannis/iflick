import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Details.css';

const Details = ({ match, tvData }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    quantity: '',
    address: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(tvData[0].images[0]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    emailjs
      .send(
        'service_fl0qpn7',
        'template_koe1s2i',
        formData,
        'i2CD4x7-sO_OVHP-n'
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 9000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tvId = parseInt(match.params.id);
  const tv = tvData.find((tv) => tv.id === tvId);

  if (!tv) {
    return <div>TV not found</div>;
  }

  return (
    <div className='details-main'>
      <div className='details-container'>
        <div className='image-container'>
          <img
            src={selectedImage}
            alt='Selected TV'
            className='selected-image'
          />
        </div>
        <div className='tv-thumbnails'>
          {tv.images.map((image, index) => (
            <img
              src={image}
              alt={`TV ${index + 1}`}
              key={index}
              onClick={() => handleImageClick(image)}
              className={selectedImage === image ? 'active' : ''}
            />
          ))}
        </div>
      </div>
      <div className='tv-details'>
        <h2>{tv.brand}</h2>
        <p>Size: {tv.size}</p>
        <div className='price'>
          <p className='price-label'>Price: {tv.price}</p>
          <p className='original-price'>{tv.originalprice}</p>
        </div>
        <p>{tv.description}</p>
        <p>Free home delivery order now and get up to 40% off!</p>
        <h2 className='hd'>Specification</h2>
        <table className='details-table'>
          <tbody>
            <tr>
              <th>TV Type</th>
              <td>LED TV</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>iFlick</td>
            </tr>
            <tr>
              <th>Screen Size</th>
              <td>{tv.size}</td>
            </tr>
            <tr>
              <th>Screen Resolution</th>
              <td>1920 x 1080</td>
            </tr>
            <tr>
              <th>Panel Type</th>
              <td>IPS</td>
            </tr>
            <tr>
              <th>Full HD</th>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Warranty</th>
              <td>1 Year</td>
            </tr>
            <tr>
              <th>Operating System</th>
              <td>Android</td>
            </tr>
            <tr>
              <th>Frameless</th>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Special Features</th>
              <td>Browser</td>
            </tr>
          </tbody>
        </table>
        <h3 className='hd'>Buy now cash on delivery</h3>
        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='number'
            placeholder='Your Number'
            value={formData.number}
            onChange={handleChange}
            required
          />
          <input
            type='number'
            name='quantity'
            placeholder='Total products'
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <textarea
            style={{ height: 'auto' }}
            name='address'
            placeholder='/house-no/society/area/city/pincode'
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
          <button type='submit'>Buy now</button>
        </form>
        {isSuccess && (
          <div className='success-message-container'>
            <p className='success-message'>
              <a href='https://buy.stripe.com/3csbJFbFQ7ez6YMfYY'>
                <b> Order placed! Pay Now</b>
              </a>
            </p>
          </div>
        )}
      </div>

      {showBackToTop && (
        <button
          className='back-to-top-button'
          onClick={scrollToTop}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          <span className='arrow-up'>&#8593;</span>
        </button>
      )}
    </div>
  );
};

export default Details;
