// contextprovider.jsx
import React, { createContext, useState, useContext } from 'react';

// Import ImageContext as the default export
import ImageContext from './context';

// Custom hook to access the context
export const useImageContext = () => useContext(ImageContext);

// Provider component to wrap the entire application
export const ImageProvider = ({ children }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <ImageContext.Provider value={{ uploadedImage, setUploadedImage }}>
      {children}
    </ImageContext.Provider>
  );
};