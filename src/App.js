import React from 'react';
import Featured from './components/Featured/Featured';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
    </div>
  )
};

export default App;