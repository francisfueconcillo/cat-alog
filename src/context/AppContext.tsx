import React, { createContext, useState, useContext, ReactElement, useEffect } from 'react';
import Cat from './types/Cat';
import CatImage from './types/CatImage';
import AppContextType from './types/AppContextType';
import { fetchCatBreeds } from '../requests';

const initialAppState: AppContextType = {
  allBreeds: [],
  setAllBreeds: () => {},
  selectedCat: null,
  setSelectedCat: () => {},
  catImages: [],
  setCatImages: () => {},
};

const AppContext = createContext<AppContextType>(initialAppState);

type Props = {
  children: ReactElement
}

const AppProvider = ({children}: Props) => {
  const [allBreeds, setAllBreeds] = useState<Cat[] | []>(initialAppState.allBreeds);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(initialAppState.selectedCat);
  const [catImages, setCatImages] = useState<CatImage[] | []>(initialAppState.catImages);
  

  return (
    <AppContext.Provider value={{ allBreeds, setAllBreeds, selectedCat, setSelectedCat, catImages, setCatImages }}>
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

export { AppProvider, useAppContext, initialAppState };