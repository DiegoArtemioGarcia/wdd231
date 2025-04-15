document.addEventListener("DOMContentLoaded", () => {
  // Clima actual
  const currentWeatherEl = document.getElementById("currentWeather");
  const weatherForecastEl = document.getElementById("weatherForecast");

  const API_KEY = "3e3f5194f8693c302c987b9388080d33";
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

  // Modo oscuro
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlElement = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    darkModeToggle.checked = savedTheme === 'dark';
  }
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      const newTheme = darkModeToggle.checked ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Menú hamburguesa
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav_links");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav_links li a").forEach(n => {
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Cargar datos de lugares
  fetch("data/places.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("placesContainer");
      data.places.forEach((place, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.gridArea = `card${index + 1}`;
        card.innerHTML = `
          <h2>${place.name}</h2>
          <figure>
            <img src="${place.image}" alt="${place.name}">
          </figure>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button>Learn More</button>
        `;
        container.appendChild(card);
      });
    });

  // Mensaje de visitas
  const visitMessage = document.getElementById("visitMessage");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "¡welcome! Let us know if yo have any questions.";
  } else {
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      visitMessage.textContent = "¡Great! We hope you enjoy your visit.";
    } else if (diffDays === 1) {
      visitMessage.textContent = "Your last visit was a day ago.";
    } else {
      visitMessage.textContent = `Your last visit was${diffDays} days ago.`;
    }
  }
  localStorage.setItem("lastVisit", now);

  // Footer
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});