var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function changeColor(){
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";"
}

function randomColor(){
	var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right," + randomColor1 + "," + randomColor2 + ")";
	color1.value = randomColor1;
	color2.value = randomColor2;
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
random.addEventListener("click", randomColor)
changeColor()