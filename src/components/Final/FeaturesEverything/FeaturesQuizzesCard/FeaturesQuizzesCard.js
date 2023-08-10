import React from 'react'
import VideoPlayer from './VideoPlayer'

function FeaturesQuizzesCard() {
  return (
    <>
    <div className='features-quizzes-card-container'>

      <div className='features-quizzes-card-header'>
        <h1>Immersive Quizzes</h1>
      </div>

      <div className='features-quizzes-card-body'>
        <VideoPlayer /> 
      </div>
    </div>
    </>
  )
}

export default FeaturesQuizzesCard