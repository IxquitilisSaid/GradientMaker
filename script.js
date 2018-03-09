var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button1");

function setGradient(){

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value  
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
}

function funkyButton(){

	body.style.background = 
	"linear-gradient(to right, " 
	+ (color1.value = randomColor());
	+ ", " 
	+ (color2.value = randomColor());
	+ ")";

	css.textContent = body.style.background + ";";
	setGradient();	
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", funkyButton);