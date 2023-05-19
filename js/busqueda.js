const botonBuscar = document.querySelector("#buscar");
botonBuscar.addEventListener("click", buscarProductos);


function buscarProductos() {
    const terminoBusqueda = document.querySelector("#busqueda").value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.titulo.toLowerCase().includes(terminoBusqueda));
  
    contenedorProductos.innerHTML = "";
    if (productosFiltrados.length === 0) {
      contenedorProductos.innerHTML = "<p>No se encontraron productos</p>";
    } else {
      productosFiltrados.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
          <div class="contenedor">
            <img class="product-img" src="${producto.imagen}">
            <div class="producto-info">
              <div class="product-text">
                <h1 class="producto-titulo">${producto.titulo}</h1>
                <h2 class="producto-subtitulo">${producto.subtitulo}</h2>
                <p class="producto-descripcion">${producto.descripcion}</p>
              </div>
              <div class="product-price-btn">
                <p>$<span>${producto.precio}</span></p>
                <button type="button">buy now</button>
              </div>
            </div>
          </div>
        `;
        contenedorProductos.append(div);
      });
    }
  }
  