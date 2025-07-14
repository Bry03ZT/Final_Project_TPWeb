// Función para el menú hamburguesa
function toggleMenu() {
    const nav = document.getElementById("myTopnav");
    if (nav) {
        nav.classList.toggle("responsive");
    }
}

// Hacer la función accesible globalmente
window.toggleMenu = toggleMenu;

// Funciones para pantalla completa
function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

// Hacer funciones accesibles globalmente
window.openFullscreen = openFullscreen;
window.closeFullscreen = closeFullscreen;