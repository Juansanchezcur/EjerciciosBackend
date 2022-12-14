export const validateLogIn = (req, res, next) => {
  if (req.session.info && req.session.info.loggedIn) next();
  else
    res.status(401).json({
      msg: "no puedes realizar esta acción porque no estás logueado, por favor loguea con tu usuario y contraseña",
    });
};
