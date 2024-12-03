import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/167/167707.png"
            alt="Hotel logo"
            className="logo-icon"
          />
          <h1>Hotel Paradise</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#reserve">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                  alt="Reservar icono"
                  className="icon"
                />
                Reservar
              </a>
            </li>
            <li>
              <a href="#info">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="Información icono"
                  className="icon"
                />
                Información
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
