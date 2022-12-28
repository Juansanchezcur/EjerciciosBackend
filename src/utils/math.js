const randoms = (q) => {
  let data = {};
  for (let i = 0; i < q; i++) {
    let num = Math.floor(Math.random() * (1000 - 1) + 1);
    if (data[num]) {
      data[num] += 1;
    } else {
      data[num] = 1;
    }
  }
  return data;
};

process.on("message", (cantidad) => {
  console.log(cantidad);

  console.log("Start calculo");
  const resultado = randoms(cantidad);

  process.send(resultado);
});

module.exports = randoms;
