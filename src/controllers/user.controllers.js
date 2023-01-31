import passport from "passport";
import { transporter, message } from "../services/email.service.js";

const sendMailEthereal = async (req, res, user) => {
  try {
    await transporter.sendMail(message);
    console.log("Email enviado!");
  } catch (error) {
    console.log(error);
  }
};

const passportOptions = {
  badRequestMessage: "falta username / password / telephone",
};

export const signUp = (req, res, next) => {
  passport.authenticate("signup", passportOptions, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);
    res.json({ msg: "signup OK" });
    (message.text = `Se ha registrado un nuevo usuario en nuestro proyecto de CoderHouse, dejamos los datos a continuación:\n\n Username: ${req.body.username} \n TELEPHONE: ${req.body.telephone}`),
      sendMailEthereal();
  })(req, res, next);
};

export const login = (req, res) => {
  res.json({ msg: "Welcome!", user: req.user });
};

export const getHome = (req, res) => {
  res.json(req.session);
};
