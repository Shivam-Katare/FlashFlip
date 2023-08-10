import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import CreateFlashcards from "./components/ExtraPages/CreateFlashCards";
import FolderComponent from "./FolderComponent";
import { AuthProvider } from "./components/AuthContext";
import supabaseCredentials from "./supabaseConfig"; // Import supabase instance from supabaseConfig.js

function App() {
  const [currentFolderName, setCurrentFolderName] = useState(null);
  const [folders, setFolders] = useState([]); // Define the 'folders' array here

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <AnimatedRoutes supabase={supabaseCredentials} />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
