// Seleccionamos los elementos
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

// Evento para abrir el menú
abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

// Evento para cerrar el menú
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});
