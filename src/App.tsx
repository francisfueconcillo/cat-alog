import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CatDetails from './pages/CatDetails';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import PerformanceMetrics from './pages/PerformanceMetrics';

function App() {
  return (
    <AppProvider>
      <div className="h-fit w-screen bg-gray-100 px-5">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat-details" element={<CatDetails />} />
            <Route path="/perf" element={<PerformanceMetrics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

      </div>
    </AppProvider>
    
  );
}

export default App;

