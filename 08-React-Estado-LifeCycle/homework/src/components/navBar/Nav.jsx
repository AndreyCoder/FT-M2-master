import React from 'react'
import s from './Nav.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'

const Nav = ({ onSearch }) => {
  return (
    <div className={s.main}>
      <SearchBar
        onSearch={onSearch}
      />
    </div>
  )
}

export default Nav
