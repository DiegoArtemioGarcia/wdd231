const posts = [
    {
      author: "Clark Kelley Price",
      content: "Dan Jones Preaches the Gospel in Wales",
      imageUrl: "https://www.churchofjesuschrist.org/imgs/631e5f6e65c8be600fccbda6f03b15a474f4f477/full/1280%2C/0/default"
    },
    {
      author: " Liz Lemon Swindle",
      content: "From One Heart (Emma Crosses the Ice)s",
      imageUrl: "https://www.churchofjesuschrist.org/imgs/197b56335a4c8c36fb81c7a26d075df31e9b34ed/full/1920%2C/0/default"
    },
    {
      author: " Dan Lewis",
      content: "Elijah Appears in the Kirtland Temple",
      imageUrl: "https://www.churchofjesuschrist.org/imgs/f1e7548b53fc4695fb67bef691fa159b36154dee/full/1920%2C/0/default"
    },
    {
      author: "Clark Kelley Price",
      content: "Sacrifice Trail: Valley of Promise (Handcart Pioneers Arrive in the Salt Lake Valley)",
      imageUrl: "https://www.churchofjesuschrist.org/imgs/65ab27e2d00e74009fda90d4b06c086d1f8b95b6/full/1280%2C/0/default"
    },
    {
      author: "Tom Lovell",
      content: "Moroni Appears to Joseph Smith in His Room (The Angel Moroni Appears to Joseph Smith),",
      imageUrl: "https://www.churchofjesuschrist.org/imgs/5f68ab3ebd717592dce9ee3819123a44f1853e1e/full/1920%2C/0/default"
    }
   
  ];
  
  // Generar las tarjetas de contenido
  function generatePostCards() {
    const gallery = document.getElementById("temple-gallery");
    gallery.innerHTML = "";  // Limpiar la galería
  
    posts.forEach((post) => {
      const postCard = document.createElement("figure");
      postCard.innerHTML = `
        <img src="${post.imageUrl}" alt="${post.author}" loading="lazy">
        <figcaption>
          <h3>${post.author}</h3>
          <p>${post.content}</p>
        </figcaption>
      `;
      gallery.appendChild(postCard);
    });
  }
  
  // Inicializar la página
  document.addEventListener("DOMContentLoaded", function () {
    generatePostCards(); // Mostrar todos los posts al cargar
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