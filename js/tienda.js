const productos = [
  {
    imagen: "../img/corazonchoco.jpg",
    titulo: "Cuore chocolate",
    subtitulo: " Chocolate crema fresca de Macarpone",
    descripcion: " Biscocuelo de chocolate crema queso mascarpone ",
    precio: 6500,
  },
  {
    imagen: "../img/mimosa.jpg",
    titulo: "Torta Mimosa",
    subtitulo: " Torta de vainilla y crema ciboust",
    descripcion:
      " Biscocuelo de Vainlla crema chiboust aromatizada con vainlla y cubierta con trozos de biscocho",
    precio: 5500,
  },
  {
    imagen: "../img/selvanegra.jpg",
    titulo: "Selva Negra",
    subtitulo: " Chocolate crema y cerezas",
    descripcion:
      " Biscocuelo de chocolate relleno de crema fresca y cerezas amarenas",
    precio: 7500,
  },
  {
    imagen: "../img/torta-primavera.jpg",
    titulo: "Torta primavera",
    subtitulo: " Chocolate crema y frutillas",
    descripcion:
      " Biscocuelo de chocolate crema y frutillas aromatizada con vainlla y cubierta con trozos de biscocho",
    precio: 5500,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <div class="contenedor">
            <img class="product-img" src="${producto.imagen}"> 
            <div class="producto-info">
                <div class="product-text">
                    <h1 class="producto-titulo">${producto.titulo}</h1>
                    <h2 class="producto-subtitulo">${producto.subtitulo}</h2>
                    <p class="producto-descripcion">${producto.descripcion} </p>
                </div>
                <div class="product-price-btn">
                    <p >$<span>${producto.precio}</span></p>
                    <button type="button">agregar al carrito</button>         
                </div>
            </div>
        `;
    contenedorProductos.append(div);
  });
}

cargarProductos();
