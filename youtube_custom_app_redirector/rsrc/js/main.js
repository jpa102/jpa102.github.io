/*
	main.js
*/



// topbar
function NotificationsButton(buttonState) {
	if (buttonState == false) {
		document.querySelector("#notifications-button-icon > path").setAttribute("d", "M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z");
	}

	if (buttonState == true) {
		document.querySelector("#notifications-button-icon > path").setAttribute("d", "M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z");
	}
}

// bottom navbar
function HomeTabButton(buttonState) {
	if (buttonState == false) {
		if (document.querySelector("#home-button").ariaPressed == "false") {
			return;
		} else {
			document.querySelector("#home-button").ariaPressed = "false";
			document.querySelector("#homebutton-icon > div > svg > path").setAttribute("d", "M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z");
			return;
		}
	}

	if (buttonState == true) {
		if (document.querySelector("#home-button").ariaPressed == "true") {
			return;
		} else {
			document.querySelector("#home-button").ariaPressed = "true";
			document.querySelector("#homebutton-icon > div > svg > path").setAttribute("d", "M4,10V21h6V15h4v6h6V10L12,3Z");

			// hide all except from home
			document.querySelector("#home-page-content").hidden = false;
			document.querySelector("#explore-or-shorts-page-content").hidden = true;
			document.querySelector("#subscriptions-page-content").hidden = true;
			document.querySelector("#library-page-content").hidden = true;
			document.querySelector("#notifications-page-content").hidden = true;
			
			// set the page Location
			__faketube_page_location = "HOME_PAGE";
			return;
		}
	}
}

function ExploreOrShortsTabButton(buttonState) {
	if (buttonState == false) {
		if (document.querySelector("#explore-and-shorts-button").ariaPressed == "false") {
			return;
		} else {
			document.querySelector("#explore-and-shorts-button").ariaPressed = "false";
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z");
			return;
		}
	}

	if (buttonState == true) {
		if (document.querySelector("#explore-and-shorts-button").ariaPressed == "true") {
			return;
		} else {
			document.querySelector("#explore-and-shorts-button").ariaPressed = "true";
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "m13.974 2.052-8 4.7a4 4 0 00.385 7.097l.942.423-1.327.78a4 4 0 004.052 6.897l8-4.7a4.001 4.001 0 00-.384-7.096L16.7 9.73l1.326-.78a4 4 0 10-4.052-6.897ZM10 15V9l5 3-5 3Z");

			// hide all except from explore (or shorts)
			document.querySelector("#home-page-content").hidden = true;
			document.querySelector("#explore-or-shorts-page-content").hidden = false;
			document.querySelector("#subscriptions-page-content").hidden = true;
			document.querySelector("#library-page-content").hidden = true;
			document.querySelector("#notifications-page-content").hidden = true;
			
			// set the page Location
			__faketube_page_location = "EXPLORE_OR_SHORTS_PAGE";
			return;
		}
	}
}

function SubscriptionsTabButton(buttonState) {
	if (buttonState == false) {
		if (document.querySelector("#subscriptions-button").ariaPressed == "false") {
			return;
		} else {
			document.querySelector("#subscriptions-button").ariaPressed = "false";
			document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("d", "M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z");
			return;
		}
	}

	if (buttonState == true) {
		if (document.querySelector("#subscriptions-button").ariaPressed == "true") {
			return;
		} else {
			document.querySelector("#subscriptions-button").ariaPressed = "true";
			document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("d", "M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z");

			// hide all except from subscriptions
			document.querySelector("#home-page-content").hidden = true;
			document.querySelector("#explore-or-shorts-page-content").hidden = true;
			document.querySelector("#subscriptions-page-content").hidden = false;
			document.querySelector("#library-page-content").hidden = true;
			document.querySelector("#notifications-page-content").hidden = true;
			
			// set the page Location
			__faketube_page_location = "SUBSCRIPTIONS_PAGE";
			return;
		}
	}
}

function LibraryOrYouTabButton(buttonState) {
	if (buttonState == false) {
		if (document.querySelector("#library-or-you-tab-button").ariaPressed == "false") {
			return;
		} else {
			document.querySelector("#library-or-you-tab-button").ariaPressed = "false";
			document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("d", "M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z");
			return;
		}
	}

	if (buttonState == true) {
		if (document.querySelector("#library-or-you-tab-button").ariaPressed == "true") {
			return;
		} else {
			document.querySelector("#library-or-you-tab-button").ariaPressed = "true";
			document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("d", "M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z");

			// hide all except from explore (or shorts)
			document.querySelector("#home-page-content").hidden = true;
			document.querySelector("#explore-or-shorts-page-content").hidden = true;
			document.querySelector("#subscriptions-page-content").hidden = true;
			document.querySelector("#library-page-content").hidden = false;
			document.querySelector("#notifications-page-content").hidden = true;
			
			// set the page Location
			__faketube_page_location = "LIBRARY_OR_YOU_PAGE";
			return;
		}
	}
}



document.querySelector("html").setAttribute("data-theme-display", "light");
document.querySelector("html").setAttribute("data-online-status", "online");
document.querySelector("html").lang = navigator.language;

setTimeout(function() {
	/*
		obtained from google search's AI Overview preview window
	const openButton = document.getElementById('open-dialog');
	const closeButton = document.getElementById('close-dialog');
	const dialog = document.getElementById('my-dialog');

	// Open the dialog as a modal (with a backdrop)
	openButton.addEventListener('click', () => {
		dialog.showModal();
	});

	// Close the dialog
	closeButton.addEventListener('click', () => {
		dialog.close();
	});
	*/
	
	/*
		app version injector
		ah yes, just like in the android app of youtube where it displays the app version
	*/
	document.querySelector("#app-version-container > .items-text-container-flexed-columnstyle > .native-profile-item-text-container-subtext-gray").innerText = com.faketube.web.origAndroidClientVer;

	/*
		code to get the parameters from the URL and automatically redirect to the app
			video_id - must be 11 characters
			package_app - must be a valid package name of an app that accepts youtube urls
	*/
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);

	// don't execute if the video id is less or greater than 11 characters
	if (urlParams.get('video_id').length < 11 || urlParams.get('video_id').length > 11) {
		return;
	} else {
		let art_link = document.createElement("a");
		art_link.href = setIntentLinkOpenApp(urlParams.get('video_id'), undefined, urlParams.get('package_app'), undefined, undefined, undefined, undefined);
		art_link.click(); // simulate a touch event
	}
}, 25);

