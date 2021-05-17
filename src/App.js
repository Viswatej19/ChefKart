import React from 'react';
import Header from '../src/components/Header';
import Feature from '../src/components/Feature';
import About from '../src/components/About';
import aboutimg from './images/Frame 19.png';
import Support from '../src/components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimg} title='Healthy Food At Your DoorStep.. ' button='SUBSCRIPTION'/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
