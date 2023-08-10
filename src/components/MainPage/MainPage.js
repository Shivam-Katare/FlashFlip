import React from 'react'
import Landing from '../FlashFlip/landing'
import TabComponent from '../ExtraPages/FeaturesList'

function MainPage() {
  return (
    <>
    <div className='fetures-container'>
      <div className="features-title-container">
        <h2 className='features-title'>Start Learing in a Simple Way</h2>
      </div>
      
      <div className="features-description-container">
        <p className='features-description'>Explore interactive flashcards
           designed to make knowledge stick. Flip through organized decks of cards crafted to boost your brainpower.
            Master key concepts across various subjects through repetition, testing and engagement. 
            Let FlashFlip empower and enrich your mind with bite-sized learning that you can do anywhere, anytime.</p>
      </div>  
      
      <div className="features-tab">
        <TabComponent />
      </div>
    </div>
    </>
  )
}

export default MainPage