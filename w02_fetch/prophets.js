// URL de la API que contiene los datos de los profetas en formato JSON
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// Selecciona el elemento contenedor donde se mostrarán las tarjetas de los profetas
const cards = document.querySelector('#cards');
/**
 * Función asíncrona que obtiene los datos de los profetas desde la API
 * @returns {Promise<void>} No retorna valor, pero actualiza el DOM con los datos
 */
async function getProphetData() {
  const response = await fetch(url); // Realiza la petición HTTP a la API
  const data = await response.json(); // Convierte la respuesta a formato JSON
  displayProphets(data.prophets); // Pasa el array de profetas a la función de visualización
}
/**
 * Función que crea y muestra las tarjetas de los profetas en el DOM
 * @param {Array} prophets - Array de objetos con la información de cada profeta
 */
const displayProphets = (prophets) => {
  cards.innerHTML = ''; // Limpia el contenedor antes de agregar nuevas tarjetas
  
  // Itera sobre cada profeta y crea su tarjeta correspondiente
  prophets.forEach((prophet) => {
    // Crea los elementos HTML necesarios para la tarjeta
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthDate = document.createElement('p');
    const birthplace = document.createElement('p');
    const order = document.createElement('p');
    const portrait = document.createElement('img');
    // Asigna el contenido a cada elemento
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `${prophet.birthdate}`;
    birthplace.textContent = `${prophet.birthplace}`;
    order.textContent = `${prophet.order}`;
    
    // Configura los atributos de la imagen
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Retrato de ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy'); // Carga diferida de imágenes
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '250');
    // Agrega los elementos a la tarjeta
    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(birthDate);
    card.appendChild(birthplace);
    card.appendChild(order);
    
    // Agrega la tarjeta al contenedor principal
    cards.appendChild(card);
  });
};
// Funciones de filtrado para diferentes criterios de búsqueda
const filterIdaho = (prophets) => prophets.filter(p => p.birthplace.includes('Idaho')); // Filtra profetas nacidos en Idaho
const filterNonUS = (prophets) => prophets.filter(p => !p.birthplace.includes('United States')); // Filtra profetas no nacidos en EE.UU.
const filterLongTenure = (prophets) => prophets.filter(p => p.length >= 15); // Filtra profetas con servicio mayor a 15 años
const filterFewChildren = (prophets) => prophets.filter(p => p.numofchildren <= 4); // Filtra profetas con 4 o menos hijos
const filterManyChildren = (prophets) => prophets.filter(p => p.numofchildren >= 10); // Filtra profetas con 10 o más hijos
const filterOld = (prophets) => prophets.filter(p => p.death && calculateAge(p.birthdate, p.death) >= 95); // Filtra profetas que vivieron 95+ años
/**
 * Función auxiliar para calcular la edad entre dos fechas
 * @param {string} birth - Fecha de nacimiento
 * @param {string} death - Fecha de fallecimiento
 * @returns {number} Edad calculada en años
 */
const calculateAge = (birth, death) => {
  const birthDate = new Date(birth);
  const deathDate = new Date(death);
  return Math.floor((deathDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
};
// Event Listeners para los botones de filtrado
// Cada botón obtiene los datos actualizados y aplica su filtro correspondiente
document.querySelector('#all').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets); // Muestra todos los profetas sin filtro
});
document.querySelector('#idaho').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterIdaho(data.prophets)); // Muestra solo profetas de Idaho
});
document.querySelector('#nonus').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterNonUS(data.prophets)); // Muestra profetas no estadounidenses
});
document.querySelector('#ten').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterLongTenure(data.prophets)); // Muestra profetas con largo servicio
});
document.querySelector('#childs').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterFewChildren(data.prophets)); // Muestra profetas con pocos hijos
});
document.querySelector('#childl').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterManyChildren(data.prophets)); // Muestra profetas con muchos hijos
});
document.querySelector('#old').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterOld(data.prophets)); // Muestra profetas longevos
});
// Iniciar la aplicación llamando a la función para obtener y mostrar los datos
getProphetData();



