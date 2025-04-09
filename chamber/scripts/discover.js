document.addEventListener("DOMContentLoaded", () => {
    // Funcionalidad de clima
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
});