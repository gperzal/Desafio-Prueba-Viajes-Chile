
document.addEventListener('DOMContentLoaded', function() {
    // Encuentra el botón por su ID
    var enviarCorreoBtn = document.getElementById('enviarCorreo');
    
    // Añade un evento de clic al botón
    enviarCorreoBtn.addEventListener('click', function() {
        alert("El correo fue enviado correctamente...");
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Encuentra todos los elementos con la clase 'titulo-text'
    const titles = document.querySelectorAll('.titulo-text');

    // Función para cambiar el color del título
    function changeTitleColor(event) {
        // Cambia el color del título. Puedes especificar cualquier color.
        event.target.style.color = 'red'; // Cambia 'red' por el color que prefieras
    }

    // Añade el evento de doble clic a cada título
    titles.forEach((title) => {
        title.addEventListener('dblclick', changeTitleColor);
    });
});
