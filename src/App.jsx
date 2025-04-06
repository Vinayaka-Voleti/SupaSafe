// App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import EventPage from './componets/EventPage';
import NavBar from './componets/NavBar';
import AuthHome from './componets/AuthHome';
import Footer from './componets/Footer';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <NavBar theme={theme} setTheme={setTheme} title="KonnexWeb" />

      <Routes>
        <Route path="/" element={<AuthHome theme={theme} />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;