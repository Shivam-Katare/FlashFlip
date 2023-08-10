import React from 'react'
import FeatureHighlightCard from './FeaturesEverything/FeaturesHighlightCard/FeatureHighlightCard'
import './FeaturesHighlightPage.css';
import FeaturesQuizzesCard from './FeaturesEverything/FeaturesQuizzesCard/FeaturesQuizzesCard';

function FeaturesHighlightPage() {
  return (
    <>
    <div className='features-highlight-container'>
      <div className='features-highlight-header'>
        <h1 style={{lineHeight: "12rem"}}>Accelerated Learning Made Easy</h1>
      </div>

      <div className="features-highlight-header-card">
        <FeatureHighlightCard />
      </div>

      <FeaturesQuizzesCard />

    </div>
    </>
  )
}

export default FeaturesHighlightPage