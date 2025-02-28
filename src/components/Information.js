import React, { useEffect, useState } from "react";
import "../styles/Information.css";

function Information() {
  const [visibleSections, setVisibleSections] = useState([0]); // Asegurar que la primera sección sea visible

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".info-section");
      sections.forEach((section, index) => {
        if (index === 0) return; // La primera sección siempre estará visible
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="information-container">
      <h2 className="info-title">Información</h2>

      {/* Primera sección: Siempre visible */}
      <div className="info-section first visible">
        <img
          src={"./fotos/habitacion.jpg"}
          alt="Descripción"
          className="info-image left"
        />
        <p className="info-text">
          Somos un hotel ubicado en la costa del Pacífico, en la provincia
          Puntarenas, Costa Rica. Estamos preparados para recibirte en tus
          vacaciones, viajes de negocios o eventos especiales. Contamos con
          piscina, restaurante, bar y salones para eventos.
        </p>
      </div>

      {/* Segunda sección: Animación con scroll */}
      <div
        className={`info-section ${
          visibleSections.includes(1) ? "visible" : ""
        }`}
      >
        <p className="info-text">
          Nuestro hotel cuenta con habitaciones confortables y espaciosas, con
          vistas espectaculares al mar o a nuestros jardines. Todas las
          habitaciones están equipadas con aire acondicionado, televisión por
          cable, minibar, caja fuerte y baño privado.
        </p>
        <img
          src={"./fotos/habitacion.jpg"}
          alt="Descripción"
          className="info-image right"
        />
      </div>

      {/* Tercera sección: Animación con scroll */}
      <div
        className={`info-section ${
          visibleSections.includes(2) ? "visible" : ""
        }`}
      >
        <img
          src={"./fotos/habitacion.jpg"}
          alt="Descripción"
          className="info-image left"
        />
        <p className="info-text">
          Nuestro personal está altamente capacitado para brindarle un servicio
          de calidad y una experiencia inolvidable. No dude en contactarnos para
          más información o para realizar una reserva.
        </p>
      </div>
    </div>
  );
}

export default Information;
