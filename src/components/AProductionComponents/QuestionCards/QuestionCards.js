import React, { useState } from 'react';
import './QuestionCards.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function QuestionCards() {
  const [isFront, setIsFront] = useState(true);
  const [questionType, setQuestionType] = useState('Multiple Choice');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');

  const handleTurnCard = () => {
    setIsFront(!isFront);
  };

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
  };

  return (
    <div className='question-card-container'>
      <div className='question-card-header'>
        <FormControl variant='outlined' className='question-card-setting'>
          <InputLabel id='question-type-label'>Settings</InputLabel>
          <Select
            labelId='question-type-label'
            id='question-type'
            value={questionType}
            onChange={handleQuestionTypeChange}
            label='Question Type'
          >
            <MenuItem value='Multiple Choice'>Multiple Choice</MenuItem>
            <MenuItem value='True/False'>True/False</MenuItem>
            <MenuItem value='FlashCards'>FlashCards</MenuItem>
          </Select>
        </FormControl>
        <Button className='question-card-turn' onClick={handleTurnCard}>
          Turn Card
        </Button>
      </div>

      <div className='question-card-text-body'>
        {isFront ? (
          <TextField
            type='text'
            className='question-card-text'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder='Enter Question'
          />
        ) : (
          <>
            {questionType === 'Multiple Choice' && (
              <>
                <TextField
                  type='text'
                  className='question-card-option'
                  value={option1}
                  onChange={(e) => setOption1(e.target.value)}
                  placeholder='Option 1'
                />
                <TextField
                  type='text'
                  className='question-card-option'
                  value={option2}
                  onChange={(e) => setOption2(e.target.value)}
                  placeholder='Option 2'
                />
                <TextField
                  type='text'
                  className='question-card-option'
                  value={option3}
                  onChange={(e) => setOption3(e.target.value)}
                  placeholder='Option 3'
                />
                <TextField
                  type='text'
                  className='question-card-option'
                  value={option4}
                  onChange={(e) => setOption4(e.target.value)}
                  placeholder='Option 4'
                />
              </>
            )}
            {questionType === 'True/False' && (
              <>
                <TextField
                  type='text'
                  className='question-card-option'
                  value='True'
                  disabled
                />
                <TextField
                  type='text'
                  className='question-card-option'
                  value='False'
                  disabled
                />
              </>
            )}
            {questionType === 'FlashCards' && (
              <TextField
                type='text'
                className='question-card-flashcard'
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder='Enter Answer'
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionCards;
