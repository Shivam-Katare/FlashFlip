import React, { useState } from 'react';
import CreateFolder from './CreateFolder';
import FolderNavigation from './FolderNavigation';
import CardCreationForm from './CardCreationForm';

function FinalCreateCardsPage() {
  const [currentFolder, setCurrentFolder] = useState(null);

  return (
    <div>
      <CreateFolder setCurrentFolder={setCurrentFolder} />
      <FolderNavigation currentFolder={currentFolder} />
      <CardCreationForm currentFolder={currentFolder} />
    </div>
  );
}

export default FinalCreateCardsPage;
