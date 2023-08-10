import React, { useState, useEffect } from 'react';
import './NewLanding.css';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import Button from '@mui/material/Button';

import "react-multi-carousel/lib/styles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './Swiper.css';

import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import CardSlider from './NewCardSlider';
import NewCodeCards from '../Final/CodeLearningCards/NewCodeCards';
import supabaseCredentials from '../../supabaseConfig';

const language = ['HTML', 'CSS', 'JS'];
const level = ['Beginner', 'Intermediate', 'Advanced'];
const cardNumbers = [5, 10, 15, 25, 30];

function NewLanding() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCardNumber, setSelectedCardNumber] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [points, setPoints] = useState(0); // State for keeping track of points
  const [clockTime, setClockTime] = useState(0);
  const [clockRunning, setClockRunning] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // State for tracking the index of the currently flipped card
  const [answeredCurrentQuestion, setAnsweredCurrentQuestion] = useState(false);


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setSelectedCardNumber(event.target.value);
  };

  const handleOptionSelection = (index, selectedOption) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = selectedOption;
    setSelectedOptions(updatedOptions);

    // Check if the selected option is equal to the correct answer
    if (selectedOption === cards[index].correct_answer) {
      setPoints((prevPoints) => prevPoints + 1); // Increase points if correct
    }

    // Set the flag to true to indicate the user answered the question
    setAnsweredCurrentQuestion(true);
  };

  useEffect(() => {
    // Initialize flipped state for each card
    setFlippedCards(Array(cards.length).fill(false));
  }, [cards]);

  const handleFlipCard = () => {
    // Toggle the flipped state of the current card
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[currentCardIndex] = !updatedFlippedCards[currentCardIndex];
    setFlippedCards(updatedFlippedCards);
  };

  const fetchCards = async () => {
    if (selectedCategory && selectedLevel && selectedCardNumber) {
      const { data, error } = await supabaseCredentials
        .from('flashcards_table')
        .select('*')
        .eq('language', selectedCategory)
        .eq('level', selectedLevel)
        .limit(selectedCardNumber);

      console.log('Supabase API Response:', data, error);

      // Start the clock when cards are fetched
      setClockTime(0);
      setClockRunning(true);

      if (error) {
        console.error('Error fetching cards:', error);
      } else {
        const formattedData = data.map((card) => ({
          ...card,
          options: [card.option1, card.option2, card.option3, card.option4],
        }));
        setCards(formattedData);
        console.log(formattedData);
      }
    }
  };

  // Function to update the clock every second
  const updateClock = () => {
    if (clockRunning) {
      setClockTime((prevTime) => prevTime + 1);
    }
  };

  const isButtonEnabled = selectedOptions.every((option) => option !== '');
  useEffect(() => {
    // Start the clock timer
    const timer = setInterval(updateClock, 1000);

    // Cleanup: Stop the clock timer when the component is unmounted or when the clock stops (user answered all questions)
    return () => {
      clearInterval(timer);
    };
  }, [clockRunning]);

  // Check if the user has given answers to all the questions
  useEffect(() => {
    if (selectedOptions.length === cards.length) {
      // Stop the clock when user answered all questions
      setClockRunning(false);
    }
  }, [selectedOptions, cards]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <div className='everything-container'>

      <div className='header-container'>
        <header className='header'>CodeCards</header>
      </div>
      <div className="dropdowns">
        <FormControl variant="outlined" required sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Category</InputLabel>
          <Select value={selectedCategory} onChange={handleCategoryChange} label="Select Category">
            <MenuItem value="" sx={{ width: "150px", borderRadius: "12px", fontFamily: "fantasy" }}>
              <em>None</em>
            </MenuItem>
            {language.map((category) => (
              <MenuItem key={category} value={category} sx={{ width: "150px", borderRadius: "12px", fontFamily: "fantasy" }}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedCategory && (
          <FormControl variant="outlined" required sx={{ m: 1, minWidth: 180 }}>
            <InputLabel>Select Level</InputLabel>
            <Select value={selectedLevel} onChange={handleLevelChange} label="Select Level">
              <MenuItem value="" sx={{ width: "150px", borderRadius: "12px", fontFamily: "fantasy" }}>
                <em>None</em>
              </MenuItem>
              {level.map((level) => (
                <MenuItem key={level} value={level} sx={{ width: "150px", borderRadius: "12px", fontFamily: "fantasy" }}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {selectedLevel && (
          <FormControl required sx={{ m: 1, minWidth: 180 }}>
            <InputLabel>Select Number of Cards</InputLabel>
            <Select value={selectedCardNumber} onChange={handleCardNumberChange} label="Select Number of Cards" sx={{ color: "black", borderColor: "white" }}>
              <MenuItem value="" sx={{ width: "150px", borderRadius: "12px", fontFamily: "fantasy" }}>
                <em>None</em>
              </MenuItem>
              {cardNumbers.map((number) => (
                <MenuItem key={number} value={number} sx={{ width: "150px", borderRadius: "12px", fontFamily: "fantasy" }}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>

      {selectedCardNumber && (
        <Button variant="contained" onClick={fetchCards} sx={{ width: "150px", borderRadius: "12px", fontFamily: "fantasy" }}>
          Generate Cards
        </Button>
      )}

      <div className="timer-pointer-container">
        <div className="clock-container">
          <p className='clock-time'>{formatTime(clockTime)}</p>
        </div>

        <div className="points-container">
          <p>Points: {points}</p>
        </div>
      </div>

      <div className="cards-container">
        {cards.map((card, index) => (
          <NewCodeCards
            key={index}
            question={card.question}
            options={card.options}
          />
        ))}   
        </div>
    </div>
  );
}

export default NewLanding;
