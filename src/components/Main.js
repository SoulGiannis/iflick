import React, { useState, useEffect, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Main.css';
// import iflicktv15 from '../images/iflick_img15.jpg'
import iflicktv11 from '../images/iflick_img11.jpg'
import iflicktv12 from '../images/iflick_img12.jpg'
import iflicktv14 from '../images/iflick_img14.jpg'
import iflicktv1 from '../images/iflick_img1.jpg'
// import iflicktv8 from '../images/iflick_img7.jpg'
// import iflicktv3 from '../images/iflick_img8.jpg'
import iflicktv9 from '../images/iflick_img9.jpg'
// import iflicktv7 from '../images/iflick_img16.jpg'
import iflickposter from '../images/iflick_led.png'

const Main = () => {
  return (
    <div className="main-container">
      <Slideshow/>
      <Poster />
      <Information />
      <LastPoster />
    </div>
  );
};

// slide show
const images = [iflicktv11, iflicktv1, iflicktv12];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {[...images, images[0]].map((imageUrl, idx) => (
          <div
            className="slide"
            key={idx}
            style={{ backgroundImage: `url(${images[idx]})`, backgroundSize: '100% 100%' }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

// const Poster = () => {
//   return (
//     <div className='poster'>
//       <img src={iflickposter} className='iflick_poster_img' alt='iflick_poster' />
//       <div className='poster-child'>
//         <h4 className='txt1'>32 inch</h4>
//         <h4 className='txt2'> 43 inch</h4>
//         <h4 className='txt3'>50 inch</h4>
//         <h4 className='txt4'>55 inch</h4>
//       </div>
//     </div>
//   )
// }


const Poster = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleHover4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  return (
    <div className="poster">
      <img
        src={iflickposter}
        className={`iflick_poster_img ${isHovered1 ? 'hovered-1' : ''} ${isHovered2 ? 'hovered-2' : ''} ${isHovered3 ? 'hovered-3' : ''} ${isHovered4 ? 'hovered-4' : ''}`}
        alt="iflick_poster"
      />
      <div className="poster-child">
        <h2
          className="txt1"
          onMouseEnter={handleHover1}
          onMouseLeave={handleMouseLeave1}
        >
          32 inch
        </h2>
        <h2
          className="txt2"
          onMouseEnter={handleHover2}
          onMouseLeave={handleMouseLeave2}
        >
          43 inch
        </h2>
        <h2
          className="txt3"
          onMouseEnter={handleHover3}
          onMouseLeave={handleMouseLeave3}
        >
          50 inch
        </h2>
        <h2
          className="txt4"
          onMouseEnter={handleHover4}
          onMouseLeave={handleMouseLeave4}
        >
          55 inch
        </h2>
      </div>
    </div>
  );
};


const Information = () => {
  return (
    <div className='information'>
      <p className='info_txt'>We pride ourselves on delivering cutting-edge technology, unmatched quality, and remarkable customer service.</p>
      <p className='info_txt'>With a wide range of top-of-the-line televisions, we ensure that every customer finds their perfect match, be it for entertainment, gaming, or cinematic indulgence.</p>
      <p className='info_txt'>Discover a new level of immersive viewing with iFlick, where excellence meets affordability, and where your TV dreams become reality.</p>
    </div>
  )
}

const LastPoster = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [iflicktv9, iflicktv1, iflicktv14, iflicktv12, iflicktv11]; // Replace with your image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='last-poster'>
      <div className='tv-stand' />
      <img className='last-poster-image' src={images[currentImage]} alt='iflick_tv' />
    </div>
  );
}

export default Main;
