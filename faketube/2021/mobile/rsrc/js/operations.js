/*
	operations.js
	
	contains code that makes the page interactive
	like changing the state of the navbar buttons
*/



function displaySavedVideoIds() {
	alert(`stored video ids:\n\n${JSON.parse(localStorage.videoids).join('\n')}`);
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

// todo: make a cast dialog
//       for now, make it change states when pressed
function castButton() {
	if (document.querySelector("#cast-button-topbar").getAttribute("cast-button-connection-state") == "DISCONNECTED") {
		document.querySelector("#cast-button-topbar").setAttribute("cast-button-connection-state", "CONNECTING");
		return;
	}

	if (document.querySelector("#cast-button-topbar").getAttribute("cast-button-connection-state") == "CONNECTING") {
		document.querySelector("#cast-button-topbar").setAttribute("cast-button-connection-state", "CONNECTED");
		return;
	}

	if (document.querySelector("#cast-button-topbar").getAttribute("cast-button-connection-state") == "CONNECTED") {
		document.querySelector("#cast-button-topbar").setAttribute("cast-button-connection-state", "DISCONNECTED");
		return;
	}
}

class onCreate {
	static intFuncsPage() {
		document.querySelector("#internal-functions-section-container").hidden = false;
	}

	static profilePage() {
		setTimeout(() => {
			document.querySelector("#home-page").hidden = true;
			document.querySelector("#native-profile-page").hidden = false;
		}, __faketube_delaypagems);
	}

	static settingsPage() {
		setTimeout(() => {
			document.querySelector("#native-profile-page").hidden = true;
			document.querySelector("#main-settings-page").hidden = false;
		}, __faketube_delaypagems);
	}

	static chooseThemeDialogPopup() {
		document.querySelector("#faketube-dialog").innerHTML = `
			<h1>Appearance</h1>
			<form>
				<input type="radio" id="theme-light" name="theme_type" value="light" onclick="com.faketube.web.display_theme(0)">
				<label for="theme-light">Light theme</label><br>
				<input type="radio" id="theme-dark" name="theme_type" value="darkmode" onclick="com.faketube.web.display_theme(1)">
				<label for="theme-dark">Dark theme</label><br>
				<input type="radio" id="theme-darkerdarkmode" name="theme_type" value="darkerdarkmode" onclick="com.faketube.web.display_theme(2)">
				<label for="theme-darkerdarkmode">Dark theme (darker)</label><br>
				<input type="radio" id="theme-blackhole" name="theme_type" value="blackhole" onclick="com.faketube.web.display_theme(3)" checked="">
				<label for="theme-blackhole">Black hole theme</label>
			</form>
			<button id="theme-dialog-cancel-button" class="cancel-button-dialog transparent-button-with-border transparent-button-without-border">CANCEL</button>
		`;
		document.querySelector("#faketube-dialog").showModal();
		document.querySelector("#theme-dialog-cancel-button").addEventListener("click", onDestroy.chooseThemeDialogPopup);
	}
}

class onDestroy {
	static intFuncsPage() {
		document.querySelector("#internal-functions-section-container").hidden = true;
	}

	static profilePage() {
		setTimeout(() => {
			document.querySelector("#home-page").hidden = false;
			document.querySelector("#native-profile-page").hidden = true;
		}, __faketube_delaypagems);
	}

	static settingsPage() {
		setTimeout(() => {
			document.querySelector("#main-settings-page").hidden = true;
			document.querySelector("#home-page").hidden = false;
		}, __faketube_delaypagems);
	}

	static chooseThemeDialogPopup() {
		document.querySelector("#faketube-dialog").close();
		document.querySelector("#theme-dialog-cancel-button").removeEventListener("click", onDestroy.chooseThemeDialogPopup);
		document.querySelector("#faketube-dialog").innerHTML = ``;
	}
}

class oc_subpage {
	static show(pageType) {
		if (pageType == "notifs") {
			document.querySelector("#notifications-button-topbar").ariaPressed = "true";
			document.querySelector("#notifications-button-icon > path").setAttribute("d", "M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z");
			document.querySelector("#notifications-button-topbar").setAttribute("onclick", "");
			document.querySelector("#go-back-and-fallback-name-container > button").setAttribute("onclick", "od_subpage.hide(`notifs`)");
			document.querySelector("#go-back-and-fallback-name-container > button").hidden = false;
			document.querySelector("#go-back-and-fallback-name-container > #fallback-header-name").innerText = global_data._watch_page_strings._stored_vars.notifications_text_inject;
			document.querySelector("#home-page-content").hidden = true;
			document.querySelector("#notifications-page-content").hidden = false;
			document.querySelector("#notifications-button-topbar").hidden = true;

			// set all bottom navbar buttons states to false
			HomeTabButton(false);
			ExploreOrShortsTabButton(false);
			SubscriptionsTabButton(false);
			LibraryOrYouTabButton(false);
			
			// set the page Location
			__faketube_page_location = "SUB_NOTIFICATIONS_PAGE";
		}

		if (pageType == "s_general") {
			setTimeout(() => {
				document.querySelector("#main-settings-page > header > button").removeAttribute("onclick");
				document.querySelector("#main-settings-page > header > button").setAttribute("onclick", "od_subpage.hide(`s_general`)");
				document.querySelector("#main-settings-title").innerText = global_data._watch_page_strings._stored_vars.general_text_inject;
				document.querySelector("#settings-options-list").hidden = true;
				document.querySelector("#general-page-list").hidden = false;
			}, __faketube_delaypagems);
		}

		if (pageType == "s_about") {
			setTimeout(() => {
				document.querySelector("#main-settings-page > header > button").removeAttribute("onclick");
				document.querySelector("#main-settings-page > header > button").setAttribute("onclick", "od_subpage.hide(`s_about`)");
				document.querySelector("#main-settings-title").innerText = global_data._watch_page_strings._stored_vars.about_text_inject;
				document.querySelector("#settings-options-list").hidden = true;
				document.querySelector("#about-page-list").hidden = false;
			}, __faketube_delaypagems);
		}
	}
}

class od_subpage {
	static hide(pageType) {
		if (pageType == "notifs") {
			document.querySelector("#notifications-button-topbar").ariaPressed = "false";
			document.querySelector("#notifications-button-icon > path").setAttribute("d", "M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z");
			document.querySelector("#notifications-button-topbar").setAttribute("onclick", "oc_subpage.show(`notifs`)");
			document.querySelector("#go-back-and-fallback-name-container > button").setAttribute("onclick", "");
			document.querySelector("#go-back-and-fallback-name-container > button").hidden = true;
			document.querySelector("#go-back-and-fallback-name-container > #fallback-header-name").innerText = global_data._watch_page_strings._standard.faketube_title_text;
			document.querySelector("#home-page-content").hidden = false;
			document.querySelector("#notifications-page-content").hidden = true;
			document.querySelector("#notifications-button-topbar").hidden = false;
		}

		if (pageType == "s_general") {
			setTimeout(() => {
				document.querySelector("#main-settings-page > header > button").removeAttribute("onclick");
				document.querySelector("#main-settings-page > header > button").setAttribute("onclick", "onDestroy.settingsPage()");
				document.querySelector("#main-settings-title").innerText = global_data._watch_page_strings._stored_vars.settings_text_inject;
				document.querySelector("#settings-options-list").hidden = false;
				document.querySelector("#general-page-list").hidden = true;
			}, __faketube_delaypagems);
		}

		if (pageType == "s_about") {
			document.querySelector("#main-settings-page > header > button").removeAttribute("onclick");
			document.querySelector("#main-settings-page > header > button").setAttribute("onclick", "onDestroy.settingsPage()");
			document.querySelector("#main-settings-title").innerText = global_data._watch_page_strings._stored_vars.settings_text_inject;
			document.querySelector("#settings-options-list").hidden = false;
			document.querySelector("#about-page-list").hidden = true;
		}
	}
}



/*
	faketube's EXPERIMENT FLAGS functions
	also serves as a default settings initializer
*/
function __loadcfgs() {
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

// execute the flags loader function
__loadcfgs();
