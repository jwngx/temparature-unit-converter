function convert() {

};
const myInput = document.getElementById("myInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let userValue;
function convert(){
    if(toFahrenheit.checked){

    }
    else if(toCelcius.checked){

    }
    else{
        result.textContent="Please select a unit!";
    }
}
mySubmit.onclick = function (e) {       //e=event
    e.preventDefault();
    userValue = myInput.value;
    convert();
}
