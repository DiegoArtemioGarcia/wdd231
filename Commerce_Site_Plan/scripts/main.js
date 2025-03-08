// Seleccionamos los elementos
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

// Evento para abrir el menú
abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

// Evento para cerrar el menú
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true // Marcar como completado
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn to research and call functions written by others.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites using JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will focus on user experience and API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    }
];

// Elementos del DOM
const courseContainer = document.querySelector(".parent");
const filterButtons = document.querySelectorAll(".FlexContainerCourse div");
const creditTotal = document.createElement("p"); // Para mostrar créditos
creditTotal.classList.add("credit-total");
document.body.appendChild(creditTotal);

// Función para renderizar los cursos
function renderCourses(filter = "All") {
    courseContainer.innerHTML = "";

    // Filtrar cursos según selección
    const filteredCourses = courses.filter(course => filter === "All" || course.subject === filter);

    // Mostrar cursos
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("materias");
        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;

        // Cambiar estilo si está completado
        if (course.completed) {
            courseDiv.style.backgroundColor = "#5cb85c"; // Verde para cursos completados
            courseDiv.style.color = "white";
        } else {
            courseDiv.style.backgroundColor = "lightblue";
        }

        courseContainer.appendChild(courseDiv);
    });

    // Calcular y mostrar créditos totales
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    creditTotal.textContent = `Total Credits: ${totalCredits}`;
}

// Agregar eventos a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        renderCourses(button.textContent.trim());
    });
});

// Renderizar inicialmente todos los cursos
renderCourses();
