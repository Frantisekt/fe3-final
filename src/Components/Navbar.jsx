import React from 'react'
import { Link } from "react-router-dom";
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
        <img src="/DH.ico" title='Home' alt="Home" style={{ marginRight: '10px' }} />
        {/* <h4>Home</h4> */}
      </Link>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contacto">
        <h4>Contacto</h4>
      </Link>  
      <Link to="/favs">
        <h4>Favoritos</h4>
      </Link>
      
      <button onClick={toggleTheme} style={{ backgroundColor: '#313149', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>
        Modo {state.theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar