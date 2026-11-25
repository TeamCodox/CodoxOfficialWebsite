import React, { createContext, useContext } from "react";

const LoadingContext = createContext({
  isLoading: false,
});

export function LoadingProvider({ isLoading, children }) {
  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

export default LoadingContext;
