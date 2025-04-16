// js/menu.js

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
  
    toggleButton.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
  
    toggleButton.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  
    const quoteOfTheDay = [
      {
        text: '"And now as I said concerning faith—faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true."',
        reference: 'Alma 32:21'
      },
      {
        text: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."',
        reference: 'John 3:16'
      },
      {
        text: '"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control."',
        reference: 'Galatians 5:22-23'
      },
      {
        text: '"Behold, I stand at the door and knock. If any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me."',
        reference: 'Revelation 3:20'
      }
    ];
  
    const quoteElement = document.getElementById("quote-of-the-day");
    const randomQuote = quoteOfTheDay[Math.floor(Math.random() * quoteOfTheDay.length)];
    quoteElement.innerHTML = `${randomQuote.text}<footer>- ${randomQuote.reference}</footer>`;
  
    // Modal
    const modal = document.getElementById("quote-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalQuote = document.getElementById("modal-quote");
  
    quoteElement.addEventListener("click", () => {
      modalQuote.innerText = randomQuote.text;
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  

