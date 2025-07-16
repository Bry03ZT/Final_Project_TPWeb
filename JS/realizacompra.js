document.addEventListener('DOMContentLoaded', function () {
    const productosContainer = document.querySelector('.productos-grid');
    const productos = Array.from(productosContainer.children);
    const productosOriginales = productos.map(p => p.cloneNode(true)); // Guardamos copia original

    const selectCategoria = document.getElementById('categoria');
    const selectOrden = document.getElementById('ordenar');

    function filtrarYOrdenar() {
        // Obtener valores de los selects
        const categoria = selectCategoria.value;
        const orden = selectOrden.value;

        // Limpiar contenedor
        productosContainer.innerHTML = '';

        // Copiar productos desde la copia original
        let productosFiltrados = productosOriginales.map(p => p.cloneNode(true));

        // Filtrado
        if (categoria !== 'todos') {
            productosFiltrados = productosFiltrados.filter(p =>
                p.dataset.categoria === categoria
            );
        }

        // Ordenamiento
        if (orden === 'nombre') {
            productosFiltrados.sort((a, b) =>
                a.dataset.nombre.localeCompare(b.dataset.nombre)
            );
        } else if (orden === 'precio') {
            productosFiltrados.sort((a, b) =>
                parseFloat(a.dataset.precio) - parseFloat(b.dataset.precio)
            );
        }

        // Insertar
        productosFiltrados.forEach(p => productosContainer.appendChild(p));
    }

    // Eventos
    selectCategoria.addEventListener('change', filtrarYOrdenar);
    selectOrden.addEventListener('change', filtrarYOrdenar);
});
