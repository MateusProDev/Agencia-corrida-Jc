// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Certifique-se de importar o arquivo de estilos

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo-container">
        <img src="./img/Logo.png" alt="Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/avaliações">Avaliações</Link>
        </li>
      </ul>
      <nav className={`social-links ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links-mobile">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/avaliações">Avaliações</Link>
          </li>
        </ul>
        <ul className='social-links-icon'>
          <li>
            <a href="#link-rede-social-1">
              <img src="./img/insta.png" alt="Rede Social" />
            </a>
          </li>
          <li>
            <a href="#link-rede-social-2">
              <img src="./img/face.png" alt="Rede Social" />
            </a>
          </li>
          <li>
            <a href="#link-rede-social-3">
              <img src="./img/what.png" alt="Rede Social" />
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
