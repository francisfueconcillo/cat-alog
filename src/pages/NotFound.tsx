import React from 'react';
import { Cat } from 'lucide-react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-96 w-screen">
      <Cat size="120" color="#d0d0d0" />
      <div className="text-center">
        <h2>404</h2>
        <p>Paw-sitively sorry, <br/> but that page is currently napping!</p>
      </div>
      <p ></p>
    </div>
  );

}

export default NotFound;