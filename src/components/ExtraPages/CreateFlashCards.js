import React, { useState } from 'react';
import './CreateFlashCards.css';
import { MdInput } from "react-icons/md";
import { Link } from "react-router-dom";
import CustomCards from "./CustomCards";
import { TextField, Button } from '@mui/material';

function CreateFlashcards() {
  const [folderName, setFolderName] = useState('');
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [currentFolderName, setCurrentFolderName] = useState('');

  // Additional state for spaced repetition
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  // Spaced repetition algorithm (basic implementation)
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % folders[currentFolder].cards.length);
    setShowBack(false);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + folders[currentFolder].cards.length) % folders[currentFolder].cards.length);
    setShowBack(false);
  };

  const handleShowBack = () => {
    setShowBack(true);
  };

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleCreateFolder = () => {
    if (folderName.trim() !== '') {
      const newFolder = {
        name: folderName.trim(),
        cards: [],
      };
      setFolders([...folders, newFolder]);
      setFolderName('');
      setCurrentFolderName(newFolder.name); // Set the current folder name
    }
  };
  
  const handleCreateCard = () => {
    if (frontText.trim() !== '' && backText.trim() !== '' && selectedImage !== null && currentFolder !== null) {
      const newCard = {
        front: frontText.trim(),
        back: backText.trim(),
        imageUrl: imageUrl,
      };
      const updatedFolders = [...folders];
      updatedFolders[currentFolder].cards.push(newCard);
      setFolders(updatedFolders);
      setFrontText('');
      setBackText('');
      setSelectedImage(null); // Reset the selected image after creating the card
      setImageUrl(''); // Reset the imageUrl state
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    }
    reader.readAsDataURL(file);
  };

  return (
    <div className="create-flashcards-container">
      {currentFolder === null ? (
        <>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" value={folderName}
            onChange={handleFolderNameChange} />
          <Button className="create-button" onClick={handleCreateFolder}>
            Create Folder
          </Button>
          {folders.map((folder, index) => (
            <div key={index} className="folder">
              <h3>
                <Link to={`/${folder.name}`}>{folder.name} Card</Link>
              </h3>
              <Button
                className="create-card-button"
                onClick={() => setCurrentFolder(index)}
              >
                Create Card <MdInput />
              </Button>
            </div>
          ))}
        </>
      ) : (
        <div className="create-flashcards-form">
          <div>
            <input
              className="front-text-input"
              type="text"
              value={frontText}
              onChange={(e) => setFrontText(e.target.value)}
              placeholder="Front Side Text"
            />
            <input
              className="back-text-input"
              type="text"
              value={backText}
              onChange={(e) => setBackText(e.target.value)}
              placeholder="Back Side Text"
            />
            <Button className="done-button" onClick={handleCreateCard}>
              Done
            </Button>
            <Button className="cancel-button" onClick={() => setCurrentFolder(null)}>
              Cancel
            </Button>

            <input type='file' onChange={handleImageSelect} accept='image/*' />

            {/* Display newly created cards */}
            <div className="newly-created-cards">
              <CustomCards frontText={folders[currentFolder]?.cards[currentCardIndex]?.front} backText={folders[currentFolder]?.cards[currentCardIndex]?.back} imageUrl={folders[currentFolder]?.cards[currentCardIndex]?.imageUrl} showBack={showBack} onShowBack={handleShowBack} />
            </div>

            {/* Navigation buttons for spaced repetition */}
            <div className="navigation-buttons">
              <Button onClick={handlePrevCard}>Previous</Button>
              <Button onClick={handleNextCard}>Next</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateFlashcards;

