// Inicio de sesión
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let loginName = document.getElementById("loginName").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }

    let user = users.find(
      (u) => u.name === loginName && u.password === loginPassword
    );
    if (user) {
      window.location.href = "../pages/tienda.html";
      // Realizar acciones adicionales después de iniciar sesión, como redirigir a otra página
    } else {
      console.log("Nombre de usuario o contraseña incorrectos");
    }

    document.getElementById("login-form").reset();
  });
