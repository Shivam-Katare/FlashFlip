import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Flashcard.css';

const Flashcard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [answeredCount, setAnsweredCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setAnsweredCount(0);
    setTimer(0);
  };

  const handleAnswer = () => {
    setAnsweredCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    let interval = null;
    if (answeredCount < 2) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [answeredCount]);
  
  const flashcards = {
    HTML: [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Text Machine Learning'],
        answer: 'Hyper Text Markup Language',
      },
      {
        question: 'What is the correct HTML element for the largest heading?',
        options: ['h1', 'heading', 'head', 'h6'],
        answer: 'h1',
      },
    ],
    CSS: [
      {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets'],
        answer: 'Cascading Style Sheets',
      },
      {
        question: 'Which property is used to change the background color of an element?',
        options: ['color', 'background-color', 'background-image', 'background-style'],
        answer: 'background-color',
      },
    ],
    JS: [
      {
        question: 'What does JS stand for?',
        options: ['JavaScript', 'JavaStyle', 'JustScript', 'JumboScript'],
        answer: 'JavaScript',
      },
      {
        question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
        options: ['last()', 'push()', 'put()', 'pop()'],
        answer: 'push()',
      },
    ],
  };
  return (
    <div className="flashcard-container">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JS">JS</option>
      </select>
      <p>Timer: {timer} seconds</p>
      {selectedCategory &&
        flashcards[selectedCategory].map((flashcard, index) => (
          <Card
            key={index}
            question={flashcard.question}
            options={flashcard.options}
            answer={flashcard.answer}
            onAnswer={handleAnswer}
          />
        ))}
    </div>
  );
};

export default Flashcard;
