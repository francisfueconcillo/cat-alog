import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

import Cat from '../context/types/Cat';
import CatImage from '../context/types/CatImage';

type Props = {
  image: CatImage,
}

function CatCard({ image }: Props) {
  return (

    <Card className="bg-white p-4 shadow-md m-2 w-72 h-72">
      <img src={image.url} alt={image.id} className="w-full h-60 object-cover object-center" />
      
    </Card>
  );

}

export default CatCard;