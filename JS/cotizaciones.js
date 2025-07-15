// Base de datos de productos (simulada)
let productos = [
    {
        id: 1,
        nombre: "Piso Altamira Blanco 45x45",
        descripcion: "Piso cerámico blanco de alta calidad",
        precio: 69.13,
        presentacion: "Caja 2.23 m²",
        categoria: "pisos"
    },
    {
        id: 2,
        nombre: "Piso Arce Natural Comercial 60x60",
        descripcion: "Piso cerámico natural para uso comercial",
        precio: 40.50,
        presentacion: "Caja 1.80 m²",
        categoria: "pisos"
    },
    {
        id: 3,
        nombre: "Piso Atenas Gris 45x45",
        descripcion: "Piso cerámico gris de acabado mate",
        precio: 56.87,
        presentacion: "Caja 2.23 m²",
        categoria: "pisos"
    },
    {
        id: 4,
        nombre: "Piso Atenas Marfil 45x45",
        descripcion: "Piso cerámico color marfil para interiores",
        precio: 56.87,
        presentacion: "Caja 2.23 m²",
        categoria: "pisos"
    },
    {
        id: 5,
        nombre: "Piso Brasilia Natural Ext. 45x45",
        descripcion: "Piso para exteriores con acabado antideslizante",
        precio: 54.86,
        presentacion: "Caja 2.23 m²",
        categoria: "pisos"
    },
    {
        id: 6,
        nombre: "Piso Bristol Caramelo 60x60",
        descripcion: "Piso cerámico color caramelo para áreas sociales",
        precio: 58.50,
        presentacion: "Caja 1.8 m²",
        categoria: "pisos"
    },
    {
        id: 7,
        nombre: "Piso Caoba Beige Com. 60x60",
        descripcion: "Piso comercial color beige de alta resistencia",
        precio: 36.00,
        presentacion: "Caja 1.8 m²",
        categoria: "pisos"
    },
    {
        id: 8,
        nombre: "Pared Amapola Hueso 30x60",
        descripcion: "Cerámica para pared color hueso",
        precio: 75.21,
        presentacion: "Caja 2.18 m²",
        categoria: "paredes"
    },
    {
        id: 9,
        nombre: "Pared Chocolate Azul 27x45",
        descripcion: "Cerámica para pared color azul chocolate",
        precio: 51.34,
        presentacion: "Caja 2.07 m²",
        categoria: "paredes"
    },
    {
        id: 10,
        nombre: "Pared Fresia Hueso 30x60",
        descripcion: "Cerámica para pared color hueso con textura",
        precio: 59.55,
        presentacion: "Caja 1.81 m²",
        categoria: "paredes"
    },
    {
        id: 11,
        nombre: "Pared Filetti Granito Beige Extra",
        descripcion: "Cerámica imitación granito beige",
        precio: 45.36,
        presentacion: "Caja 1.62 m²",
        categoria: "paredes"
    },
    {
        id: 12,
        nombre: "Pared Filetti Granito Gris",
        descripcion: "Cerámica imitación granito gris",
        precio: 60.91,
        presentacion: "Caja 1.62 m²",
        categoria: "paredes"
    },
    {
        id: 13,
        nombre: "Pared Legno Beige 25x40",
        descripcion: "Cerámica imitación madera color beige",
        precio: 47.36,
        presentacion: "Caja 2.20 m²",
        categoria: "paredes"
    },
    {
        id: 14,
        nombre: "Pared Mix Marfil 30x60",
        descripcion: "Cerámica para pared color marfil con diseño",
        precio: 51.95,
        presentacion: "Caja 1.81 m²",
        categoria: "paredes"
    },
    {
        id: 15,
        nombre: "Pared Onix Hueso 30x60",
        descripcion: "Cerámica para pared color hueso con brillo",
        precio: 59.55,
        presentacion: "Caja 1.81 m²",
        categoria: "paredes"
    },
    {
        id: 16,
        nombre: "Cocina Decorado Chocolate 27x45",
        descripcion: "Panel decorativo para cocina color chocolate",
        precio: 11.56,
        presentacion: "Unidad",
        categoria: "cocina"
    },
    {
        id: 17,
        nombre: "Cocina Decorado Fresia 30x60",
        descripcion: "Panel decorativo para cocina diseño fresia",
        precio: 13.75,
        presentacion: "Unidad",
        categoria: "cocina"
    },
    {
        id: 18,
        nombre: "Cocina Filetti Granito Beige",
        descripcion: "Panel decorativo imitación granito beige",
        precio: 13.50,
        presentacion: "Unidad",
        categoria: "cocina"
    },
    {
        id: 19,
        nombre: "Cocina Filetti Granito Gris",
        descripcion: "Panel decorativo imitación granito gris",
        precio: 13.50,
        presentacion: "Unidad",
        categoria: "cocina"
    },
    {
        id: 20,
        nombre: "Cocina Mix Marfil 30x60",
        descripcion: "Panel decorativo color marfil con diseño",
        precio: 12.60,
        presentacion: "Unidad",
        categoria: "cocina"
    },
    {
        id: 21,
        nombre: "Cocina Onix Hueso 30x60",
        descripcion: "Panel decorativo color hueso con brillo",
        precio: 13.75,
        presentacion: "Unidad",
        categoria: "cocina"
    },
    {
        id: 22,
        nombre: "Baño Decorado Amapola Hueso 30x60",
        descripcion: "Panel decorativo para baño color hueso",
        precio: 13.75,
        presentacion: "Unidad",
        categoria: "baño"
    },
    {
        id: 23,
        nombre: "Baño Decorado Mix Marfil 30x60",
        descripcion: "Panel decorativo para baño color marfil",
        precio: 12.60,
        presentacion: "Unidad",
        categoria: "baño"
    },
    {
        id: 24,
        nombre: "Baño Decorado Onix Hueso 30x60",
        descripcion: "Panel decorativo para baño color hueso brillante",
        precio: 13.75,
        presentacion: "Unidad",
        categoria: "baño"
    },
    {
        id: 25,
        nombre: "Pegamento Weber Piso Pared Gris 25 kg",
        descripcion: "Adhesivo cerámico para interior/exterior",
        precio: 30.00,
        presentacion: "Bolsa",
        categoria: "materiales"
    },
    {
        id: 26,
        nombre: "Pegamento Weber Revestimiento Blanco 25 kg",
        descripcion: "Adhesivo para revestimientos cerámicos",
        precio: 35.00,
        presentacion: "Bolsa",
        categoria: "materiales"
    },
    {
        id: 27,
        nombre: "Pegamento Base Yeso Porcelanatto 20 kg",
        descripcion: "Adhesivo para porcelanatos sobre yeso",
        precio: 42.00,
        presentacion: "Bolsa",
        categoria: "materiales"
    },
    {
        id: 28,
        nombre: "Fragua Color Gris Oscuro Bolsa",
        descripcion: "Mezcla para relleno de juntas color gris",
        precio: 4.50,
        presentacion: "Bolsa",
        categoria: "materiales"
    },
    {
        id: 29,
        nombre: "Fragua Color Blanco Bolsa",
        descripcion: "Mezcla para relleno de juntas color blanco",
        precio: 4.50,
        presentacion: "Bolsa",
        categoria: "materiales"
    },
    {
        id: 30,
        nombre: "Cruzeta Separador 3 mm Bolsa",
        descripcion: "Separadores para cerámica de 3mm",
        precio: 3.50,
        presentacion: "Bolsa",
        categoria: "materiales"
    },
    {
        id: 31,
        nombre: "Cruzeta Separador 5 mm Bolsa",
        descripcion: "Separadores para cerámica de 5mm",
        precio: 3.50,
        presentacion: "Bolsa",
        categoria: "materiales"
    },
    {
        id: 32,
        nombre: "Cinta para Junta Drywall",
        descripcion: "Cinta para juntas de drywall",
        precio: 5.00,
        presentacion: "Rollo",
        categoria: "materiales"
    },
    {
        id: 33,
        nombre: "Cinta de Papel Drywall",
        descripcion: "Cinta de papel para drywall",
        precio: 5.00,
        presentacion: "Rollo",
        categoria: "materiales"
    },
    {
        id: 34,
        nombre: "Cuchara Albañil Mango Plástico",
        descripcion: "Herramienta para aplicación de adhesivos",
        precio: 5.00,
        presentacion: "Unidad",
        categoria: "herramientas"
    },
    {
        id: 35,
        nombre: "Esponja Grande Multiuso",
        descripcion: "Esponja para limpieza de cerámica",
        precio: 2.00,
        presentacion: "Unidad",
        categoria: "herramientas"
    }
];

// Variables de estado
let productosSeleccionados = [];
let slideActual = 1;
const productosPorSlide = 3;

// Función para inicializar el carrusel
function inicializarCarrusel() {
    const carrusel = document.getElementById('carrusel-productos');
    carrusel.innerHTML = '';
    
    const totalSlides = Math.ceil(productos.length / productosPorSlide);
    
    // Crear controles del carrusel
    for (let i = 1; i <= totalSlides; i++) {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'slides';
        input.id = `slide-${i}`;
        if (i === 1) input.checked = true;
        carrusel.appendChild(input);
    }
    
    // Crear contenedor de slides
    const slidesContainer = document.createElement('div');
    slidesContainer.className = 'slides';
    
    // Crear slides con productos
    for (let i = 0; i < totalSlides; i++) {
        const slide = document.createElement('div');
        slide.className = 'productos-grid';
        
        const inicio = i * productosPorSlide;
        const fin = inicio + productosPorSlide;
        const productosSlide = productos.slice(inicio, fin);
        
        productosSlide.forEach(producto => {
            const yaSeleccionado = productosSeleccionados.some(p => p.id === producto.id);
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.presentacion}</p>
                <p>Precio: S/ <span class="precio">${producto.precio.toFixed(2)}</span></p>
                <p><small>Categoría: ${producto.categoria}</small></p>
                <button class="btn-agregar" data-id="${producto.id}" ${yaSeleccionado ? 'disabled' : ''}>
                    ${yaSeleccionado ? 'Agregado' : 'Agregar'}
                </button>
            `;
            slide.appendChild(productCard);
        });
        
        slidesContainer.appendChild(slide);
    }
    
    carrusel.appendChild(slidesContainer);
    
    // Crear controles de navegación
    const controles = document.createElement('div');
    controles.className = 'carrusel-controls';
    
    for (let i = 1; i <= totalSlides; i++) {
        const label = document.createElement('label');
        label.htmlFor = `slide-${i}`;
        label.className = 'carrusel-dot';
        controles.appendChild(label);
    }
    
    carrusel.appendChild(controles);
    
    // Agregar eventos a los botones
    document.querySelectorAll('.btn-agregar').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            agregarProductoSeleccionado(id);
        });
    });
}

// Función para renderizar productos seleccionados
function renderizarProductosSeleccionados() {
    const contenedor = document.getElementById('productos-seleccionados');
    contenedor.innerHTML = '';
    
    if (productosSeleccionados.length === 0) {
        contenedor.innerHTML = '<p>No hay productos seleccionados.</p>';
        return;
    }
    
    productosSeleccionados.forEach((producto, index) => {
        const productoElement = document.createElement('div');
        productoElement.className = 'product-card producto-seleccionado';
        productoElement.innerHTML = `
            <button class="btn-eliminar" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
            <h3>${producto.nombre}</h3>
            <p>${producto.presentacion}</p>
            <p>Precio: S/ <span class="precio">${producto.precio.toFixed(2)}</span></p>
            <label>Cantidad:
                <input type="number" min="1" value="${producto.cantidad}" 
                       class="cantidad" data-index="${index}">
            </label>
            <div class="subtotal">
                <label>Subtotal:
                    <input type="text" value="S/ ${(producto.precio * producto.cantidad).toFixed(2)}" readonly>
                </label>
            </div>
        `;
        contenedor.appendChild(productoElement);
    });
    
    // Event listeners para eliminar y cambiar cantidad
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            eliminarProductoSeleccionado(index);
        });
    });
    
    document.querySelectorAll('.cantidad').forEach(input => {
        input.addEventListener('change', function() {
            const index = parseInt(this.getAttribute('data-index'));
            actualizarCantidad(index, parseInt(this.value));
        });
    });
}

// Funciones CRUD para productos seleccionados
function agregarProductoSeleccionado(id) {
    const producto = productos.find(p => p.id === id);
    if (producto && !productosSeleccionados.some(p => p.id === id)) {
        productosSeleccionados.push({
            ...producto,
            cantidad: 1,
            subtotal: producto.precio
        });
        renderizarProductosSeleccionados();
        inicializarCarrusel(); // Actualizar botones en el carrusel
        calcularTotales();
    }
}

function eliminarProductoSeleccionado(index) {
    productosSeleccionados.splice(index, 1);
    renderizarProductosSeleccionados();
    inicializarCarrusel(); // Actualizar botones en el carrusel
    calcularTotales();
}

function actualizarCantidad(index, cantidad) {
    if (cantidad > 0 && index >= 0 && index < productosSeleccionados.length) {
        productosSeleccionados[index].cantidad = cantidad;
        productosSeleccionados[index].subtotal = productosSeleccionados[index].precio * cantidad;
        renderizarProductosSeleccionados();
        calcularTotales();
    }
}

// Funciones para ordenamiento
function ordenarProductos(criterio) {
    const [campo, direccion] = criterio.split('-');
    
    productos.sort((a, b) => {
        if (campo === 'nombre') {
            return direccion === 'asc' 
                ? a.nombre.localeCompare(b.nombre) 
                : b.nombre.localeCompare(a.nombre);
        } else if (campo === 'precio') {
            return direccion === 'asc' 
                ? a.precio - b.precio 
                : b.precio - a.precio;
        }
        return 0;
    });
    
    inicializarCarrusel();
}

// Función para buscar productos
function buscarProductos() {
    const termino = document.getElementById('buscarProducto').value.toLowerCase();
    
    if (termino === '') {
        inicializarCarrusel();
        return;
    }
    
    const resultados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino) ||
        producto.descripcion.toLowerCase().includes(termino) ||
        producto.categoria.toLowerCase().includes(termino)
    );
    
    // Mostrar resultados en el carrusel
    const carrusel = document.getElementById('carrusel-productos');
    carrusel.innerHTML = '';
    
    if (resultados.length === 0) {
        carrusel.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }
    
    const resultadosPorSlide = Math.ceil(resultados.length / productosPorSlide);
    
    // Crear slides con resultados
    const slidesContainer = document.createElement('div');
    slidesContainer.className = 'slides';
    
    for (let i = 0; i < resultadosPorSlide; i++) {
        const slide = document.createElement('div');
        slide.className = 'productos-grid';
        
        const inicio = i * productosPorSlide;
        const fin = inicio + productosPorSlide;
        const productosSlide = resultados.slice(inicio, fin);
        
        productosSlide.forEach(producto => {
            const yaSeleccionado = productosSeleccionados.some(p => p.id === producto.id);
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.presentacion}</p>
                <p>Precio: S/ <span class="precio">${producto.precio.toFixed(2)}</span></p>
                <button class="btn-agregar" data-id="${producto.id}" ${yaSeleccionado ? 'disabled' : ''}>
                    ${yaSeleccionado ? 'Agregado' : 'Agregar'}
                </button>
            `;
            slide.appendChild(productCard);
        });
        
        slidesContainer.appendChild(slide);
    }
    
    carrusel.appendChild(slidesContainer);
    
    // Agregar eventos a los botones
    document.querySelectorAll('.btn-agregar').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            agregarProductoSeleccionado(id);
        });
    });
}

// Función para calcular totales
function calcularTotales() {
    let subtotal = 0;
    
    productosSeleccionados.forEach(producto => {
        subtotal += producto.subtotal;
    });
    
    const igv = subtotal * 0.18;
    const total = subtotal + igv;
    
    document.querySelector('.total-subtotal').textContent = subtotal.toFixed(2);
    document.querySelector('.total-igv').textContent = igv.toFixed(2);
    document.querySelector('.total-general').textContent = total.toFixed(2);
    
    actualizarResumenCotizacion();
}

function actualizarResumenCotizacion() {
    const cuerpoResumen = document.getElementById('cuerpo-resumen');
    cuerpoResumen.innerHTML = '';
    
    productosSeleccionados.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>S/ ${producto.precio.toFixed(2)}</td>
            <td>S/ ${producto.subtotal.toFixed(2)}</td>
        `;
        cuerpoResumen.appendChild(fila);
    });
}

// Función para limpiar TODO el formulario
function limpiarFormularioCompleto() {
    // Limpiar datos del cliente
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('mensaje').value = '';
    
    // Limpiar productos seleccionados
    productosSeleccionados = [];
    renderizarProductosSeleccionados();
    inicializarCarrusel();
    calcularTotales();
    
    // Limpiar búsqueda si existe
    if (document.getElementById('buscarProducto')) {
        document.getElementById('buscarProducto').value = '';
    }
    
    // Resetear ordenación si existe
    if (document.getElementById('ordenarProductos')) {
        document.getElementById('ordenarProductos').value = 'nombre-asc';
    }
}

// Función para eliminar SOLO los productos seleccionados
function eliminarTodosProductos() {
    if (productosSeleccionados.length === 0) {
        alert('No hay productos seleccionados para eliminar');
        return;
    }
    
    if (confirm('¿Está seguro que desea eliminar todos los productos seleccionados?')) {
        productosSeleccionados = [];
        renderizarProductosSeleccionados();
        inicializarCarrusel();
        calcularTotales();
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    inicializarCarrusel();
    
    // Event listeners
    document.getElementById('btnBuscar').addEventListener('click', buscarProductos);
    document.getElementById('buscarProducto').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') buscarProductos();
    });
    
    document.getElementById('ordenarProductos').addEventListener('change', function() {
        ordenarProductos(this.value);
    });
    
    document.getElementById('btnGuardarCotizacion').addEventListener('click', function() {
        if (productosSeleccionados.length === 0) {
            alert('Por favor seleccione al menos un producto');
            return;
        }
        guardarCotizacion();
    });
    
    // Agregar estos event listeners para limpiar formularios
    document.getElementById('btnLimpiarTodo').addEventListener('click', limpiarFormularioCompleto);
    document.getElementById('btnEliminarTodos').addEventListener('click', eliminarTodosProductos);
});

function guardarCotizacion() {
    // Implementación para guardar la cotización
    const cotizacion = {
        fecha: new Date().toISOString(),
        productos: productosSeleccionados,
        total: parseFloat(document.querySelector('.total-general').textContent)
    };
    
    // Aquí iría el código para guardar en localStorage o enviar al servidor
    console.log('Cotización a guardar:', cotizacion);
    alert('Cotización guardada exitosamente');
}