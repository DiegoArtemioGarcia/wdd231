// storage.js

// Guardar una cita en localStorage
function saveQuoteToStorage(quote) {
    let savedQuotes = localStorage.getItem("savedQuotes");
    if (!savedQuotes) {
      savedQuotes = [];
    } else {
      savedQuotes = JSON.parse(savedQuotes);
    }
    savedQuotes.push(quote);
    localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
  }
  
  // Recuperar citas desde localStorage
  function getSavedQuotes() {
    let savedQuotes = localStorage.getItem("savedQuotes");
    return savedQuotes ? JSON.parse(savedQuotes) : [];
  }
  
  // Eliminar todas las citas guardadas
  function clearSavedQuotes() {
    localStorage.removeItem("savedQuotes");
  }
  
  // Función para mostrar citas guardadas
  function displaySavedQuotes() {
    const savedQuotes = getSavedQuotes();
    const savedQuotesContainer = document.getElementById("saved-quotes");
    savedQuotesContainer.innerHTML = ""; // Limpiar el contenedor
  
    savedQuotes.forEach((quote) => {
      const quoteElement = document.createElement("div");
      quoteElement.classList.add("saved-quote");
      quoteElement.innerHTML = `<p>${quote}</p>`;
      savedQuotesContainer.appendChild(quoteElement);
    });
  }
  
  // Ejemplo de uso
  document.addEventListener("DOMContentLoaded", () => {
    // Mostrar las citas guardadas al cargar la página
    displaySavedQuotes();
  
    // Agregar un evento para guardar una cita
    document.querySelector("#save-quote-btn").addEventListener("click", () => {
      const quoteText = document.querySelector(".quote p").innerText;
      saveQuoteToStorage(quoteText);
      displaySavedQuotes();
    });
  });
  