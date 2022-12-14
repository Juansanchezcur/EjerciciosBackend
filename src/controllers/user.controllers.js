const users = [
  {
    username: "Daniel",
    password: "asd123",
    admin: true,
  },
];

export const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password, req.body);
  const index = users.findIndex(
    (user) => user.username === username && user.password === password
  );
  console.log(index);
  if (index < 0)
    res.status(401).json({ msg: "no estás registrado como usuario" });
  else {
    const user = users[index];

    req.session.info = {
      loggedIn: true,
      contador: 1,
      username: user.username,
      admin: user.admin,
    };
    res.json({ msg: `Bienvenido ${username}` });
  }
};

export const visit = (req, res) => {
  req.session.info.contador++;
  res.json({
    msg: `${req.session.info.username} ha visitado el sitio ${req.session.info.contador} veces`,
  });
};

export const logout = (req, res) => {
  const nombre = req.session.info.username;
  req.session.destroy((err) => {
    res.json({ msg: `Nos vemos ${nombre} ` });
  });
};
