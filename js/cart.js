const cartIcon = document.getElementById("cart-icon");
let cart = localStorage.getItem("cart");
if (!cart) {
  cart = [];
} else {
  cart = JSON.parse(cart);
}

function actualizarCantidadCarrito() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

function agregarAlCarrito(producto) {
  cart.push(producto);
  localStorage.setItem("cart", JSON.stringify(cart));
  actualizarCantidadCarrito();
}

function mostrarElementosCarrito() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  cart.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img class="cart-item-img" src="${producto.imagen}">
      <div class="cart-item-info">
        <h3 class="cart-item-titulo">${producto.titulo}</h3>
        <p class="cart-item-precio">$${producto.precio}</p>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });
}

contenedorProductos.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const productoDiv = event.target.closest(".producto");
    const indiceProducto = [...contenedorProductos.children].indexOf(
      productoDiv
    );
    agregarAlCarrito(productos[indiceProducto]);
  }
});

cartIcon.addEventListener("click", mostrarElementosCarrito);

actualizarCantidadCarrito();

const finalizarCompraButton = document.getElementById("finalizar-compra");
const vaciarCarritoButton = document.getElementById("vaciar-carrito");

function finalizarCompra() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  actualizarCantidadCarrito();

  window.location.href = "./confirmacion.html";
}

function vaciarCarrito() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  actualizarCantidadCarrito();

  mostrarElementosCarrito();
}

vaciarCarritoButton.addEventListener("click", () => {
  vaciarCarrito();
  mostrarElementosCarrito();
});
