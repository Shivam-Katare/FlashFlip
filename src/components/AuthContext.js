// AuthContext.js
import { createClient } from '@supabase/supabase-js';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E';
const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState("");

  useEffect(() => {
    getUserData();
  }, []);
  
  const getUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      // console.log('User data:', user.aud);
      console.log('User data:', user);
      if(user.aud){
        setUserAuthenticated(user.aud);
      } else {
        setUserAuthenticated("");
      }
  
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };
  

  const handleAuthChange = (authenticated) => {
    setUserAuthenticated(authenticated);
  };

  return (
    <AuthContext.Provider value={{ userAuthenticated, handleAuthChange }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
