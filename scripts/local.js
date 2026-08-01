// Dados estáticos do clima
const temperature = 10;
const windSpeed = 5;


// Função para calcular a sensação térmica
function calcularSensacaoTermica(temp, wind) {

    return 13.12 + 0.6215 * temp - 11.37 * 
    Math.pow(wind, 0.16) + 
    0.3965 * temp * Math.pow(wind, 0.16);

}



// Define o valor inicial
let windChill = "N/A";


// Verifica se o cálculo é possível
if (temperature <= 10 && windSpeed > 4.8) {

    windChill = calcularSensacaoTermica(
        temperature,
        windSpeed
    ).toFixed(1);

}



// Exibe a sensação térmica na página
document.querySelector("#windchill").textContent =
    windChill + " °C";



// Atualiza o ano automaticamente
const currentYear = new Date().getFullYear();

document.querySelector("#year").textContent =
    currentYear;



// Mostra a data da última alteração do arquivo
document.querySelector("#modified").textContent =
    document.lastModified;