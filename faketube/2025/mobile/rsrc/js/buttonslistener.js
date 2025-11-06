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
					<path d="M12 2a1 1 0 00-1 1v11.586l-4.293-4.293a1 1 0 10-1.414 1.414L12 18.414l6.707-6.707a1 1 0 10-1.414-1.414L13 14.586V3a1 1 0 00-1-1Zm7 18H5a1 1 0 000 2h14a1 1 0 000-2Z"></path>
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
					<path d="M19 2H5a2 2 0 00-2 2v16.887c0 1.266 1.382 2.048 2.469 1.399L12 18.366l6.531 3.919c1.087.652 2.469-.131 2.469-1.397V4a2 2 0 00-2-2Z"></path>
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
					<path d="M19 2H5a2 2 0 00-2 2v16.887c0 1.266 1.382 2.048 2.469 1.399L12 18.366l6.531 3.919c1.087.652 2.469-.131 2.469-1.397V4a2 2 0 00-2-2ZM5 20.233V4h14v16.233l-6.485-3.89-.515-.309-.515.309L5 20.233Z"></path>
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
