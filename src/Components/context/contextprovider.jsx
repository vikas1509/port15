import React, { useContext, useState } from 'react';

// Custom hook to use the ResumeContext
export const useResume = () => useContext(ResumeContext);

// ResumeProvider component to provide the resume context to the entire app
export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState(null);

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};