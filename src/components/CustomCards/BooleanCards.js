import React, { useState } from 'react';
import './BooleanCards.css'; // Import your CSS file
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { MdFlipCameraAndroid } from "react-icons/md";
function BooleanCards({ onCardSubmit, question, setQuestion, correctAnswer, setCorrectAnswer }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(''); // New state for selected answer
  const [Selectedquestion, setSelectedQuestion] = useState(''); // New state for question

  const handleCardClick = () => {
    setIsFlipped((prevFlipped) => !prevFlipped);
    console.log('Card clicked!');
  };

  const handleAddCard = () => {
    // Update correctAnswer with selected answer
    // setCorrectAnswer(selectedAnswer);
    onCardSubmit(Selectedquestion, selectedAnswer);
    handleCardClick(); // Flip the card back after adding
  };
  

  return (
    <div className={`boolean-container ${isFlipped ? 'boolean-flipped' : ''}`}>
      <div className={`boolean-card ${isFlipped ? 'boolean-flipped' : ''}`}>
        <div className="boolean-front">

        <div className="boolean-textfield-front">
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={8}
            variant="filled"
            onChange={(e) => setSelectedQuestion(e.target.value)}
          />
        </div>

        <div className="boolean-options">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setSelectedAnswer(e.target.value)}
              sx={{ justifyContent: "flex-end", alignItems: "flex-end"}}
            >
              <FormControlLabel value="True" control={<Radio />} label="True" />
              <FormControlLabel value="False" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>

            <MdFlipCameraAndroid onClick={handleCardClick} />
        </div>

        </div>

        <div className="boolean-back">
        <FormControl className='boolean-form'>
        <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            >
              <FormControlLabel value="True" control={<Radio />} label="True" />
              <FormControlLabel value="False" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>

            <div className='boolean-textfield-back'>
            <MdFlipCameraAndroid onClick={handleAddCard} />
            <Button size="large" variant="filledTonal" onClick={handleAddCard}>Add Card</Button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BooleanCards;
