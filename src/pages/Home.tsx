import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import CardLayout from './CardLayout';
import SelectBreed from '../components/SelectBreed';



function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-green">Home</h2>
      <SelectBreed/>
      <CardLayout/>
    </>
  );

}

export default Home;