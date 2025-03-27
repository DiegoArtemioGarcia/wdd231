// Selecciona el elemento contenedor donde se mostrarán las tarjetas de los miembros
const cards = document.querySelector('#cards');

/**
 * Función asíncrona que obtiene los datos de los miembros desde el archivo JSON
 * @returns {Promise<void>} No retorna valor, pero actualiza el DOM con los datos
 */
async function getMembersData() {
  try {
    const response = await fetch('data/members.json'); // Ruta al archivo JSON
    if (!response.ok) {
      throw new Error('Error al cargar los datos: ' + response.statusText);
    }
    const data = await response.json(); // Convierte la respuesta a formato JSON
    displayMembers(data.members); // Pasa el array de miembros a la función de visualización
  } catch (error) {
    console.error('Hubo un problema con la carga de datos:', error);
  }
}
/**
 * Función que crea y muestra las tarjetas de los miembros en el DOM
 * @param {Array} members - Array de objetos con la información de cada miembro
 */
const displayMembers = (members) => {
  cards.innerHTML = ''; // Limpia el contenedor antes de agregar nuevas tarjetas
  // Itera sobre cada miembro y crea su tarjeta correspondiente
  members.forEach((member) => {
    // Crea los elementos HTML necesarios para la tarjeta
    const card = document.createElement('section');
    card.classList.add('card'); // Añade la clase card para aplicar estilos
    const name = document.createElement('h2');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const website = document.createElement('p');
    const portrait = document.createElement('img');
    const membership = document.createElement('p');
    const category = document.createElement('p');
    const description = document.createElement('p');
    // Asigna el contenido a cada elemento
    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    //website.textContent = member.website;
    membership.textContent = member.membership;
    category.textContent = member.category;
    description.textContent = member.description;
    // Configura los atributos de la imagen
    portrait.setAttribute('src', member.image); // Asegúrate de que esta ruta sea correcta
    portrait.setAttribute('alt', `Retrato de ${member.name}`);
    portrait.setAttribute('loading', 'lazy'); // Carga diferida de imágenes
    portrait.setAttribute('width', '80');
    portrait.setAttribute('height', '80');
    // Agrega los elementos a la tarjeta
    card.appendChild(portrait);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);
    card.appendChild(category);
    card.appendChild(description);
    // Agrega la tarjeta al contenedor principal
    cards.appendChild(card);
  });
}

// Llama a la función para obtener los datos al cargar la página
getMembersData();

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

document.addEventListener("DOMContentLoaded", () => {
    const currentWeatherEl = document.getElementById("currentWeather");
    const weatherForecastEl = document.getElementById("weatherForecast");
    
    const API_KEY = "3e3f5194f8693c302c987b9388080d33"; // Reemplázalo con tu clave de OpenWeather
    const CITY = "Alicante";
    const URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;
    const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`;

    fetch(URL_CURRENT)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            currentWeatherEl.textContent = `Temperature: ${temp}°C, ${description}`;
        })
        .catch(error => currentWeatherEl.textContent = "Failed to load weather data");

    fetch(URL_FORECAST)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list.slice(0, 3).map(entry => {
                return `${entry.dt_txt}: ${entry.main.temp}°C, ${entry.weather[0].description}`;
            }).join("<br>");
            weatherForecastEl.innerHTML = forecast;
        })
        .catch(error => weatherForecastEl.textContent = "Failed to load forecast data");
});

// Actualizar el año de copyright en el footer
document.getElementById("year").textContent = new Date().getFullYear();
// Mostrar la última fecha de modificación del documento
document.getElementById("lastModified").textContent = document.lastModified;