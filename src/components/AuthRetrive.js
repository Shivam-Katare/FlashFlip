import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';


const AuthRetrive = () => {
  const [user, setUser] = useState(null);

  const url = 'https://djndnyppwxxckfcwabeo.supabase.co';
  const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E'
  const supabase = createClient(url, secret);

  useEffect(() => {
    const { user } =  SupabaseAuthClient.auth();
    setUser(user);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Data</h1>
      <p>User ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Email Verified: {user.emailVerified}</p>
      <p>Created At: {user.createdAt}</p>
      <p>Updated At: {user.updatedAt}</p>
    </div>
  );
};

export default AuthRetrive;
