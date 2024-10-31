import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router className="scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes for other pages like ProductPage */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
