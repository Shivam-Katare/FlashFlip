import React from 'react'
import CardSlider from './NewCardSlider'

function Speed() {
  const newCards = [
    {
      question: 'Question 1?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    {
      question: 'Question 2?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    // Add more cards as needed
  ];
  return (
    <CardSlider cards={newCards} />
  )
}

export default Speed;