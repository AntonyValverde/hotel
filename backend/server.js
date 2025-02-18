import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/api/sendEmail", async (req, res) => {
  try {
    const { email, name, checkInDate, checkOutDate, selectedPlan } = req.body;

    if (!email || !name || !checkInDate || !checkOutDate) {
      return res
        .status(400)
        .json({ success: false, error: "Faltan parámetros" });
    }

    const mailOptions = {
      from: `"Hotel Admin" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Confirmación de Reserva",
      html: `
        <h2>¡Hola ${name}!</h2>
        <p>Tu reserva se ha realizado con éxito.</p>
        <p><strong>Plan:</strong> ${selectedPlan || "Registro Normal"}</p>
        <p><strong>Check-in:</strong> ${checkInDate}</p>
        <p><strong>Check-out:</strong> ${checkOutDate}</p>
        <br>
        <p>Nos vemos pronto.</p>
        <p>Atentamente, <br> El equipo del Hotel</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ success: false, error: "Error enviando el correo" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
