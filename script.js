// Función para abrir los enlaces de los proyectos
function openProject(url) {
    window.open(url, "_blank");
}

// Validación y envío del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Gracias, " + name + ". Nos pondremos en contacto pronto.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
