import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaBars,
  FaPhoneAlt,
} from "react-icons/fa";
import HotelFormModal from "./HotelFormModal";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <header id="top" className="header">
        <div className="header-container">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/167/167707.png"
              alt="Hotel logo"
              className="logo-icon"
            />
            Hotel Paradise
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link to="/">
                  <FaHome /> Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios">
                  <FaConciergeBell /> Servicios
                </Link>
              </li>

              <li>
                <Link to="/information">
                  <FaInfoCircle /> Información
                </Link>
              </li>
              <li>
                <a href="#info">
                  <FaPhoneAlt />
                  +506 1234-5678
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <HotelFormModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
}

export default Header;
