import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import React from 'react';
import Landing from '../FlashFlip/landing';
import G from '../FlashFlip/d.png';
import './FeatureOne.css';

function FeatureOne() {
  useEffect(() => {
    VanillaTilt.init(document.querySelector('.tilt-image'), {
      max: 50,
      speed: 400,
      perspective: 500,
    });
  }, []);

  return (
    <>
      {/* Interactive FlashCards */}
      <div
        className='feature-one-container'
      >
        <div className='feature-one-image tilt-image'         data-tilt
        data-tilt-max='50'
        data-tilt-speed='400'
        data-tilt-perspective='500'  >
          <img src={G} alt='Interactive FlashCards' />
        </div>

        <div className='feature-one-text'>Interactive Cards</div>
      </div>

      <Landing />
    </>
  );
}

export default FeatureOne;
