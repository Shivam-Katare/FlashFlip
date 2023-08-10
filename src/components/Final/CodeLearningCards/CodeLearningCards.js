import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { MdOutlineFlipCameraAndroid } from "react-icons/md";

const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E';
const supabase = createClient(supabaseUrl, supabaseKey);

const language = ['HTML', 'CSS', 'JS'];
const level = ['Beginner', 'Intermediate', 'Advanced'];
const cardNumbers = [5, 10, 15, 25, 30];

function CodeLearningCards() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCardNumber, setSelectedCardNumber] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState([]); // New state for selected answer

  useEffect(() => {
    fetchCards();
  }, [selectedCategory, selectedLevel, selectedCardNumber]);

  const handleCardClick = (index) => {
    setSelectedAnswer((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = !newAnswers[index];
      return newAnswers;
    });
  };

  const fetchCards = async () => {
    if (selectedCategory && selectedLevel && selectedCardNumber) {
      const { data, error } = await supabase
        .from('flashcards_table')
        .select('*')
        .eq('language', selectedCategory)
        .eq('level', selectedLevel)
        .limit(selectedCardNumber);

      if (error) {
        console.error('Error fetching cards:', error);
      } else {
        const formattedData = data.map((card) => ({
          ...card,
          options: [card.option1, card.option2, card.option3, card.option4],
        }));
        setCards(formattedData);
      }
    }
  };

  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`boolean-container created-card-container ${
            selectedAnswer[index] ? 'boolean-flipped' : ''
          }`}
        >
          <div className={`boolean-card ${selectedAnswer[index] ? 'boolean-flipped' : ''}`}>
            <div className="boolean-front">
              <div className="created-textfield-front">
                <h4 className="created-cards-title">{card.question}</h4>
              </div>
              <div className="boolean-options">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {card.options.map((option, optionIndex) => (
                      <FormControlLabel
                        key={optionIndex}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <MdOutlineFlipCameraAndroid 
                  style={{ fontSize: '30px' }}
                  onClick={() => handleCardClick(index)}
                />
              </div>
            </div>
            <div className="created-card-back">
              <h4 className="created-cards-back-title">{card.correct_answer}</h4>
              <div className="created-card-textfield-back">
                <MdOutlineFlipCameraAndroid  onClick={() => handleCardClick(index)} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CodeLearningCards;
