import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link, Outlet } from 'react-router-dom';


function Nav({ onSearch }) {
  return (
    <main>

      <nav className="navbar navbar-dark bg-dark">

        <Link to='/'>
          <span className="navbar-brand">
            <img
              id="logoHenry"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
            Henry - Weather App
          </span>
        </Link>

        <Link to="/about">About</Link>


        <SearchBar
          onSearch={onSearch}
        />
      </nav>

      <section>
        <Outlet />
      </section>

    </main>
  );
};

export default Nav;
