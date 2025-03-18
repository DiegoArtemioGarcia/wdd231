// URL de la API que contiene los datos de los profetas en formato JSON
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// Selecciona el elemento contenedor donde se mostrarán las tarjetas de los profetas
const cards = document.querySelector('#cards');
/**
 * Función asíncrona que obtiene los datos de los profetas desde la API
 * Utiliza fetch para realizar la petición HTTP y convierte la respuesta a JSON
 * Llama a displayProphets para mostrar los datos obtenidos
 */
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets); // Pasa el array de profetas a la función de visualización
}
/**
 * Función que crea y muestra las tarjetas de los profetas
 * @param {Array} prophets - Array de objetos con la información de cada profeta
 */
const displayProphets = (prophets) => {
  // Limpiar el contenedor de tarjetas
  cards.innerHTML = '';
  // Iterar sobre el array de profetas y crear una tarjeta para cada uno
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthDate = document.createElement('p');
    const birthplace = document.createElement('p');
    const order = document.createElement('p');
    const portrait = document.createElement('img');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `${prophet.birthdate}`;
    birthplace.textContent = `${prophet.birthplace}`;
    order.textContent = `${prophet.order}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Retrato de ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '250');
    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(birthDate);
    card.appendChild(birthplace);
    card.appendChild(order);
    cards.appendChild(card);
  });
};
// Funciones de filtrado
const filterIdaho = (prophets) => prophets.filter(p => p.birthplace.includes('Idaho'));
const filterNonUS = (prophets) => prophets.filter(p => !p.birthplace.includes('United States'));
const filterLongTenure = (prophets) => prophets.filter(p => p.length >= 15);
const filterFewChildren = (prophets) => prophets.filter(p => p.numofchildren <= 4);
const filterManyChildren = (prophets) => prophets.filter(p => p.numofchildren >= 10);
const filterOld = (prophets) => prophets.filter(p => p.death && calculateAge(p.birthdate, p.death) >= 95);
// Función auxiliar para calcular edad
const calculateAge = (birth, death) => {
  const birthDate = new Date(birth);
  const deathDate = new Date(death);
  return Math.floor((deathDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
};
// Event Listeners para los botones de filtrado
document.querySelector('#all').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
});
document.querySelector('#idaho').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterIdaho(data.prophets));
});
document.querySelector('#nonus').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterNonUS(data.prophets));
});
document.querySelector('#ten').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterLongTenure(data.prophets));
});
document.querySelector('#childs').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterFewChildren(data.prophets));
});
document.querySelector('#childl').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterManyChildren(data.prophets));
});
document.querySelector('#old').addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(filterOld(data.prophets));
});


// Iniciar la aplicación llamando a la función para obtener y mostrar los datos
getProphetData();



