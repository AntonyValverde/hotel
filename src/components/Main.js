import React from "react";
import "../styles/Main.css";

function Main() {
  const sections = [
    {
      id: 1,
      title: "Habitaciones Confortables",
      content: "Disfruta de habitaciones espaciosas con vistas espectaculares.",
      img: "./fotos/habitacion.jpg", // Reemplaza con la URL de la imagen
    },
    {
      id: 2,
      title: "Piscina",
      content: "Relájate en nuestra piscina con servicio de bar.",
      img: "./fotos/picsina.jpg", // Reemplaza con la URL de la imagen
    },
    {
      id: 3,
      title: "Restaurante Gourmet",
      content: "Descubre nuestra carta de cocina internacional.",
      img: "./fotos/restaurante.jpg", // Reemplaza con la URL de la imagen
    },
  ];

  return (
    <main className="main">
      <img src="./fotos/hotel.jpg" alt="Hotel" className="imgHotel" />
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`section ${
            index % 2 === 0 ? "image-right" : "image-left"
          }`}
        >
          <img src={section.img} alt={section.title} className="section-img" />
          <div className="section-content">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        </section>
      ))}
    </main>
  );
}

export default Main;
