import React, { useState } from "react";
import { FaUser, FaUsers, FaUserFriends, FaHome } from "react-icons/fa";
import "../styles/Article.css";
import HotelFormModal from "./HotelFormModal";

function Article() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalIsOpen(true);
  };

  return (
    <>
      <article className="flex1 text1">
        <div className="column">
          <h3 className="title">Plan Individual</h3>
          <FaUser className="icon" size={60} />
          <p className="parr">
            Un día y una noche. <br /> Precio: ₡15000.
          </p>
          <button
            className="button-pay"
            onClick={() => openModal("Plan Individual")}
          >
            Reservar
          </button>
        </div>

        <div className="column">
          <h3 className="title">Plan Duo</h3>
          <FaUserFriends className="icon" size={60} />
          <p className="parr">
            Dos días y una noche. <br /> Precio: ₡25000.
          </p>
          <button className="button-pay" onClick={() => openModal("Plan Duo")}>
            Reservar
          </button>
        </div>

        <div className="column">
          <h3 className="title">Plan Grupo</h3>
          <FaUsers className="icon" size={60} />
          <p className="parr">
            Tres días y dos noches. <br /> Precio: ₡40000.
          </p>
          <button
            className="button-pay"
            onClick={() => openModal("Plan Grupo")}
          >
            Reservar
          </button>
        </div>

        <div className="column">
          <h3 className="title">Plan Familiar</h3>
          <FaHome className="icon" size={60} />
          <p className="parr">
            4 días y tres noches. <br /> Precio: ₡60000.
          </p>
          <button
            className="button-pay"
            onClick={() => openModal("Plan Familiar")}
          >
            Reservar
          </button>
        </div>
      </article>

      {/* Pasamos el plan seleccionado al modal */}
      <HotelFormModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

export default Article;
