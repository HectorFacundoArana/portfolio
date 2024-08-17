'use client';

import { createContext, useContext, useEffect, useState} from 'react';
import useScrollBlock from '@/hooks/preventScroll'

const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [isMenuOpen, setOpenMenu] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock();


  const toggleMenu = () => {
    setOpenMenu(state => !state);
  };

  useEffect(() => {
    console.log(isMenuOpen)
    if (isMenuOpen){
      blockScroll()
    } else {
      allowScroll()
    }
  }, [isMenuOpen])

  return (
    <GlobalContext.Provider
      value={{
        isMenuOpen,
        toggleMenu
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };