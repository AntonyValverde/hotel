import React from "react";
import Rating from "./Rating";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: contacto@hotelparadise.com</p>
          <p>Teléfono: +1 (555) 123-4567</p>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
              alt="Facebook"
              className="social-icon"
            />
          </a>
        </div>

        <div className="footer-rating">
          <Rating />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Hotel Paradise. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
