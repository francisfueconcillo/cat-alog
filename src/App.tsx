import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CatDetails from './pages/CatDetails';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 px-5">
      <div className="p-4">
        <h1>Cats in the World</h1>
      </div>


      <div className="p-4">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat-details" element={<CatDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>

      <div className="p-4">
        <p>footer</p>
      </div>



    </div>
    
  );
}

export default App;

