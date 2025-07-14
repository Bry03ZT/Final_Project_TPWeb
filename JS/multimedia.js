document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundAudio');
    const toggleButton = document.getElementById('toggleAudio');
    const volumeControl = document.getElementById('volumeControl');
            
    // Intenta reproducir
    function attemptPlay() {
    audio.volume = volumeControl.value;
        audio.play().catch(e => {
            console.log("Reproducción automática bloqueada:", e);
            toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        });
    }
            
    // Control de reproducción/pausa
    toggleButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            this.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            audio.pause();
            this.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
            
    // Control de volumen
    volumeControl.addEventListener('input', function() {
        audio.volume = this.value;
    });
            
    // Reproducir después de la interacción del usuario
    document.body.addEventListener('click', function firstInteraction() {
        attemptPlay();
        document.body.removeEventListener('click', firstInteraction);
    }, { once: true });
});


