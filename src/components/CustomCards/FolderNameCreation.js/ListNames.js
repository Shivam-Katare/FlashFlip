import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { MdAddCircleOutline } from 'react-icons/md';
import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';
import FolderStructure from './FolderStructure/FolderStructure';
import './ListNames.css';

const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E';
const supabase = createClient(supabaseUrl, supabaseKey);


function NameList() {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchFolders = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const userId = user.id;
        const { data, error } = await supabase
          .from('folders')
          .select('folder_name')
          .eq('user_id', userId); // Fetch folders for the logged-in user
  
        if (error) {
          console.error('Error fetching folders:', error.message);
        } else {
          setNamesList(data.map(item => item.folder_name));
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };
  

  useEffect(() => {
    fetchFolders();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCreateClick = async () => {
    if (name.trim() !== '') {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const userId = user.id;
  
          await supabase.from('folders').upsert([
            {
              folder_name: name.trim(),
              user_id: userId, // Associate folder with user
            },
          ]);
  
          fetchFolders(); // Refresh the list after adding a folder
          setName('');
          setIsModalOpen(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    }
  };
  
  
  return (
    <div>
      <h1 className='list-names-heading'>Vault</h1>
      <p className='list-names-para'>Create your own folders and then create cards in it</p>
      <div className='add-list-names-container'>
        <Button
          variant="contained"
          startIcon={<MdAddCircleOutline />}
          onClick={() => setIsModalOpen(true)}
        >
          Add Folder
        </Button>
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'white',
              boxShadow: 24,
              p: 4,
              maxWidth: 400,
              borderRadius: 4,
              textAlign: 'center',
            }}
          >
            <TextField
              label="Folder Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              onClick={handleCreateClick}
              disabled={!name.trim()}
            >
              Add Folder
            </Button>
          </Box>
        </Modal>
      </div>
      <ul className='folder-ul'>
        {namesList.map((n, index) => (
          <div key={index} className='folder-container'>
            <Link to={`/names/${n}`} className='folder-link'>
              <li><h4>{n}</h4></li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
