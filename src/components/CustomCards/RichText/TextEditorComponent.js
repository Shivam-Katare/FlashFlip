import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import RichText from './RichText';
import RichTextBack from './RichTextBack';

function TextEditorCard({ onChange }) {
  const [frontSideContent, setFrontSideContent] = useState('');
  const [backSideContent, setBackSideContent] = useState('');
  const [showFrontSide, setShowFrontSide] = useState(true);

  useEffect(() => {
    // Load content from local storage when the component mounts
    const savedFrontContent = localStorage.getItem('frontContent');
    const savedBackContent = localStorage.getItem('backContent');

    if (savedFrontContent) {
      setFrontSideContent(savedFrontContent);
    }

    if (savedBackContent) {
      setBackSideContent(savedBackContent);
    }
  }, []);

  useEffect(() => {
    // Save content to local storage whenever it changes
    localStorage.setItem('frontContent', frontSideContent);
  }, [frontSideContent]);

  useEffect(() => {
    // Save content to local storage whenever it changes
    localStorage.setItem('backContent', backSideContent);
  }, [backSideContent]);

  const handleToggleClick = () => {
    setShowFrontSide(!showFrontSide);
  };

  const handleContentChange = (content) => {
    if (showFrontSide) {
      setFrontSideContent(content);
    } else {
      setBackSideContent(content);
    }
    if (onChange) {
      onChange(content);
    }
  };

  const currentContent = showFrontSide ? frontSideContent : backSideContent;

  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardContent
        sx={{
          maxHeight: 400,
          overflowY: 'auto',
          borderRadius: '12px',
          margin: '4rem',
        }}
      >
        {showFrontSide ? (
          <>
            <Typography variant="h6" gutterBottom>
              Text Editor - Front Side
            </Typography>
            <RichText
              value={currentContent}
              onChange={handleContentChange}
            />
            <Button onClick={handleToggleClick}>Back Side</Button>
          </>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              Text Editor - Back Side
            </Typography>
            <RichTextBack
              value={currentContent}
              onChange={handleContentChange}
            />
            <Button onClick={handleToggleClick}>Front Side</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default TextEditorCard;
