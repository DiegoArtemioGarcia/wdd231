// modal.js

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("quote-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalQuote = document.getElementById("modal-quote");
  
    // Abrir modal al hacer click en una cita
    document.querySelector(".quote").addEventListener("click", () => {
      const quoteText = document.querySelector(".quote p").innerText;
      modalQuote.innerText = quoteText;
      modal.style.display = "block";
    });
  
    // Cerrar modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Cerrar modal al hacer click fuera del contenido
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  