/*
	description.js
	
	this modifies the preview and full description
	by default, it has no data in it
*/

var collapseddescription = "";
var uncollapseddescription = "";

function descriptionButton() {
	// show more
	if (document.querySelector("#expand-description-button").ariaPressed == "false") {
		// this is where you will put the full description
		document.querySelector("#description-text").innerText = uncollapseddescription;
		
		document.querySelector("#expand-description-button").innerText = "Show less";
		document.querySelector("#expand-description-button").ariaPressed = "true";
		return;
	}

	// show less
	if (document.querySelector("#expand-description-button").ariaPressed == "true") {
		document.querySelector("#description-text").innerText = collapseddescription;
		
		document.querySelector("#expand-description-button").innerText = "Show more";
		document.querySelector("#expand-description-button").ariaPressed = "false";
		
		// make it scroll to the top
		window.scrollTo(
			{ 
				top: 169,
				behavior: 'smooth'
			}
		);
		
		return;
	}
}
