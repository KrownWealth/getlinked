"use client"
import React, { useState, useContext, createContext } from 'react';

const MobileMenuContext = createContext();

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}

export function MobileMenuProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
}
