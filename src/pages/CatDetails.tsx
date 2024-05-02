import React from 'react';
import { Card } from '../components/ui/card'
import { useLocation } from 'react-router-dom';
import RouteData from '../context/types/RouteData';

function CatDetails() {

  const location = useLocation();
  const catInfo: RouteData = location.state?.data;

  return (
    <div className="flex flex-wrap">
      <Card className="bg-white p-4 shadow-md m-2 w-fit h-fit">
        <img src={catInfo.imageUrl} alt={catInfo.imageUrl} className="w-full h-fit object-cover object-center" />
        <h1>{catInfo.name}</h1>
        <p><span className='font-semibold'>Origin:</span> {catInfo.origin}</p>
        <p><span className='font-semibold'>Temperament:</span> {catInfo.temperament}</p>
        <p><span className='font-semibold'>Description:</span>  {catInfo.description}</p>

      </Card>
    </div>
  );

}

export default CatDetails;