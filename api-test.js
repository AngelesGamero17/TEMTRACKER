const claveApi = '427bf53c89c64c22833115745252504'; 
const idioma = 'es';
const ciudad = 'huancayo'; // corregido el nombre de la variable

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const response = await fetch(apiClimaActual); // esto solo funcionará si estás dentro de una función async o en un entorno que lo permita
let data = await response.json();

console.log(data.location);

