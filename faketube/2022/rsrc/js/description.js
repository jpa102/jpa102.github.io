/*
	description.js
	
	this modifies the preview and full description
	this is in alpha version so expect bugs
*/

function descriptionButton() {
	// show more
	if (document.querySelector("#expand-description-button").ariaPressed == "false") {
		// this is where you will put the full description
		document.querySelector("#description-text").innerHTML =
		`
			Your Description here
			<br>
			This is a description
			<br>
			<br>
			that contains text
			<br>
			<br>
			about the video
			<br>
			<br>
			<br>
			This is just an example of what it looks like. You can choose to edit the description manually
			<br>
			with a text editor or open this in a browser, press f12, go to console, and copy this code:
			<br>
			<br>
			document.designMode = 'on'
			<br>
			<br>
			After you're done, you can turn it off with this code:
		`
		
		document.querySelector("#expand-description-button").innerText = "Show less";
		document.querySelector("#expand-description-button").ariaPressed = "true";
		return;
	}

	// show less
	if (document.querySelector("#expand-description-button").ariaPressed == "true") {
		document.querySelector("#description-text").innerHTML =
		`
			Your Description here
			<br>
			This is a description
			<br>
		`
		
		document.querySelector("#expand-description-button").innerText = "Show more";
		document.querySelector("#expand-description-button").ariaPressed = "false";
		return;
	}
}
