import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import SolutionPage from './SolutionPage';
import TeamPage from './TeamPage';
import MilestonePage from './MilestonePage';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { pathname } = useLocation();

  // Scroll to the top whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {/* Navbar */}
      <NavBar />
      {/* Page routes */}
      <Routes>
        <Route index element={<SolutionPage />} />
        <Route path='solution' element={<SolutionPage />} />
        <Route path='team' element={<TeamPage />} />
        <Route path='milestones' element={<MilestonePage />} />
      </Routes>

      {/* Footer */}
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
