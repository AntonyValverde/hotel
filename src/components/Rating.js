import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, saveRating } from "../firebase"; // Asegúrate de que la ruta sea correcta
import "./Rating.css";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0); // Calificación seleccionada
  const [hoverRating, setHoverRating] = useState(0); // Calificación al pasar el ratón
  const [submitted, setSubmitted] = useState(false); // Controla si se envió
  const [averageRating, setAverageRating] = useState(0); // Media de las calificaciones
  const [totalRatings, setTotalRatings] = useState(0); // Total de calificaciones

  // Obtener datos de Firestore al cargar la página
  const fetchRatings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "calificacion"));
      const ratings = [];
      querySnapshot.forEach((doc) => {
        ratings.push(doc.data().rating);
      });

      // Calcular la media
      const total = ratings.length;
      const sum = ratings.reduce((acc, rating) => acc + rating, 0);
      const average = total > 0 ? sum / total : 0;

      setAverageRating(average.toFixed(1)); // Media con 1 decimal
      setTotalRatings(total); // Total de calificaciones
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  useEffect(() => {
    fetchRatings(); // Cargar las calificaciones al cargar el componente
  }, []);

  // Maneja la selección de calificación
  const handleRating = (rating) => {
    setSelectedRating(rating);
  };

  // Envía la calificación
  const submitRating = async () => {
    if (selectedRating > 0) {
      try {
        await saveRating(selectedRating); // Llama a la función para guardar la calificación

        // Actualiza el estado local
        setTotalRatings((prev) => prev + 1); // Incrementa el total
        setAverageRating((prev) =>
          ((prev * totalRatings + selectedRating) / (totalRatings + 1)).toFixed(1)
        ); // Calcula la nueva media

        setSubmitted(true); // Cambia el estado a enviado
      } catch (error) {
        console.error("Error submitting rating:", error);
      }
    } else {
      alert("Por favor, selecciona una calificación antes de enviar.");
    }
  };

  return (
    <div className="rating-container">
      <h4>Califica nuestro servicio</h4>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${
              hoverRating >= star || selectedRating >= star || averageRating >= star
                ? "selected"
                : ""
            }`}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          >
            ★
          </span>
        ))}
        <span className="total-ratings">({totalRatings})</span>
      </div>
      <button
        className="submit-btn"
        onClick={submitRating}
        disabled={submitted}
      >
        {submitted ? "¡Gracias por tu calificación!" : "Enviar Calificación"}
      </button>
    </div>
  );
};

export default Rating;
