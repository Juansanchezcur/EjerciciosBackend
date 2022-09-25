class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }

  getFullName() {
    return `${this.nombre} ${this.apellido} `;
  }

  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombreLibro, autorLibro) {
    this.libros.push({ nombre: nombreLibro, autor: autorLibro });
  }

  getBookNames() {
    let nombresDeLibros = "";
    this.libros.forEach((libro) => {
      nombresDeLibros += libro.nombre + ". ";
    });
    return nombresDeLibros;
  }
}

const Usuario = new Persona("Pulga", "Rodríguez");
console.log(Usuario);

console.log("Nombre y Apellido: ", Usuario.getFullName());
Usuario.addMascota("Caniche Toy");
console.log("cantidad de Mascotas: ", Usuario.countMascotas());

Usuario.addBook("El arte de la Guerra", "Sun Tzu");
Usuario.addBook("El alquimista", "Paulo Coelho");

console.log("Los nombres de los libros son: ", Usuario.getBookNames());

console.log(Usuario);
