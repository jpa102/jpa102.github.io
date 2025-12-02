/*
	faketube.js
	
	DEBUG file where you can freely configure it at devtools (breakpoint)
	only the OWNER can change configs "server-side" at any time (jpa102)
*/

const faketube = {
	config_: {
		apply_favorite_site_authors_background_color: false, // apply my favorite light theme color in the page
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
		web_page_editable: false,
		hide_gradient_header: true,
		EXPERIMENT_FLAGS: {
			apply_debug_metadata_immediately: false, // fetch and inject the description data (if available)
			display_dislike_pressed_popup: false, // display a popup every time you press the dislike button
			forced_country_code_and_language: "", // input a country code and language (example: ja-JP for japanese - japan)
			hide_dislike_counts: false, // don't display the dislike counts in the dislike button
			match_older_16_xx_xx_version: false, // hide other buttons to match the look of 16.xx.xx version
			return_youtube_dislike_api: {
				enable_real_time_data: false, // make the ryd data displayed on the page refresh itself
				real_time_data_timer: 60000, // the time to refresh the ryd data displayed
				ryd_request_loop_limit: 500 // 10000 is the limit per day, 100 per minute
			},
			third_party_downloader_test: false, // turn on or off the ability to download the video from a external site
			video_player_is_youtube_shorts: false, // make the embedded youtube player's aspect ratio look 9 / 16 for youtube shorts (it will fetch the video id's metadata)
			watch_page_experimental_material_you_action_buttons: false, // enable the experimental material you buttons in the action bar
			watch_page_experimental_material_you_comments_section: false, // enable the experimental material you comments section in the watch page
			watch_page_experimental_material_you_comments_section_migration_phase: false, // enable the migration version of the material you comments section in the watch page
			web_download_button_hidden: false, // hide the download button in the actions container
		}
	}
}
