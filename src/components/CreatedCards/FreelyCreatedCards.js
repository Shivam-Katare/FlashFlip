import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createClient } from '@supabase/supabase-js';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 500,
    margin: '0 auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  media: {
    height: 200,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function FreelyCreatedCard({card_type}) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemoveImage = () => {
    setImage('');
  };

  const handleAddCard = async () => {
    const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Handle adding card logic
    const { data, error } = await supabase.from('cards').insert([
      {
        question: title,
        correct_answer: description,
        image: image,
        card_type: card_type,
      },
    ]);

    if (error) {
      console.error('Error adding card:', error);
    } else {
      console.log('Card added successfully:', data);
      setTitle('');
      setDescription('');
      setImage('');
    }
  };

  return (
    <Card className={classes.card}>
      {image && (
        <>
          <CardMedia className={classes.media} image={image} />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRemoveImage}
            sx={{ marginBottom: '10px' }}
          >
            Remove Image
          </Button>
        </>
      )}
      <CardContent className={classes.content}>
        {!image && <Typography variant="h6">{title}</Typography>}
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={handleTitleChange}
          className={!image ? classes.titleField : ''}
          sx={{ marginBottom: '10px' }}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          sx={{ marginBottom: '10px' }}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <Button
            variant="contained"
            component="span"
            className={classes.addButton}
            sx={{ marginBottom: '10px' }}
          >
            Upload Image
          </Button>
        </label>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddCard}
          className={classes.addButton}
          sx={{ marginBottom: '10px' }}
          disabled={!title.trim() || !description.trim()} 
        >
          Add Card
        </Button>
      </CardContent>
    </Card>
  );
}

export default FreelyCreatedCard;
