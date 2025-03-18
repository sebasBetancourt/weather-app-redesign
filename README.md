[TOC]

# Descripción del Proyecto

La **Weather App** es una aplicación diseñada para proporcionar información meteorológica actualizada y precisa a los usuarios. A través de una interfaz intuitiva y amigable, la app ofrecerá datos sobre la temperatura, humedad, pronóstico a corto y largo plazo, y alertas meteorológicas para diversas ubicaciones en todo el mundo. Utilizando **WeatherAPI** para obtener datos meteorológicos en tiempo real, la aplicación se asegurará de que los usuarios tengan acceso a información relevante sobre el clima en su área y en cualquier otro lugar que deseen consultar.

## Problemática

En la actualidad, muchas personas dependen de información meteorológica precisa para planificar sus actividades diarias. Sin embargo, a menudo enfrentan los siguientes problemas:

1. **Inexactitud de los Datos:** Las aplicaciones actuales pueden ofrecer pronósticos poco precisos o desactualizados, lo que puede llevar a decisiones incorrectas, como salir sin abrigo en un día lluvioso.
2. **Interfaz Confusa:** Algunas aplicaciones meteorológicas presentan información de manera compleja y no intuitiva, dificultando que los usuarios encuentren rápidamente la información que buscan.
3. **Falta de Personalización:** Muchas aplicaciones no permiten a los usuarios configurar alertas o seguir el clima en ubicaciones específicas que les interesan, lo que limita su utilidad.

## Características Principales

1. **Interfaz de Usuario Intuitiva:** La aplicación tendrá un diseño limpio y fácil de usar, con información claramente presentada sobre el clima actual y pronósticos futuros.

2. **Datos en Tiempo Real:** Utilizando **WeatherAPI**, la app proporcionará actualizaciones instantáneas sobre condiciones climáticas, temperatura y precipitaciones.

3. **Búsqueda de Ubicaciones:** Los usuarios podrán buscar manualmente ubicaciones específicas para consultar la información meteorológica de cualquier lugar del mundo.

4. **Pronóstico Extendido:** Los usuarios podrán acceder a pronósticos a corto y largo plazo (7-14 días) para planificar actividades futuras.

5. **Alertas Personalizables:** Los usuarios podrán configurar alertas para condiciones meteorológicas severas, como tormentas, nevada o altas temperaturas, asegurando que siempre estén informados.

6. **Información Histórica:** La app ofrecerá datos históricos sobre el clima, permitiendo a los usuarios consultar condiciones pasadas para análisis o referencia.

7. **Compatibilidad Multiplataforma:** Desarrollada para ser accesible tanto en dispositivos móviles (iOS y Android) como en versiones web, garantizando que los usuarios tengan acceso en cualquier momento y lugar.

8. **Sostenibilidad:** Opciones para ver el impacto del clima en el medio ambiente, como pronósticos de calidad del aire y recomendaciones sobre actividades sostenibles.

   

# Tecnologías y Herramientas

- **Front-end**: 
  - **Figma**: https://www.figma.com/community/file/1249443729401540968
  - **Opción 1:** React o Vue.js para construir una interfaz de usuario interactiva y dinámica.
  - **Opción 2:** Desarrollo puro utilizando HTML, CSS y JavaScript para una implementación más sencilla.
- **GitHub**: Para la gestión de versiones del código en el desarrollo, usando **conventional commits.**
- **Recursos:**
  - **Ver mas:** https://css-tricks.com/using-styling-the-details-element/
  - **Animacion de carga:** https://www.facebook.com/reel/1709836396232878
  - **Collapsing toolbar:** https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_shrink_scroll
  - **Obtener la geolocalizacion:** https://www.freecodecamp.org/espanol/news/como-usar-la-api-geolocation-api-en-javascript-con-ejemplos-de-codigo/
  - **Realizar pruebas a las APIs** https://www.youtube.com/watch?v=f8FWymov4uk&ab_channel=TheCoderCave%7CProgramaci%C3%B3nyTecnolog%C3%ADa


# Instrucciones de uso de weatherapi

## Creación de la cuenta

Ingresa al enlace https://www.weatherapi.com/ y crea una cuenta siguiendo estos pasos:

![](https://i.ibb.co/TwHHCg4/image.png)

Debes crear una contraseña para acceder a la plataforma.

![](https://i.ibb.co/DL4r2HG/image.png)

Una vez validado el correo electrónico.
![](https://i.ibb.co/vDGN7NG/image.png)

En el correo electrónico confirmaremos la creación de la cuenta. Al hacer clic en el enlace que se te envíe, serás redirigido a una página para la verificación. Luego, deberás iniciar sesión con tu correo electrónico y la contraseña que registraste.
![](https://i.ibb.co/47HFQY6/image.png)

![](https://i.ibb.co/p3WyP5X/image.png)

![](https://i.ibb.co/xzsnknV/image.png)

Una vez dentro copiaremos nuestro key para poder consumir las apis
![](https://i.ibb.co/xHkf5g0/image.png)



------



## Como usar la documentacion

Accedemos a este enlace https://www.weatherapi.com/docs/ para consultar la documentación de las API.

Una vez dentro de la página de la documentación, busca el menú **Introduction > Authentication**. Allí encontrarás las instrucciones para consumir la API. Ten en cuenta que, en este punto, deberás haber copiado el token previamente, ya que la página de documentación no lo proporcionará automáticamente.

**Ejemplo de uso:**  `http://api.weatherapi.com/v1/current.json?key=[API Key]&q=Floridablanca`

**Nota:** en esta parte **[API Key]** quita los paréntesis y coloca tu API, por ejemplo, si tu API es **124685468**, quedaría como `?key=124685468&`

![](https://i.ibb.co/BVjwYPm/image.png)


Encontraremos una tabla de endpoints para obtener información sobre el clima, enfocándonos en los siguientes.

![](https://i.ibb.co/mNKyrf9/image.png)

Esta opción nos proporciona la información del clima actual. Ten en cuenta que existen dos formatos disponibles: **JSON** y **XML**. En esta ocasión, utilizaremos **JSON**.
![](https://i.ibb.co/q5GrQqN/image.png)

Esta opción nos proporcionará el pronóstico del clima para el día siguiente.
![](https://i.ibb.co/QkDYS2D/image.png)

La siguiente opción ofrece información sobre el clima en un día específico.
![](https://i.ibb.co/Ctmb3jg/image.png)



**Nota:** Si quieres conocer el significado de cada dato, dirígete a la sección de **APIs > Realtime API**.
![](https://i.ibb.co/SvnzZHy/image.png)



------

# Uso del api

## Obtener información del clima actual

**Method** : `GET`

**URL** : `http://api.weatherapi.com/v1/current.json`

**Auth required** : `True`

**URL Query** : `?key=[API Key]&q=Floridablanca&lang=es`

**Success Responses**

**Code** : `200 OK`

```json
{
  "location": {
    "name": "Floridablanca",
    "region": "Santander",
    "country": "Colombia",
    "lat": 7.0647,
    "lon": -73.0897,
    "tz_id": "America/Bogota",
    "localtime_epoch": 1728508634,
    "localtime": "2024-10-09 16:17"
  },
  "current": {
    "last_updated_epoch": 1728508500,
    "last_updated": "2024-10-09 16:15",
    "temp_c": 23.1,
    "temp_f": 73.5,
    "is_day": 1,
    "condition": {
      "text": "Ligeras precipitaciones",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
      "code": 1240
    },
    "wind_mph": 3.8,
    "wind_kph": 6.1,
    "wind_degree": 291,
    "wind_dir": "WNW",
     .....
  }
}
```



## Obtener pronostico del clima

**Method** : `GET`

**URL** : `http://api.weatherapi.com/v1/forecast.json`

**Auth required** : `True`

**URL Query** : `?key=[API Key]&q=Floridablanca&lang=es&days=14`

**Success Responses**

**Code** : `200 OK`

```json
{
  "location": {
    "name": "Floridablanca",
    "region": "Santander",
    "country": "Colombia",
    "lat": 7.0647,
    "lon": -73.0897,
    "tz_id": "America/Bogota",
    "localtime_epoch": 1728509020,
    "localtime": "2024-10-09 16:23"
  },
  "current": {
    "last_updated_epoch": 1728508500,
    "last_updated": "2024-10-09 16:15",
    "temp_c": 23.1,
    "temp_f": 73.5,
    "is_day": 1,
    "condition": {
      "text": "Ligeras precipitaciones",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
      "code": 1240
    },
    "wind_mph": 3.8,
    "wind_kph": 6.1,
    "wind_degree": 291,
    "wind_dir": "WNW",
    .......
  },
  "forecast": {
    "forecastday": 
      [.......] // Pronóstico para los próximos 14 días
  }
}
```



## Obtener el clima en un día específico 

**Method** : `GET`

**URL** : `http://api.weatherapi.com/v1/forecast.json`

**Auth required** : `True`

**URL Query** : `?key=[API Key]&q=Floridablanca&lang=es&dt=2024-10-01`

**Success Responses**

**Code** : `200 OK`

```json
{
  "location": {
    "name": "Floridablanca",
    "region": "Santander",
    "country": "Colombia",
    "lat": 7.0647,
    "lon": -73.0897,
    "tz_id": "America/Bogota",
    "localtime_epoch": 1728509416,
    "localtime": "2024-10-09 16:30"
  },
  "forecast": {
    "forecastday": [
      {
        "date": "2024-10-01",
        "date_epoch": 1727740800,
        "day": {
          "maxtemp_c": 23.6,
          "maxtemp_f": 74.4,
          "mintemp_c": 11.3,
          "mintemp_f": 52.4,
          "avgtemp_c": 18.9,
          "avgtemp_f": 66.0,
          "maxwind_mph": 5.6,
          "maxwind_kph": 9.0,
          "totalprecip_mm": 12.84,
          "totalprecip_in": 0.51,
          "totalsnow_cm": 0.0,
          "avgvis_km": 9.8,
          "avgvis_miles": 6.0,
          "avghumidity": 86,
          "daily_will_it_rain": 1,
          "daily_chance_of_rain": 100,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Ligeras precipitaciones",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
            "code": 1240
          },
          "uv": 5.0
        },
        "astro": {
          "sunrise": "05:41 AM",
          "sunset": "05:44 PM",
          "moonrise": "04:48 AM",
          "moonset": "05:08 PM",
          "moon_phase": "Waning Crescent",
          "moon_illumination": 3
        },
        "hour": [
          {
            "time_epoch": 1727758800,
            "time": "2024-10-01 00:00",
            "temp_c": 11.3,
            "temp_f": 52.4,
            "is_day": 0,
            "condition": {
              "text": "Ligeras precipitaciones",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/353.png",
              "code": 1240
            },
            "wind_mph": 1.8,
            "wind_kph": 2.9,
            "wind_degree": 80,
            "wind_dir": "E",
            "pressure_mb": 1015.0,
            "pressure_in": 29.99,
            "precip_mm": 0.16,
            "precip_in": 0.01,
            "snow_cm": 0.0,
            "humidity": 90,
            "cloud": 68,
            "feelslike_c": 11.4,
            "feelslike_f": 52.4,
            "windchill_c": 11.4,
            "windchill_f": 52.4,
            "heatindex_c": 11.4,
            "heatindex_f": 52.4,
            "dewpoint_c": 9.7,
            "dewpoint_f": 49.5,
            "will_it_rain": 1,
            "chance_of_rain": 100,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "gust_mph": 3.8,
            "gust_kph": 6.0,
            "uv": 0.0
          },
          ....
        ]
      }
    ]
  }
}
```

# Historias de usuario

**Inicio parte 1/2**

```less
**Como:** usuario,
**Quiero:** ver el clima actual de mi ubicación con una interfaz atractiva, 
**Para:** conocer rápidamente la temperatura, sensación térmica y condiciones del clima.


## Obtener datos de la API
- [ ] La aplicación debe consumir los datos de WeatherAPI.
- [ ] Se debe realizar una petición a la API con la ciudad del usuario o su geolocalización.
- [ ] Los datos deben actualizarse en tiempo real cuando el usuario seleccione una nueva ubicación.

## Mostrar información del clima actual
- [ ] Se debe mostrar la temperatura actual en grados Celsius o Fahrenheit (según configuración).
- [ ] Incluir la sensación térmica basada en la velocidad del viento y la humedad.
- [ ] Mostrar el estado del clima con un icono representativo y una descripción (ejemplo: "Cloudy").
- [ ] Visualizar la fecha y hora de actualización de los datos meteorológicos.

## Visualizar el pronóstico por días y horas
- [ ] Se visualizan tres pestañas de selección para mostrar el pronóstico:

- Hoy (muestra el clima actual y su evolución por horas).
- Mañana (muestra un resumen del clima del día siguiente).
- 10 días (pronóstico extendido).
- [ ] La pestaña activa se resalta visualmente con un fondo más opaco y texto en negrita.
- [ ] Al hacer clic en otra pestaña, la información se actualiza dinámicamente sin recargar la página.
- [ ] La sección Hourly Forecast muestra la temperatura y el estado del clima por horas.


## Mostrar datos adicionales del clima
- [ ] Se presentan cuatro tarjetas informativas, cada una con icono y valores dinámicos:

- Velocidad del viento (Ejemplo: "12 km/h") con un icono de viento 🌬️.
- Probabilidad de lluvia (Ejemplo: "24%") con un icono de lluvia 🌧️.
- Presión atmosférica (Ejemplo: "720 hPa") con un icono de presión 🌡️.
- Índice UV (Ejemplo: "2.3") con un icono de sol ☀️.

- [ ] Cada tarjeta tiene colores suaves y un borde redondeado para mejorar la experiencia visual.
- [ ] Cuando un valor cambia significativamente, el color del texto cambia rojo🔻/verde🔺 para indicar variaciones importantes.


## Interactividad y diseño atractivo

### Encabezado
- [ ] Se visualiza la hora actual en la parte superior izquierda.
- [ ] Se muestra el nombre de la ciudad y el país debajo de la hora.
- [ ] Se incluye un icono de búsqueda 🔍 en la parte superior derecha para permitir al usuario cambiar de ubicación.

### Sección Principal del Clima
- [ ] Se muestra una ilustración animada o un fondo dinámico que cambia según el clima y la hora del día.
- [ ] Se visualiza la temperatura actual en el centro con un tamaño de fuente grande.
- [ ] Se muestra la sensación térmica debajo de la temperatura con una fuente más pequeña.
- [ ] Se incluye el estado del clima (Ejemplo: "Cloudy") junto con un icono representativo.

### Pronóstico por Horas (Hourly Forecast)
- [ ] Se muestra una sección con el título "Hourly Forecast".
- [ ] Se presentan las siguientes horas en un carrusel horizontal deslizable.
- [ ] Cada bloque de hora muestra:

- La hora en la parte superior.
- Un icono del clima en el centro.
- La temperatura esperada en la parte inferior.

- [ ] El fondo de cada bloque cambia ligeramente de color si la temperatura es más alta o baja en comparación con el resto del día.
- [ ] Se puede deslizar hacia la derecha para ver más horas sin necesidad de recargar la página.

### Fondo Dinámico y Animaciones
- [ ] El fondo de la aplicación cambia según la hora del día y el clima:

- Día soleado: Fondo con tonos azulados y sol brillante. ☀️
- Noche despejada: Fondo oscuro con estrellas brillantes. 🌙
- Lluvia: Fondo con gotas animadas y cielo gris. 🌧️
- Nublado: Fondo con nubes en movimiento. ☁️

- [ ] Se usan transiciones suaves al actualizar la información (fade-in/fade-out).
- [ ] Se implementa una animación en la temperatura al cambiar los valores para que no sea abrupto.


## Navegación y Funcionalidad Extra
### Barra de búsqueda emergente
- [ ] Al hacer clic en el icono de búsqueda 🔍, aparece una barra de búsqueda con autocompletado.
- [ ] Los resultados de ciudades se muestran en una lista desplegable.

### Almacenamiento de preferencias
- [ ] La aplicación recuerda la última ciudad consultada con localStorage.
- [ ] Se puede seleccionar una ciudad favorita para que siempre se cargue al abrir la app.

### Modo Oscuro / Claro
- [ ] El usuario puede alternar entre:

- Modo claro (fondos claros).
- Modo oscuro (fondos oscuros).

- [ ] La configuración se guarda automáticamente en localStorage.

### Carga optimizada de datos
- [ ] Se muestra un indicador de carga mientras se obtienen los datos.
- [ ] Si hay un error con la API, aparece un mensaje de error en la interfaz en lugar de dejar la pantalla en blanco.
```

**Inicio parte 2/2**

```less

## Obtener datos de la API
- [ ] La aplicación debe consumir los datos de WeatherAPI.
- [ ] Se debe realizar una petición a la API con la ciudad del usuario o su geolocalización.
- [ ] Los datos deben actualizarse en tiempo real cuando el usuario seleccione una nueva ubicación.

## Mostrar pronóstico diario con gráfico de temperatura
- [ ] Se muestra una gráfica de líneas que representa la evolución de la temperatura durante la semana.
- [ ] Se visualiza la temperatura máxima y mínima para cada día.
- [ ] Se resalta con un punto y una etiqueta la temperatura actual dentro del gráfico.
- [ ] Al deslizar el dedo sobre el gráfico, se muestra información detallada del día seleccionado.

## Mostrar probabilidad de lluvia por hora
- [ ] Se presenta una sección con barras horizontales que indican la probabilidad de lluvia para las próximas horas.
- [ ] Cada barra representa un rango horario (Ejemplo: 7 PM, 8 PM, 9 PM, 10 PM).
- [ ] El color de la barra cambia de intensidad según el porcentaje de lluvia.
- [ ] Se muestra el porcentaje exacto de probabilidad de lluvia en el lado derecho de cada barra.

## Mostrar horarios de amanecer y atardecer
- [ ] Se presentan dos tarjetas informativas en la parte inferior de la vista:

- Amanecer 🌙 con la hora exacta de salida del sol.
- Atardecer ☀️ con la hora exacta en que el sol se oculta.

- [ ] Se indica el tiempo transcurrido desde el amanecer y cuánto falta para el atardecer.

## Navegación y Funcionalidad Extra
### Almacenamiento de preferencias
- [ ] La aplicación recuerda la última ciudad consultada con localStorage.
- [ ] Se puede seleccionar una ciudad favorita para que siempre se cargue al abrir la app.

### Modo Oscuro / Claro
- [ ] El usuario puede alternar entre:

- Modo claro (fondos claros).
- Modo oscuro (fondos oscuros).

- [ ] La configuración se guarda automáticamente en localStorage.

### Carga optimizada de datos
- [ ] Se muestra un indicador de carga mientras se obtienen los datos.
- [ ] Si hay un error con la API, aparece un mensaje de error en la interfaz en lugar de dejar la pantalla en blanco.


```

**proximos 10 dias**

```less
**Como:** usuario
**Quiero:** visualizar el pronóstico del clima para los próximos 10 días
**Para:** planificar mis actividades con anticipación según las condiciones meteorológicas

## Obtener datos de la API
- [ ] La aplicación debe consumir los datos de WeatherAPI.
- [ ] Se debe realizar una petición a la API para obtener el pronóstico extendido de 10 días.
- [ ] Los datos deben actualizarse en tiempo real cuando el usuario seleccione una nueva ubicación.


## Visualizar el pronóstico extendido de 10 días
- Se visualizan tres pestañas de selección para alternar entre:

- Hoy (clima actual y evolución por horas).
- Mañana (resumen del clima del día siguiente).
- 10 días (pronóstico extendido).

- [ ] La pestaña "10 días" debe estar resaltada visualmente cuando se seleccione.
- [ ] Al hacer clic en otra pestaña, la información debe actualizarse dinámicamente sin recargar la página.

## Mostrar la lista del pronóstico de los próximos 10 días
- [ ] Se presenta una lista vertical desplazable con el pronóstico de los 10 días siguientes.

- Cada día en la lista incluye:

- [ ] Fecha completa (Ejemplo: "Thursday, Jan 19").
- [ ] Descripción del clima (Ejemplo: "Cloudy and Sunny").
- [ ] Temperatura máxima y mínima (Ejemplo: "3° / -2°").
- [ ] Icono representativo del clima (Ejemplo: sol y nubes ☀️☁️).
- [ ] Botón de más información (ícono desplegable ⏷) para ver detalles adicionales del clima de ese día.

- [ ] Se debe permitir deslizar hacia abajo para ver todos los días disponibles.
- [ ] El fondo de cada tarjeta cambia ligeramente de tono según la temperatura promedio del día.


## Diseño de la Lista de Pronóstico
- [ ] Cada día se presenta en una tarjeta con bordes redondeados.
- [ ] El color de fondo de cada tarjeta cambia en función de la temperatura predominante.
- [ ] Se usa una fuente clara y legible para la fecha y la temperatura.
- [ ] Se permite tocar el botón desplegable ⏷ para mostrar más detalles del día seleccionado.

## Fondo Dinámico y Animaciones
- [ ] El fondo de la aplicación cambia según la hora del día y el clima:

- Día soleado: Fondo con tonos azulados y sol brillante. ☀️
- Noche despejada: Fondo oscuro con estrellas brillantes. 🌙
- Lluvia: Fondo con gotas animadas y cielo gris. 🌧️
- Nublado: Fondo con nubes en movimiento. ☁️

- [ ] Se usan transiciones suaves al actualizar la información (fade-in/fade-out).
- [ ] Se implementa una animación en la temperatura al cambiar los valores para que no sea abrupto.


## Navegación y Funcionalidad Extra
### Almacenamiento de preferencias
- [ ] La aplicación recuerda la última ciudad consultada con localStorage.
- [ ] Se puede seleccionar una ciudad favorita para que siempre se cargue al abrir la app.

### Modo Oscuro / Claro
- [ ] El usuario puede alternar entre:

- Modo claro (fondos claros).
- Modo oscuro (fondos oscuros).

- [ ] La configuración se guarda automáticamente en localStorage.

### Carga optimizada de datos
- [ ] Se muestra un indicador de carga mientras se obtienen los datos.
- [ ] Si hay un error con la API, aparece un mensaje de error en la interfaz en lugar de dejar la pantalla en blanco.
```

###### 
