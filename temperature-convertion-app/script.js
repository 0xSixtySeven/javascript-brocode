// TEMPERATURE CONVERSION APP


const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result")
let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + " ℉";
        // We use .toFixed to use a certain amount of decimals, in this case (2)

    }
    else if (toCelsius.checked) {
        temp = Number(textBox.value)
        temp = Number(temp - 32) * (5 / 9)
        result.textContent = temp.toFixed(2) + " ℃";

    }
    else {
        result.textContent = "Select a unit!";
    }

}

// function convertCelsiusToFahrenheit(celsius) {
//     fahrenheit = celsius * 9 / 5 + 32;
//     return fahrenheit;
// }
// console.log(convertCelsiusToFahrenheit(32));


// function convertFahrenheitToCelsius(fahrenheit) {
//     celsius = (fahrenheit - 32) * 5 / 9;
//     return celsius;
// }
// console.log(convertFahrenheitToCelsius(32));
