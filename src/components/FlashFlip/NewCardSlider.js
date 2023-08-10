import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="card-slider">
      <AnimatePresence initial={true} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit= "initial"
          transition={{ duration: 0.5 }}
          className="new-card-container"
        >
          <div className='front-side-new-card'>
            <div className="new-card-flip-button">
              Flip Card
            </div>

            <div className="new-card-question">
              <h5>{cards[currentIndex].question}</h5>
            </div>
          </div>

          <div className="new-card-options">
            {cards[currentIndex].options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </div>
          <div className='back-side-new-card'>
            Back
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="slider-buttons">
        <button onClick={handlePrevClick} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={currentIndex === cards.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSlider;

