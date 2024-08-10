import React from 'react';

const ResolutionAdjuster = ({ resolution, onResolutionChange }) => {
  // Function to handle the resolution change event
  const handleResolutionChange = (event) => {
    onResolutionChange(event.target.value);
  };

  return (
    <div className="resolution-adjuster">
      <label>Resolution:</label>
      {/* Range input to adjust the resolution */}
      <input
        type="range"
        min="32"
        max="3840"
        step="1"
        value={resolution}
        onChange={handleResolutionChange}
      />
    </div>
  );
};

export default ResolutionAdjuster;