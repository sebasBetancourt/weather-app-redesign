const KEY = "9520624784d14709817195746240910";
const url = new URL("https://api.weatherapi.com/v1")
url.searchParams.set("key", KEY)

export const searchWeather = async ({location, enpoint, method})=>{
    url.pathname += enpoint;
    url.searchParams.set("q", location)
    url.searchParams.set("lang", "en")
    const response = await fetch(url.toString(), {method});
    if(response.status == 400){ alert("esta pendejo o se hace"); return {status: 400}};
    const data = await response.json();
    const {name, region, country} = data.location
    url.pathname = "/v1";
    const {forecast} = await findForecastByDay(
        {   name, 
            region, 
            country, 
            enpoint : "/forecast.json",
            method: "get"
        }
    );
    const {forecastday} = forecast;
    data.status = 200;
    data.forecast =forecastday
    return data;
} 


export const findForecastByDay = async({name, region, country, enpoint, method})=>{
    url.pathname += enpoint;
    url.searchParams.set("q", name)
    url.searchParams.set("region", region)
    url.searchParams.set("country", country)
    url.searchParams.set("lang", "en")
    const response = await fetch(url.toString(), {method});
    const data = await response.json();
    return data;
}