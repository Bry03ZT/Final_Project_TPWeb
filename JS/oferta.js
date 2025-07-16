document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalOferta");
    const cerrarBtn = document.getElementById("cerrarModal");

    // Mostrar el modal después de 2 segundos
    setTimeout(() => {
      modal.style.display = "block";
    }, 2000);

    // Cerrar el modal
    cerrarBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Cerrar al hacer clic fuera del contenido
    window.onclick = function (e) {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    };
});
