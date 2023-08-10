import React from 'react';
import './CustomCards.css'; // Import your CSS file

function CustomCards({frontText, backText, imageUrl}) {
  return (
    <>
      <h4>Horizontal Flip</h4>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >
          <h1 className="text-shadow">{frontText}</h1>
        </div>
        <div className="back">
          <h2>{backText}</h2>
          <p>
            Good tools make application development quicker and easier to maintain than if you did everything by hand.
          </p>
        </div>
      </div>

      <br />
      <br />

      {/* vertical */}
      <h4>Vertical Flip</h4>
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >
          <h1 className="text-shadow">{frontText}</h1>
        </div>
        <div className="back">
          <h2>{backText}</h2>
          <p>
            Good tools make application development quicker and easier to maintain than if you did everything by hand.
          </p>
        </div>
      </div>
    </>
  );
}

export default CustomCards;
