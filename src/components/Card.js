import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ question, options, answer, onAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleCardFlip = () => {
    if (selectedOption !== '') {
      setIsFlipped(!isFlipped);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onAnswer(event.target.value);
  };

  useEffect(() => {
    setSelectedOption('');
  }, [question]);

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="front">
        <h2>{question}</h2>
        <form>
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </form>
      </div>
      <div className="back">
        <h2>Answer:</h2>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Card;
