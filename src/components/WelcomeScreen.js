import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Image Adjustor</h1>
      {/* Button to start the image adjustment process */}
      <button onClick={onStart} className="start-button">Adjust Resolution</button>
    </div>
  );
};

export default WelcomeScreen;
