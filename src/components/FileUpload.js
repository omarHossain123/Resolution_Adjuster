import React, { useState } from 'react';

const FileUpload = ({ onImageUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
