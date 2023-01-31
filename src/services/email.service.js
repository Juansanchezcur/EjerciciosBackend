import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = createTransport({
  host: process.env.HOST,
  port: process.env.PORT_ETHEREAL,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
export const message = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: "Tenemos un nuevo registro",
};
