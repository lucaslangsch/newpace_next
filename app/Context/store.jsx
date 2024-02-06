'use client';

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({});

export function GlobalContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <GlobalContext.Provider value={{ products, setProducts, total, setTotal }}>
      { children }
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext)