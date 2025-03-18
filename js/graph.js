

const ctx = document.getElementById('tempChart').getContext('2d');
    
// Crear el degradado para el fondo
const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
gradientFill.addColorStop(0, 'rgba(43, 0, 165, 0.25)'); // Color más claro arriba
gradientFill.addColorStop(1, 'rgba(43, 0, 165, 0)');   // Transparente abajo

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        data: [-7, -1, -2, -1, 3, -1, -2], // Datos de ejemplo
        fill: 'start',  // Rellena siempre hacia abajo de la línea
        borderColor: '#000000', // Color de la línea
        backgroundColor: gradientFill,  // Degradado aplicado al fondo
        pointBackgroundColor: '#21005D', // Color del fondo del punto
        pointBorderColor: '#fff', // Color del borde del punto
        pointBorderWidth: [0,0,0,0,4,0,0], // Ancho del borde del punto
        pointRadius: [0, 0, 0, 0, 10, 0,  0], // Tamaño de los puntos
        pointHoverRadius: [0, 1, 0, 0, 9, 0, 0], // Tamaño del punto al pasar el ratón
        pointStyle: 'circle', // Estilo del punto
    }]
};

const options = {
    responsive: true, // Ajustar la escala de la gráfica a la ventana
    plugins: {
        legend: {
            display: false // Ocultar la leyenda
        },
        tooltip: {
            enabled: true, // Habilitar la herramienta de información emergente
            yAlign: "bottom", // Alinear el texto del cuadro de información
            callbacks: {
                title: () => '', // Función de formato del título de la leyenda
                label: (context) => `${context.raw}°`, // Función de formato de los marcadores de la leyenda
            },
            backgroundColor: '#ffffff', // Color de fondo de la leyenda
            titleFont: { size: 0 }, // Tamaño del título de la leyenda
            bodyFont: { size: 14 }, // Tamaño del texto de la leyenda
            bodyColor: '#000', // Color del texto de la leyenda
            displayColors: false, // Mostrar el color de la leyenda
            padding: 8 // Espacio entre el texto y el borde de la leyenda
        }
    },
    scales: {
        x: {
            grid: { display: false }, // Ocultar la línea de la escala
            ticks: { color: '#000' } // Color de los marcadores de la escala
        },
        y: {
            beginAtZero: false, // Iniciar la escala en cero
            min: -10, // Límite inferior de la escala
            max: 10, // Límite superior de la escala
            ticks: {
                stepSize: 10, // Tamaño de los marcadores de la escala
                color: '#000',// Color de los marcadores de la escala
                callback: value => `${value}°` // Función de formato de los marcadores de la escala
            }
        }
    },
    elements: {
        line: {
            tension: 0.4  // Ajusta la suavidad de la curva
        }
    }
};

const tempChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});