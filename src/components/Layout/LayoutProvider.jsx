import React, { createContext, useContext } from 'react';
import { useLocation } from '@docusaurus/router';
import { getCurrentSection, getSectionConfig } from './NavigationConfig';

const LayoutContext = createContext({});

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};

export const LayoutProvider = ({ children }) => {
  const location = useLocation();
  const currentSectionKey = getCurrentSection(location.pathname);
  const currentSection = getSectionConfig(currentSectionKey);
  
  const contextValue = {
    currentSectionKey,
    currentSection,
    pathname: location.pathname,
    isHomePage: location.pathname === '/' || location.pathname === '/index',
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};