
import {searchWeather} from "./findApi.js";
import ubication from "./myUbication.js";


const search = document.querySelector("#search");

const temp_c = document.querySelector("#temp_c");
const icon = document.querySelector("#icon");
const status = document.querySelector("#status");
const last_updated = document.querySelector("#last_updated");
const feelslike_c = document.querySelector("#feelslike_c");
const maxtemp_c = document.querySelector("#maxtemp_c");
const mintemp_c = document.querySelector("#mintemp_c");

addEventListener("DOMContentLoaded", async(e)=>{
    await ubication();
})

addEventListener("scroll", (e)=>{
     console.log(window.scrollY);
     const header = document.querySelector("header");
     const navbar = document.querySelector("#navbar");
     const input = document.querySelector(".div__icon input");
     const imgIcon = document.querySelector(".div__icon img");
     const div = document.querySelector(".div__title");
     const h1 = document.querySelector(".div__title h1");
     const spanTitle = document.querySelector(".div__title span");
     const img = document.querySelector(".div__image img");
     const span = document.querySelector(".div__image span");
     const div__footer = document.querySelector("#div__footer");

     if (window.scrollY > 20) {
          navbar.style.height = "220px";
          header.style.height = "220px";
          navbar.style.backgroundImage = "none"; 
          navbar.style.backgroundColor = "var(--card-1)";
          navbar.style.borderRadius = "0px"; 
          navbar.style.justifyContent = "flex-start"; 
          navbar.style.gap = "15px"; 
          input.style.color = "var(--color-2)";
          imgIcon.src = "storage/img/search_black.png"
          div.style.flexWrap = "nowrap";
          h1.style.fontSize = "57px";
          h1.style.color = "var(--color-2)";
          h1.style.letterSpacing = "0px";
          
          spanTitle.style.color = "var(--color-2)";
          img.style.width = "77.5px";
          img.style.height = "77.5px";
          span.style.display = "none";
          div__footer.style.display = "none";
      } else {
          navbar.removeAttribute("style");
          header.removeAttribute("style");
          input.removeAttribute("style");
          imgIcon.src = "storage/img/search_white.png"
          div.removeAttribute("style");
          h1.removeAttribute("style");
          spanTitle.removeAttribute("style");
      
          img.removeAttribute("style");
          span.removeAttribute("style");
          div__footer.removeAttribute("style");
      }
})



search.addEventListener("submit", async(e)=>{
     
     alert("dfgh");
     const data = Object.fromEntries(new FormData(e.target));
     const url = new URL(e.target.action);
     console.log(url);
     data.enpoint = url.pathname;   
     data.method = e.target.method;   
     console.log(data);
     
     const response = await searchWeather(data);
     if(response.status == 400){ return undefined};
     console.log(response);
     temp_c.textContent = `${response.current.temp_c}°`;
     icon.src = response.current.condition.icon;
     status.textContent = response.current.condition.text;
     const fecha = new Date(response.current.last_updated).toLocaleDateString('en-US', { 
          weekday: "long",  // Día de la semana completo (ej. "martes")
          month: "long",    // Nombre completo del mes (ej. "marzo")
          day: "numeric",   // Día del mes (ej. "11")
          }).replace(" at", ",");
     last_updated.textContent = fecha;
     feelslike_c.textContent = `Feels like ${response.current.feelslike_c}°`
     maxtemp_c.textContent = `Day ${response.forecast[0].day.maxtemp_c} °`
     mintemp_c.textContent = `Night ${response.forecast[0].day.mintemp_c} °`
     e.preventDefault();
})