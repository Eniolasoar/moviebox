import React, { createContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <GlobalContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
