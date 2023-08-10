import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import { MdFlipCameraAndroid } from 'react-icons/md';
import { createClient } from '@supabase/supabase-js';

const FetchedFreelyCard = () => {
  const [cardsData, setCardsData] = useState([]);
  const [isFlipped, setIsFlipped] = useState([]);

  const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E';
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    async function fetchCardsData() {
      const { data, error } = await supabase
        .from('cards')
        .select('question, correct_answer, image')
        .eq('card_type', 'freely');

      if (error) {
        console.error('Error fetching cards data:', error);
      } else {
        setCardsData(data);
        setIsFlipped(new Array(data.length).fill(false));
      }
    }

    fetchCardsData();
  }, []);

  const handleCardClick = (index) => {
    setIsFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="freely-created-cards-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          className={`freely-created-card ${isFlipped[index] ? 'card-flipped' : ''}`}
        >
          <div className="card-content">
            {card.image && (
              <CardMedia
                component="img"
                alt="Card Image"
                height="200"
                image={card.image}
              />
            )}
            {!card.image && (
              <Typography variant="h6" className="card-title">
                {card.question}
              </Typography>
            )}
            <IconButton
              className="flip-button"
              onClick={() => handleCardClick(index)}
            >
              <MdFlipCameraAndroid />
            </IconButton>
          </div>
          <CardContent className="card-back">
            <Typography variant="body1">{card.correct_answer}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FetchedFreelyCard;
