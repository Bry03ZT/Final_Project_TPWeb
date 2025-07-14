// Variables globales
const empresa = "SOLFIX PERÚ S.A.C.";
const servicios = ["Elevadores", "Adhesivos", "Acabados", "Paneles Solares"];
const contactos = { telefono: "01-123-4567", correo: "info@solfix.com" };

// Función para mostrar servicios (usada en servicios.html)
function mostrarServiciosEnPagina() {
  const contenedor = document.getElementById("lista-servicios-js");
  if (contenedor) {
    contenedor.innerHTML = "<h3>Servicios Disponibles:</h3><ul></ul>";
    const lista = contenedor.querySelector("ul");
    servicios.forEach((servicio) => {
      const item = document.createElement("li");
      item.textContent = servicio;
      lista.appendChild(item);
    });
  }
}

// Consulta de horarios
function verificarAtencion(dia) {
  if (!dia) return;
  let mensaje = "";
  switch (dia.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
      mensaje = "Abierto de 08:00 a 18:00";
      break;
    case "sábado":
      mensaje = "Abierto de 08:00 a 13:00";
      break;
    case "domingo":
      mensaje = "Cerrado";
      break;
    default:
      mensaje = "Día no válido";
  }
  alert(mensaje);
}

// Cambiar título si existe (añadir emoji)
function cambiarTituloSiExiste() {
  const titulo = document.querySelector(".titulo-principal");
  if (titulo && !titulo.textContent.includes("🔧")) {
    titulo.textContent += " 🔧";
  }
}

// Mostrar u ocultar la ventana flotante
function mostrarVentana() {
  const ventana = document.getElementById("ventana-flotante");
  if (ventana) ventana.style.display = "block";
}

function cerrarVentana() {
  const ventana = document.getElementById("ventana-flotante");
  if (ventana) ventana.style.display = "none";
}

// Validación del formulario de contacto (solo para contacto.html)
document.addEventListener("DOMContentLoaded", () => {
  cambiarTituloSiExiste();
  mostrarServiciosEnPagina(); // Se ejecutará solo si el div existe

  const formulario = document.getElementById("formContacto");
  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre");
      const correo = document.getElementById("correo");
      const mensaje = document.getElementById("mensaje");

      let validado = true;

      if (nombre.value === "") {
        nombre.style.borderColor = "red";
        validado = false;
      } else {
        nombre.style.borderColor = "";
      }

      if (correo.value === "") {
        correo.style.borderColor = "red";
        validado = false;
      } else {
        correo.style.borderColor = "";
      }

      if (mensaje.value === "") {
        mensaje.style.borderColor = "red";
        validado = false;
      } else {
        mensaje.style.borderColor = "";
      }

      if (validado) {
        document.getElementById("mensajeConfirmacion").style.display = "block";
        formulario.reset();
      } else {
        alert("Por favor, complete todos los campos.");
      }
    });
  }
});