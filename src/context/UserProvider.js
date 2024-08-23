import React, { useState } from 'react';
import MyContext from './UserContext';

const MyProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [snackbarDescription, setSnackbarDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  // Define the showSnackbar function
  const showSnackbar = (message, severity) => {
    setSnackbarDescription(message);
    setSeverity(severity);
    setOpen(true);
  };

  return (
    <MyContext.Provider 
      value={{  
        open, 
        setOpen,
        snackbarDescription, 
        setSnackbarDescription, 
        severity, 
        setSeverity, 
        isLoading, 
        setIsLoading, 
        showSnackbar,
        IsAuthenticated,
        setIsAuthenticated,
        userId,
        setUserId
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
