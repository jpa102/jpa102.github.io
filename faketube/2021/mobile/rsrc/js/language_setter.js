/*
	language_setter.js

	set the localized texts throughout the page
*/

//	inject the localized strings
switch (navigator.language.slice(0, 2)) {
	case "ja":
		setTimeout(function() {
			console.log(`${navigator.language} primary host language detected, setting up local texts...`);

			global_data._watch_page_strings._stored_vars.downloaded_text_inject = global_data._watch_page_strings.ja.downloaded_text;
			global_data._watch_page_strings._stored_vars.download_text_inject = global_data._watch_page_strings.ja.download_text;
			global_data._watch_page_strings._stored_vars.saved_text_inject = global_data._watch_page_strings.ja.saved_text;
			global_data._watch_page_strings._stored_vars.save_text_inject = global_data._watch_page_strings.ja.save_text;
			global_data._watch_page_strings._stored_vars.back_online_text_inject = global_data._watch_page_strings.ja.back_online_text;
			global_data._watch_page_strings._stored_vars.no_internet_connection_text_inject = global_data._watch_page_strings.ja.no_internet_connection_text;
			global_data._watch_page_strings._stored_vars.check_your_internet_connection_text_inject = global_data._watch_page_strings.ja.check_your_internet_connection_text;

			document.querySelector("#home-text-renderer").innerText = global_data._watch_page_strings.ja.home_text;
			document.querySelector("#explore-shorts-text-renderer").innerText = global_data._watch_page_strings.ja.shorts_text;
			document.querySelector("#subscriptions-text-renderer").innerText = global_data._watch_page_strings.ja.subscriptions_text;
			document.querySelector("#library-you-text-renderer").innerText = global_data._watch_page_strings.ja.library_text;

			// for stuff with experiment flags
			if (faketube.config_.EXPERIMENT_FLAGS.match_older_16_xx_xx_version == true) {
				document.querySelector("#explore-shorts-text-renderer").innerText = global_data._watch_page_strings.ja.explore_text;
			}
		}, 100);
		break;
	// the fallback is english, which is already stored inside global_data._watch_page_strings._stored_vars
	default:
		console.log(`${navigator.language} primary host language detected, not doing anything...`);
}
