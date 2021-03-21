import React, { createContext, useState } from "react";

export const MomentContext = createContext();

// This context provider is passed to any component requiring the context
export const MomentProvider = ({ children }) => {
  const [momentContext, setMomentContext] = useState(null);
//   const [location, setLocation] = useState("Mars");

  return (
    <MomentContext.Provider
      value={{
        momentContext,
        // location,
        // setLocation,
        setMomentContext
      }}
    >
      {children}
    </MomentContext.Provider>
  );
};