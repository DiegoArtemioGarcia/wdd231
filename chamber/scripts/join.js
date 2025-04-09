
// Funcionalidad del modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;
// Verificar preferencia guardada del usuario
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
htmlElement.setAttribute('data-theme', savedTheme);
darkModeToggle.checked = savedTheme === 'dark';
}
// Agregar evento solo si el elemento existe
if (darkModeToggle) {
darkModeToggle.addEventListener('click', () => {
  const newTheme = darkModeToggle.checked ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
}

// Funcionalidad del menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_links");
// Eventos para mostrar/ocultar menú móvil
hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
});
// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav_links li a").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}));



  spotlightSection.appendChild(spotlightContainer);
  document.querySelector("main").appendChild(spotlightSection);

  // Actualizar el año de copyright en el footer
  document.getElementById("year").textContent = new Date().getFullYear();
  // Mostrar la última fecha de modificación del documento
  document.getElementById("lastModified").textContent = document.lastModified;
;

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Opcional: Cierra el modal al hacer clic fuera de él
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}