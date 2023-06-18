import React from 'react';
import './App.css';
import ListPeliculaComponent from './components/ListPeliculaComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
        <div className="container">
          <ListPeliculaComponent />
        </div>
        <FooterComponent />
    </div>
  );
}

export default App;
