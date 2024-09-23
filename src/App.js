import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import './App.css';
import CustomDesignSection from './components/CustomDesignSection'; 
import ThreeGridSection from './components/ThreeGridSection'; 

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add other components for the pages like How it works, Pricing, etc. */}
      </Routes>
      <Footer />
      <CustomDesignSection />
      <ThreeGridSection />
    </Router>
  );
}

export default App;
