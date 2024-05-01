import React, { createContext, useState, useContext, ReactNode, ReactElement } from 'react';
import Cat from './types/Cat';
import AppContextType from './types/AppContextType';


const initialAppState: AppContextType = {
  allBreeds: [],
  setAllBreeds: () => {},
  selectedCat: null,
  setSelectedCat: () => {},
};

const AppContext = createContext<AppContextType>(initialAppState);

type Props = {
  children: ReactElement
}

const AppProvider = ({children}: Props) => {
  const [allBreeds, setAllBreeds] = useState<Cat[] | []>(initialAppState.allBreeds);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(initialAppState.selectedCat);
  

  return (
    <AppContext.Provider value={{ allBreeds, setAllBreeds, selectedCat, setSelectedCat }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to make sure AppContext is used withing the AppProvider
const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === initialAppState) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };