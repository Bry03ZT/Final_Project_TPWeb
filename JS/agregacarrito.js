let carrito = [];

    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        alert(`Producto agregado: ${nombre}\nPrecio: S/${precio}`);
        document.getElementById('carrito-count').textContent = carrito.length;
        localStorage.setItem('carritoSolfix', JSON.stringify(carrito));
    }

    // Restaurar productos del carrito si ya existen
    document.addEventListener('DOMContentLoaded', function () {
        const datosGuardados = localStorage.getItem('carritoSolfix');
            if (datosGuardados) {
                carrito = JSON.parse(datosGuardados);
                document.getElementById('carrito-count').textContent = carrito.length;
            }
    });
