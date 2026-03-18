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
			global_data._watch_page_strings._stored_vars.notifications_text_inject = global_data._watch_page_strings.ja.notifications_text;
			global_data._watch_page_strings._stored_vars.settings_text_inject = global_data._watch_page_strings.ja.settings_text;
			global_data._watch_page_strings._stored_vars.about_text_inject = global_data._watch_page_strings.ja.about_text;
			global_data._watch_page_strings._stored_vars.app_version_text_inject = global_data._watch_page_strings.ja.app_version_text;
			
			document.querySelector("#home-text-renderer").innerText = global_data._watch_page_strings.ja.home_text;
			document.querySelector("#explore-shorts-text-renderer").innerText = global_data._watch_page_strings.ja.shorts_text;
			document.querySelector("#subscriptions-text-renderer").innerText = global_data._watch_page_strings.ja.subscriptions_text;
			document.querySelector("#library-you-text-renderer").innerText = global_data._watch_page_strings.ja.library_text;
			document.querySelector("#try-searching-h2-main-text").innerText = global_data._watch_page_strings.ja.try_searching_h2_text;
			document.querySelector("#try-searching-h4-body-text").innerText = global_data._watch_page_strings.ja.try_searching_h4_parag_text;
			document.querySelector("#input-video-id-h2-main-text").innerText = global_data._watch_page_strings.ja.input_video_id_h2_text;
			document.querySelector("#input-video-id-h4-body-text").innerHTML = global_data._watch_page_strings.ja.input_video_id_h4_parag_text;
			document.querySelector(".video-id-input-field").setAttribute("placeholder", global_data._watch_page_strings.ja.input_video_id_box_hint_text);
			document.querySelector("input[type='Submit']").setAttribute("value", global_data._watch_page_strings.ja.input_video_id_button_gotowatch_text);
			document.querySelector("#sign-in-promotional-text-container > h4").innerText = global_data._watch_page_strings.ja.sign_in_promotion_header_text;
			document.querySelector("#sign-in-promotional-text-container > h6").innerText = global_data._watch_page_strings.ja.sign_in_promotion_body_text;
			document.querySelector("#sign-in-button").innerText = global_data._watch_page_strings.ja.login_text;
			document.querySelector("#settings-page-redirect > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.settings_text;
			document.querySelector("#help-and-feedback-page-redirect > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.help_and_feedback_text;
			document.querySelector("#privacy-policy-footer-text").innerText = global_data._watch_page_strings.ja.privacy_policy_and_tos_text;
			document.querySelector("#main-settings-title").innerText = global_data._watch_page_strings.ja.settings_text;
			document.querySelector("#notifications-page-redirect > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.notifications_text;
			document.querySelector("#connected-apps-page-redirect > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.connected_apps_text;
			document.querySelector("#live-chat-page-redirect > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.chat_text;
			document.querySelector("#captions-page-redirect > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.captions_text;
			document.querySelector("#accessibility-page-redirect > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.accessibility_text;
			document.querySelector("#about-page-redirect > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.about_text;
			document.querySelector("#app-version-container > .items-text-container-flexed > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.app_version_text;
			document.querySelector("#faketube-author-brief-desc > .native-profile-item-text-container").innerText = global_data._watch_page_strings.ja.faketube_author_info_text;

			// for stuff with experiment flags
			if (faketube.config_.EXPERIMENT_FLAGS.match_older_16_xx_xx_version == true) {
				document.querySelector("#explore-shorts-text-renderer").innerText = global_data._watch_page_strings.ja.explore_text;
			}
		}, __faketube_delaytrnsltnsms);
		break;
	// the fallback is english, which is already stored inside global_data._watch_page_strings._stored_vars
	default:
		console.log(`${navigator.language} primary host language detected, not doing anything...`);
}
