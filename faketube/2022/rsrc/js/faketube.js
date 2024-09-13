/*
	faketube.js
	
	DEBUG file where you can freely configure it at devtools (breakpoint)
*/

const faketube = {
	apply_favorite_site_authors_background_color: false,
	config_: {
		downloader_site_urls: {
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
			apply_debug_metadata_immediately: true,
			disable_dislike_counts: false,
			display_dislike_pressed_popup: false,
			third_party_downloader_test: false,
			video_player_non_rounded: false,
			web_old_channel_info: false,
			web_old_description: false,
			web_old_menu_buttons: false,
			web_simplified_action_buttons: false
		}
	}
}
