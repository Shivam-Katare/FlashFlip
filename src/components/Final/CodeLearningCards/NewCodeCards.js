import { Button, FormControl, FormControlLabel, Radio, RadioGroup, RadioButton } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { MdFlipCameraAndroid } from 'react-icons/md'

function NewCodeCards(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(''); // New state for selected answer
  const [Selectedquestion, setSelectedQuestion] = useState(''); // New state for question

  const handleCardClick = () => {
    setIsFlipped((prevFlipped) => !prevFlipped);
    console.log('Card clicked!');
  };

  return (
    <>
      <div className={`boolean-container ${isFlipped ? 'boolean-flipped' : ''}`}>
        <div className={`boolean-card ${isFlipped ? 'boolean-flipped' : ''}`}>
          <div className="boolean-front">

            <div className='boolean-textfield-front'>
            <h3>{props.question}</h3>
            </div>

            <div className="boolean-options">
              <FormControl>
                <RadioGroup row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value="yes"
                  sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                  {props.options.map((option, index) => (
                    <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                  ))}
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
              value="Yes"
            >
              <FormControlLabel value="True" control={<Radio />} label="True" />
              <FormControlLabel value="False" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>

            <div className='boolean-textfield-back'>
            <MdFlipCameraAndroid onClick={handleCardClick} />
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default NewCodeCards