import React from "react";
import Modal from "react-modal";
import "./HotelFormModal.css";

Modal.setAppElement("#root");

const HotelFormModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>Registro de hotel</h2>
        <p>
          ¡Bienvenido a nuestro hotel! Por favor, rellene la siguiente
          información.
        </p>

        <form className="hotel-form">
          <div className="form-group">
            <label>Nombre</label>
            <div className="name-fields">
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellidos" required />
            </div>
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" placeholder="ejemplo@ejemplo.com" required />
          </div>

          <div className="form-group">
            <label>Número de teléfono</label>
            <input type="tel" placeholder="(000) 000-0000" required />
          </div>

          <div className="form-group">
            <label>Fecha de ingreso</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Hora de entrada y salida (Aproximadas)</label>
            <div className="time-fields">
              <input type="time" required />
              <input type="time" required />
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
