import React, { useEffect, useState } from 'react'
import './App.css';

import NavBar from './componets/NavBar';
import AuthHome from './componets/AuthHome';
import Footer from './componets/Footer';

function App() {

  const current_theme = localStorage.getItem('current_theme');
  const[theme, setTheme] = useState(current_theme?current_theme:'light');
  

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])

  return (
    <div className="App">
      <NavBar theme={theme} setTheme={setTheme} title="Supasafe"/>
      <AuthHome/>
      <Footer/>
    </div>
  );
}

export default App;
