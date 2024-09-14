import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import AnonymousPage from './components/AnonymousPage';
import EmergencyPage from './components/EmergencyPage';
import CommunityPage from './components/CommunityPage'; // Import CommunityPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/anonymous" element={<AnonymousPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/community" element={<CommunityPage />} /> {/* Add CommunityPage route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
