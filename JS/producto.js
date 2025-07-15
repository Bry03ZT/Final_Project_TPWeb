document.addEventListener("DOMContentLoaded", function () {
    const ordenarSelect = document.getElementById("ordenar");
    const categoriaSelect = document.getElementById("categoria");
    const secciones = document.querySelectorAll("section");

    function filtrarYOrdenar() {
        const categoria = categoriaSelect.value;
        const orden = ordenarSelect.value;

        secciones.forEach(seccion => {
            // Saltar la sección de filtros
            if (seccion.classList.contains("filtros")) return;

            const productos = seccion.querySelectorAll(".producto");
            let visible = false;

            const productosArray = Array.from(productos);

            productosArray.forEach(producto => {
              const categoriaProd = producto.dataset.categoria || "";
              const coincide = categoria === "todos" || categoriaProd === categoria;

              producto.style.display = coincide ? "block" : "none";
              if (coincide) visible = true;
            });

            seccion.style.display = visible ? "block" : "none";

            if (orden !== "default") {
              const contenedor = seccion.querySelector(".productos-grid");
              const productosVisibles = productosArray.filter(p => p.style.display === "block");

              productosVisibles.sort((a, b) => {
                if (orden === "nombre") {
                  return a.dataset.nombre.localeCompare(b.dataset.nombre);
                } else if (orden === "precio") {
                  return parseFloat(a.dataset.precio) - parseFloat(b.dataset.precio);
                }
              });

              productosVisibles.forEach(p => contenedor.appendChild(p));
            }
        });
    }

    ordenarSelect.addEventListener("change", filtrarYOrdenar);
    categoriaSelect.addEventListener("change", filtrarYOrdenar);
});
