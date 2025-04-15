// js/menu.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
  
    toggleButton.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  });