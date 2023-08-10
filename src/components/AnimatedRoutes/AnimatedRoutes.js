import React, { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';
import NewLanding from '../FlashFlip/NewLanding';
import CardCreationForm from '../Final/CardCreationForm';
import BooleanCards from '../CustomCards/BooleanCards';
import NameList from '../CustomCards/FolderNameCreation.js/ListNames';
import NameDetails from '../CustomCards/FolderNameCreation.js/NameDetails';
import Speed from '../FlashFlip/speed';
import FinalLandingPage from '../Final/FinalLandingPage';
import LetsPick from '../Final/LetPick/LetsPick';
import AuthTry from '../AuthTry';
import { AuthProvider } from '../AuthContext';


function AnimatedRoutes() {
  const location = useLocation();
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  // const handleAuthChange = async (event) => {
  //   if (event.user) {
  //     console.log('Logged-in user data:', event.user);

  //     // Save user data to Supabase table
  //     const { data, error } = await supabase
  //       .from('users')
  //       .upsert([
  //         {
  //           id: event.user.id,
  //           email: event.user.email,
  //           name: event.user.user_metadata.full_name,
  //         },
  //       ]);

  //     if (error) {
  //       console.error('Error saving user details:', error.message);
  //     }
  //   } else {
  //     console.log('User has logged out');
  //   }
  // };

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FinalLandingPage />} />
        <Route path="/codecard" element={<NewLanding />} />
        <Route path="/flashCreate" element={<CardCreationForm />} />
        <Route path="/boolean" element={<BooleanCards />} />
        <Route path="/folder" element={<NameList />} />
        <Route path="/names/:name" element={<NameDetails />} />
        <Route path="/speed" element={<Speed />} />
        <Route path="/letspick" element={<LetsPick />} />
        <Route path="/login" element={<AuthTry />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes