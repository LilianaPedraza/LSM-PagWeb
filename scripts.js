// Botón para volver al inicio
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Validación simple de formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Formulario enviado correctamente!");
});
