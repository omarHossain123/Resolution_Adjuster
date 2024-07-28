import React from 'react';

const ResolutionAdjuster = ({ resolution, onResolutionChange }) => {
  const handleResolutionChange = (event) => {
    onResolutionChange(event.target.value);
  };

  return (
    <div className="resolution-adjuster">
      <label>Resolution:</label>
      <input
        type="range"
        min="32"
        max="512"
        step="1"
        value={resolution}
        onChange={handleResolutionChange}
      />
      <span>{resolution}px</span>
    </div>
  );
};

export default ResolutionAdjuster;
