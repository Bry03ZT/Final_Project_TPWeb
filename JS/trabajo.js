// Variables globales para filtros
let filtrosActivos = {
    area: 'all',
    busqueda: '',
    experiencia: 0,
    ordenSalario: ''
};

// Datos de vacantes actualizados
const jobsData = [
    { 
        title: 'Asesor Comercial', 
        area: 'ventas',
        location: 'Arequipa', 
        type: 'Tiempo Completo',
        salary: 'S/2,500 - S/3,500', 
        minExp: 1,
        description: 'Venta de productos para construcción a clientes corporativos y minoristas.',
        requirements: 'Experiencia en ventas mínima de 2 años. Conocimiento del sector construcción.'
    },
    { 
        title: 'Técnico Instalador', 
        area: 'tecnico', 
        location: 'Lima', 
        type: 'Tiempo Completo', 
        salary: 'S/2,800 - S/3,800', 
        minExp: 2,
        description: 'Instalación y mantenimiento de elevadores residenciales.',
        requirements: 'Experiencia en instalaciones eléctricas/mecánicas. Disponibilidad para viajar.'
    },
    { 
        title: 'Coordinador Logístico', 
        area: 'logistica', 
        location: 'Trujillo', 
        type: 'Medio Tiempo',
        salary: 'S/3,500 - S/4,000', 
        minExp: 3,
        description: 'Planificación y seguimiento de rutas de distribución.',
        requirements: 'Experiencia en logística. Manejo de sistemas de seguimiento.'
    },
    { 
        title: 'Asistente Administrativo', 
        area: 'administrativo', 
        location: 'Arequipa', 
        type: 'Tiempo Completo', 
        salary: 'S/3,500 - S/4,000', 
        minExp: 1,
        description: 'Apoyo en gestión documental y atención al cliente.',
        requirements: 'Manejo de office. Experiencia en atención al cliente.'
    }
];

// Función principal para aplicar filtros
function aplicarFiltros() {
    // Obtener valores
    filtrosActivos = {
        area: document.getElementById('jobFilter').value,
        busqueda: document.getElementById('searchInput').value.toLowerCase(),
        experiencia: parseInt(document.getElementById('expFilter').value) || 0,
        ordenSalario: document.getElementById('salaryOrder').value
    };
    
    // Filtrar y ordenar
    let resultados = [...jobsData];
    
    // Aplicar filtros
    resultados = resultados.filter(job => {
        const cumpleArea = filtrosActivos.area === 'all' || job.area === filtrosActivos.area;
        const cumpleBusqueda = job.title.toLowerCase().includes(filtrosActivos.busqueda);
        const cumpleExperiencia = job.minExp >= filtrosActivos.experiencia;
        return cumpleArea && cumpleBusqueda && cumpleExperiencia;
    });
    
    // Aplicar ordenamiento
    if (filtrosActivos.ordenSalario) {
        resultados.sort((a, b) => {
            const salarioA = parseFloat(a.salary.replace(/[^0-9.]/g, ''));
            const salarioB = parseFloat(b.salary.replace(/[^0-9.]/g, ''));
            return filtrosActivos.ordenSalario === 'asc' ? salarioA - salarioB : salarioB - salarioA;
        });
    } else {
        // Orden alfabético por defecto
        resultados.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    renderizarVacantes(resultados);
}

function resetFiltros() {
    document.getElementById('jobFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    document.getElementById('expFilter').value = '';
    document.getElementById('salaryOrder').value = '';
    filtrosActivos = {
        area: 'all',
        busqueda: '',
        experiencia: 0,
        ordenSalario: ''
    };
    renderizarVacantes(jobsData);
}

// Función para renderizar vacantes
function renderizarVacantes(vacantes) {
    const contenedor = document.getElementById('jobsContainer');
    contenedor.innerHTML = '';

    if (vacantes.length === 0) {
        contenedor.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No se encontraron vacantes con los filtros aplicados</p>
            </div>
        `;
        return;
    }

    vacantes.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <div class="job-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-clock"></i> ${job.type}</span>
                <span><i class="fas fa-building"></i> ${job.area.toUpperCase()}</span>
                <span><i class="fas fa-money-bill-wave"></i> ${job.salary}</span>
                <span><i class="fas fa-briefcase"></i> ${job.minExp}+ años</span>
            </div>
            <p class="job-description">${job.description}</p>
            <p><strong>Requisitos:</strong> ${job.requirements}</p>
            <button class="apply-button" data-job="${job.title}">Postularme</button>
        `;
        contenedor.appendChild(card);
    });

    // Event listeners para botones de postulación
    document.querySelectorAll('.apply-button').forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.getAttribute('data-job');
            document.getElementById('applicantPosition').value = jobTitle;
            document.querySelector('.job-form-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
}

// Datos para otras secciones (se mantienen igual)
const benefitsData = [
    { icon: 'fas fa-medal', title: 'Crecimiento Profesional', description: 'Programas de capacitación y desarrollo continuo' },
    { icon: 'fas fa-briefcase-medical', title: 'Seguro Médico', description: 'Cobertura médica para ti y tu familia' },
    { icon: 'fas fa-coins', title: 'Beneficios Económicos', description: 'Bonos por desempeño y utilidades' },
    { icon: 'fas fa-calendar-alt', title: 'Flexibilidad', description: 'Horarios flexibles y trabajo remoto parcial' },
    { icon: 'fas fa-utensils', title: 'Alimentación', description: 'Vales de restaurante y snacks saludables' },
    { icon: 'fas fa-home', title: 'Home Office', description: 'Posibilidad de trabajo remoto según el puesto' }
];

const testimonialsData = [
    {
        name: 'Carlos Mendoza',
        role: 'Jefe de Ventas',
        content: 'Llevo 5 años en Solfix y he crecido profesionalmente gracias a las oportunidades que me han dado. El ambiente laboral es excelente.'
    },
    {
        name: 'Ana Torres',
        role: 'Técnica Instaladora',
        content: 'Como mujer en el área técnica, me siento valorada y respetada. La empresa fomenta la igualdad de oportunidades.'
    },
    {
        name: 'Luis Ramírez',
        role: 'Coordinador Logístico',
        content: 'Los beneficios superan a los de otras empresas del sector. Lo que más valoro es el equilibrio entre vida laboral y personal.'
    }
];

const processSteps = [
    { title: 'Postulación', description: 'Envía tu CV y completa nuestro formulario' },
    { title: 'Evaluación', description: 'Revisión de tu perfil por nuestro equipo de RRHH' },
    { title: 'Entrevista', description: 'Conversación para conocernos mejor' },
    { title: 'Pruebas Técnicas', description: 'Evaluación de habilidades específicas' },
    { title: 'Contratación', description: 'Bienvenido al equipo Solfix' }
];

// Funciones de renderizado para otras secciones
function renderBenefits() {
    const benefitsContainer = document.getElementById('benefitsContainer');
    benefitsContainer.innerHTML = '';
    
    benefitsData.forEach((benefit, index) => {
        const benefitCard = document.createElement('div');
        benefitCard.className = 'benefit-card';
        benefitCard.innerHTML = `
            <div class="benefit-icon"><i class="${benefit.icon}"></i></div>
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        `;
        benefitCard.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
        benefitCard.style.opacity = '0';
        benefitsContainer.appendChild(benefitCard);
    });
}

function renderTestimonials() {
    const testimonialsSlider = document.getElementById('testimonialsSlider');
    testimonialsSlider.innerHTML = '';

    // Crear slides para cada testimonio
    testimonialsData.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        slide.style.display = index === 0 ? 'block' : 'none'; // Mostrar solo el primero inicialmente
        slide.innerHTML = `
            <div class="testimonial-content">
                <p>${testimonial.content}</p>
            </div>
            <div class="testimonial-author">${testimonial.name}</div>
            <div class="testimonial-role">${testimonial.role}</div>
        `;
        testimonialsSlider.appendChild(slide);
    });
}

function renderProcessSteps() {
    const processStepsContainer = document.getElementById('processSteps');
    processStepsContainer.innerHTML = '';
    
    processSteps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'process-step';
        stepElement.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <h4 class="step-title">${step.title}</h4>
            <p class="step-description">${step.description}</p>
        `;
        processStepsContainer.appendChild(stepElement);
    });
}

function populatePositionSelect() {
    const applicantPosition = document.getElementById('applicantPosition');
    applicantPosition.innerHTML = '<option value="">Seleccione una opción</option>';
    
    const uniqueJobs = {};
    jobsData.forEach(job => {
        if (!uniqueJobs[job.title]) {
            const option = document.createElement('option');
            option.value = job.title;
            option.textContent = job.title;
            applicantPosition.appendChild(option);
            uniqueJobs[job.title] = true;
        }
    });
}

// Funcionalidad del slider de testimonios
// Variables globales para control del slider
let currentTestimonial = 0;
let autoSlideInterval;

// Función para mostrar un testimonio específico
function showTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;

    // Asegurarse que el índice esté dentro de los límites
    if (index >= totalSlides) currentTestimonial = 0;
    if (index < 0) currentTestimonial = totalSlides - 1;

    // Ocultar todos los slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Mostrar el slide actual
    slides[currentTestimonial].style.display = 'block';
}

// Función para iniciar el auto-desplazamiento
function startAutoSlide() {
    clearInterval(autoSlideInterval); // Limpiar intervalo existente
    autoSlideInterval = setInterval(() => {
        currentTestimonial++;
        showTestimonial(currentTestimonial);
    }, 5000); // Cambiar cada 5 segundos
}

// Manejo del formulario
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(jobForm);
    const formValues = Object.fromEntries(formData.entries());
    
    if (!formValues.privacyPolicy) {
        alert('Debes aceptar la política de privacidad');
        return;
    }
    
    // Simular envío
    console.log('Datos del formulario:', formValues);
    
    // Mostrar modal de confirmación
    document.getElementById('modalTitle').textContent = '¡Postulación Exitosa!';
    document.getElementById('modalMessage').textContent = `Gracias ${formValues.applicantName} por postular al puesto de ${formValues.applicantPosition}. Revisaremos tu información y nos pondremos en contacto contigo pronto.`;
    modal.style.display = 'block';
    
    // Limpiar formulario
    jobForm.reset();
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todo el contenido
    renderBenefits();
    renderizarVacantes(jobsData);
        // Testimonios
    renderTestimonials();
    showTestimonial(0); // Mostrar el primer testimonio
    startAutoSlide();   // Iniciar auto-desplazamiento
    setupTestimonialControls(); // Configurar controles manuales
    renderProcessSteps();
    populatePositionSelect();

    // Event Listeners
    document.getElementById('filterButton').addEventListener('click', aplicarFiltros);
    
    document.getElementById('prevTestimonial').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentTestimonial--;
        showTestimonial(currentTestimonial);
        startAutoSlide();
    });

    document.getElementById('nextTestimonial').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentTestimonial++;
        showTestimonial(currentTestimonial);
        startAutoSlide();
    });

    document.getElementById('jobApplicationForm').addEventListener('submit', handleFormSubmit);

    // Modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('confirmationModal').style.display = 'none';
    });

    document.getElementById('modalCloseButton').addEventListener('click', () => {
        document.getElementById('confirmationModal').style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('confirmationModal')) {
            document.getElementById('confirmationModal').style.display = 'none';
        }
    });

    // Efecto de scroll para las cards de beneficios
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.benefit-card').forEach(card => {
        observer.observe(card);
    });

    function setupTestimonialControls() {
    document.getElementById('prevTestimonial').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentTestimonial--;
        showTestimonial(currentTestimonial);
        startAutoSlide();
    });

    document.getElementById('nextTestimonial').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentTestimonial++;
        showTestimonial(currentTestimonial);
        startAutoSlide();
    });
    }
});

// Funciones globales
window.toggleMenu = function() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}

window.openFullscreen = function() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

window.closeFullscreen = function() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}