import React, { useState } from 'react';
import './CardCreator.css';

const CardCreator = () => {
  const [cards, setCards] = useState([]);
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [isCardCreated, setIsCardCreated] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFrontTextChange = (event) => {
    setFrontText(event.target.value);
  };

  const handleBackTextChange = (event) => {
    setBackText(event.target.value);
  };

  const handleCreateCard = () => {
    const newCard = {
      frontText: frontText,
      backText: backText,
    };

    setCards((prevCards) => [...prevCards, newCard]);
    setIsCardCreated(true);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAddCard = () => {
    setIsCardCreated(false);
    setFrontText('');
    setBackText('');
  };

  return (
    <div className="card-creator">
      {cards.map((card, index) => (
        <div key={index} className={`card-preview ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          <div className="card">
            <div className="front">
              <p>{card.frontText}</p>
            </div>
            <div className="back">
              <p>{card.backText}</p>
            </div>
          </div>
        </div>
      ))}
      {isCardCreated ? (
        <div className="card-editor">
          <div className="front-box">
            <h3>Front Side</h3>
            <textarea
              placeholder="Enter text for the front side..."
              value={frontText}
              onChange={handleFrontTextChange}
            />
          </div>
          <div className="back-box">
            <h3>Back Side</h3>
            <textarea
              placeholder="Enter text for the back side..."
              value={backText}
              onChange={handleBackTextChange}
            />
          </div>
          <button onClick={handleCreateCard}>Done</button>
        </div>
      ) : (
        <button className="add-card-button" onClick={handleAddCard}>
          Click to Add Card
        </button>
      )}
    </div>
  );
};

export default CardCreator;
