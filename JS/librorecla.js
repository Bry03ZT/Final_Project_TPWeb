// ✅ SCRIPT DE VALIDACIÓN DEL FORMULARIO 
document.getElementById('formReclamo').addEventListener('submit', function(e) {e.preventDefault();

    const nombre = document.getElementById('name').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('phone').value.trim();
    const detalle = document.getElementById('claim').value.trim();

    if (!nombre || !dni || !email || !detalle) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    alert('✅ Reclamo enviado correctamente. Gracias por contactarnos.');
    document.getElementById('formReclamo').reset();
});
