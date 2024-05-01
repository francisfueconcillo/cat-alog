import Cat from './Cat';

type AppContextType = {
  allBreeds: Cat[] | [];
  setAllBreeds: (breeds: Cat[] | []) => void;
  selectedCat: Cat | null;
  setSelectedCat: (cat: Cat | null) => void;
};


export default AppContextType;