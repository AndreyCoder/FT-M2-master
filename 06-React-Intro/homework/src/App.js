import React from 'react';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  // console.log('Data', data)
  // console.log('Cairns', Cairns)

  return (
    <div>
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>

      <div>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
