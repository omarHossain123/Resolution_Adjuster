# Image Adjustor

Welcome to Image Adjustor! This is a React application that allows users to upload an image, adjust its resolution, and display the adjusted image on a canvas.

## Features

- Upload an image file.
- Adjust the image resolution using a slider.
- Display the adjusted image on a canvas.

## Components

### FileUpload

The `FileUpload` component handles the image file upload. It reads the image file and converts it to a data URL, which is then passed to the parent component via a callback.

### ImageDisplay

The `ImageDisplay` component displays the uploaded image on a canvas. It uses an off-screen canvas to draw the image at a lower resolution and then stretches the lower resolution image to fit the main canvas.

### ResolutionAdjuster

The `ResolutionAdjuster` component provides a slider to adjust the resolution of the displayed image. It calls a callback function with the new resolution value whenever the slider is adjusted.

### WelcomeScreen

The `WelcomeScreen` component displays a welcome message and a button to start the image adjustment process.

### App

The `App` component is the main application component that manages the state for the uploaded image, resolution, and whether to show the welcome screen. It renders the appropriate components based on the state.

## How It Works

1. The user uploads an image using the `FileUpload` component.
2. The image data is passed to the `ImageDisplay` component, which displays the image on a canvas.
3. The `ResolutionAdjuster` component provides a slider for the user to adjust the resolution.
4. When the resolution is adjusted, the `ImageDisplay` component:
   - Creates an off-screen canvas to draw the image at the lower resolution.
   - Draws the image on the off-screen canvas.
   - Stretches the lower resolution image to fit the main canvas.


