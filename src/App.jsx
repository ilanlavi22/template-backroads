import React from 'react';
import { Navbar, Hero, About, Services, Tours, Footer } from './components';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
