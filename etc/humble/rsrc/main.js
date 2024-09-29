/*
	internal config
*/
let waitTimeMs = 2000; // in milliseconds, 1000 is 1 second
let ytId = ""; // blank value for placeholder
let lastVideoId = ""; // blank value for placeholder
let vibratems = 60; // time to vibrate

var expectation = "mas magaling pa ako kaysa sa kanila!";



function Clear(){
	vibrate();
	document.querySelector("input").value = "";
	start = setInterval(main, waitTimeMs);
}

function vibrate() {
	navigator.vibrate(vibratems);
}

function getInputs() {
	return document.querySelector("#getexpectation").value;
}

function main() {
	if (getInputs() === expectation) {
		alert(true);
		clearInterval(start);
	}
}




setTimeout(function() {
	start = setInterval(main, waitTimeMs);
}, 1000);
