import { twilioClient } from "../services/sms.service.js";
import dotenv from "dotenv";
dotenv.config();
const logger = require("../utils/logger");

export const sendWhattsapToHost = async (msj) => {
  try {
    const message = {
      body: msj,
      from: process.env.CEL,
      to: "whatsapp:+" + 59899436195,
    };
    await twilioClient.messages.create(message);
  } catch (error) {
    logger.error("Hubo un error, por favor verifica los datos" + error);
  }
};

export const sendWhatsappToClient = async (msj) => {
  const message = {
    body: msj,
    from: process.env.CEL,
    to: "whatsapp:+" + 59899436195,
  };
  await twilioClient.messages.create(message);
};
