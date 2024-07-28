import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ImageDisplay from './components/ImageDisplay';
import ResolutionAdjuster from './components/ResolutionAdjuster';
import WelcomeScreen from './components/WelcomeScreen';
import './App.css';

const App = () => {
  // State to store the uploaded image data
  const [image, setImage] = useState(null);
  // State to store the resolution value
  const [resolution, setResolution] = useState(256);
  // State to show/hide the welcome screen
  const [showWelcome, setShowWelcome] = useState(true);

  // Function to handle the start button click event
  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App">
      {showWelcome ? (
        // Show the welcome screen if showWelcome is true
        <WelcomeScreen onStart={handleStart} />
      ) : (
        // Show the main app components if showWelcome is false
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
