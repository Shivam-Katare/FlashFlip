import React, { useState } from 'react';
import FolderBreadcrumb from './FolderBreadcrumb';
import { Button } from '@mui/material';
import NewFolder from './NewFolder';

function NestedFoldersPage() {
  const [folders, setFolders] = useState(['CurrentHome']);
  const [showNestedFolder, setShowNestedFolder] = useState(false);
  const [currentNestedFolder, setCurrentNestedFolder] = useState('');

  const handleFolderCreate = (newFolderName) => {
    setFolders([...folders, newFolderName]);
  };

  const handleBreadcrumbClick = (index) => {
    if (index === folders.length - 1) {
      setShowNestedFolder(false);
      setCurrentNestedFolder('');
    } else {
      setShowNestedFolder(true);
      setCurrentNestedFolder(folders[index]);
      // Remove folders ahead of the clicked folder
      setFolders(folders.slice(0, index + 1));
    }
  };

  return (
    <div>
      <FolderBreadcrumb
        folders={folders}
        onBreadcrumbClick={handleBreadcrumbClick}
      />

      {!showNestedFolder && (
        <NewFolder onFolderCreate={handleFolderCreate} />
      )}

      {showNestedFolder && (
        <div>
          <Button onClick={() => setShowNestedFolder(false)}>Go Back</Button>
          {/* Render content for the nested folder */}
          {/* For example: */}
          <h1>Content of {currentNestedFolder}</h1>
        </div>
      )}
    </div>
  );
}

export default NestedFoldersPage;
