import React from 'react';
import CatCard from '../components/CatCard';


const Card: React.FC<{ size: string }> = ({ size }) => {
  return (
    <div className={`bg-gray-200 p-4 shadow-md m-2 w-72 h-72`}>
      <p>Card</p>
    </div>
  );
};

const CardLayout: React.FC = () => {
  const cardSizes = [
    'w-72 h-72', // large
    'w-64 h-64', // small
    'w-64 h-64', // medium
    'w-64 h-64', // small
    'w-64 h-64', // medium
    'w-64 h-64', // small
    'w-48 h-48', // large
    'w-64 h-64', // medium
    'w-64 h-64', // small
    'w-48 h-48', // large
    'w-64 h-64', // small
    'w-64 h-64', // small
    'w-64 h-64', // medium
    'w-64 h-64', // small
    'w-56 h-56', // large
    'w-64 h-64', // medium
    'w-64 h-64', // small
    'w-64 h-64', // medium
    'w-64 h-64', // small
    'w-48 h-48', // large
    'w-64 h-64', // medium
    'w-64 h-64', // medium
    'w-64 h-64', // small
    'w-72 h-72', // large
    'w-64 h-64', // medium
    'w-64 h-64', // medium
  ];

  return (
    <div className="flex flex-wrap">
      {cardSizes.map((size, index) => (
        // <Card key={index} size={size} />
        <CatCard/>
      ))}
    </div>
  );
};

export default CardLayout;
