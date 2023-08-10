import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import BooleanCards from "../CustomCards/BooleanCards";
import TextEditorCard from "../CustomCards/RichText/TextEditorComponent";
import { Backdrop, Box, Fade, FormControl, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "./CodeCards.css";
import TransitionsModal from "../CustomCards/CustomCardsModal/CustomModal";
import CreatedCards from "../CreatedCards/CreatedCards";
import FreelyCreatedCard from "../CreatedCards/FreelyCreatedCards";
import FetchedFreelyCard from "../CreatedCards/FetchedFreelyCard";

const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E'; // Replace with your Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '14rem',
    border: '2px solid black',
    borderRadius: '8px',
    '& .MuiSelect-root': {
      '&:focus': {
        borderColor: 'black',
      },
    },
  },
}));

function CardCreationForm({ currentFolder }) {
  const classes = useStyles();
  const [cardType, setCardType] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCardCreation = async (newQuestion, newCorrectAnswer) => {
    if (cardType === '') return;

    const cardData = {
      folder_name: currentFolder,
      card_type: cardType,
      question: newQuestion,
      options: [], // For multiple-choice, replace this with the actual array of options
      correct_answer: newCorrectAnswer,
    };

    // Save cardData to the 'cards' table in the database
    const { data, error } = await supabase.from('cards').insert([cardData]);

    if (error) {
      console.error('Error creating card:', error);
    } else {
      // Clear form fields after successful card creation
      setCardType('');
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
  };
  

  return (
    <div>

      <div className="card-creation-heading-container">
        <h2 className="card-creation-heading">Create a Card of Your Choice</h2>
      </div>

      <div className="card-creation-create-form-container">

      <div className="card-creation-options-container">
      <FormControl className={classes.formControl}>
        <InputLabel>Choose Card Type</InputLabel>
        <Select
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
        >
          <MenuItem value="">Choose Card Type</MenuItem>
          <MenuItem value="multiple_choice">Multiple Choice</MenuItem>
          <MenuItem value="true_false" onClick={handleOpen}>True/False</MenuItem>
          <MenuItem value="freely" onClick={handleOpen}>Freely</MenuItem>
        </Select>
      </FormControl>
      </div>


      <div className="card-creation-forms-container">
        {cardType === 'true_false' && (
        // <BooleanCards onCardSubmit={handleCardCreation} onClick={handleOpen} />

        <>
         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <BooleanCards onCardSubmit={handleCardCreation} />
          </Box>
        </Fade>
      </Modal>
        
        </>
      )}
      {cardType === 'freely' && (
        <>
        <Modal
       aria-labelledby="transition-modal-title"
       aria-describedby="transition-modal-description"
       open={open}
       onClose={handleClose}
       closeAfterTransition
       slots={{ backdrop: Backdrop }}
       slotProps={{
         backdrop: {
           timeout: 500,
         },
       }}
     >
       <Fade in={open}>
         <Box sx={style}>
          {/* <TextEditorCard /> */}
          <FreelyCreatedCard card_type={cardType} />
         </Box>
       </Fade>
     </Modal>
       
       </>
      )}
      </div>

      </div>

      <div className="card-creation-created-cards-container">
       <CreatedCards currentFolder={currentFolder} />
       <FetchedFreelyCard />
      </div>
    </div>
  );
}

export default CardCreationForm;
