import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext, initialAppState } from '../context/AppContext';
import CardLayout from './CardLayout';
import SelectBreed from '../components/SelectBreed';
import { searchImages, fetchCatBreeds } from '../requests';
import AppConfig from '../appConfig';
import CatImage from '../context/types/CatImage';
import Cat from '../context/types/Cat';
import { Button } from "../components/ui/button"



function Home() {
  const navigate = useNavigate();

  const [nextPageToLoad, setNextPageToLoad] = useState(1);
  const [showLoadButton, setShowLoadButton] = useState(false);

  const { allBreeds, selectedCat, setSelectedCat, setCatImages, setAllBreeds, catImages } = useAppContext();

  const loadImages = (catId: string, page: number, append: boolean) => {
    searchImages(catId, page, AppConfig.PAGE_LIMIT)
      .then((data: CatImage[]) => {

        if (data.length) {
          setCatImages(append ? [ ...catImages, ...data ] : data);   // if we are loading more, we append the new data
          setNextPageToLoad(nextPageToLoad+1);
        }

        // Show the Load More button if items is equal or gt the PAGE_LIMIT
        setShowLoadButton(data.length >= AppConfig.PAGE_LIMIT);
        
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }


  const selectCatHandler = (catId: string) => {
    const selectedCat = allBreeds.find(cat => cat.id === catId) || null;
    if (selectedCat) {
      setSelectedCat(selectedCat);
      setNextPageToLoad(1) // reset page counter to 1 since its a new selection
      loadImages(catId, 1, false);
    }
  }

  const loadMoreHandler = () => {
    if (selectedCat) {
      loadImages(selectedCat.id, nextPageToLoad, true);
    }
  }

  useEffect(() => {
    if (allBreeds === initialAppState.allBreeds) {
      fetchCatBreeds()
      .then((data: Cat[]) => {
        if (data.length) {
          setAllBreeds(
            data.map((cat: Cat) => ({ 
              id: cat.id, 
              name: cat.name,
              description: cat.description,
              origin: cat.origin,
              temperament: cat.temperament,
              value: cat.id,
              label: cat.name,
            })
          ));
        }
       
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
    }
  }, [allBreeds])

  return (
    <>
      <SelectBreed breeds={allBreeds} selectHandler={selectCatHandler}/>
      <CardLayout images={catImages}/>
      { 
        showLoadButton && 
        selectedCat &&  
        <div className="fixed bottom-0 left-0 w-full p0">
          <Button className="w-full h-16 rounded-none" onClick={loadMoreHandler}>
            <p className="text-lg">Load More</p>
          </Button>
        </div>
      }
    </>
  );
}

export default Home;
