import React, { useState } from 'react';
import './FinalLandingPage.css';
import { createClient } from '@supabase/supabase-js';
import Logo from "./ml.png";
import { Link, useNavigate } from 'react-router-dom';
import FeaturesHighlightPage from './FeaturesHighlightPage';
import { useAuth } from '../AuthContext';
import { useEffect } from 'react';

// Initialize Supabase client
const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E';
const supabase = createClient(supabaseUrl, supabaseKey);

function FinalLandingPage() {
  const navigate = useNavigate();

  const { userAuthenticated } = useAuth();
  const [email, setEmail] = useState('');

// const handleGetStarted = async () => {
//   // const { user } = supabase.auth.session();
//   const {data: { user },} = await supabase.auth.getSession()

//   if (user) {
//     navigate('/flashCreate');
//   } else {
//     const { user, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });

//     if (error) {
//       console.error('Google login error:', error.message);
//     } else {
//       console.log('Google login successful:', user);
//       navigate('/flashCreate');
//     }
//   }
// };

// const handleGetStarted = async () => {
//   const { user, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });

//   if (error) {
//     console.error('Google login error:', error.message);
//   } else {
//     console.log('Google login successful:', user);

//     // Save user details to Supabase table
//     const { data, error } = await supabase
//       .from('users') // Replace 'users' with your actual table name
//       .upsert([
//         {
//           id: user.id,
//           email: user.email,
//           name: user.name, // Change to the appropriate field name
//         },
//       ]);

//     if (error) {
//       console.error('Error saving user details:', error.message);
//     }

//     navigate('/flashCreate');
//   }
// };

useEffect(() => {
  getUserData();
}, []);

const getUserData = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    // console.log('User data:', user.aud);
    console.log('User data:', user.email);
    setEmail(user.email);

  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
};


 console.log(userAuthenticated)
  return (
    <>
      <div className='landing-page-container'>
        <header className='landing-page-header'>
          <img src={Logo} alt='logo' />
          {userAuthenticated == "authenticated" ? (
          <span className='landing-page-done'>{email.charAt(0).toUpperCase()}</span>
        ) : (
          <div className='landing-page-login'>
            <Link to="/login" className='final-landing-page-demo-button-login'><span>Login</span></Link>
          </div>
        )}
        </header>

        <div className='landing-page-body'>
          <p className='landing-page-para-one'>Learn Faster.</p>
          <p className='landing-page-para-two'>Remember Longer.</p>
        </div>

        <div className='landing-page-tagline'>
          <p className='tagline'>The Most Effective Way to Master Any Subject.</p>
        </div>

        <div className='landing-page-button'>
          <button className='final-landing-page-demo-button'>
            <span className='final-landing-page-demo-button-span'> Watch Demo </span>
          </button>
          <button className='final-landing-page-demo-button'><span>Get Started</span></button>
        </div>
      </div>

      <div className='features-highlight-page-container'>
        <FeaturesHighlightPage />
      </div>
    </>
  );
}

export default FinalLandingPage;
