import React, { useState } from "react";
import { Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import "./WebDevCards.css";
import { motion, AnimatePresence } from "framer-motion";

const cardData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Mark",
      "Typer Text Markup Language",
      "Hyper Text MaSkup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Mark",
      "Typer Text Markup Language",
      "Hyper Text MaSkup Language",
    ],
    answer: "Hyper Text Markup Language",
  },{
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Mark",
      "Typer Text Markup Language",
      "Hyper Text MaSkup Language",
    ],
    answer: "Hyper Text Markup Language",
  },{
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Mark",
      "Typer Text Markup Language",
      "Hyper Text MaSkup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  // Add more card data here
];

const WebDevCard = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleCheckAnswer = (selectedAnswer) => {
    const correctAnswer = cardData[cardIndex].answer;
    setIsAnswerCorrect(selectedAnswer === correctAnswer);
  };

  const handleNextCard = () => {
    setIsAnswerCorrect(false);
    setIsFlipped(false);
    setCardIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <AnimatePresence>
        {!isFlipped && (
          <motion.div
            key={cardIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="content"
          >
            <div className="front">
              <Typography variant="h6" component="h2">
                {cardData[cardIndex].question}
              </Typography>
              <RadioGroup>
                {cardData[cardIndex].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                    onClick={() => handleCheckAnswer(option)}
                  />
                ))}
              </RadioGroup>
              <Button className="check-answer-button" onClick={() => setIsFlipped(true)}>
                Check Answer
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="back"
          onClick={() => setIsFlipped(false)}
        >
          <Typography variant="h6" component="h2">
            {cardData[cardIndex].answer}
          </Typography>
          {isAnswerCorrect ? (
            <Button className="next-button" onClick={handleNextCard}>
              Next
            </Button>
          ) : (
            <Button className="try-again-button" onClick={() => setIsFlipped(false)}>
              Try Again
            </Button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default WebDevCard;
