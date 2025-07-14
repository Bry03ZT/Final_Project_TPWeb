const contenedor = document.getElementById("carrito-container");
const totalDiv = document.getElementById("total");

    function mostrarCarrito() {
        const carrito = JSON.parse(localStorage.getItem("carritoSolfix")) || [];

        if (carrito.length === 0) {
          contenedor.innerHTML = "<h3>No hay productos en el carrito.</h3>";
          totalDiv.textContent = "";
          return;
        }

        let html = "<table border='1' style='margin: 0 auto; border-collapse: collapse;'>";
        html += "<tr><th>Producto</th><th>Precio</th></tr>";
        let total = 0;

        carrito.forEach(item => {
          html += `<tr><td>${item.nombre}</td><td>S/${item.precio.toFixed(2)}</td></tr>`;
          total += item.precio;
        });

        html += "</table>";
        contenedor.innerHTML = html;
        totalDiv.innerHTML = `<h3>Total a pagar: S/${total.toFixed(2)}</h3>`;
    }

    function vaciarCarrito() {
      if (confirm("¿Estás seguro de vaciar el carrito?")) {
        localStorage.removeItem("carritoSolfix");
        mostrarCarrito();
      }
    }

    function volverComprar() {
      window.location.href = "realizarcompra.html";
    }

    document.addEventListener("DOMContentLoaded", mostrarCarrito);

document.addEventListener("DOMContentLoaded", function() {
    // Asegúrate de que el código se ejecute después de que el DOM esté completamente cargado

    // Obtener el ícono del carrito
    const iconoCarrito = document.getElementById("iconoCarrito");

    // Verificar si el ícono existe
    if (iconoCarrito) {
        iconoCarrito.addEventListener("click", function() {
            // Redirigir a la página carrito.html
            window.location.href = "carrito.html";
        });
    } else {
        console.error("No se encontró el ícono del carrito.");
    }
});

function volverPagina() {
    window.history.back(); // Regresa a la página anterior
}
