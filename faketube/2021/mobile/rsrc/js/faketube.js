/*
	faketube.js
	
	a file where you can freely configure it at devtools (breakpoint)
	ONLY the owner can change configs "server-side" at any time (jpa102)

	known for hosting the experiment flags which the user can freely try out (assuming it doesn't break XD)
*/

var faketube = {
	config_: {
		apply_favorite_site_authors_background_color: false, // apply my favorite light theme color in the page
		display_intfuncs_button: false, // display the 'intfuncs' (internal functions) button
		web_page_editable: false, // no need to do the document.designMode trick in devtools
		web_stop_ads_button_hidden: false, // hide the stop ads button
		EXPERIMENT_FLAGS: {
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
				displayhtml() {
					document.querySelector("html").hidden = false;
				},
				displaynonehtml() {
					document.querySelector("html").hidden = true;
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
				}
			},
			// this is just a wrapper to display.theme object
			display(themeIndex) {// clear out the theme setting
				if (themeIndex == 0) {
					display.theme._clear();
				}
				// darkmode theme
				if (themeIndex == 1) {
					display.theme.darkmode();
				}
				// darkmode theme
				if (themeIndex == 2) {
					display.theme.darkerdarkmode();
				}
				// black hole theme
				if (themeIndex == 3) {
					display.theme.blackhole();
				}
				// if for whatever reason, is called without a value
				if (themeIndex == undefined || themeIndex == "" || themeIndex == null) {
					console.log(`please provide an index number\n\n\t0 - clear out the theme\n\t1 - dark mode\n\t2 - darker dark mode\n\t3 - black hole`);
				}
			}
		}
	}
}
