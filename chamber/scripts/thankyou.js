document.addEventListener('DOMContentLoaded', () => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    
    // Get the container where we'll display the information
    const container = document.querySelector('#formData');
    
    if (container) {
        // Get timestamp from URL parameters or use current time if not provided
        let submissionTime;
        const timestamp = params.get('timestamp');
        
        if (timestamp) {
            // Try to parse the timestamp, fallback to current time if invalid
            try {
                submissionTime = new Date(parseInt(timestamp)).toLocaleString();
            } catch (e) {
                submissionTime = new Date().toLocaleString();
            }
        } else {
            submissionTime = new Date().toLocaleString();
        }
        
        // Create HTML content with submitted data
        const html = `
            <h2>Thank You for Your Submission!</h2>
            <div class="submission-details">
                <p><strong>First Name:</strong> ${params.get('firstName') || 'N/A'}</p>
                <p><strong>Last Name:</strong> ${params.get('lastName') || 'N/A'}</p>
                <p><strong>Email:</strong> ${params.get('email') || 'N/A'}</p>
                <p><strong>Phone:</strong> ${params.get('phone') || 'N/A'}</p>
                <p><strong>Business Name:</strong> ${params.get('business') || 'N/A'}</p>
                <p><strong>Membership Level:</strong> ${params.get('membership') || 'N/A'}</p>
                <p><strong>Submission Time:</strong> ${submissionTime}</p>
            </div>
        `;
        
        // Set the HTML content
        container.innerHTML = html;
    }
});


  document.querySelector('form').addEventListener('submit', function(e) {
    document.getElementById('timestamp').value = Date.now();
  });


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