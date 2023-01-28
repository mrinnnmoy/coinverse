import React from 'react';
import Featured from './components/Featured/Featured';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
    </div>
  )
};

export default App;