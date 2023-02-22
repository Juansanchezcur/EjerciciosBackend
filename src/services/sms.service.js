import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

export const twilioClient = twilio(
  process.env.AC_TWILIO_ACCOUNT_SID,
  process.env.TOKEN
);
