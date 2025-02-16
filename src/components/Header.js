import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaCalendarCheck,
  FaBars,
  FaPhoneAlt,
} from "react-icons/fa";
import HotelFormModal from "./HotelFormModal";
import "./Header.css";
// npm install react-icons, npm install react-modal,
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
                <a href="#top">
                  <FaHome /> Inicio
                </a>
              </li>

              <li>
                <a href="#services">
                  <FaConciergeBell /> Servicios
                </a>
              </li>
              <li>
                <button
                  className="register-btn"
                  onClick={() => setModalIsOpen(true)}
                >
                  <FaCalendarCheck /> Registro
                </button>
              </li>
              <li>
                <a href="#info">
                  <FaInfoCircle /> Información
                </a>
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

      {/* Modal separado */}
      <HotelFormModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
}

export default Header;
