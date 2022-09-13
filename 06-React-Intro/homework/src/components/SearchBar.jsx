import React from 'react';

export default function SearchBar(props) {
  // acá va tu código

  const search = () => {
    const inputSearch = document.querySelector('#inputSearch').value
    props.onSearch(inputSearch)
  }

  return (
    <div>
      <input
        id='inputSearch'
        type='text'
        placeholder='Buscar ciudad...'
      />
      <button
        onClick={search}>
        Buscar
      </button>
    </div>
  )
};

