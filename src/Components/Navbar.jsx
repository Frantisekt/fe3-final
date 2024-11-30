import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }

  return (
    <nav className={state.theme === 'dark' ? 'navbar dark' : 'navbar'}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contacto">
        <h4>Contacto</h4>
      </Link>  
      <Link to="/favs">
        <h4>Favoritos</h4>
      </Link>
      
      <button onClick={toggleTheme}>
        Change theme {state.theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar