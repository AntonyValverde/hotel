import React, { useState } from "react";
import "../styles/Main.css";
import { Link } from "react-router-dom";
import HotelFormModal from "./HotelFormModal";

function Main() {
  const sections = [
    {
      id: 1,
      title: "Habitaciones Confortables",
      content: "Disfruta de habitaciones espaciosas con vistas espectaculares.",
      img: "./fotos/habitacion.jpg",
    },
    {
      id: 2,
      title: "Piscina",
      content: "Relájate en nuestra piscina con servicio de bar.",
      img: "./fotos/picsina.jpg",
    },
    {
      id: 3,
      title: "Restaurante Gourmet",
      content: "Descubre nuestra carta de cocina internacional.",
      img: "./fotos/restaurante.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sections.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="main">
      <h1 className="main-title">Bienvenido a Nuestro Hotel</h1>

      {/* Desktop View */}
      <div className="desktop-container">
        {sections.map((section) => (
          <div key={section.id} className="card">
            <img src={section.img} alt={section.title} className="card-img" />
            <div className="card-content">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="mobile-container">
        <div className="carousel">
          <button className="carousel-btn left" onClick={prevSlide}>‹</button>
          <div className="carousel-item">
            <img src={sections[currentIndex].img} alt={sections[currentIndex].title} className="carousel-img" />
            <div className="carousel-content">
              <h2>{sections[currentIndex].title}</h2>
              <p>{sections[currentIndex].content}</p>
            </div>
          </div>
          <button className="carousel-btn right" onClick={nextSlide}>›</button>
        </div>
      </div>

      {/* Apartado de Información */}
      <div className="info-container">
        <div className="info-content">
          <h2>Forma parte de nuestros huéspedes.</h2>
          <p>Disfruta de beneficios exclusivos al hospedarte con nosotros.</p>
          <div className="buttons">
          <Link to="/servicios">
            <button className="btn primary">Servicios</button>
        </Link>
            <button
              className="btn secondary"
              onClick={() => setModalIsOpen(true)}
            >
              Reservar
            </button>
          </div>
        </div>
        <div className="benefits">
          <div className="benefit">
            <span className="icon">⭐</span>
            <p>Noches comodas</p>
          </div>
          <div className="benefit">
            <span className="icon">💰</span>
            <p>Descuentos exclusivos</p>
          </div>
          <div className="benefit">
            <span className="icon">📶</span>
            <p>WiFi gratuito</p>
          </div>
          <div className="benefit">
            <span className="icon">📱</span>
            <p>Check-in móvil</p>
          </div>
        </div>
      </div>
      <HotelFormModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </main>
  );
}

export default Main;
