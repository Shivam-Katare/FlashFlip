import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function NewFolder({ onFolderCreate, nestingLevel, onNestingChange }) {
  const [newFolderName, setNewFolderName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleCancelClick = () => {
    setIsCreating(false);
    setNewFolderName('');
  };

  const handleConfirmClick = () => {
    try {
      onFolderCreate(newFolderName);
      setIsCreating(false);
      setNewFolderName('');
    } catch (error) {
      console.error('Error creating folder:', error);
    }
  };

  return (
    <div>
      {!isCreating ? (
        <Button onClick={handleCreateClick}>Create New Folder</Button>
      ) : (
        <div>
          <TextField
            label="New Folder Name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <Button onClick={handleConfirmClick}>Confirm</Button>
          <Button onClick={handleCancelClick}>Cancel</Button>
        </div>
      )}
    </div>
  );
}

export default NewFolder;
