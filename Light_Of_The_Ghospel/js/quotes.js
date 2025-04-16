
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
  
    toggleButton.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  });


// Cargar las citas desde el archivo JSON
async function loadQuotes() {
    try {
      const response = await fetch('quotes.json');
      const quotes = await response.json();
      displayQuotes(quotes);
    } catch (error) {
      console.error("Error loading the quotes:", error);
    }
  }
  
  // Mostrar las citas en la página
  function displayQuotes(quotes) {
    const quotesContainer = document.getElementById('quotes-container');
    quotes.forEach(quote => {
      const quoteElement = document.createElement('div');
      quoteElement.classList.add('quote');
      quoteElement.innerHTML = `
        <blockquote>
          <p>${quote.quote}</p>
          <footer>— ${quote.author}, ${quote.source}</footer>
        </blockquote>
      `;
      quotesContainer.appendChild(quoteElement);
    });
  }
  
  // Llamar a la función de carga cuando la página esté lista
  document.addEventListener('DOMContentLoaded', loadQuotes);
  