import React from 'react';
import './FeaturesPageListOne.css';
import SubjectSideCard from '../SideCards/SubjectSideCard';

function FeaturesPageListOne() {
  return (
    <div className='features-page-list-one-container'>

      <div className="features-page-list-one-card-container">
        <SubjectSideCard />
      </div>

      <div className='features-page-list-one-content-container'>

        <h2 className='features-page-list-one-content-heading-two'>
        Climb the ladder of learning
        </h2>

        <h3 className='features-page-list-one-content-heading-two'>
        with adaptive flashcards.
        </h3>

        <p className='features-page-list-one-content-para'>
        Start with basic flashcards, advance to more complex concepts as you master each level. Our smart flashcard engine adjusts difficulty based on your performance, 
        offering the right challenge at the right time
        </p>

        <button className='features-page-list-one-content-button'>
         Get Started
        </button>

      </div>
    </div>
  )
}

export default FeaturesPageListOne