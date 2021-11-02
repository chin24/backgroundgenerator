var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var css = document.querySelector("#csscode");
var button = document.querySelector("#randomgeneratorbtn");
var copyBtn = document.querySelector("#copybutton");

setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.value = body.style.background + ";";
}

function randomRGBGenerator() {
       var r= toHex(Math.random() * 255);
       var g = toHex(Math.random() * 255);
       var b = toHex(Math.random() * 255);
      return "#" + r + g + b;
}

function toHex(d) {
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

function setRandomCombination(){
    color1.value = randomRGBGenerator();
    color2.value = randomRGBGenerator();
    setGradient();
}

function copyText() {

    navigator.clipboard.writeText(css.value);
    alert("Copied the text: " + css.value);
  }

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomCombination);
copyBtn.addEventListener("click", copyText);

