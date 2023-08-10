import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';
import AuthRetrive from './AuthRetrive';
import { useEffect } from 'react';
import { useAuth } from './AuthContext';
import './AuthTry.css';
import supabaseCredentials from '../supabaseConfig';

const AuthTry = () => {
  
  const { handleAuthChange } = useAuth(); // Use the handleAuthChange function from AuthContext

  useEffect(() => {
    const sessionListener = supabaseCredentials.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        handleAuthChange(true); // User is authenticated
      } else {
        handleAuthChange(false); // User has logged out or not authenticated
      }
    });

    // Cleanup the listener when component unmounts
    return () => {
      // sessionListener.unsubscribe();
    };
  }, [handleAuthChange]);


  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const { data: { user } } = await supabaseCredentials.auth.getUser();
      // console.log('User data:', user.aud);
      console.log('User data:', user.email);

    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };


  return (
    <div className='auth-try'>
    <Auth
      supabaseClient={supabaseCredentials}
      appearance={{ theme: ThemeSupa }}
      providers={['google']}
      handleAuthChange={handleAuthChange}
    />
    
    </div>
  );
};

export default AuthTry;
