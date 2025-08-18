/*
	faketube.js
	
	DEBUG file where you can freely configure it at devtools (breakpoint)
	only the OWNER can change configs "server-side" at any time (jpa102)
*/

const faketube = {
	config_: {
		apply_favorite_site_authors_background_color: false, // apply my favorite light theme color in the page
		forced_country_code_and_language: "", // input a country code and language (example: ja-JP for japanese - japan)
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
		EXPERIMENT_FLAGS: {
			apply_debug_metadata_immediately: true, // fetch and inject the description data (if available)
			display_dislike_pressed_popup: false, // display a popup every time you press the dislike button
			match_older_16_xx_xx_version: false, // hide other buttons to match the look of 16.xx.xx version
			return_youtube_dislike_api: {
				enable_real_time_data: false, // make the ryd data displayed on the page refresh itself
				real_time_data_timer: 60000, // the time to refresh the ryd data displayed
				ryd_request_loop_limit: 500 // 10000 is the limit per day, 100 per minute
			},
			third_party_downloader_test: false, // turn on or off the ability to download the video from a external site
			video_player_is_youtube_shorts: false, // make the embedded youtube player's aspect ratio look 9 / 16 for youtube shorts (it will fetch the video id's metadata)
			video_player_old_2021_action_buttons: false, // replace the 2023 material you style action buttons to that of 2021's action buttons
			video_player_old_2021_action_buttons_placement: false, // swap the action button and channel metadata to that of 2021's (column-reverse)
			video_player_old_2021_comments_section: false, // replace the 2023 material you style comments section to that of 2021's comment section in the watch page
			video_player_old_2021_video_title_font_size: false, // make the font size of the video title smaller and match the look to that of 2021's
			web_stop_ads_button_hidden: true // hide the stop ads button in the action buttons container
		}
	}
}
