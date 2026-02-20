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

			document.querySelector("#video.title").innerText = global_data._watch_page_strings.ja.getting_video_title_text;
			document.querySelector("#yt-channel-name-link").innerText = global_data._watch_page_strings.ja.getting_channel_name_text;
			document.querySelector(".yt-channel-sub-count").innerText = global_data._watch_page_strings.ja.nan_subscribers_text;
			document.querySelector("#like-count-renderer").innerText = global_data._watch_page_strings.ja.likes_text;
			document.querySelector("#dislike-count-renderer").innerText = global_data._watch_page_strings.ja.dislikes_text;
			document.querySelector("#share-text-renderer").innerText = global_data._watch_page_strings.ja.share_text;
			document.querySelector("#live-chat-text-renderer").innerText = global_data._watch_page_strings.ja.chat_text;
			document.querySelector("#remix-text-renderer").innerText = global_data._watch_page_strings.ja.create_text;
			document.querySelector("#stop-ads-text-renderer").innerText = global_data._watch_page_strings.ja.stop_ads_text;
			document.querySelector("#download-text-renderer").innerText = global_data._watch_page_strings.ja.download_text;
			document.querySelector("#clip-text-renderer").innerText = global_data._watch_page_strings.ja.clip_text;
			document.querySelector("#save-text-renderer").innerText = global_data._watch_page_strings.ja.save_text;
			document.querySelector("#report-text-renderer").innerText = global_data._watch_page_strings.ja.report_text;
			document.querySelector("a#subscribe-text-link").innerText = global_data._watch_page_strings.ja.subscribe_text;
			document.querySelector("#comment-caption").innerHTML = global_data._watch_page_strings.ja.comment_header_text + "&nbsp;&nbsp;&nbsp;";
			document.querySelector("#comments-title").innerHTML = global_data._watch_page_strings.ja.comment_header_text + "&nbsp;&nbsp;&nbsp;&nbsp;";
			document.querySelector(".comment-field").placeholder = global_data._watch_page_strings.ja.add_a_comment_text;
			document.querySelector("#comments-section-field").placeholder = global_data._watch_page_strings.ja.add_a_comment_text;
			document.querySelector("#description-title").innerText = global_data._watch_page_strings.ja.description_header_text;
			document.querySelector("#total-like-counts-title").innerText = global_data._watch_page_strings.ja.likes_title_text;
			document.querySelector("#total-dislike-counts-title").innerText = global_data._watch_page_strings.ja.dislikes_title_text;
			document.querySelector("#total-view-counts-title").innerText = global_data._watch_page_strings.ja.view_count_title_text;
			document.querySelector("#transcript-text-header").innerText = global_data._watch_page_strings.ja.transcript_text_header_text; // can be confused, ごめん！
			document.querySelector("#follow-transcript-text").innerText = global_data._watch_page_strings.ja.transcript_description_text;
			document.querySelector("#show-transcript-button").innerText = global_data._watch_page_strings.ja.show_transcripts_text;
			document.querySelector("#transcripts-title").innerText = global_data._watch_page_strings.ja.transcripts_header_text; // can be confused, ごめん！
			document.querySelector("#videos-text-renderer").innerText = global_data._watch_page_strings.ja.channel_videos_button_text;
			document.querySelector("#about-text-renderer").innerText = global_data._watch_page_strings.ja.channel_about_button_text;
		}, 100);
		break;
	// the fallback is english, which is already stored inside global_data._watch_page_strings._stored_vars
	default:
		console.log(`${navigator.language} primary host language detected, not doing anything...`);
}
