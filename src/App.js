import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import ContactUs from './components/ContactUs';
import logo from './images/logoblack.png'
import './App.css';
import Footer from './components/Footer';
import Details from './components/Details';

import iflicktv from './images/iflick_led6.jpeg'
import iflicktv6 from './images/iflick_led1.jpeg'
import iflicktv7 from './images/iflick_led12.png'
import iflicktv8 from './images/iflick_led2.jpeg'
import iflicktv9 from './images/iflick_led5.jpeg'
import iflicktv10 from './images/iflick_led7.jpeg'
import iflicktv11 from './images/iflick_led6.jpeg'
import iflicktv12 from './images/iflick_led8.jpeg'
import iflicktv13 from './images/iflick_led13.jpeg'
import iflicktv14 from './images/iflick_led9.jpeg'
import iflicktv15 from './images/iflick_led10.jpeg'
import iflicktv16 from './images/iflick_led11.jpeg'


import iflicktv1 from './images/iflick1.jpeg'
import iflick1 from './images/iflick_img1.jpg'
import iflick2 from './images/iflick_img2.jpg'
import iflick3 from './images/iflick_img3.jpg'
import iflick4 from './images/iflick_img4.jpg'
import iflick5 from './images/iflick_img5.jpg'
import iflick6 from './images/iflick_shop3.jpeg'


import Error from './components/Error';
import Shop from './components/Shop';

const tvData = [
  {
    id: 1,
    brand: 'iFlick',
    size: '24 inches',
    price: '₹6999 36% off',
    originalprice:'₹10999',
    description: 'Experience immersive viewing with this 55-inch Samsung TV. Discover a new level of immersive viewing with iFlick, where excellence meets affordability, and where your TV dreams become reality.',
    images: [
      iflicktv7,
      iflick1, // Add your own image path
      iflicktv8, // Add your own image path
      iflick3, // Add your own image path
    ],
  },
  {
    id: 2,
    brand: 'iFlick',
    size: '32 inches',
    price: '₹7999 40% off',
    originalprice:'₹12999',
    description: 'Experience immersive viewing with this 55-inch Samsung TV. Discover a new level of immersive viewing with iFlick, where excellence meets affordability, and where your TV dreams become reality.',
    images: [
      iflicktv10,
      iflick1, // Add your own image path
      iflick4, // Add your own image path
      iflicktv9, // Add your own image path
    ],
  },
  {
    id: 3,  
    brand: 'iFlick',
    size: '43 inches',
    price: '₹13899 40% off',
    originalprice:'₹22999',
    description: 'Experience immersive viewing with this 55-inch Samsung TV...',
    images: [
      iflick6, // Add your own image path
      iflicktv12,
      iflicktv11,
      iflicktv1,
    ],
  },
  {
    id: 4,
    brand: 'iFlick',
    size: '50 inches',
    price: '₹25999 28% off',
    originalprice:'₹35999',
    description: 'Experience immersive viewing with this 55-inch Samsung TV ',
    images: [
      iflicktv, // Add your own image path
      iflick2,
      iflick4,
      iflicktv6,
    ],
  },
  {
    id: 5,
    brand: 'iFLick',
    size: '55 inches',
    price: '₹29890 33% off',
    originalprice:'₹44999',
    description: 'Experience immersive viewing with this 55-inch Samsung TV...',
    images: [
      iflick5, // Add your own image path
      iflicktv14,
      iflick1,
      iflicktv13,
    ],
  },
  {
    id: 6,
    brand: 'iFLick',
    size: '65 inches',
    price: '₹48999 32% off',
    originalprice:'₹71999',
    description: 'Experience immersive viewing with this 65-inch Samsung TV...',
    images: [
      iflick5, // Add your own image path
      iflicktv16,
      iflick4,
      iflicktv15,
    ],
  },
  // Add more TV data objects as needed
];



const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <header>
        <nav>
          <div className="logo">
            <Link to="/"><h2> <img src={logo} height={"auto"} width={"auto"} alt="Slide 1" /></h2></Link>
          </div>
          <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link className="header_btn" to="/">Home</Link>
              </li>
              <li>
                <Link className="header_btn" to="/shop">Shop</Link>
              </li>
              <li>
                <Link className="header_btn" to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="burger-icon" onClick={handleMenuToggle}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/details/:id" render={props => <Details {...props} tvData={tvData} />} />
        <Route path="/shop" component={Shop} />
        <Route path="*" component={Error}/>
      </Switch>
      <Footer/>
    </Router>
    
  );
};

export default App;
