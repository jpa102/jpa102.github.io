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
			document.querySelector("#comment-caption").innerHTML = global_data._watch_page_strings.ja.comment_header_text + "&nbsp;&nbsp;";
			document.querySelector("#comment-field").placeholder = global_data._watch_page_strings.ja.add_a_comment_text;
			document.querySelector("#description-title").innerText = global_data._watch_page_strings.ja.description_header_text;
			document.querySelector("#total-like-counts-title").innerText = global_data._watch_page_strings.ja.likes_title_text;
			document.querySelector("#total-dislike-counts-title").innerText = global_data._watch_page_strings.ja.dislikes_title_text;
			document.querySelector("#total-view-counts-title").innerText = global_data._watch_page_strings.ja.view_count_title_text;
		}, 100);
}
