import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Membres from './components/Membres';
import Activites from './components/Activites';
import About from './components/About';
import Contact from './components/Contact'; 

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Membres />
      <Activites />
      <About />
      <Contact /> 
    </div>
  );
}

export default App;

