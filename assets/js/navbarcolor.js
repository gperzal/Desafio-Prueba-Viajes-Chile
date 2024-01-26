
  // Cuando el contenido se haya cargado
  document.addEventListener('DOMContentLoaded', (event) => {
    // Encuentra el navbar por su clase
    const navbar = document.querySelector('.navbar');
    // Encuentra la sección "About Us" por su clase
    const aboutUsSection = document.querySelector('#about-us-section');

    // Añade un evento de escucha para el scroll en la ventana
    window.addEventListener('scroll', () => {
      // Obtén la posición del scroll actual
      const scrollPos = window.scrollY || window.pageYOffset;
      // Obtén la posición de la sección "About Us"
      const aboutUsSectionPos = aboutUsSection.offsetTop;

      // Comprueba si la posición del scroll es mayor que la de "About Us"
      if (scrollPos > aboutUsSectionPos) {
        // Añade una clase al navbar para cambiar su fondo a negro
        navbar.classList.add('navbar-color');
      } else {
        // Si no, remueve la clase para volver al fondo original
        navbar.classList.remove('navbar-color');
      }
    });
  });