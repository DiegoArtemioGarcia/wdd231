// Data structure for dynamic elements
const elementsData = [
    {
      title: "Principio 1",
      description: "La fe en Jesucristo",
      date: "2024-01-15",
      category: "Principios"
    },
    // Add more elements here up to 15
  ];
  // Create and export the dynamic elements module
  export async function createDynamicElements() {
    const container = document.createElement('div');
    container.classList.add('dynamic-elements-container');
    try {
      // Fetch JSON data from API
      const response = await fetch('../data/elements.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // Create elements
      data.forEach(item => {
        const element = document.createElement('article');
        element.classList.add('dynamic-element');
        
        element.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <time datetime="${item.date}">${new Date(item.date).toLocaleDateString()}</time>
          <span class="category">${item.category}</span>
        `;
        // Add click event for modal
        element.addEventListener('click', () => {
          showModal(item);
        });
        container.appendChild(element);
      });
      return container;
    } catch (error) {
      console.error('Error creating dynamic elements:', error);
      return null;
    }
  }

  // Función para mostrar el modal
function showModal(item) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p><strong>Category:</strong> ${item.category}</p>
        <p><strong>Importance:</strong> ${item.importance}</p>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Mostrar el modal con animación
    setTimeout(() => modal.classList.add('show'), 10);
    // Cerrar modal
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 300);
    });
    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
      }
    });
  }