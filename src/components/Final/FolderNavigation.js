import React from 'react';

function FolderNavigation({ currentFolder }) {
  return (
    <div>
      {/* Display current folder name */}
      {currentFolder && <h2>Current Folder: {currentFolder}</h2>}
      {/* Button to create new folder or card */}
      <button>Create New Folder</button>
      <button>Create New Card</button>
    </div>
  );
}

export default FolderNavigation;
