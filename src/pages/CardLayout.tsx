import React from 'react';
import CatCard from '../components/CatCard';
import CatImage from '../context/types/CatImage';
import { Cat } from 'lucide-react';

type Props = {
  images: CatImage[] | [],
}

const CardLayout = ({ images }: Props) => {
  return (
    <div className="flex flex-wrap">
      {

        images.length 
          ? images.map((image, index) => (
              <CatCard key={index} image={image}/>
            ))
          : <div className="flex flex-col items-center justify-center h-96 w-screen">
              <Cat size="120" color="#d0d0d0" />
              <p className="text-center"><h2>"Prrrt! Prrrt! Prrrt! Meowww! Select a purrfect breed, hooman! Meow!"</h2></p>
            </div>
      }
    </div>
  );
};

export default CardLayout;
