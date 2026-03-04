const myInput = document.getElementById("myInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let userValue;

// °F = (9/5 × °C) + 32
// °C = (°F - 32) × 5/9
let resultValue;
function convert() {
    if (toFahrenheit.checked) {
        resultValue = (userValue * 9 / 5)+32;
        result.textContent=resultValue+"F";
    }
    else if (toCelcius.checked) {
        resultValue=(userValue-32)*5/9;
        result.textContent=resultValue+"C";
    }
    else {
        result.textContent = "Please select a unit!";
    }
}
mySubmit.onclick = function (e) {       //e=event
    e.preventDefault();
    userValue = myInput.value;
    convert();
}
