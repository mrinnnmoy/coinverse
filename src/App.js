import React from 'react';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
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
      <Footer />
    </div>
  )
};

export default App;