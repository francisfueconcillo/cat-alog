import Cat from './Cat';
import CatImage from './CatImage';

type AppContextType = {
  allBreeds: Cat[] | [],
  setAllBreeds: (breeds: Cat[] | []) => void,
  selectedCat: Cat | null,
  setSelectedCat: (cat: Cat | null) => void,
  catImages: CatImage[] | [],
  setCatImages: (images: CatImage[] | []) => void,

};


export default AppContextType;