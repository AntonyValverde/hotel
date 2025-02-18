import React from "react";
import Modal from "react-modal";
import "../styles/HotelFormModal.css";
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

Modal.setAppElement("#root");

const HotelFormModal = ({ isOpen, onClose, selectedPlan }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");

  const clearForm = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCheckInDate("");
    setCheckInTime("");
    setCheckOutTime("");
    setCheckOutDate("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        plan: selectedPlan || "Registro Normal",
        name: `${name} ${lastName}`,
        email,
        checkInDate: `${checkInDate} ${checkInTime}`,
        checkOutDate: `${checkOutDate} ${checkOutTime}`,
      };

      // Guardar en Firebase Firestore
      await addDoc(collection(db, "hotel-registration"), data);

      // Llamar a la API de Express (en lugar de Next.js)
      const response = await fetch("http://localhost:5000/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        window.alert(
          "¡Registro exitoso! Se ha enviado un correo de confirmación."
        );
      } else {
        window.alert(
          "¡Registro exitoso! Pero hubo un problema al enviar el correo."
        );
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      window.alert("¡Hubo un error! Inténtelo de nuevo.");
    }
    clearForm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>{selectedPlan ? selectedPlan : "Registro de hotel"}</h2>

        <p>
          ¡Bienvenido a nuestro hotel! Por favor, rellene la siguiente
          información.
        </p>

        <form onSubmit={handleSubmit} className="hotel-form">
          <div className="form-group">
            <label>Nombre</label>
            <div className="name-fields">
              <input
                id="name"
                value={name}
                type="text"
                placeholder="Nombre"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                id="lastName"
                value={lastName}
                type="text"
                placeholder="Apellidos"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              id="email"
              value={email}
              type="email"
              placeholder="ejemplo@ejemplo.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Número de teléfono</label>
            <input
              id="phone"
              value={phone}
              type="tel"
              placeholder="(000) 000-0000"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Fecha de ingreso y salida (Aproximadas)</label>
            <div className="time-fields">
              <input
                id="checkInDate"
                value={checkInDate}
                type="date"
                required
                onChange={(e) => setCheckInDate(e.target.value)}
              />
              <input
                id="checkOutDate"
                value={checkOutDate}
                type="date"
                required
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Hora de entrada y salida (Aproximadas)</label>
            <div className="time-fields">
              <input
                id="checkInTime"
                value={checkInTime}
                type="time"
                required
                onChange={(e) => setCheckInTime(e.target.value)}
              />
              <input
                id="checkOutTime"
                value={checkOutTime}
                type="time"
                required
                onChange={(e) => setCheckOutTime(e.target.value)}
              />
            </div>
          </div>

          <p className="privacy-text">
            Gracias por su paciencia. Toda la información proporcionada es
            confidencial y solo se utilizará para fines de localización de
            contactos.
          </p>

          <button type="submit" className="submit-btn-form">
            Enviar
          </button>
          <button className="close-btn" onClick={onClose}>
            Cerrar
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default HotelFormModal;
