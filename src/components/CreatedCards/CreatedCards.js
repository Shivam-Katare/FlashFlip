import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { createClient } from '@supabase/supabase-js';
import React, { useState, useEffect } from 'react'
import { MdEdit, MdFlipCameraAndroid } from 'react-icons/md'

function CreatedCards({currentFolder}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState([]); // New state for selected answer
  const [Selectedquestion, setSelectedQuestion] = useState([]); // New state for question
  const [cardsData, setCardsData] = useState([]);
  const [isEditing, setIsEditing] = useState([]); // New state for editing status
  const [userId, setUserId] = useState(null); // Store the authenticated user's ID

  const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E'; // Replace with your Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);

useEffect(() => {
  getUserData();
  fetchCardsData(); // Fetch cards data after fetching user data
}, []);

useEffect(() => {
  getUserData();
}, []);

useEffect(() => {
  console.log('userId:', userId); // Log the user ID after fetching user data
  fetchCardsData();
}, [userId]); // Fetch cards data when userId changes

const getUserData = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      console.log('Fetched user data:', user); // Log user data
      setUserId(user.id);
    }
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
};

const fetchCardsData = async () => {
  if (!userId || !currentFolder) {
    console.log('No user ID or current folder found. Exiting fetchCardsData.'); // Log if no user ID or folder name
    return;
  }

  const { data, error } = await supabase
    .from('cards')
    .select('id, question, correct_answer')
    .eq('user_id', userId)
    .eq('folder_name', currentFolder) // Filter based on the current folder name
    .eq('card_type', 'true_false');

  if (error) {
    console.error('Error fetching cards data:', error);
  } else {
    console.log('Fetched cards data:', data); // Log fetched cards data
    setCardsData(data);
    setSelectedAnswer(new Array(data.length).fill(false));
    setIsEditing(new Array(data.length).fill(false));
  }
};



const handleCardClick = (index) => {
  setSelectedAnswer((prevAnswers) => {
    const newAnswers = [...prevAnswers];
    newAnswers[index] = !newAnswers[index];
    setIsFlipped((prevFlipped) => !prevFlipped);
    return newAnswers;
  });
};

const handleCardEdit = (index) => {
  setIsEditing((prevEditing) => {
    const newEditing = [...prevEditing];
    newEditing[index] = true;
    return newEditing;
  });
}

const handleEditSave = async (index) => {
  const updatedQuestion = cardsData[index].question;
  const cardId = cardsData[index].id;

  console.log('Updating question:', updatedQuestion);
  console.log('Card ID:', cardId);

  const { data, error } = await supabase
    .from('cards')
    .update({ question: updatedQuestion })
    .eq('id', cardId)
    .select();

  if (error) {
    console.error('Error updating question:', error);
  } else {
    console.log('Question updated successfully:', data);
  }

  setIsEditing((prevEditing) => {
    const newEditing = [...prevEditing];
    newEditing[index] = false;
    return newEditing;
  });
};

  const handleAddCard = () => {
    // Update correctAnswer with selected answer
    // setCorrectAnswer(selectedAnswer);
    // onCardSubmit(Selectedquestion, selectedAnswer);
    handleCardClick(); // Flip the card back after adding
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleEditSave(index);
    }
  };

  return (
    <>

{cardsData.map((card, index) => (
        <div
          key={index}
          className={`boolean-container created-card-container ${
            selectedAnswer[index] ? 'boolean-flipped' : ''
          }`}
        >
          <div className={`boolean-card ${selectedAnswer[index] ? 'boolean-flipped' : ''}`}>
            <div className="boolean-front">
              <div className="created-textfield-front">
              {isEditing[index] ? (
                  <input
                    type="text"
                    value={card.question}
                    onChange={(e) => {
                      const newCardsData = [...cardsData];
                      newCardsData[index].question = e.target.value;
                      setCardsData(newCardsData);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ) : (
                  <h4 className="created-cards-title">{card.question}</h4>
                )}
              </div>

              <div className="boolean-options">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="True" control={<Radio />} label="True" />
                    <FormControlLabel value="False" control={<Radio />} label="False" />
                  </RadioGroup>
                </FormControl>
                {isEditing[index] ? (
                  <MdFlipCameraAndroid style={{fontSize: "30px"}} onClick={() => handleEditSave(index)} />
                ) : (
                  <MdFlipCameraAndroid style={{fontSize: "30px"}} onClick={() => handleCardClick(index)} />
                )}
                <MdEdit style={{fontSize: "30px"}} onClick={() => handleCardEdit(index)} />
              </div>
            </div>


            <div className="created-card-back">
              <h4 className="created-cards-back-title">{card.correct_answer}</h4>

              <div className="created-card-textfield-back">
                <MdFlipCameraAndroid onClick={() => handleCardClick(index)} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CreatedCards