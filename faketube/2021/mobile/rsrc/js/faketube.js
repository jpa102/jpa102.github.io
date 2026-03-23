/*
	faketube.js
	
	a file where you can freely configure it at devtools (breakpoint)
	ONLY the owner can change configs "server-side" at any time (jpa102)

	known for hosting the experiment flags which the user can freely try out (assuming it doesn't break XD)
*/

var faketube = {
	config_: {
		apply_favorite_site_authors_background_color: false, // apply my favorite light theme color in the page
		debug_logging: false, // option to either enable or disable debug logging
		display_intfuncs_button: false, // display the 'intfuncs' (internal functions) button
		web_page_editable: false, // no need to do the document.designMode trick in devtools
		web_stop_ads_button_hidden: false, // hide the stop ads button
		EXPERIMENT_FLAGS: {
			cairo_style_design: false, // upcoming cairo style design throughout the page
			delhi_style_design: false, // upcoming (new) delhi style design throughout the page
			forced_country_code_and_language: "", // input a country code and language (example: ja-JP for japanese - japan)
			match_older_15_xx_xx_version: false, // inject and style the page from 15.xx.xx versions of youtube app
			match_older_16_xx_xx_version: false, // inject and style the page from older 16.xx.xx versions of youtube app
			try_searching_upper_style_type_a: false, // 
			try_searching_upper_style_type_b: false // 
		}
	}
} // set a breakpoint here if you want to change flags client-side, then go to the console tab



var com = {
	faketube: {
		web: {
			debug: {
				displayAlertDialog(type = `OK_TYPE`, title = `test`, bodyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`) {
					function closeDialog() {
						setTimeout(function() {
							document.querySelector("#faketube-dialog").close();
							document.querySelector("#faketube-dialog").innerHTML = ``;
						}, 200);
					}

					switch (type) {
						case `OK_TYPE`:
							document.querySelector("#faketube-dialog").innerHTML = `
								<h1 id="h1-text-dialog" class="faketube-dialog-text">${title}</h1>
								<p id="p-text-dialog" class="faketube-dialog-text">${bodyText}</p>
								<div class="dialog-flexed-buttons-container">
									<div class="dialog-dummy-element"></div>
									<button id="dialog-ok-button" class="button-dialog menu-buttons faketube-dialog-text">OK</button>
								</div>
							`;
							document.querySelector("#faketube-dialog").showModal();
							document.querySelector("#dialog-ok-button").addEventListener("click", closeDialog);
							break;

						case `CANCEL_AND_OK_TYPE`:
							document.querySelector("#faketube-dialog").innerHTML = `
								<h1 id="h1-text-dialog" class="faketube-dialog-text">${title}</h1>
								<p id="p-text-dialog" class="faketube-dialog-text">${bodyText}</p>
								<div class="dialog-flexed-buttons-container">
									<div class="dialog-dummy-element"></div>
									<div>
										<button id="dialog-cancel-button" class="button-dialog menu-buttons faketube-dialog-text">CANCEL</button>
										<button id="dialog-ok-button" class="button-dialog menu-buttons faketube-dialog-text">OK</button>
								</div>
							`;
							document.querySelector("#faketube-dialog").showModal();
							document.querySelector("#dialog-cancel-button").addEventListener("click", closeDialog);
							document.querySelector("#dialog-ok-button").addEventListener("click", closeDialog);
							break;
					}
				},
				displayhtml() {
					document.querySelector("html").hidden = false;
				},
				displaynonehtml() {
					document.querySelector("html").hidden = true;
				},
				// this is just a wrapper to plain displaySavedVideoIds() function
				displaySavedVideoIds() {
					displaySavedVideoIds();
				},
				getbrowserlocale() {
					return navigator.language;
				},
				gethtmllocale() {
					if (document.querySelector("html").lang != "") {
						return document.querySelector("html").lang;
					} else {
						return "no html language set";
					}
				},
				getcurrentscreensizepx() {
					let scr_x = document.querySelector("html").clientWidth;
					let scr_y = document.querySelector("html").clientHeight;
					return `screen size in px: ${scr_x}px, ${scr_y}px`;
				},
				sethtmllocale(language) {
					if (language != "") {
						document.querySelector("html").lang = language;
					} else {
						console.log(`you must set a locale like ja-JP (string type)`);
					}
				},
				ReplaceTextInHtmlTitleTag(inputtext) {
					_titleTagLastTextContent = document.querySelector("title").innerText; // stores the last text content just in case
					document.querySelector("title").innerText = inputtext;
				},
				RenderDebugLines() {
					if (document.querySelector("#render-debug-lines-css") == null) {
						document.head.insertAdjacentHTML(
							"beforeend",
							`
								<style id="render-debug-lines-css" type="text/css">
									/* render "debug" lines - css */

									:root {
										--debug-line-color: green;
									}

									* {
										border: 1px solid var(--debug-line-color);
									}
								</style>
							`
						);
						return;
					}
					
					if (document.querySelector("#render-debug-lines-css") != null) {
						document.querySelector("#render-debug-lines-css").remove();
						return;
					}
				}
			},
			// this is just a wrapper to display.theme object
			display_theme(themeIndex) {
				// clear out the theme setting
				if (themeIndex == 0) {
					display.theme._clear();
					localStorage.setItem("theme_type", "light");
					return;
				}
				// darkmode theme
				if (themeIndex == 1) {
					display.theme.darkmode();
					localStorage.setItem("theme_type", "darkmode");
					return;
				}
				// darkmode theme
				if (themeIndex == 2) {
					display.theme.darkerdarkmode();
					localStorage.setItem("theme_type", "darkerdarkmode");
					return;
				}
				// black hole theme
				if (themeIndex == 3) {
					display.theme.blackhole();
					localStorage.setItem("theme_type", "blackhole");
					return;
				}
				// if for whatever reason, is called without a value
				if (themeIndex == undefined || themeIndex == "" || themeIndex == null) {
					console.log(`please provide an index number\n\n\t0 - clear out the theme\n\t1 - dark mode\n\t2 - darker dark mode\n\t3 - black hole`);
				}
			},
			origAndroidClientVer: "17.03.38",
			fakeAndroidClientVer: ""
		}
	}
}
