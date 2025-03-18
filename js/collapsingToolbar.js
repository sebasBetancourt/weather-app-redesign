// Obtener el elemento con id 'toolbar' y almacenarlo en la constante 'toolbar'
const toolbar = document.getElementById('toolbar');
// Obtener el primer elemento que coincide con la clase '.toolbar_menu' y almacenarlo en 'toolbar_menu'
const toolbar_menu = document.querySelector('.toolbar_menu');
// Obtener el primer input dentro de un elemento con clase '.search' y almacenarlo en 'search'
const search = document.querySelector('.search input');
// Obtener el primer elemento con clase '.search img' y almacenarlo en 'searchImg'
const searchImg = document.querySelector('.search img');
// Obtener el primer elemento 'ul' dentro de un elemento con clase '.result' y almacenarlo en 'result'
const result = document.querySelector('.result ul');
// Obtener el primer elemento con clase '.content' y almacenarlo en 'content'
const content = document.querySelector('.content');
// Obtener el primer elemento con clase '.content' y almacenarlo en 'content'
const real_time = document.querySelector('.real_time'); 
// Obtener el primer 'span' hijo del primer 'div' dentro de un elemento con clase '.real_time' y almacenarlo en 'real_time_span_first_child'
const real_time_span_first_child = document.querySelector('.real_time > div:first-child span');
// Obtener el primer 'div' hijo del primer 'div' dentro de un elemento con clase '.real_time' y almacenarlo en 'real_time_div_first_child'
const real_time_div_first_child = document.querySelector('.real_time > div:first-child div');
// Obtener el último 'div' hijo del último 'div' dentro de un elemento con clase '.real_time' y almacenarlo en 'real_time_div_last_child'
const real_time_div_last_child = document.querySelector('.real_time > div:last-child div');
// Obtener el último 'img' hijo del último 'div' dentro de un elemento con clase '.real_time' y almacenarlo en 'real_time_img_last_child'
const real_time_img_last_child = document.querySelector('.real_time > div:last-child img');
// Obtener el primer elemento con clase '.weather_today' y almacenarlo en 'weather_today'
const weather_today = document.querySelector('.weather_today');

// Añadir un evento de escucha al desplazamiento de la página
addEventListener('scroll', () => {
    // Almacenar la cantidad de desplazamiento vertical en 'scrollAmount'
    let scrollAmount = window.scrollY;
    // Calcular la nueva altura de la barra de herramientas, asegurando que no baje de 285px ni suba de 400px
    let newHeight = Math.max(400 - scrollAmount, 285);
    // Mapear la nueva altura (285 a 400) a un radio de borde (0 a 30)
    let border = Math.max(((newHeight - 285) / 115) * 30, 0);

    // Cambiar la imagen o color de fondo en función de la altura
    if (newHeight <= 285) {
        // Configurar la altura de la barra de herramientas a 245px
        toolbar.style.height = '245px';
        toolbar.style.backgroundImage = 'none';  // Quitar imagen de fondo (comentado)
        toolbar.style.backgroundColor = 'var(--card-1)';  // Establecer un color sólido (reemplazar con el color deseado)
        toolbar_menu.style.bottom = "10px";  // Ajustar la posición inferior del menú
        weather_today.style.display = "none";  // Ocultar el elemento 'weather_today'
        real_time.style.top = "40px";  // Ajustar la posición superior de '.real_time'
        real_time_div_last_child.style.display = "none";  // Ocultar el último 'div' dentro de '.real_time'
        real_time_img_last_child.style.width = "50px";  // Reducir el ancho de la imagen
        real_time_span_first_child.style.fontSize = "55px";  // Reducir el tamaño de fuente
        real_time_span_first_child.style.color = "var(--color-2)";  // Cambiar el color de fuente
        real_time_div_first_child.style.color = "var(--color-2)"; // Cambiar el color de fuente
        search.style.color = "var(--color-2)"; // Cambiar el color de fuente
        result.style.color = "var(--color-2)"; // Cambiar el color de fuente
        searchImg.src = "../storage/img/search_black.png";  // Cambiar el icono de búsqueda
        content.style.marginTop = "375px";  // Ajustar el margen superior del contenido
    } else {
        // Aplicar la nueva altura y el radio de borde a la barra de herramientas
        toolbar.style.height = newHeight + 'px';
        toolbar.style.borderBottomRightRadius = border + 'px';
        toolbar.style.borderBottomLeftRadius = border + 'px';
        toolbar.style.backgroundImage = 'url(../storage/img/background.png)';  // Establecer imagen de fondo (comentado)
        toolbar.style.backgroundColor = '';  // Quitar el color de fondo sólido
        toolbar_menu.style.bottom = "-55px";  // Ajustar la posición inferior del menú
        weather_today.style.display = "flex";  // Mostrar 'weather_today' en flex
        real_time.style.top = "50px";  // Ajustar la posición superior de '.real_time'
        real_time_div_last_child.style.display = "flex";  // Mostrar el último 'div' dentro de '.real_time' en flex
        real_time_img_last_child.style.width = "81px";  // Aumentar el ancho de la imagen
        real_time_span_first_child.style.fontSize = "100px";  // Aumentar el tamaño de fuente
        real_time_span_first_child.style.color = "var(--color-1)";  // Cambiar el color de fuente
        real_time_div_first_child.style.color = "var(--color-1)"; // Cambiar el color de fuente
        search.style.color = "var(--color-1)"; // Cambiar el color de fuente
        searchImg.src = "../storage/img/search_white.png";  // Cambiar el icono de búsqueda
        content.style.marginTop = "455px";  // Ajustar el margen superior del contenido
    }    
});

// Datos de ejemplo para simular una lista de ubicaciones, realizar una petición a un servidor y almacenar los datos en localStorage
const data = [
    { _id_: 1, name: "Bogotá, Bogotá D.C." },
    { _id_: 2, name: "Medellín, Antioquia" },
    { _id_: 3, name: "Cali, Valle del Cauca" },
    { _id_: 4, name: "Barranquilla, Atlántico" },
    { _id_: 5, name: "Cartagena, Bolívar" },
    { _id_: 6, name: "Cúcuta, Norte de Santander" },
    { _id_: 7, name: "Bucaramanga, Santander" },
    { _id_: 8, name: "Pereira, Risaralda" },
    { _id_: 9, name: "Santa Marta, Magdalena" },
    { _id_: 10, name: "Manizales, Caldas" },
    { _id_: 11, name: "Ibagué, Tolima" },
    { _id_: 12, name: "Montería, Córdoba" },
    { _id_: 13, name: "Neiva, Huila" },
    { _id_: 14, name: "Villavicencio, Meta" },
    { _id_: 15, name: "Pasto, Nariño" },
    { _id_: 16, name: "Armenia, Quindío" },
    { _id_: 17, name: "Popayán, Cauca" },
    { _id_: 18, name: "Valledupar, Cesar" },
    { _id_: 19, name: "Sincelejo, Sucre" },
    { _id_: 20, name: "Riohacha, La Guajira" },
    { _id_: 21, name: "Kharkiv, Ukraine" }
];

// Función para establecer un valor en el input de búsqueda y activar el evento 'keyup'
const inputSearch = (value) => {
    search.value = value;  // Asignar el valor al campo de búsqueda
    search.dispatchEvent(new Event('keyup'));  // Disparar el evento 'keyup' en el campo de búsqueda
    result.innerHTML = null;  // Limpiar el contenido de 'result'
}

// Función para crear una lista basada en los datos
const createList = (data) => {
    let plantilla = ``;
    // Recorrer los datos y crear un elemento 'li' para cada item
    data.forEach((item) => {
        plantilla += /*html*/`
            <li onclick="inputSearch('${item.name}')">${item.name}</li>
        `;
    });
    return plantilla;  // Retornar la plantilla con los elementos 'li' creados
}

// Añadir un evento de escucha para el evento 'keyup' en el campo de búsqueda
search.addEventListener("keyup", (e) => {
    let key = e.target.value.toLowerCase();  // Convertir el valor de entrada a minúsculas
    // Si el input está vacío, borrar el contenido del resultado
    if (key.length < 1) { result.innerHTML = ""; return; }
    // Obtener coincidencias en 'data' que incluyan el valor ingresado
    let coincidencie = data.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().includes(key)
        )
    );
    // Actualizar el contenido de 'result' con la lista generada
    result.innerHTML = createList(coincidencie);
});