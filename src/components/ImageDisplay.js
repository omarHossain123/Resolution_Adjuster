import React, { useRef, useEffect } from 'react';

const ImageDisplay = ({ image, resolution }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        // Calculate the dimensions for the lower resolution
        const lowerResolutionWidth = Math.floor(img.width * (resolution / 512));
        const lowerResolutionHeight = Math.floor(img.height * (resolution / 512));

        // Create an off-screen canvas to draw the image at lower resolution
        const offScreenCanvas = document.createElement('canvas');
        offScreenCanvas.width = lowerResolutionWidth;
        offScreenCanvas.height = lowerResolutionHeight;
        const offScreenContext = offScreenCanvas.getContext('2d');

        // Draw the image at lower resolution on the off-screen canvas
        offScreenContext.drawImage(img, 0, 0, lowerResolutionWidth, lowerResolutionHeight);

        // Clear the main canvas and stretch the lower resolution image to the original size
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          offScreenCanvas,
          0,
          0,
          lowerResolutionWidth,
          lowerResolutionHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );
      };
      // Set the image source to the data URL
      img.src = image;
    }
  }, [image, resolution]);

  if (!image) return null;

  return (
    <div>
      {/* Canvas to display the image */}
      <canvas ref={canvasRef} width={512} height={512} style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default ImageDisplay;