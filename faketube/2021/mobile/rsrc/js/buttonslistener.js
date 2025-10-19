/*
	==========================================================
			Like and Dislike buttons
	==========================================================
*/
function likeButton() {
	likebuttonpressedcheck();
}

function dislikeButton() {
	dislikebuttonpressedcheck();
}



/*
	==========================================================
				Other buttons
	==========================================================
*/
function shareButton() {
	console.log("function not implemented yet. [ln:21 buttonlistener.js]");
}

function liveChatButton() {
	console.log("function not implemented yet. [ln:25 buttonlistener.js]");
}

function thanksButton() {
	console.log("function not implemented yet. [ln:29 buttonlistener.js]");
}

function createButton() {
	console.log("function not implemented yet. [ln:33 buttonlistener.js]");
}

function downloadButton() {
	if (document.querySelector("#download-button").ariaPressed == "false") {
		document.querySelector("#downloadbutton-icon > div > svg").remove();

		document.querySelector("#downloadbutton-icon > div").insertAdjacentHTML(
			"afterbegin",
			`
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
					<path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M17,18H7v-2h10V18z M10.3,14L7,10.7l1.4-1.4l1.9,1.9 l5.3-5.3L17,7.3L10.3,14z"></path>
				</svg>
			`
		);

		document.querySelector("#download-text-renderer").innerText = "Downloaded";
		document.querySelector("#download-button").ariaPressed = "true";

		setTimeout(function() {
			alert("Download unavailable");
		}, 900);
		console.log("sorry, no video download available.\nin fact, there's not even a single line of code here that provides download functionality.  [ln:37 buttonlistener.js]");


		return;
	}

	if (document.querySelector("#download-button").ariaPressed == "true") {
		document.querySelector("#downloadbutton-icon > div > svg").remove();

		document.querySelector("#downloadbutton-icon > div").insertAdjacentHTML(
			"afterbegin",
			`
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
					<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
				</svg>
			`
		);

		document.querySelector("#download-text-renderer").innerText = "Download";
		document.querySelector("#download-button").ariaPressed = "false";
		return;
	}
}

function clipButton() {
	console.log("function not implemented yet. [ln:41 buttonlistener.js]");
}

function saveButton() {
	if (document.querySelector("#save-button").ariaPressed == "false") {
		document.querySelector("#savebutton-icon > div > svg").remove();

		document.querySelector("#savebutton-icon > div").insertAdjacentHTML(
			"afterbegin",
			`
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
					<path d="M4 20h14v1H3V6h1v14zM21 3v15H6V3h15zm-3.42 5.41L16.17 7l-4.18 4.18-1.58-1.58L9 11.01 11.99 14l5.59-5.59z"></path>

				</svg>
			`
		);

		document.querySelector("#save-text-renderer").innerText = "Saved";
		document.querySelector("#save-button").ariaPressed = "true";
		return;
	}

	if (document.querySelector("#save-button").ariaPressed == "true") {
		document.querySelector("#savebutton-icon > div > svg").remove();

		document.querySelector("#savebutton-icon > div").insertAdjacentHTML(
			"afterbegin",
			`
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
					<path d="M4 20h14v1H3V6h1v14zm14-10h-4V6h-1v4H9v1h4v4h1v-4h4v-1zm3-7v15H6V3h15zm-1 1H7v13h13V4z"></path>
				</svg>
			`
		);

		document.querySelector("#save-text-renderer").innerText = "Save";
		document.querySelector("#save-button").ariaPressed = "false";
		return;
	}
}

function reportButton() {
	console.log("function not implemented yet. [ln:81 buttonlistener.js]");
}

function moreButton() {
	console.log("function not implemented yet. [ln:85 buttonlistener.js]");
}
