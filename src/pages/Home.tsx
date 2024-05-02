import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cat as CatIcon } from 'lucide-react';

import Cat from '../context/types/Cat';
import CatImage from '../context/types/CatImage';
import { useAppContext, initialAppState } from '../context/AppContext';
import SelectBreed from '../components/SelectBreed';
import { Button } from "../components/ui/button"
import CatCard from '../components/CatCard';
import ProgressBar from '../components/ProgressBar';
import { searchImages, fetchCatBreeds } from '../requests';
import AppConfig from '../appConfig';
import RouteData from '../context/types/RouteData';

function Home() {
  const navigate = useNavigate();
  const [nextPageToLoad, setNextPageToLoad] = useState(1);
  const [showLoadButton, setShowLoadButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { allBreeds, selectedCat, setSelectedCat, setCatImages, setAllBreeds, catImages } = useAppContext();

  // fetch and load images to the catImages state.
  // when append=true, push to array instead of overwriting
  const loadImages = (catId: string, page: number, append: boolean) => {

    if (!append) {
      setIsLoading(true);
    }

    searchImages(catId, page, AppConfig.PAGE_LIMIT)
      .then((data: CatImage[]) => {
        if (data.length) {
          setNextPageToLoad(page+1);
          setCatImages(append ? [ ...catImages, ...data ] : data);   // if we are loading more, we append the new data
        }
        // Show the Load More button if items is equal or gt the PAGE_LIMIT
        setShowLoadButton(data.length >= AppConfig.PAGE_LIMIT);

        if (!append) {
          setIsLoading(false);
        }
        
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }


  // if the new selected cat is not the current, handle the change
  const selectCatHandler = (catId: string) => {
    if (selectedCat?.id !== catId) {
      const selectedCat = allBreeds.find(cat => cat.id === catId) || null;
      if (selectedCat) {
        setSelectedCat(selectedCat);
        setNextPageToLoad(1) // reset page counter to 1 since its a new selection
        loadImages(catId, 1, false);
      }
    }
  }

  const loadMoreHandler = () => {
    if (selectedCat) {
      loadImages(selectedCat.id, nextPageToLoad, true);
    }
  }

  const catCardClickHandler = (image: CatImage) => {
    const routeData: RouteData = {
      imageUrl: image.url,
      name: selectedCat?.name || '',
      description: selectedCat?.description || '',
      origin: selectedCat?.origin || '',
      temperament: selectedCat?.temperament || '',
    };
    navigate('/cat-details', { state: { data: routeData } });
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

      {
        isLoading 
        ? <ProgressBar/>
        : catImages.length 
          ? <div className="flex flex-wrap">
              { 
                catImages.map((image, index) => (
                  <CatCard key={index} image={image} handleClick={catCardClickHandler}/>
                  
                ))
              }
            </div>
          : <div className="flex flex-col items-center justify-center h-96 w-screen">
              <CatIcon size="120" color="#d0d0d0" />
              <div className="text-center">
                <h2>Prrrt! Prrrt! Prrrt! Meowww!</h2>
                <p>Select a purrfect breed, hooman! Meow!</p>
              </div>
            </div>
      }

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
