// Esperar a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionar elementos del DOM usando nombres en inglés (best practices)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    // Verificar si los elementos existen antes de agregar eventos
    if (mobileMenuBtn && navList) {
        
        mobileMenuBtn.addEventListener('click', () => {
            // Alternar la clase 'active' para mostrar/ocultar menú
            navList.classList.toggle('active');
            
            // Opcional: Cambiar el icono de hamburguesa a X
            const icon = mobileMenuBtn.querySelector('i');
            if (navList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    console.log("EcoMove Landing Page scripts loaded successfully.");
});