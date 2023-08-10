import React from 'react';
import './FeatureHighlightCard.css';
import Logo from "./FeatureHero.png";

function FeatureHighlightCard() {
  return (
    <>
    <img className='feature-logo-image' src={Logo} alt='Feature Hero' />
    </>
  )
}

export default FeatureHighlightCard