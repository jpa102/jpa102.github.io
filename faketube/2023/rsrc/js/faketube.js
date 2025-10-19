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
		EXPERIMENT_FLAGS: {
			apply_debug_metadata_immediately: true, // fetch and inject the description data (if available)
			disable_dislike_counts: false, // don't display the dislike counts in the dislike button
			display_dislike_pressed_popup: false, // display a popup every time you press the dislike button
			display_none_new_video_statistics: false, // hide the new video statistics inside the description
			force_display_ratio_bar: false, // force display the ratio bar under like and dislike buttons
			return_youtube_dislike_api: {
				enable_real_time_data: false, // make the ryd data displayed on the page refresh itself
				real_time_data_timer: 60000, // the time to refresh the ryd data displayed
				ryd_request_loop_limit: 500 // 10000 is the limit per day, 100 per minute
			},
			third_party_downloader_test: false, // turn on or off the ability to download the video from a external site
			video_player_non_rounded: false, // make the iframe lose its border-radius (sharp edges look)
			video_player_is_youtube_shorts: false, // make the embedded youtube player's aspect ratio look 9 / 16 for youtube shorts (it will fetch the video id's metadata)
			web_download_button_hidden: true, // hide the download button in the actions container
			web_old_channel_info: false, // make the channel info look like it's from 2021 layout
			web_old_description: false, // make the description look like it's from 2021 layout
			web_old_menu_buttons: false, // make the action buttons below the video player look like it's from 2021 layout
			web_simplified_action_buttons: false // makes some action buttons look compact (rounded design)
		}
	}
}
