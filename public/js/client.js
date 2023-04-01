var socket = io.connect();

const formMensajes = document.getElementById("formMensajes");
const user = document.getElementById("user");
const message = document.getElementById("message");
const chat = document.getElementById("MensajesDelChat");

//Formulario mensajes
formMensajes.addEventListener("submit", (ev) => {
  ev.preventDefault();
  if (user.value) {
    const mensaje = {
      user: user.value,
      message: message.value,
    };

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
