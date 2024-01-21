'use client';

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({});

export function GlobalContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <GlobalContext.Provider value={{ products, setProducts }}>
      { children }
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext)