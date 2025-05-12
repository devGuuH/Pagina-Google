import React from 'react';
import './App.css';
import SearchBar from './componentes/SearchBar';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <img 
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
          alt="Google Logo" 
          className="logo"
        />
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
} 

export default App;