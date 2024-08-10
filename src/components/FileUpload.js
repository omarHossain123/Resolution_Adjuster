import React, { useState } from 'react';

const FileUpload = ({ onImageUpload }) => {
  // Function to handle file input change event
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Call the parent component's callback function with the image data
        onImageUpload(e.target.result);
      };
      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="file-upload">
      {/* Input for uploading image files */}
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;