const socket = io.connect();
const form = document.getElementById("form");
const name = document.getElementById("name");
const price = document.getElementById("price");
const thumbnail = document.getElementById("thumbnail");
const listado = document.getElementById("listado");

const formMensajes = document.getElementById("formMensajes");
const user = document.getElementById("user");
const message = document.getElementById("message");
const chat = document.getElementById("MensajesDelChat");

//Crea nuevo Producto

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const producto = {
    name: name.value,
    price: price.value,
    thumbnail: thumbnail.value,
  };
  console.log(producto);
  name.value = "";
  price.value = "";
  thumbnail.value = "";

  socket.emit("producto", producto);
});

//Crea lista de Productos luego de que los recibe

socket.on("dataNueva", (data) => {
  listado.innerHTML = `<tr>

  <th>Name</th>

  <th>Price</th>

  <th>Image</th>

</tr>`;
  data.productos.map((producto) => {
    let row = document.createElement("tr");
    row.innerHTML = ` 
  <tr>
      <td>${producto.name}</td>
      <td>${producto.price}</td>
      <td>
        <img class="imagen" src="${producto.thumbnail}" />
      </td>
    </tr>`;
    listado.appendChild(row);
  });
});

//Formulario mensajes
formMensajes.addEventListener("submit", (ev) => {
  ev.preventDefault();
  if (user.value) {
    const mensaje = {
      user: user.value,
      message: message.value,
    };
    console.log(mensaje);
    message.value = "";

    socket.emit("mensaje", mensaje);
  }
});

//Crea lista de mensajes luego de que los recibe
socket.on("listadoDeMensajes", (mensajes) => {
  chat.innerHTML = ``;
  chat.classList.add("chat");
  mensajes.map((mensaje) => {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = `<span class="usuario">${mensaje.user}: </span>     <span class="fecha"> ${mensaje.date} : </span>    <span class="mensaje">  ${mensaje.message}  </span> `;
    chat.appendChild(parrafo);
  });
});
