// Variables globales
const empresa = "SOLFIX PERÚ S.A.C.";
const contactos = { telefono: "01-123-4567", correo: "info@solfix.com" };

// Función para mostrar servicios (usada en servicios.html)

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
/*Avance 4*/
let servicios = [];

function mostrarServicios(lista = servicios) {
  const tbody = document.querySelector("#tabla-servicios tbody");
  tbody.innerHTML = "";
  lista.forEach((servicio, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${servicio.nombre}</td>
        <td>${servicio.descripcion}</td>
        <td>
          <button onclick="editarServicio(${index})">Editar</button>
          <button onclick="eliminarServicio(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-servicio").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;

    servicios.push({ nombre, descripcion });
    mostrarServicios();
    this.reset();
  });

  document.getElementById("busqueda").addEventListener("input", function () {
    const termino = this.value.toLowerCase();
    const filtrados = servicios.filter(s =>
      s.nombre.toLowerCase().includes(termino) || s.descripcion.toLowerCase().includes(termino)
    );
    mostrarServicios(filtrados);
  });
});

function eliminarServicio(index) {
  servicios.splice(index, 1);
  mostrarServicios();
}

function editarServicio(index) {
  const servicio = servicios[index];
  document.getElementById("nombre").value = servicio.nombre;
  document.getElementById("descripcion").value = servicio.descripcion;
  servicios.splice(index, 1);
}
