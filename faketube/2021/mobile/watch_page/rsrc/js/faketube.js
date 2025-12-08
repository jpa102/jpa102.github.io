/*
	faketube.js
	
	a file where you can freely configure it at devtools (breakpoint)
	ONLY the owner can change configs "server-side" at any time (jpa102)
*/

const faketube = {
	config_: {
		apply_favorite_site_authors_background_color: false, // apply my favorite light theme color in the page
		display_intfuncs_button: false, // display the 'intfuncs' (internal functions) button in the action bar at watch page
		downloader_site_urls: {
			note: "you need ublock origin as most downloader sites can redirect you to unwanted site(s)",
			"urls": [
				{
					"url": "https://www.youtubepi.com/watch?v=", // redirects to y2mate.is
				},
				{
					"url": "https://www.youtubepp.com/watch?v=" // redirects to y2mate.com
				}
			]
		},
		hide_gradient_header: true,
		web_download_button_hidden: false, // hide the download button in the actions container
		web_page_editable: false,
		web_stop_ads_button_hidden: false, // hide the stop ads button in the actions container
		EXPERIMENT_FLAGS: {
			apply_debug_metadata_immediately: false, // fetch and inject the description data (if available) - now deprecated
			deprecate_noembed_fetching: true, // deprecate the usage of noembed api
			display_dislike_pressed_popup: false, // display a popup every time you press the dislike button
			forced_country_code_and_language: "", // input a country code and language (example: ja-JP for japanese - japan)
			hide_public_dislike_counts_to_protect_creators: false, // don't display the dislike counts in the dislike button
			match_older_15_xx_xx_version: false, // inject and style the action bar buttons from 15.xx.xx versions of youtube app
			match_older_16_xx_xx_version: false, // match the look of older 16.xx.xx versions
			return_youtube_dislike_api: {
				enable_real_time_data: false, // make the ryd data displayed on the page refresh itself
				real_time_data_timer: 60000, // the time to refresh the ryd data displayed
				ryd_request_loop_limit: 500 // 10000 is the limit per day, 100 per minute
			},
			third_party_downloader_test: false, // turn on or off the ability to download the video from a external site
			load_related_videos_in_feed: false, // load the related video infos and inject them in the related section
			video_player_is_youtube_shorts: false, // make the embedded youtube player's aspect ratio look 9 / 16 for youtube shorts (it will fetch the video id's metadata)
			watch_page_experimental_material_you_action_buttons: false, // enable the experimental material you buttons in the action bar
			watch_page_experimental_material_you_comments_section: false, // enable the experimental material you comments section in the watch page
			watch_page_experimental_material_you_comments_section_migration_phase: false, // enable the migration version of the material you comments section in the watch page
		}
	}
} // set a breakpoint here if you want to change flags client-side, then go to the console tab



com = {
	faketube: {
		web: {
			debug: {
				displayhtml() {
					document.querySelector("html").hidden = false;
				},
				displaynonehtml() {
					document.querySelector("html").hidden = true;
				},
				getcurrentscreensizepx() {
					let scr_x = document.querySelector("html").clientWidth;
					let scr_y = document.querySelector("html").clientHeight;
					return `screen size in px: ${scr_x}px, ${scr_y}px`;
				}
			},
			// this is just a wrapper to display.theme object
			display(themeIndex) {
				// if for whatever reason, is called without a value
				if (themeIndex == undefined) {
					console.log(`please provide an index number\n\n\t0 - clear out the theme\n\t1 - dark mode\n\t2 - darker dark mode\n\t3 - black hole`);
				}
				// clear out the theme setting
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
			sethtmllocale(language) {
				if (language != "") {
					document.querySelector("html").lang = language;
				} else {
					console.log("you must set a locale like ja-JP \(string type\)");
				}
			}
		}
	}
}

