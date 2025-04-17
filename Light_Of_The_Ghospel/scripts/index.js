

// Cargar el archivo JSON de citas y mostrar una cita aleatoria

async function loadQuotes() {
  try {
    const response = await fetch('../data/quotes.json'); // Ruta correcta desde la carpeta scripts // Ruta relativa para GitHub Pages
    if (!response.ok) {
      throw new Error('Could not load quotes.json');
    }
    const quotes = await response.json();

    // Cargar cita del día
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-of-the-day').innerHTML = `
      "${randomQuote.quote}" — <strong>${randomQuote.author}</strong>, <em>${randomQuote.source}</em>
    `;

    // Mostrar solo una cita aleatoria en el contenedor
    const quotesContainer = document.getElementById('quotes-container');
    const quoteElement = document.createElement('blockquote');
    quoteElement.innerHTML = `
      "${randomQuote.quote}"<br>
      — <strong>${randomQuote.author}</strong>, <em>${randomQuote.source}</em>
    `;
    quoteElement.classList.add('quote-item');
    quotesContainer.appendChild(quoteElement);

  } catch (error) {
    console.error('Error loading quotes:', error);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  loadQuotes();
  
  // Cargar elementos dinámicos
  const { createDynamicElements } = await import('./dynamicElements.js');
  const dynamicContainer = await createDynamicElements();
  if (dynamicContainer) {
    document.getElementById('dynamic-elements').appendChild(dynamicContainer);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  toggleButton.addEventListener("click", function () {
    nav.classList.toggle("show");
  });

  // Opcional: cerrar menú si haces clic en un enlace
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(link =>
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    })
  );
});