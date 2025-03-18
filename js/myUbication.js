export default async()=>{
    if ('geolocation' in navigator) {
        const success = async(position)=>{
            const {latitude, longitude} = position.coords;
            const url = new URL("https://nominatim.openstreetmap.org/reverse");
            url.searchParams.set("format", "json");
            url.searchParams.set("lat", latitude);
            url.searchParams.set("lon", longitude);
            url.searchParams.set("zoom", 10);
            url.searchParams.set("addressdetails", 1)
            const response = await fetch(url.toString(), {method: "get"});
            const data = await response.json();
            const direccion = data.address;
            const input = document.querySelector("#search .div__icon input");
            input.value = `${direccion.city || direccion.town || direccion.village}, ${direccion.county || direccion.state_district}, ${direccion.state}, ${direccion.country}`
            const search = document.querySelector("#search");
            search.dispatchEvent(new Event("submit"));
        }
        const error = async(err) => {
            return `ERROR(${err.code}): ${err.message}`
        }

         navigator.geolocation.getCurrentPosition(success, error);

    } else {
    console.log('La geolocalización NO está disponible en este navegador');
    }      
}