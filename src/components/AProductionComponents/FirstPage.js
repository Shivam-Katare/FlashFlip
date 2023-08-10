import React, { useEffect } from 'react'
import './FirstPage.css'
import FirstPageCard from './FirstPageCard'
import VanillaTilt from 'vanilla-tilt';
import TabComponent from '../ExtraPages/FeaturesList';
import MainPage from '../MainPage/MainPage';
import Tilt from 'react-parallax-tilt';
import FeaturesPageListOne from './FeaturesPageList/FeaturesPageListOne';
import FinalLandingPage from '../Final/FinalLandingPage';

function FirstPage() {
  useEffect(() => {
    VanillaTilt.init(document.querySelector('.tilt-image'), {
      max: 50,
      speed: 400,
      perspective: 5000,
    });
  }, []);
  return (
    <>
    
    {/* <div className='firstPage-container'>
      <div className='firstPage-content-container'>
      <h2 className='firstPage-content-heading-one'>Learn. Flip. </h2> 
      <h3 className='firstPage-content-heading-two'>Master!</h3>
      <p className='firstPage-content-para'>Welcome to FlahCards, where learning becomes an exciting journey! Explore interactive flashcards
         designed to enhance your knowledge effortlessly. Embrace a fun and effective way to master key
          concepts across various subjects. 
        Unleash your true potential with FlahCards and spark a passion for continuous learning!</p>
      <a href="/new" className='firstPage-content-button'>Explore</a>
      </div>

      <div className='firstPage-card tilt-image'
  data-tilt-max="10"
  data-tilt-speed="100"
  data-tilt-perspective="100"
  data-tilt-startX="0" data-tilt-startY="-0" data-tilt-reset-to-start="true"
  >
    
        <FirstPageCard />
      </div>
    </div> */}
    <FinalLandingPage />
    <MainPage />
    {/* <FeaturesPageListOne /> */}
    </>
  )
}

export default FirstPage