/*
	operations.js
	
	contains code that makes the page interactive
	like changing the state of the navbar buttons
*/



class dialog {
	static themeSetter(themeIndex, waitTimeMs = 301) {
		setTimeout(function() {
			com.faketube.web.display_theme(themeIndex);
			onDestroy.chooseThemeDialogPopup(10);
			return;
		}, waitTimeMs);
	}
}

function setIntentLinkOpenApp(video_id, app_type = "desktop", int_pkg_nme = "com.google.android.youtube", lnch_flgs_int = 268435456, opn_app_value = "mweb_c3_open_app_11268432", redir_app_stre_int = 1, scheme = "vnd.youtube") {
	const safeVideoId = encodeURIComponent(video_id);
	const safeAppType = encodeURIComponent(app_type);
	const safePackageName = encodeURIComponent(int_pkg_nme);
	const safeLaunchFlags = encodeURIComponent(String(lnch_flgs_int));
	const safeOpenAppValue = encodeURIComponent(opn_app_value);
	const safeRedirectAppStore = encodeURIComponent(String(redir_app_stre_int));
	const safeScheme = encodeURIComponent(scheme);

	/*
		perform a check if the package name is blank
		if it's blank, correctly use the default value from the function
	*/
	if (document.querySelector(".section-body-content > input").value === '') {
		return `intent://m.youtube.com/watch?v=${safeVideoId}&feature=${safeOpenAppValue}&itc_campaign=${safeOpenAppValue}&redirect_app_store_ios=${safeRedirectAppStore}&app=${safeAppType}#Intent;package=${int_pkg_nme};scheme=${safeScheme};launchFlags=${safeLaunchFlags};end`;
	} else {
		return `intent://m.youtube.com/watch?v=${safeVideoId}&feature=${safeOpenAppValue}&itc_campaign=${safeOpenAppValue}&redirect_app_store_ios=${safeRedirectAppStore}&app=${safeAppType}#Intent;package=${safePackageName};scheme=${safeScheme};launchFlags=${safeLaunchFlags};end`;
	}
}

function redirectFromIntent() {
	const videoId = document.querySelector("#video-id-form > input").value;
	if (videoId.length < 11) {
		com.faketube.web.debug.displayAlertDialog("OK_TYPE", "less than 11 characters", `the current video id length you've entered is at ${videoId.length}\<br\>\<br\>the value: ${videoId}`);
		return;
	}

	if (videoId.length > 11) {
		com.faketube.web.debug.displayAlertDialog("OK_TYPE", "greater than 11 characters", `the current video id length you've entered is at ${videoId.length}\<br\>\<br\>the value: ${videoId}`);
		return;
	}

	if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
		com.faketube.web.debug.displayAlertDialog("OK_TYPE", "invalid video id", `the current video id contains invalid characters\<br\>\<br\>the value: ${videoId}`);
		return;
	}

	let art_link = document.createElement("a");
	art_link.href = setIntentLinkOpenApp(videoId, undefined, document.querySelector(".section-body-content > input").value, undefined, undefined, undefined, undefined);
	art_link.click(); // simulate a touch event
}

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
		/*
			todo: switch to manually creating elements instead of injecting html with innerHTML
		*/
		//let dialog_h1 = document.createElement("h1");
		//let dialog_radio_container = document.createElement("div");
		//let dialog_close_button = document.createElement("button");

		//dialog_h1.innerText = global_data._watch_page_strings._stored_vars.global_data._watch_page_strings._stored_vars.appearance_text_inject;
		//dialog_h1.id = "appearance-h1-text-dialog";
		//dialog_h1.setAttribute("class", "faketube-dialog-text");
		//dialog_radio_container.id = "radio-dialog-container";
		//dialog_radio_container.setAttribute("class", "faketube-dialog-text");
		//dialog_close_button.id = "theme-dialog-cancel-button";
		//dialog_close_button.setAttribute("class", "cancel-button-dialog transparent-button-with-border transparent-button-without-border touch-by-touch faketube-dialog-text");

		document.querySelector("#faketube-dialog").innerHTML = `
			<h1 id="appearance-h1-text-dialog" class="faketube-dialog-text">${global_data._watch_page_strings._stored_vars.appearance_text_inject}</h1>
			<div id="radio-dialog-container" class="faketube-dialog-text">
				<form>
					<div class="inout-radio-and-label-container menu-buttons input-radio-option-dialog" onclick="dialog.themeSetter(0, 100)">
						<input type="radio" id="theme-light" name="theme_type" value="light">
						<label for="theme-light" class="faketube-dialog-text">${global_data._watch_page_strings._stored_vars.light_mode_text_inject}</label><br>
					</div>
					<div class="inout-radio-and-label-container menu-buttons input-radio-option-dialog" onclick="dialog.themeSetter(1, 100)">
						<input type="radio" id="theme-dark" name="theme_type" value="darkmode">
						<label for="theme-dark">${global_data._watch_page_strings._stored_vars.dark_mode_text_inject}</label><br>
					</div>
					<div class="inout-radio-and-label-container menu-buttons input-radio-option-dialog" onclick="dialog.themeSetter(2, 100)">
						<input type="radio" id="theme-darkerdarkmode" name="theme_type" value="darkerdarkmode">
						<label for="theme-darkerdarkmode">${global_data._watch_page_strings._stored_vars.darker_dark_mode_text_inject}</label><br>
					</div>
					<div class="inout-radio-and-label-container menu-buttons input-radio-option-dialog" onclick="dialog.themeSetter(3, 100)">
						<input type="radio" id="theme-blackhole" name="theme_type" value="blackhole">
						<label for="theme-blackhole">${global_data._watch_page_strings._stored_vars.black_hole_theme_text_inject}</label>
					</div>
				</form>
			</div>
			<div class="dialog-flexed-buttons-container">
				<div class="dialog-dummy-element"></div>
				<button id="theme-dialog-cancel-button" class="button-dialog menu-buttons faketube-dialog-text">${global_data._watch_page_strings._stored_vars.cancel_text_inject}</button>
			</div>
		`;

		if (localStorage.theme_type == "light") {
			document.querySelector("#theme-light[type='radio']").checked = true;
		} else if (localStorage.theme_type == "darkmode") {
			document.querySelector("#theme-dark[type='radio']").checked = true;
		} else if (localStorage.theme_type == "darkerdarkmode") {
			document.querySelector("#theme-darkerdarkmode[type='radio']").checked = true;
		} else if (localStorage.theme_type == "blackhole") {
			document.querySelector("#theme-blackhole[type='radio']").checked = true;
		}

		document.body.setAttribute("data-page-scrolling", "false");
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

	static chooseThemeDialogPopup(closeTimeMs = 200) {
		setTimeout(function() {
			document.querySelector("#faketube-dialog").close();
			document.querySelector("#theme-dialog-cancel-button").removeEventListener("click", onDestroy.chooseThemeDialogPopup);
			document.querySelector("#faketube-dialog").innerHTML = ``;
			document.body.setAttribute("data-page-scrolling", "true");
		}, closeTimeMs);
	}
}

class oc_subpage {
	static show(pageType) {
		if (pageType == "notifs") {
			document.querySelector("#notifications-button-topbar").ariaPressed = "true";
			NotificationsButton(true);
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
			NotificationsButton(false);
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
						html[data-theme-display='light'] body,
						html[data-theme-display='light'] header,
						html[data-theme-display='light'] footer,
						html[data-theme-display='light'] dialog {
							background: #36c8ff !important;
						}
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
							color: var(--gray-color) !important;
						}

						html:not([data-theme-display='light']) .button-icon {
							fill: var(--gray-color) !important;
						}

						html[data-theme-display='light'] .menu-buttons-actions[aria-pressed='false'] div,
						html[data-theme-display='light'] .menu-buttons-actions[aria-pressed='false'] span {
							color: #909090;
						}

						html[data-theme-display='light'] .button-icon {
							fill: var(--gray-color) !important;
						}
					</style>
					`
			);
		}, 10); // in milliseconds
	}

	//	inject and style the page from older 16.xx.xx versions of youtube app
	if (faketube.config_.EXPERIMENT_FLAGS.match_older_16_xx_xx_version == true) {
		// replace Shorts with Explore
		setTimeout(function() {
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z");
		}, 1000); // in milliseconds

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
	}

	if (faketube.config_.EXPERIMENT_FLAGS.cairo_style_design == true) {
		// prevent execution if delhi_style_design flag is set to true (avoid conflicts)
		if (faketube.config_.EXPERIMENT_FLAGS.delhi_style_design == true) {
			setTimeout(function() {
				com.faketube.web.debug.displayAlertDialog("OK_TYPE", "info", "the 'cairo_style_design' experiment flag wasn't executed because 'delhi_style_design' is set to true");
			}, 1000); // in milliseconds
			return;
		}

		setTimeout(function() {
			let cairoStyleCSS = document.createElement("style");
			cairoStyleCSS.type = "text/css";
			cairoStyleCSS.id = "cairo-style-css-experiment";
			cairoStyleCSS.innerText = `input.transparent-button-with-border, button#sign-in-button { text-transform: capitalize; } `;
			document.querySelector("html").insertBefore(cairoStyleCSS, document.head);

			document.querySelector("#cast-button-svg-path-disconnected").setAttribute("d", "M21 3H3a2 2 0 00-2 2v3c.67 0 1.337.051 2 .153V5h18v14h-7.153c.1.653.152 1.32.153 2h7a2 2 0 002-2V5a2 2 0 00-2-2ZM1 10v2a9 9 0 019 9h2A11 11 0 001 10Zm0 4v2a5 5 0 015 5h2a7 7 0 00-7-7Zm0 4v3h3a3.003 3.003 0 00-3-3Z");
			document.querySelector("#cast-button-svg-path-connected").setAttribute("d", "M21 3a2 2 0 012 2v14a2 2 0 01-2 2h-7a13.265 13.265 0 00-.153-2H21V5H3v3.153A13 13 0 001 8V5a2 2 0 012-2h18Zm-2 14V7H5v1.627A13.031 13.031 0 0113.373 17H19ZM1 10v2a9 9 0 019 9h2A11 11 0 001 10Zm0 4v2a5 5 0 015 5h2a7 7 0 00-7-7Zm0 4v3h3a3.003 3.003 0 00-3-3Z");
			document.querySelector("#notifications-button-icon > path").setAttribute("d", "m13.497 4.898.053.8.694.4C15.596 6.878 16.5 8.334 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778c.513-.855.784-1.833.784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8c.052-.78.703-1.398 1.497-1.398.794 0 1.445.618 1.497 1.398ZM6 10c0-2.224 1.21-4.165 3.007-5.201C9.11 3.236 10.41 2 12 2c1.59 0 2.89 1.236 2.993 2.799C16.79 5.835 18 7.776 18 10v2.892c0 .725.197 1.436.57 2.058l1.521 2.535c.4.667-.08 1.515-.857 1.515H15c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879s-1.559-.316-2.121-.879C9.316 20.56 9 19.796 9 19H4.766c-.777 0-1.257-.848-.857-1.515L5.43 14.95c.373-.622.57-1.333.57-2.058V10Zm4.5 9c0 .398.158.78.44 1.06.28.282.662.44 1.06.44s.78-.158 1.06-.44c.282-.28.44-.662.44-1.06h-3Z");
			document.querySelector("#search-button-icon > path").setAttribute("d", "M11 2a9 9 0 105.641 16.01.966.966 0 00.152.197l3.5 3.5a1 1 0 101.414-1.414l-3.5-3.5a1 1 0 00-.197-.153A8.96 8.96 0 0020 11a9 9 0 00-9-9Zm0 2a7 7 0 110 14 7 7 0 010-14Z");

			// overwrite the current static svg paths
			document.querySelector("#homebutton-icon > div > svg > path").setAttribute("d", "M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z");
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z");
			document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("d", "M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z");
			document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("d", "M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2ZM8 16V4h12v12H8Zm-4 4V6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2H4Zm13-10-5-3v6l5-3Z");
			document.querySelector("#settings-page-redirect > .native-profile-item-icon-container > div > svg > path").setAttribute("d", "m14.302 6.457-.668-.278L12.87 3.5h-1.737l-.766 2.68-.668.277c-.482.2-.934.463-1.344.778l-.575.44-2.706-.677-.868 1.504 1.938 2.003-.093.716c-.033.255-.05.514-.05.779 0 .264.017.524.05.779l.093.716-1.938 2.003.868 1.504 2.706-.677.575.44c.41.315.862.577 1.344.778l.668.278.766 2.679h1.737l.765-2.68.668-.277c.483-.2.934-.463 1.345-.778l.574-.44 2.706.677.869-1.504-1.938-2.003.092-.716c.033-.255.05-.514.05-.779 0-.264-.017-.524-.05-.779l-.092-.716 1.938-2.003-.869-1.504-2.706.677-.574-.44c-.41-.315-.862-.577-1.345-.778Zm4.436.214Zm-3.86-1.6-.67-2.346c-.123-.429-.516-.725-.962-.725h-2.492c-.446 0-.838.296-.961.725l-.67 2.347c-.605.251-1.17.58-1.682.972l-2.37-.593c-.433-.108-.885.084-1.108.47L2.717 8.08c-.223.386-.163.874.147 1.195l1.698 1.755c-.04.318-.062.642-.062.971 0 .329.021.653.062.97l-1.698 1.756c-.31.32-.37.809-.147 1.195l1.246 2.158c.223.386.675.578 1.109.47l2.369-.593c.512.393 1.077.72 1.681.972l.67 2.347c.124.429.516.725.962.725h2.492c.446 0 .839-.296.961-.725l.67-2.347c.605-.251 1.17-.58 1.682-.972l2.37.593c.433.108.885-.084 1.109-.47l1.245-2.158c.223-.386.163-.874-.147-1.195l-1.698-1.755c.04-.318.062-.642.062-.971 0-.329-.021-.653-.062-.97l1.698-1.756c.31-.32.37-.809.147-1.195L20.038 5.92c-.224-.386-.676-.578-1.11-.47l-2.369.593c-.512-.393-1.077-.72-1.681-.972ZM15.5 12c0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM14 12c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z");

			// add the clip-rule and fill-rule attributes because without it, they look odd (indeed) when rendered
			document.querySelector("#notifications-button-icon > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#homebutton-icon > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#settings-page-redirect > .native-profile-item-icon-container > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#notifications-button-icon > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#homebutton-icon > div > svg > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#settings-page-redirect > .native-profile-item-icon-container > div > svg > path").setAttribute("fill-rule", "evenodd");



			// overwrite the functions responsible for injecting the svg paths
			NotificationsButton = function(buttonState) {
				if (buttonState == false) {
					document.querySelector("#notifications-button-icon > path").setAttribute("d", "m13.497 4.898.053.8.694.4C15.596 6.878 16.5 8.334 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778c.513-.855.784-1.833.784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8c.052-.78.703-1.398 1.497-1.398.794 0 1.445.618 1.497 1.398ZM6 10c0-2.224 1.21-4.165 3.007-5.201C9.11 3.236 10.41 2 12 2c1.59 0 2.89 1.236 2.993 2.799C16.79 5.835 18 7.776 18 10v2.892c0 .725.197 1.436.57 2.058l1.521 2.535c.4.667-.08 1.515-.857 1.515H15c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879s-1.559-.316-2.121-.879C9.316 20.56 9 19.796 9 19H4.766c-.777 0-1.257-.848-.857-1.515L5.43 14.95c.373-.622.57-1.333.57-2.058V10Zm4.5 9c0 .398.158.78.44 1.06.28.282.662.44 1.06.44s.78-.158 1.06-.44c.282-.28.44-.662.44-1.06h-3Z");
				}

				if (buttonState == true) {
					document.querySelector("#notifications-button-icon > path").setAttribute("d", "M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z");
				}
			}

			HomeTabButton = function(buttonState) {
				if (buttonState == false) {
					if (document.querySelector("#home-button").ariaPressed == "false") {
						return;
					} else {
						document.querySelector("#home-button").ariaPressed = "false";
						document.querySelector("#homebutton-icon > div > svg > path").setAttribute("d", "M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5h-5v-7h-3v7h-5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146ZM18.5 9.621l-6.5-6.5-6.5 6.5V19.5H9V13a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v6.5h3.5V9.621Z");
						return;
					}
				}

				if (buttonState == true) {
					if (document.querySelector("#home-button").ariaPressed == "true") {
						return;
					} else {
						document.querySelector("#home-button").ariaPressed = "true";
						document.querySelector("#homebutton-icon > div > svg > path").setAttribute("d", "M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z");

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

			ExploreOrShortsTabButton = function(buttonState) {
				if (buttonState == false) {
					if (document.querySelector("#explore-and-shorts-button").ariaPressed == "false") {
						return;
					} else {
						document.querySelector("#explore-and-shorts-button").ariaPressed = "false";
						document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z");
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

			SubscriptionsTabButton = function(buttonState) {
				if (buttonState == false) {
					if (document.querySelector("#subscriptions-button").ariaPressed == "false") {
						return;
					} else {
						document.querySelector("#subscriptions-button").ariaPressed = "false";
						document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("d", "M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z");
						return;
					}
				}

				if (buttonState == true) {
					if (document.querySelector("#subscriptions-button").ariaPressed == "true") {
						return;
					} else {
						document.querySelector("#subscriptions-button").ariaPressed = "true";
						document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("d", "M5.5 3A1.5 1.5 0 004 4.5h16A1.5 1.5 0 0018.5 3h-13ZM2 7.5A1.5 1.5 0 013.5 6h17A1.5 1.5 0 0122 7.5v11a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 18.5v-11Zm8 2.87a.5.5 0 01.752-.431L16 13l-5.248 3.061A.5.5 0 0110 15.63v-5.26Z");

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

			LibraryOrYouTabButton = function(buttonState) {
				if (buttonState == false) {
					if (document.querySelector("#library-or-you-tab-button").ariaPressed == "false") {
						return;
					} else {
						document.querySelector("#library-or-you-tab-button").ariaPressed = "false";
						document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("d", "M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2ZM8 16V4h12v12H8Zm-4 4V6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2H4Zm13-10-5-3v6l5-3Z");
						return;
					}
				}

				if (buttonState == true) {
					if (document.querySelector("#library-or-you-tab-button").ariaPressed == "true") {
						return;
					} else {
						document.querySelector("#library-or-you-tab-button").ariaPressed = "true";
						document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("d", "M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2ZM4 20h14a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2v14Zm8-7V7l5 3-5 3Z");

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
		}, 10); // in milliseconds
	}

	if (faketube.config_.EXPERIMENT_FLAGS.delhi_style_design == true) {
		// prevent execution if cairo_style_design flag is set to true (avoid conflicts)
		if (faketube.config_.EXPERIMENT_FLAGS.cairo_style_design == true) {
			setTimeout(function() {
				com.faketube.web.debug.displayAlertDialog("OK_TYPE", "info", "the 'delhi_style_design' experiment flag wasn't executed because 'cairo_style_design' is set to true");
			}, 1000); // in milliseconds
			return;
		}
		
		setTimeout(function() {
			let delhiStyleCSS = document.createElement("style");
			delhiStyleCSS.type = "text/css";
			delhiStyleCSS.id = "delhi-style-css-experiment";
			delhiStyleCSS.innerText = `input.transparent-button-with-border, input.video-id-input-field, button#sign-in-button  { border-radius: 100px; } input.transparent-button-with-border, button#sign-in-button { text-transform: capitalize; } `;
			document.querySelector("html").insertBefore(delhiStyleCSS, document.head);

			document.querySelector("#cast-button-svg-path-disconnected").setAttribute("d", "M21 3H3a2 2 0 00-2 2v3c.67 0 1.337.051 2 .153V5h18v14h-7.153c.1.653.152 1.32.153 2h7a2 2 0 002-2V5a2 2 0 00-2-2ZM1 10v2a9 9 0 019 9h2A11 11 0 001 10Zm0 4v2a5 5 0 015 5h2a7 7 0 00-7-7Zm0 4v3h3a3.003 3.003 0 00-3-3Z");
			document.querySelector("#cast-button-svg-path-connected").setAttribute("d", "M21 3a2 2 0 012 2v14a2 2 0 01-2 2h-7a13.265 13.265 0 00-.153-2H21V5H3v3.153A13 13 0 001 8V5a2 2 0 012-2h18Zm-2 14V7H5v1.627A13.031 13.031 0 0113.373 17H19ZM1 10v2a9 9 0 019 9h2A11 11 0 001 10Zm0 4v2a5 5 0 015 5h2a7 7 0 00-7-7Zm0 4v3h3a3.003 3.003 0 00-3-3Z");
			//uncommenting this injects the unmodified delhi create button from youtube studio document.querySelector("#create-button-icon > path").setAttribute("d", "M14 4H4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3v-1.536l3 1.732c1.333.77 3-.191 3-1.731V8.536c0-1.539-1.667-2.501-3-1.731l-3 1.731V7a3 3 0 00-3-3ZM4 6h10a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1Zm5 2a1 1 0 00-1 1v2H6a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 000-2h-2V9a1 1 0 00-1-1Zm8 2.846 4-2.31v6.929l-4-2.309v-2.31Z");
			document.querySelector("#create-button-icon > path").setAttribute("d", "M14 4H4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3v-1.536l3 1.732c1.333.77 3-.191 3-1.731V8.536c0-1.539-1.667-2.501-3-1.731l-3 1.731V7a3 3 0 00-3-3ZM4 6h10a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1Zm5 2a1 1 0 00-1 1v2 0 11 0v-2h2a1 1 0 000-2h-2V9a1 1 0 00-1-1Zm8 2.846 4-2.31v6.929l-4-2.309v-2.31Z");
			document.querySelector("#notifications-button-icon > path").setAttribute("d", "M16 19a4 4 0 11-8 0H4.765C3.21 19 2.25 17.304 3.05 15.97l1.806-3.01A1 1 0 005 12.446V8a7 7 0 0114 0v4.446c0 .181.05.36.142.515l1.807 3.01c.8 1.333-.161 3.029-1.716 3.029H16ZM12 3a5 5 0 00-5 5v4.446a3 3 0 01-.428 1.543L4.765 17h14.468l-1.805-3.01A3 3 0 0117 12.445V8a5 5 0 00-5-5Zm-2 16a2 2 0 104 0h-4Z");
			document.querySelector("#search-button-icon > path").setAttribute("d", "M11 2a9 9 0 105.641 16.01.966.966 0 00.152.197l3.5 3.5a1 1 0 101.414-1.414l-3.5-3.5a1 1 0 00-.197-.153A8.96 8.96 0 0020 11a9 9 0 00-9-9Zm0 2a7 7 0 110 14 7 7 0 010-14Z");

			// overwrite the current static svg paths
			document.querySelector("#homebutton-icon > div > svg > path").setAttribute("d", "m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h5v-8h4v8h5a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0Z");
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z");
			document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("d", "M18 1H6a2 2 0 00-2 2h16a2 2 0 00-2-2Zm3 4H3a2 2 0 00-2 2v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2ZM3 20V7h18v13H3Zm13-6.5L10 10v7l6-3.5Z");
			document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("d", "M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2ZM8 16V4h12v12H8Zm-4 4V6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2H4Zm13-10-5-3v6l5-3Z");
			document.querySelector("#settings-page-redirect > .native-profile-item-icon-container > div > svg > path").setAttribute("d", "M12.844 1h-1.687a2 2 0 00-1.962 1.616 3 3 0 01-3.92 2.263 2 2 0 00-2.38.891l-.842 1.46a2 2 0 00.417 2.507 3 3 0 010 4.525 2 2 0 00-.417 2.507l.843 1.46a2 2 0 002.38.892 3.001 3.001 0 013.918 2.263A2 2 0 0011.157 23h1.686a2 2 0 001.963-1.615 3.002 3.002 0 013.92-2.263 2 2 0 002.38-.892l.842-1.46a2 2 0 00-.418-2.507 3 3 0 010-4.526 2 2 0 00.418-2.508l-.843-1.46a2 2 0 00-2.38-.891 3 3 0 01-3.919-2.263A2 2 0 0012.844 1Zm-1.767 2.347a6 6 0 00.08-.347h1.687a4.98 4.98 0 002.407 3.37 4.98 4.98 0 004.122.4l.843 1.46A4.98 4.98 0 0018.5 12a4.98 4.98 0 001.716 3.77l-.843 1.46a4.98 4.98 0 00-4.123.4A4.979 4.979 0 0012.843 21h-1.686a4.98 4.98 0 00-2.408-3.371 4.999 4.999 0 00-4.12-.399l-.844-1.46A4.979 4.979 0 005.5 12a4.98 4.98 0 00-1.715-3.77l.842-1.459a4.98 4.98 0 004.123-.399 4.981 4.981 0 002.327-3.025ZM16 12a4 4 0 11-7.999 0 4 4 0 018 0Zm-4 2a2 2 0 100-4 2 2 0 000 4Z");
			document.querySelector("#help-and-feedback-page-redirect > .native-profile-item-icon-container > div > svg > path").setAttribute("d", "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 110 18.001A9 9 0 0112 3Zm.5 3h-.483a3.45 3.45 0 00-3.089 1.909l-.323.644a1 1 0 001.79.894l.322-.643a1.46 1.46 0 011.3-.804h.483a1.5 1.5 0 01.153 2.992l-.306.016A1.5 1.5 0 0011 12.5v1a1 1 0 002 0v-.535A3.5 3.5 0 0012.5 6Zm-.5 9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5Z");

			// add the clip-rule and fill-rule attributes because without it, they look odd (indeed) when rendered
			document.querySelector("#notifications-button-icon > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#homebutton-icon > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("clip-rule", "evenodd");
			document.querySelector("#notifications-button-icon > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#homebutton-icon > div > svg > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("fill-rule", "evenodd");
			document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("fill-rule", "evenodd");



			// overwrite the functions responsible for injecting the svg paths
			NotificationsButton = function(buttonState) {
				if (buttonState == false) {
					document.querySelector("#notifications-button-icon > path").setAttribute("d", "M16 19a4 4 0 11-8 0H4.765C3.21 19 2.25 17.304 3.05 15.97l1.806-3.01A1 1 0 005 12.446V8a7 7 0 0114 0v4.446c0 .181.05.36.142.515l1.807 3.01c.8 1.333-.161 3.029-1.716 3.029H16ZM12 3a5 5 0 00-5 5v4.446a3 3 0 01-.428 1.543L4.765 17h14.468l-1.805-3.01A3 3 0 0117 12.445V8a5 5 0 00-5-5Zm-2 16a2 2 0 104 0h-4Z");
				}

				if (buttonState == true) {
					document.querySelector("#notifications-button-icon > path").setAttribute("d", "M12 1a7 7 0 00-7 7v4.446a1 1 0 01-.08.394l-.063.121-2.26 3.768A1.5 1.5 0 003.883 19h16.234a1.5 1.5 0 001.383-2.081l-.097-.19-2.26-3.768a1 1 0 01-.143-.515V8a7 7 0 00-7-7Zm3.874 19H8.126a4.002 4.002 0 007.748 0Z");
				}
			}

			HomeTabButton = function(buttonState) {
				if (buttonState == false) {
					if (document.querySelector("#home-button").ariaPressed == "false") {
						return;
					} else {
						document.querySelector("#home-button").ariaPressed = "false";
						document.querySelector("#homebutton-icon > div > svg > path").setAttribute("d", "m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h6v-7h2v7h6a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0ZM5 8.366l7-4.2 7 4.2V20h-4v-5.5a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 14.5V20H5V8.366Z");
						return;
					}
				}

				if (buttonState == true) {
					if (document.querySelector("#home-button").ariaPressed == "true") {
						return;
					} else {
						document.querySelector("#home-button").ariaPressed = "true";
						document.querySelector("#homebutton-icon > div > svg > path").setAttribute("d", "m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h5v-8h4v8h5a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0Z");

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

			ExploreOrShortsTabButton = function(buttonState) {
				if (buttonState == false) {
					if (document.querySelector("#explore-and-shorts-button").ariaPressed == "false") {
						return;
					} else {
						document.querySelector("#explore-and-shorts-button").ariaPressed = "false";
						document.querySelector("#exploreshortsbutton-icon > div > svg > path").setAttribute("d", "m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z");
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

			SubscriptionsTabButton = function(buttonState) {
				if (buttonState == false) {
					if (document.querySelector("#subscriptions-button").ariaPressed == "false") {
						return;
					} else {
						document.querySelector("#subscriptions-button").ariaPressed = "false";
						document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("d", "M18 1H6a2 2 0 00-2 2h16a2 2 0 00-2-2Zm3 4H3a2 2 0 00-2 2v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2ZM3 20V7h18v13H3Zm13-6.5L10 10v7l6-3.5Z");
						return;
					}
				}

				if (buttonState == true) {
					if (document.querySelector("#subscriptions-button").ariaPressed == "true") {
						return;
					} else {
						document.querySelector("#subscriptions-button").ariaPressed = "true";
						document.querySelector("#subscriptionsbutton-icon > div > svg > path").setAttribute("d", "M6 1a2 2 0 00-2 2h16a2 2 0 00-2-2H6ZM1 7v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2Zm9 10v-7l6 3.5-6 3.5Z");

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

			LibraryOrYouTabButton = function(buttonState) {
				if (buttonState == false) {
					if (document.querySelector("#library-or-you-tab-button").ariaPressed == "false") {
						return;
					} else {
						document.querySelector("#library-or-you-tab-button").ariaPressed = "false";
						document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("d", "M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2ZM8 16V4h12v12H8Zm-4 4V6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2H4Zm13-10-5-3v6l5-3Z");
						return;
					}
				}

				if (buttonState == true) {
					if (document.querySelector("#library-or-you-tab-button").ariaPressed == "true") {
						return;
					} else {
						document.querySelector("#library-or-you-tab-button").ariaPressed = "true";
						document.querySelector("#libraryyoutabbutton-icon > div > svg > path").setAttribute("d", "M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2ZM4 20h14a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2v14Zm8-7V7l5 3-5 3Z");

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
		}, 10); // in milliseconds
	}
}

// execute the flags loader function
__loadcfgs();
