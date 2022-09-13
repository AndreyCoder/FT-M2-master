import React from 'react';
import s from './App.module.css'
import Cards from '../components/cards/Cards.jsx';
import SearchBar from '../components/searchBar/SearchBar.jsx';
import data from '../data.js';

function App() {
  return (
    <div className={s.app}>
      <div className={s.header}>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div className={s.main}>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
