import React from 'react';
import s from './SearchBar.module.css'
import { FiSearch } from "react-icons/fi";

export default function SearchBar(props) {
  // acá va tu código

  const search = () => {
    const inputSearch = document.querySelector('#inputSearch').value
    props.onSearch(inputSearch)
  }

  return (
    <div className={s.contenedor}>
      <div className={s.search}>

        <input
          id='inputSearch'
          type="text"
          className={s.searchinput}
          placeholder="Busca tu ciudad"
        />
        <button
          className={s.searchbutton}
          onClick={search}>
          <span className={s.searchicon}>
            <FiSearch />
          </span>
        </button>

      </div>
    </div>
  )
};

