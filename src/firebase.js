import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9bYZg0xaXLXDO1zmJc-QLr2jxCaxYluo",
  authDomain: "hotel-11cac.firebaseapp.com",
  projectId: "hotel-11cac",
  storageBucket: "hotel-11cac.firebasestorage.app",
  messagingSenderId: "445012275277",
  appId: "1:445012275277:web:407ea0ca0edeccdda16c04",
  measurementId: "G-YEKC0ZJ834",
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Función para guardar calificación
export const saveRating = async (rating) => {
  try {
    const timestamp = new Date().toISOString();
    await addDoc(collection(db, "calificacion"), {
      rating,
      timestamp,
    });
    console.log("Rating saved successfully!");
  } catch (error) {
    console.error("Error saving rating: ", error);
  }
};

export default app;
