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

    // Mostrar miembros destacados
    const members = [
        {
            "name": "Tech Solutions",
            "address": "123 Main St, New York, NY",
            "phone": "(212) 555-1234",
            "website": "https://www.techsolutions.com",
            "image": "images/techsolutions.png",
            "membership": "gold",
            "category": "Technology",
            "description": "Software development and IT solutions company."
        },
        {
            "name": "Green Energy Co.",
            "address": "456 Greenway Blvd, Los Angeles, CA",
            "phone": "(323) 555-5678",
            "website": "https://www.greenenergy.com",
            "image": "images/greenenergy.png",
            "membership": "silver",
            "category": "Renewable Energy",
            "description": "Providers of solar and wind energy solutions."
        },
        {
            "name": "City Bistro",
            "address": "789 Market St, Chicago, IL",
            "phone": "(312) 555-9012",
            "website": "https://www.citybistro.com",
            "image": "images/citybistro.png",
            "membership": "member",
            "category": "Restaurant",
            "description": "A cozy café serving the best local dishes."
        },
        {
            "name": "AutoFix Garage",
            "address": "321 Mechanic Ave, Houston, TX",
            "phone": "(713) 555-3456",
            "website": "https://www.autofix.com",
            "image": "images/autofix.png",
            "membership": "silver",
            "category": "Automotive",
            "description": "Car repair and maintenance services."
        },
        {
            "name": "Style Boutique",
            "address": "654 Fashion St, Miami, FL",
            "phone": "(305) 555-7890",
            "website": "https://www.styleboutique.com",
            "image": "images/styleboutique.png",
            "membership": "gold",
            "category": "Fashion",
            "description": "High-quality clothing and accessories store."
        },
        {
            "name": "EduPro Academy",
            "address": "987 Learning Ln, Seattle, WA",
            "phone": "(206) 555-2345",
            "website": "https://www.eduproacademy.com",
            "image": "images/edupro.png",
            "membership": "member",
            "category": "Education",
            "description": "Online courses and professional training."
        },
        {
            "name": "Health First Clinic",
            "address": "147 Wellness Rd, San Francisco, CA",
            "phone": "(415) 555-6789",
            "website": "https://www.healthfirst.com",
            "image": "images/healthfirst.png",
            "membership": "gold",
            "category": "Healthcare",
            "description": "Medical clinic with specialized care services."
        }
    ];

    // Filtrar miembros con membresía "gold" o "silver"
    const filteredMembers = members.filter(member => member.membership === "gold" || member.membership === "silver");

    // Seleccionar aleatoriamente 2 o 3 miembros destacados
    const selectedMembers = [];
    while (selectedMembers.length < 3 && filteredMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredMembers.length);
        selectedMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
    }

    // Crear las tarjetas spotlight
    const spotlightSection = document.createElement("section");
    spotlightSection.classList.add("spotlight-section");

    const spotlightTitle = document.createElement("h2");
    spotlightTitle.textContent = "Featured Members";
    spotlightSection.appendChild(spotlightTitle);

    const spotlightContainer = document.createElement("div");
    spotlightContainer.classList.add("spotlight-container");

    selectedMembers.forEach(member => {
        const spotlightCard = document.createElement("div");
        spotlightCard.classList.add("spotlight-card");

        const memberImage = document.createElement("img");
        memberImage.src = member.image;
        memberImage.alt = `${member.name} logo`;
          // Ajustar tamaño de las imágenes
    memberImage.style.height = "80px";
    memberImage.style.width = "80px";
    spotlightCard.appendChild(memberImage);

        const memberName = document.createElement("h3");
        memberName.textContent = member.name;
        spotlightCard.appendChild(memberName);

        const memberMembership = document.createElement("p");
        memberMembership.textContent = `Membership: ${member.membership.charAt(0).toUpperCase() + member.membership.slice(1)}`;
        spotlightCard.appendChild(memberMembership);

        const memberAddress = document.createElement("p");
        memberAddress.textContent = `Address: ${member.address}`;
        spotlightCard.appendChild(memberAddress);

        const memberPhone = document.createElement("p");
        memberPhone.textContent = `Phone: ${member.phone}`;
        spotlightCard.appendChild(memberPhone);

        const memberWebsite = document.createElement("a");
        memberWebsite.href = member.website;
        memberWebsite.target = "_blank";
        memberWebsite.textContent = "Visit Website";
        spotlightCard.appendChild(memberWebsite);

        spotlightContainer.appendChild(spotlightCard);
    });

    spotlightSection.appendChild(spotlightContainer);
    document.querySelector("main").appendChild(spotlightSection);

    // Actualizar el año de copyright en el footer
    document.getElementById("year").textContent = new Date().getFullYear();
    // Mostrar la última fecha de modificación del documento
    document.getElementById("lastModified").textContent = document.lastModified;
});
