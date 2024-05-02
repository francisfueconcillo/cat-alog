import React from 'react';
import { Card } from './ui/card'
import CatImage from '../context/types/CatImage';

type Props = {
  image: CatImage,
  handleClick: (image: CatImage) => void,
}

function CatCard({ image, handleClick }: Props) {

  const cardClickHandler = () => {
    handleClick(image);
  }
  
  return (
    <Card className="bg-white p-4 shadow-md m-2 w-72 h-72" onClick={cardClickHandler}>
      <img src={image.url} alt={image.id} className="w-full h-60 object-cover object-center" />
    </Card>
  );
}

export default CatCard;