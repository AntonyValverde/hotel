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
      <h2 className="animated-title">
        🌿 Planes de Hospedaje en Hotel Paradise 🌿
      </h2>
      <article className="flex1 text1">
        <div className="column">
          <h3 className="title">🌟 Plan Individual</h3>
          <FaUser className="icon" size={60} />
          <p className="parr">
            ✅ 1 día y 1 noche <br />
            ✅ Desayuno incluido <br />
            ✅ Acceso a piscina <br />
            ✅ Tour guiado <br />
            💰 <strong>Precio: ₡15,000</strong>
          </p>
          <button
            className="button-pay"
            onClick={() => openModal("Plan Individual")}
          >
            Reservar
          </button>
        </div>

        <div className="column">
          <h3 className="title">💑 Plan Duo</h3>
          <FaUserFriends className="icon" size={60} />
          <p className="parr">
            ✅ 2 días y 1 noche <br />
            ✅ Desayuno y cena incluidos <br />
            ✅ Spa relajante <br />
            ✅ Tour guiado <br />
            💰 <strong>Precio: ₡25,000</strong>
          </p>
          <button className="button-pay" onClick={() => openModal("Plan Duo")}>
            Reservar
          </button>
        </div>

        <div className="column">
          <h3 className="title">🎉 Plan Grupo</h3>
          <FaUsers className="icon" size={60} />
          <p className="parr">
            ✅ 3 días y 2 noches <br />
            ✅ Desayuno, almuerzo y cena incluidos <br />
            ✅ Tour guiado <br />
            💰 <strong>Precio: ₡40,000</strong>
          </p>
          <button
            className="button-pay"
            onClick={() => openModal("Plan Grupo")}
          >
            Reservar
          </button>
        </div>

        <div className="column">
          <h3 className="title">🏡 Plan Familiar</h3>
          <FaHome className="icon" size={60} />
          <p className="parr">
            ✅ 4 días y 3 noches <br />
            ✅ Desayuno, almuerzo y cena incluidos <br />
            ✅ Actividades recreativas <br />
            💰 <strong>Precio: ₡60,000</strong>
          </p>
          <button
            className="button-pay"
            onClick={() => openModal("Plan Familiar")}
          >
            Reservar
          </button>
        </div>
      </article>

      <HotelFormModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

export default Article;
