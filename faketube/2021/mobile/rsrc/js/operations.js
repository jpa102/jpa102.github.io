/*
	operations.js
	
	this module contains code that makes the page interactive
*/



function displaySavedVideoIds() {
	alert(`stored video ids:\n\n ${JSON.parse(localStorage.videoids).join('\n')}`);
}

const exportSavedVideoIds = () => {
	setTimeout(function() {
		// if there's nothing inside the localStorage.videoids
		if (localStorage.videoids == null) {
			return;
		}

		let datefile = new Date();
		const link = document.createElement("a");
		const content = localStorage.videoids;
		const file = new Blob([content], { type: 'application/json' });
		link.href = URL.createObjectURL(file);
		link.download = `video-ids-history-faketube[${datefile.toISOString()}].txt`;
		link.click();
		URL.revokeObjectURL(link.href);
	}, 1000);
}

class onCreate {
	static intFuncsPage() {
		document.querySelector("#video-metadata-info-and-recommendations-container").hidden = true;
		document.querySelector("#internal-functions-section-container").hidden = false;
	}

	static settingsPage() {
		document.querySelector("#description-section-container").hidden = true;
		document.querySelector("#transcripts-section-container").hidden = false;
	}
}

class onDestroy {
	static intFuncsPage() {
		document.querySelector("#video-metadata-info-and-recommendations-container").hidden = false;
		document.querySelector("#internal-functions-section-container").hidden = true;
	}

	static settingsPage() {
		document.querySelector("#description-section-container").hidden = false;
		document.querySelector("#transcripts-section-container").hidden = true;
	}
}



/*
	faketube's EXPERIMENT FLAGS functions
	also serves as a default settings initializer
*/
function __loadexpflags() {

	//	make the page display a popup whenever the dislike button is pressed (likedislikebutton.js - dislikebuttonpressedcheck() function)

	//	unhide the gradient header
	if (faketube.config_.unhide_gradient_header == true) {
		setTimeout(function() {
			document.querySelector("header").hidden = false;
		}, 50);
	}

	//	apply my favorite background color to the page
	if (faketube.config_.apply_favorite_site_authors_background_color == true) {
		setTimeout(function() {
			document.head.insertAdjacentHTML(
				"afterbegin",
				`
					<style id="jpa102-favorite-background-color" type="text/css">
						body { background: #36c8ff !important; }
						.background-subpage-layer-two { background: #36c8ff !important; }
					</style>
				`
			);
		}, __faketube_aplyfavstebgclr);
	}

	//	make the page editable
	if (faketube.config_.web_page_editable == true) {
		document.designMode = "on";
	}

	//	
	if (faketube.config_.display_intfuncs_button == true) {
		setTimeout(function() { document.querySelector("#intfuncs-button").removeAttribute("style"); }, 50);
	}

	//	input a country code and language (example: ja-JP for japanese - japan)
	if (faketube.config_.EXPERIMENT_FLAGS.forced_country_code_and_language != "") {
		setTimeout(function() { document.querySelector("html").lang = faketube.config_.EXPERIMENT_FLAGS.forced_country_code_and_language; }, 1000);
	} else {
		// set the default one if it's null
		setTimeout(function() { document.querySelector("html").lang = document.querySelector("html").lang = navigator.language; }, 1000);
	}

	//	inject and style the page from 15.xx.xx versions of youtube app
	if (faketube.config_.EXPERIMENT_FLAGS.match_older_15_xx_xx_version == true) {
		setTimeout(function() {
			document.querySelector("head").insertAdjacentHTML(
				"beforeend",
				`
					<style id="match-older-15xxxx-version" type="text/css">
						html[data-theme-display='light'] .menu-buttons-actions[aria-pressed='true'] { color: red; }
						html:not([data-theme-display='light']) .menu-buttons-actions[aria-pressed='false'] div,
						html:not([data-theme-display='light']) .menu-buttons-actions[aria-pressed='false'] span {
							color: var(--gray-color);
						}
						html[data-theme-display='light'] .menu-buttons-actions[aria-pressed='false'] div,
						html[data-theme-display='light'] .menu-buttons-actions[aria-pressed='false'] span {
							color: #909090;
						}
					</style>
					`
			);
		}, 10); // in milliseconds
	}

	//	inject and style the page from older 16.xx.xx versions of youtube app
	if (faketube.config_.EXPERIMENT_FLAGS.match_older_16_xx_xx_version == true) {
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="match-older-16xxxx-version" type="text/css">
					#live-chat-button, #remix-button, #stop-ads-button, #thanks-button, #clip-button, #report-button { display: none !important; }
					#all-buttons-container { gap: unset; justify-content: space-evenly; }
					#menu { flex-direction: column; padding: 0px 12px 0px; }
					.menu-buttons-actions { width: 3.8rem; }
				</style>
			`
		);

		// replace Shorts with Explore
		setTimeout(function() {
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z");
		}, 10); // in milliseconds

		ExploreOrShortsTabButton = function(buttonState) {
			if (buttonState == false) {
				if (document.querySelector("#explore-and-shorts-button").ariaPressed == "false") {
					return;
				} else {
					document.querySelector("#explore-and-shorts-button").ariaPressed = "false";
					document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z");
					return;
				}
			}

			if (buttonState == true) {
				if (document.querySelector("#explore-and-shorts-button").ariaPressed == "true") {
					return;
				} else {
					document.querySelector("#explore-and-shorts-button").ariaPressed = "true";
					document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "M11.23,13.08c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99c0.21-0.29,0.51-0.48,0.86-0.54 c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86c0.06,0.35-0.02,0.71-0.23,0.99c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02C11.72,13.33,11.45,13.25,11.23,13.08z M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12 C2,6.48,6.48,2,12,2S22,6.48,22,12z M18.03,5.97L9.8,9.8l-3.83,8.23l8.23-3.83L18.03,5.97z");
					return;
				}
			}
		}
	}
}

// execute the experiment flags loader function
__loadexpflags();
