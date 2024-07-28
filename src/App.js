// src/App.js

import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ImageDisplay from './components/ImageDisplay';
import ResolutionAdjuster from './components/ResolutionAdjuster';
import WelcomeScreen from './components/WelcomeScreen';
import './App.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [resolution, setResolution] = useState(256);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App">
      {showWelcome ? (
        <WelcomeScreen onStart={handleStart} />
      ) : (
        <>
          <h1>Image Adjustor</h1>
          <FileUpload onImageUpload={setImage} />
          <ResolutionAdjuster resolution={resolution} onResolutionChange={setResolution} />
          <ImageDisplay image={image} resolution={resolution} />
        </>
      )}
    </div>
  );
};

export default App;
