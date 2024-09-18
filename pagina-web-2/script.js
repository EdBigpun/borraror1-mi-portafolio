<script>
    // Función para manejar la responsividad
    function handleResponsive() {
        const navLinks = document.querySelectorAll('nav a');
        const socialIcons = document.querySelectorAll('.fa-brands');

        const isMobile = window.innerWidth <= 600;

        // Utilizar un operador ternario para simplificar la lógica de visibilidad
        navLinks.forEach(link => link.style.display = isMobile ? 'none' : 'inline');
        socialIcons.forEach(icon => icon.style.display = isMobile ? 'none' : 'inline');
    }

    // Llama a la función handleResponsive al cargar la página y al cambiar el tamaño de la ventana
    window.addEventListener('load', handleResponsive);
    window.addEventListener('resize', handleResponsive);
</script>
