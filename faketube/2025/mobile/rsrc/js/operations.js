/*
	operations.js
	
	this module contains code that makes the page interactive
*/



function getAverageRating() {
	_volatile_votes.oneStar = _volatile_votes.dislikeCount * 1;
	_volatile_votes.fiveStar = _volatile_votes.likeCount * 5;
	_volatile_votes.totalVotes = (_volatile_votes.dislikeCount + _volatile_votes.likeCount);
	_volatile_votes.totalStars = (_volatile_votes.oneStar + _volatile_votes.fiveStar);
	_volatile_votes.averageRating = (_volatile_votes.totalStars / _volatile_votes.totalVotes);
	_volatile_votes.roundedRating = _volatile_votes.averageRating.toPrecision(3);
}

function getPercentage() {
	_volatile_votes.likepercentage = _volatile_votes.likeCount + _volatile_votes.dislikeCount > 0 ? (_volatile_votes.likeCount / (_volatile_votes.likeCount + _volatile_votes.dislikeCount)) * 100 : 50;
	_volatile_votes.roundedlikepercent = _volatile_votes.likepercentage.toFixed(1);
}

/*
	LIKE AND DISLIKE BUTTONS
*/

function addLikeCount() {
	_volatile_votes.likeCount++;
	
	getAverageRating();
	getPercentage();
	
	_volatile_votes.likes = _volatile_votes.likeCount.toLocaleString();
	_volatile_votes.formattedlikes = numberFormat(_volatile_votes.likeCount);
	document.querySelector("#like-count-renderer").innerText = _volatile_votes.formattedlikes;
}

function subtractLikeCount() {
	_volatile_votes.likeCount--;
	
	getAverageRating();
	getPercentage();
	
	_volatile_votes.likes = _volatile_votes.likeCount.toLocaleString();
	_volatile_votes.formattedlikes = numberFormat(_volatile_votes.likeCount);
	document.querySelector("#like-count-renderer").innerText = _volatile_votes.formattedlikes;
}

function addDislikeCount() {
	_volatile_votes.dislikeCount++;
	
	getAverageRating();
	getPercentage();
	
	_volatile_votes.dislikes = _volatile_votes.dislikeCount.toLocaleString();
	_volatile_votes.formatteddislikes = numberFormat(_volatile_votes.dislikeCount);
	document.querySelector("#dislike-count-renderer").innerText = _volatile_votes.formatteddislikes;
}

function subtractDislikeCount() {
	_volatile_votes.dislikeCount--;
	
	getAverageRating();
	getPercentage();
	
	_volatile_votes.dislikes = _volatile_votes.dislikeCount.toLocaleString();
	_volatile_votes.formatteddislikes = numberFormat(_volatile_votes.dislikeCount);
	document.querySelector("#dislike-count-renderer").innerText = _volatile_votes.formatteddislikes;
}

function displaySecondaryDescription() {
	// save the last x position before hiding
	lastYPos = window.scrollY;
	
	document.querySelector("#video-metadata-info-container").hidden = true;
	document.querySelector("#video-recommendations").hidden = true;
	document.querySelector("#description-section").hidden = false;
}

function hideSecondaryDescription() {
	document.querySelector("#video-metadata-info-container").hidden = false;
	document.querySelector("#video-recommendations").hidden = false;
	document.querySelector("#description-section").hidden = true;
	window.scrollTo({
		top: lastYPos
	})
}

/*
	set your own vote colors (like and dislike buttons & ratio bar colors)
	
	the three colors are taken and inspired from a feature present in Return YouTube Dislike extension
	fourth option allows you to set your own colors
*/

function ChangeVoteButtonsColors(colorOption, likeColor, dislikeColor){
	if (colorOption == "help") {
		console.log("ChangeVoteButtonsColors\(\) args: \n\n\tdefault values for 1st entry: \(colorOption\)\n\t\tclassic - string value\n\t\taccessible - string\n\t\tneon - string value\n\n\tcustom colors \(colorOption, likeColor, dislikeColor\)\n\t\tcustom - string value\n\t\tlike_color - string value, hex code or literal value \(ex: blue\)\n\t\tdislike_color - string value, hex code or literal value \(ex: red\)\n\n\texample commands:\n\t\tChangeVoteButtonsColors\(\"classic\"\)\n\t\tChangeVoteButtonsColors\(\"custom\", \"#0000FF\"\, \"#F00\")");
		DebugJS.console.log("info", "[operations.js] ChangeVoteButtonsColors\(\) args: \n\n\tdefault values for 1st entry: \(colorOption\)\n\t\tclassic - string value\n\t\taccessible - string\n\t\tneon - string value\n\n\tcustom colors \(colorOption, likeColor, dislikeColor\)\n\t\tcustom - string value\n\t\tlike_color - string value, hex code or literal value \(ex: blue\)\n\t\tdislike_color - string value, hex code or literal value \(ex: red\)\n\n\texample commands:\n\t\tChangeVoteButtonsColors\(\"classic\"\)\n\t\tChangeVoteButtonsColors\(\"custom\", \"#0000FF\"\, \"#F00\")");
		return;
	}

	if (colorOption == "classic") {
		if (document.querySelector("#classic-votes-color") != null) { document.querySelector("#classic-votes-color").remove(); }
		if (document.querySelector("#accessible-votes-color") != null) { document.querySelector("#accessible-votes-color").remove(); }
		if (document.querySelector("#neon-votes-color") != null) { document.querySelector("#neon-votes-color").remove(); }
		if (document.querySelector("#custom-votes-color") != null) { document.querySelector("#custom-votes-color").remove(); }
		
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="classic-votes-color" type="text/css">
					#likebutton-icon > div {
						fill: lime !important;
					}
					
					#like-count-renderer {
						color: lime !important;
					}
					
					#dislikebutton-icon > div {
						fill: red !important;
					}
					
					#dislike-count-renderer {
						color: red !important;
					}
				</style>
			`
		);
		
		return;
	}
	
	if (colorOption == "accessible") {
		if (document.querySelector("#classic-votes-color") != null) { document.querySelector("#classic-votes-color").remove(); }
		if (document.querySelector("#accessible-votes-color") != null) { document.querySelector("#accessible-votes-color").remove(); }
		if (document.querySelector("#neon-votes-color") != null) { document.querySelector("#neon-votes-color").remove(); }
		if (document.querySelector("#custom-votes-color") != null) { document.querySelector("#custom-votes-color").remove(); }
		
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="accessible-votes-color" type="text/css">
					#likebutton-icon > div {
						fill: dodgerblue !important;
					}
					
					#like-count-renderer {
						color: dodgerblue !important;
					}
					
					#dislikebutton-icon > div {
						fill: gold !important;
					}
					
					#dislike-count-renderer {
						color: gold !important;
					}
				</style>
			`
		);
		
		return;
	}
	
	if (colorOption == "neon") {
		if (document.querySelector("#classic-votes-color") != null) { document.querySelector("#classic-votes-color").remove(); }
		if (document.querySelector("#accessible-votes-color") != null) { document.querySelector("#accessible-votes-color").remove(); }
		if (document.querySelector("#neon-votes-color") != null) { document.querySelector("#neon-votes-color").remove(); }
		if (document.querySelector("#custom-votes-color") != null) { document.querySelector("#custom-votes-color").remove(); }
		
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="neon-votes-color" type="text/css">
					#likebutton-icon > div {
						fill: aqua !important;
					}
					
					#like-count-renderer {
						color: aqua !important;
					}
					
					#dislikebutton-icon > div {
						fill: magenta !important;
					}
					
					#dislike-count-renderer {
						color: magenta !important;
					}
				</style>
			`
		);
		
		return;
	}
	
	if (colorOption == "custom") {
		if (document.querySelector("#classic-votes-color") != null) { document.querySelector("#classic-votes-color").remove(); }
		if (document.querySelector("#accessible-votes-color") != null) { document.querySelector("#accessible-votes-color").remove(); }
		if (document.querySelector("#neon-votes-color") != null) { document.querySelector("#neon-votes-color").remove(); }
		if (document.querySelector("#custom-votes-color") != null) { document.querySelector("#custom-votes-color").remove(); }
		
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="custom-votes-color" type="text/css">
					#likebutton-icon > div {
						fill: ${likeColor} !important;
					}
					
					#like-count-renderer {
						color: ${likeColor} !important;
					}
					
					#dislikebutton-icon > div {
						fill: ${dislikeColor} !important;
					}
					
					#dislike-count-renderer {
						color: ${dislikeColor} !important;
					}
				</style>
			`
		);
		
		return;
	}
	
	if (colorOption == "remove") {
		if (document.querySelector("#classic-votes-color") != null) { document.querySelector("#classic-votes-color").remove(); }
		if (document.querySelector("#accessible-votes-color") != null) { document.querySelector("#accessible-votes-color").remove(); }
		if (document.querySelector("#neon-votes-color") != null) { document.querySelector("#neon-votes-color").remove(); }
		if (document.querySelector("#custom-votes-color") != null) { document.querySelector("#custom-votes-color").remove(); }
		
		return;
	}
}

function archiveSite_destroyYellowInfoBox() { 
	document.querySelector("#archive-site-message-about-video-archive").remove();
}

function archiveSite_setData() {
	// check if a metadata file exists in the "archived" directory in my repository
	UrlExists("https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/archived/" + global_data.yt.videoId + ".json");

	if (urldoesexists === true) {
		setTimeout(function() {
			fetch(
				"https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/archived/" + global_data.yt.videoId + ".json"
			).then(
				(response) => {
					response.json().then((json) => {
						if (json) {
							let { id, shortdesc, fulldesc, uploaddateandtime, uploaddate, uploadtime, desc_date, desc_year, subcountintguess, commentCount, profilepicturelink, archiveddata } = json;

							ArchivedData = archiveddata;
							ReceivedVideoMetadata = {
								"id": id,
								"shortdesc": shortdesc,
								"fulldesc": fulldesc,
								"uploaddateandtime": uploaddateandtime,
								"uploaddate": uploaddate,
								"uploadtime": uploadtime,
								"desc_date": desc_date,
								"desc_year": desc_year,
								"subcountintguess": subcountintguess,
								"commentCount": commentCount,
								"profilepicturelink": profilepicturelink
							}

							console.log(ArchivedData.sourcesite + " details:");
							console.log(ArchivedData);
						}
					})
				}
			);
		}, 500);
	}

	setTimeout(function() {
		if (ArchivedData.allowoverridedata === true) {
			// calc the current year and the year from the metadata
			let currentYear = new Date().getFullYear();
			let calcYear = currentYear - ReceivedVideoMetadata.desc_year;

			document.querySelector("title").innerText = ArchivedData.ytvideotitle + appendFakeTubeString + " (archive)"; // html title
			document.querySelector("iframe").src = ArchivedData.archivedvideourl; // video
			document.querySelector("#video.title").innerText = ArchivedData.ytvideotitle; // video title
			document.querySelector("#video-metadata").innerHTML = numberFormat(global_data.ryd_data.unformattedviews) + " views&nbsp;&nbsp;•&nbsp;&nbsp;" + calcYear + " years ago"; // total views and date
			document.querySelector("#yt-channel-name-link").innerText = ArchivedData.ytchannelname; // youtube channel name
			document.querySelector("#yt-channel-name-link").href = ArchivedData.ytchannelidlink; // youtube channel link
			document.querySelector("a.yt-channel-sub-count").innerText = numberFormat(ReceivedVideoMetadata.subcountintguess) + " subscribers";  // subscriber counts
			document.querySelector("a.yt-channel-sub-count").href = ArchivedData.ytchannelsubconfirmlink; // youtube channel link (subscribe link)
			document.querySelector("a.yt-channel-sub-count").title = "Subscribe to " + ArchivedData.ytchannelname + " (YouTube)";
			document.querySelector("#yt-channel-profile-picture").src = ReceivedVideoMetadata.profilepicturelink; // online profile picture
			document.querySelector("#description-text").innerText = ReceivedVideoMetadata.fulldesc; // full description

			uncollapseddescription = ReceivedVideoMetadata.fulldesc; // short description
			collapseddescription = ReceivedVideoMetadata.shortdesc; // full description

			document.querySelector("#comment-counts").innerText = ReceivedVideoMetadata.commentCount.toLocaleString(); // comment counts

			// description page
			document.querySelector("#video-title-desc").innerText = ArchivedData.ytvideotitle; // video title
			document.querySelector("#yt-channel-name-link-desc").innerText = ArchivedData.ytchannelname; // youtube channel name
			document.querySelector("#yt-channel-profile-picture-desc").src = ReceivedVideoMetadata.profilepicturelink; // online profile picture
			document.querySelector("#upload-date-renderer").innerText = ReceivedVideoMetadata.desc_date;
			document.querySelector("#upload-date-title").innerText = ReceivedVideoMetadata.desc_year;

			// display an info box below the video player indicating that it's been sourced from https://web.archive.org/
			document.querySelector("#video-title-date-and-expand-description-container").insertAdjacentHTML(
				"afterbegin",
				`
					<div id="archive-site-message-about-video-archive" style="padding: 10px 15px; background: #f5d562; font-family: 'Google Sans'; margin: 14px 14px 0px 14px; border-radius: 12px; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
						<p style="margin: unset;">NOTE: This video was archived by someone using ${ArchivedData.sourcesite}. <a href="${ArchivedData.sourceurl}" title="the ${ArchivedData.sourcesite} source link used to get the archived data">Source link</a></p>
						<button id="archive-site-info-box-button" style="cursor: pointer; padding: 6px; border-radius: 20px; background: rgba(0, 0, 0, 0.1); border: none;" class="close-info-button" title="Remove this information box.">
							<svg id="hide-sec-desc-button-icon">
								<path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path>
							</svg>
						</button>
					</div>
				`
			);

			document.querySelector("#archive-site-info-box-button").addEventListener("click", archiveSite_destroyYellowInfoBox);
		}
	}, 1000);
}



/*
	[begin] format the like and dislike counts

	code credit from Return YouTube Dislike
	link: https://github.com/Anarios/return-youtube-dislike
*/

//	vote count settings
const extConfig = {
	numberDisplayFormat: "compactShort", // [compactShort*, compactLong, standard] Number format (For non-English locale users, you may be able to improve appearance with a different option. Please file a feature request if your locale is not covered)
	numberDisplayRoundDown: false, // [true*, false] Round down numbers (Show rounded down numbers)
}

function roundDown(num) {
	if (num < 1000) return num;
	const int = Math.floor(Math.log10(num) - 2);
	const decimal = int + (int % 3 ? 1 : 0);
	const value = Math.floor(num / 10 ** decimal);
	return value * 10 ** decimal;
}

function getNumberFormatter(optionSelect) {
	let userLocales;
	if (document.documentElement.lang) {
		userLocales = document.documentElement.lang;
	} else if (navigator.language) {
		userLocales = navigator.language;
	} else {
		try {
			userLocales = new URL(
				Array.from(document.querySelectorAll("head > link[rel='search']"))
				?.find((n) => n?.getAttribute("href")?.includes("?locale="))
				?.getAttribute("href"),
			)?.searchParams?.get("locale");
		} catch {
			console.log(
				"Cannot find browser locale. Use en as default for number formatting.",
			);
			userLocales = "en";
		}
	}
	
	let formatterNotation;
	let formatterCompactDisplay;
	switch (optionSelect) {
		case "compactLong":
			formatterNotation = "compact";
			formatterCompactDisplay = "long";
			break;
		case "standard":
			formatterNotation = "standard";
			formatterCompactDisplay = "short";
			break;
		case "compactShort":
		default:
			formatterNotation = "compact";
			formatterCompactDisplay = "short";
	}
	
	const formatter = Intl.NumberFormat(userLocales, {
		notation: formatterNotation,
		compactDisplay: formatterCompactDisplay,
	});
	return formatter;
}

function numberFormat(numberState) {
	let numberDisplay;
	if (extConfig.numberDisplayRoundDown === false) {
		numberDisplay = numberState;
	} else {
		numberDisplay = roundDown(numberState);
	}
	return getNumberFormatter(extConfig.numberDisplayFormat).format(
		numberDisplay,
	);
}

/*
	[end] format the like and dislike counts
*/



/*
	faketube's EXPERIMENT FLAGS functions
*/

//	make the page display a popup whenever the dislike button is pressed (likedislikebutton.js - dislikebuttonpressedcheck() function)

//	apply the metadata fetched from my github repository
if (faketube.config_.EXPERIMENT_FLAGS.apply_debug_metadata_immediately == true) {
	setTimeout(function() {
		FetchAdditionalVideoMetadata(global_data.v);
	}, __faketube_aplydbgimdtly);
}

//	apply my favorite background color to the page
if (faketube.config_.apply_favorite_site_authors_background_color == true) {
	setTimeout(function() { document.querySelector("body").style = "background: #36c8ff;"; }, __faketube_aplyfavstebgclr);
}

//	make the page editable
if (faketube.config_.web_page_editable == true) {
	document.designMode = "on";
}

//	third party website video downloader (y2mate.is)
var DownloaderSite = faketube.config_.downloader_site_urls.urls[0].url; // redirects to y2mate.is
function newDownloadButton() { window.open(DownloaderSite + global_data.yt.videoId); }

if (faketube.config_.EXPERIMENT_FLAGS.third_party_downloader_test == true) {
	setTimeout(function() {
		document.querySelector("#download-button").addEventListener("click", newDownloadButton);
	}, __faketube_sttrdptydwnldr);
} else {
	setTimeout(function() {
		document.querySelector("#download-button").addEventListener("click", downloadButton);
	}, __faketube_sttrdptydwnldr);
}

//	return youtube dislike api: real time data update
if (faketube.config_.EXPERIMENT_FLAGS.return_youtube_dislike_api.enable_real_time_data == true) {
	var ryd_i = 0;

	setInterval(function() {
		if (ryd_i < faketube.config_.EXPERIMENT_FLAGS.return_youtube_dislike_api.ryd_request_loop_limit) {
			ryd_i++;
			RefreshRydDataWithVideoId(global_data.yt.videoId);
		} else {
			console.log("[return youtube dislike] loop limit reached: " + ryd_i);
		}
	}, faketube.config_.EXPERIMENT_FLAGS.return_youtube_dislike_api.real_time_data_timer);
}

//	hide the stop ads button in the actions container
if (faketube.config_.EXPERIMENT_FLAGS.web_stop_ads_button_hidden == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="web-stop-ads-button-hidden-css" type="text/css">
				#stop-ads {
					display: none !important;
				}

				#stop-ads-button {
					display: none !important;
				}
			</style>
		`
	);
}

//	make the font size of the video title smaller and match the look to that of 2021's
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_old_2021_video_title_font_size == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="old-style-font-size-and-weight-video-title" type="text/css">
				:root { --video-player-video-title-size: 1em !important; }

				#video.title, #video-title-failed.video-title-failed-to-load {
					font-weight: 500;
				}
			</style>
		`
	);
}

//	input a country code and language (example: ja-JP for japanese - japan)
if (faketube.config_.forced_country_code_and_language != "") {
	setTimeout(function() { document.querySelector("html").lang = faketube.config_.forced_country_code_and_language; }, 1000);
} else {
	// set the default one if it's null
	setTimeout(function() { document.querySelector("html").lang = document.querySelector("html").lang = navigator.language; }, 1000);
}

//	hide other buttons to match the look of 16.xx.xx version
if (faketube.config_.EXPERIMENT_FLAGS.match_older_16_xx_xx_version == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="hide-other-action-buttons-css" type="text/css">
				#live-chat,
				#remix,
				#thanks,
				#clip,
				#report {
					display: none !important;
				}
			</style>
		`
	);
}

//	make the embedded youtube player's aspect ratio look 9 / 16 for youtube shorts (it will fetch the video id's metadata)
if (faketube.config_.EXPERIMENT_FLAGS.video_player_is_youtube_shorts == true) {
	metadataurl = "https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/" + global_data.v + ".json";
	UrlExists(metadataurl);
	if (urldoesexists == true) {
		fetch(
			metadataurl
			).then((response) => {
				response.json().then((json) => {
					if (json) {
						let { isYouTubeShort } = json;
						if (isYouTubeShort == true) {
							document.head.insertAdjacentHTML(
								"beforeend",
								`
									<style id="youtube-shorts-styled-embeddded-player" type="text/css">
										/*
											instead of 9 / 16, 9 / 13 will be used for the aspect ratio
											(it's still a mess, might backport this to the 2021 mobile)
										*/
										#video-container {
											aspect-ratio: 9 / 13 !important;
										}
										
										#video-player {
											aspect-ratio: 9 / 13 !important;
										}
										
										iframe {
											aspect-ratio: 9 / 13 !important;
										}
									</style>
								`
							);
						}
					}
				})
			}
		);
	}
}

// replace the 2023 material you style comments section to that of 2021's comment section in the watch page
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_old_2021_comments_section == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="old-style-comments-section-css" type="text/css">
				:root { --video-player-comment-caption-size: 0.91em !important; }

				#comment-section {
					background: transparent !important;
					border-radius: 0px !important;
					padding: 0px !important;
					margin-top: 0px !important;
				}

				#comment-section-profile-picture {
					width: 29px !important;
					height: 29px !important;
				}

				#comment-field {
					border-radius: 3px !important;
					background: var(--light-mode-dark-color) !important;
					padding: 7px 9px !important;
				}

				#recommendations-page {
					border-top: 8px solid rgba(0, 0, 0, 0.1);
				}
			</style>
		`
	);
}

//	swap the action button and channel metadata to that of 2021's (column-reverse)
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_old_2021_action_buttons_placement == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="old-style-action-buttons-and-channel-info-area" type="text/css">
				#segmented-video-metadata-and-action-buttons {
					display: flex;
					flex-direction: column-reverse;
				}

				#menu {
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				}

				#video-metadata-and-yt-channel {
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				}
			</style>
		`
	);
}

//	make the icons inside the action buttons smaller, like in the native youtube app
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_smaller_action_button_icons == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="smaller-icons-action-buttons" type="text/css">
				.button-text-style {
					width: 20px;
					height: 20px;
				}
			</style>
		`
	);
}

//	replace the 2023 material you style action buttons to that of 2021's action buttons + delhi icons
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_old_2021_action_buttons == true) {
	setTimeout(function() {
		document.querySelector("#all-buttons-container").remove();
		document.querySelector("#menu").insertAdjacentHTML(
			"afterbegin",
			`
				<div id="all-buttons-container" class="exp-all-buttons-container">
					<style id="experimental-material-you-action-buttons" type="text/css">
						:root { --video-player-menu-buttons-text-size: 0.77em; }
						#all-buttons-container { gap: 1.97em !important; }
						.menu-buttons { background: transparent !important; padding: 5px 5px !important; border-radius: 20px !important; }
						#menu { padding: 0px 34px 8px 34px !important; }
						.inner-button-icons { width: 26px; height: 26px; }
					</style>
					<div id="like" class="menu-buttons-actions button-icons">
						<button id="like-button" class="menu-buttons menu-buttons-text" onclick="likeButton()" aria-pressed="false" title="I like this">
							<div id="likebutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M9.221 1.795a1 1 0 011.109-.656l1.04.173a4 4 0 013.252 4.784L14 9h4.061a3.664 3.664 0 013.576 2.868A3.68 3.68 0 0121 14.85l.02.087A3.815 3.815 0 0120 18.5v.043l-.01.227a2.82 2.82 0 01-.135.663l-.106.282A3.754 3.754 0 0116.295 22h-3.606l-.392-.007a12.002 12.002 0 01-5.223-1.388l-.343-.189-.27-.154a2.005 2.005 0 00-.863-.26l-.13-.004H3.5a1.5 1.5 0 01-1.5-1.5V12.5A1.5 1.5 0 013.5 11h1.79l.157-.013a1 1 0 00.724-.512l.063-.145 2.987-8.535Zm-1.1 9.196A3 3 0 015.29 13H4v4.998h1.468a4 4 0 011.986.528l.27.155.285.157A10 10 0 0012.69 20h3.606c.754 0 1.424-.483 1.663-1.2l.03-.126a.819.819 0 00.012-.131v-.872l.587-.586c.388-.388.577-.927.523-1.465l-.038-.23-.02-.087-.21-.9.55-.744A1.663 1.663 0 0018.061 11H14a2.002 2.002 0 01-1.956-2.418l.623-2.904a2 2 0 00-1.626-2.392l-.21-.035-2.71 7.741Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="like-count-renderer" class="menu-buttons-text">Like</span>
					</div>
					<div id="dislike" class="menu-buttons-actions button-icons">
						<button id="dislike-button" class="menu-buttons menu-buttons-text" onclick="dislikeButton()" aria-pressed="false" title="I dislike this">
							<div id="dislikebutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="dislike-count-renderer" class="menu-buttons-text">Dislike</span>
					</div>
					<div id="share" class="menu-buttons-actions button-icons">
						<button id="share-button" class="menu-buttons menu-buttons-text" onclick="shareButton()" title="Share this video">
							<div id="sharebutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M10 3.158V7.51c-5.428.223-8.27 3.75-8.875 11.199-.04.487-.07.975-.09 1.464l-.014.395c-.014.473.578.684.88.32.302-.368.61-.73.925-1.086l.244-.273c1.79-1.967 3-2.677 4.93-2.917a18.011 18.011 0 012-.112v4.346a1 1 0 001.646.763l9.805-8.297 1.55-1.31-1.55-1.31-9.805-8.297A1 1 0 0010 3.158Zm2 6.27v.002-4.116l7.904 6.688L12 18.689v-4.212l-2.023.024c-1.935.022-3.587.17-5.197 1.024a9 9 0 00-1.348.893c.355-1.947.916-3.39 1.63-4.425 1.062-1.541 2.607-2.385 5.02-2.485L12 9.428Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="share-text-renderer" class="menu-buttons-text">Share</span>
					</div>
					<div id="live-chat" class="menu-buttons-actions button-icons">
						<button id="live-chat-button" class="menu-buttons menu-buttons-text" onclick="liveChatButton()" title="Live chat replay">
							<div id="livechatbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M16 2H4a3 3 0 00-3 3v8a3 3 0 003 3h1v2.14a.8.8 0 001.188.7L11.3 16H16a3 3 0 003-3V5a3 3 0 00-3-3ZM4 4h12a1 1 0 011 1v8a1 1 0 01-1 1h-5.218l-.452.252L7 16.1V14H4a1 1 0 01-1-1V5a1 1 0 011-1Zm17 2.174A3 3 0 0123 9v8a3 3 0 01-2.846 2.996L20 20v2.14a.8.8 0 01-1.189.7L13.701 20H8.216l3.6-2h2.402l.453.252L18 20.101V18.05l1.95-.05.113-.003A1 1 0 0021 17V6.174Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="live-chat-text-renderer" class="menu-buttons-text">chat</span>
					</div>
					<div id="remix" class="menu-buttons-actions button-icons">
						<button id="remix-button" class="menu-buttons menu-buttons-text" onclick="shareButton()" title="Remix this video">
							<div id="remixbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path clip-rule="evenodd" d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z" fill-rule="evenodd"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="remix-text-renderer" class="menu-buttons-text">Create</span>
					</div>
					<div id="stop-ads" class="menu-buttons-actions button-icons">
						<button id="stop-ads-button" class="menu-buttons menu-buttons-text" title="Stop the ads in this video with Premium">
							<div id="stopadsbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM3 12c0 2.31.87 4.41 2.29 6L18 5.29C16.41 3.87 14.31 3 12 3c-4.97 0-9 4.03-9 9zm15.71-6L6 18.71C7.59 20.13 9.69 21 12 21c4.97 0 9-4.03 9-9 0-2.31-.87-4.41-2.29-6z" fill-rule="evenodd"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="stop-ads-text-renderer" class="menu-buttons-text">Stop ads</span>
					</div>
					<div id="thanks" class="menu-buttons-actions button-icons">
						<button id="thanks-button" class="menu-buttons menu-buttons-text" onclick="shareButton()" title="Show support with Super Thanks">
							<div id="thanksbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M16.25 2A6.7 6.7 0 0012 3.509 6.75 6.75 0 001 8.75c0 4.497 2.784 7.818 5.207 9.87a23.498 23.498 0 004.839 3.143l.096.044.03.013.01.005.003.002.002.001c.273-.609.544-1.218.813-1.828 0 0-9-4-9-11.25a4.75 4.75 0 018.932-2.247A1 1 0 0011 7.5v.638c-.357.1-.689.26-.979.49A2.35 2.35 0 009.13 10.5c-.007.424.112.84.342 1.197.21.31.497.563.831.734.546.29 1.23.411 1.693.502.557.109.899.19 1.117.315.086.048.109.082.114.09.004.006.028.045.028.162 0 .024-.008.118-.165.235-.162.122-.5.27-1.09.27-.721 0-1.049-.21-1.181-.323a.6.6 0 01-.142-.168l.005.013.006.014.002.009a.996.996 0 00-1.884.64l.947-.316-.003.001c-.875.292-.939.314-.943.317l.001.003.003.006.004.015.012.032c.045.111.1.218.162.321.146.236.324.444.535.624.357.306.841.566 1.476.702v.605a1 1 0 002 0v-.614c1.29-.289 2.245-1.144 2.245-2.386 0-.44-.103-.852-.327-1.212-.22-.355-.52-.6-.82-.77-.555-.316-1.244-.445-1.719-.539-.567-.111-.915-.185-1.143-.305a.5.5 0 01-.1-.07l-.004-.003-.003-.009a.4.4 0 01-.009-.092c0-.158.053-.244.14-.314.109-.086.341-.19.74-.19.373-.001.73.144.997.404a.996.996 0 001.518-1.286l-.699.58.698-.582v-.001l-.002-.001-.002-.003-.006-.006-.016-.018a2.984 2.984 0 00-.178-.182A3.45 3.45 0 0013 8.154V7.5a1 1 0 00-.933-.997A4.75 4.75 0 0121 8.75C21 16 12 20 12 20l.813 1.827.002-.001.003-.001.01-.005.029-.013.097-.045c.081-.037.191-.09.33-.16a23.5 23.5 0 004.509-2.982C20.216 16.568 23 13.248 23 8.75A6.75 6.75 0 0016.25 2Zm-3.437 19.827L12 20l-.813 1.828.813.36.813-.361Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="thanks-text-renderer" class="menu-buttons-text">Thanks</span>
					</div>
					<div id="download" class="menu-buttons-actions button-icons">
						<button id="download-button" class="menu-buttons menu-buttons-text" aria-pressed="false" title="Download this video">
							<div id="downloadbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M12 2a1 1 0 00-1 1v11.586l-4.293-4.293a1 1 0 10-1.414 1.414L12 18.414l6.707-6.707a1 1 0 10-1.414-1.414L13 14.586V3a1 1 0 00-1-1Zm7 18H5a1 1 0 000 2h14a1 1 0 000-2Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="download-text-renderer" class="menu-buttons-text">Download</span>
					</div>
					<div id="clip" class="menu-buttons-actions button-icons">
						<button id="clip-button" class="menu-buttons menu-buttons-text" onclick="clipButton()" title="Clip this video">
							<div id="clipbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M6 2.002a4 4 0 102.03 7.445L10.586 12l-2.554 2.555a4 4 0 101.414 1.414L12 13.416l7.07 7.071a2 2 0 002.829 0L9.446 8.032A4 4 0 006 2.002Zm8.826 8.588 7.073-7.074a2 2 0 00-2.828 0l-5.66 5.66 1.415 1.414ZM8 6a2 2 0 11-4 0 2 2 0 014 0Zm0 12a2 2 0 11-4 0 2 2 0 014 0Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="clip-text-renderer" class="menu-buttons-text">Clip</span>
					</div>
					<div id="save" class="menu-buttons-actions button-icons">
						<button id="save-button" class="menu-buttons menu-buttons-text" onclick="saveButton()" aria-pressed="false" title="Save this video">
							<div id="savebutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
										<path d="M19 2H5a2 2 0 00-2 2v16.887c0 1.266 1.382 2.048 2.469 1.399L12 18.366l6.531 3.919c1.087.652 2.469-.131 2.469-1.397V4a2 2 0 00-2-2ZM5 20.233V4h14v16.233l-6.485-3.89-.515-.309-.515.309L5 20.233Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="save-text-renderer" class="menu-buttons-text">Save</span>
					</div>
					<div id="report" class="menu-buttons-actions button-icons">
						<button id="report-button" class="menu-buttons menu-buttons-text" onclick="reportButton()" title="Report this video">
							<div id="reportbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
										<path d="m4 2.999-.146.073A1.55 1.55 0 003 4.454v16.545a1 1 0 102 0v-6.491a7.26 7.26 0 016.248.115l.752.376a8.94 8.94 0 008 0l.145-.073c.524-.262.855-.797.855-1.382V4.458a1.21 1.21 0 00-1.752-1.083 7.26 7.26 0 01-6.496 0L12 2.999a8.94 8.94 0 00-8 0Zm7.105 1.79v-.002l.752.376A9.26 9.26 0 0019 5.641v7.62a6.95 6.95 0 01-6.105-.052l-.752-.376A9.261 9.261 0 005 12.355v-7.62a6.94 6.94 0 016.105.054Z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="report-text-renderer" class="menu-buttons-text">Report</span>
					</div>
				</div>
			`
		);
	}, 77); // in milliseconds
}

//	replace the 2023 material you style action buttons to that of 2021's action buttons + non delhi icons
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_old_2021_action_buttons == false && faketube.config_.EXPERIMENT_FLAGS.watch_page_old_2021_action_buttons_non_delhi_style == true) {
	setTimeout(function() {
		document.querySelector("#all-buttons-container").remove();
		document.querySelector("#menu").insertAdjacentHTML(
			"afterbegin",
			`
				<div id="all-buttons-container" class="exp-all-buttons-container">
					<style id="experimental-material-you-action-buttons" type="text/css">
						:root { --video-player-menu-buttons-text-size: 0.77em; }
						#all-buttons-container { gap: 1.97em !important; }
						.menu-buttons { background: transparent !important; padding: 5px 5px !important; border-radius: 20px !important; }
						.menu-buttons-text { font-weight: 500 !important; }
						#menu { padding: 0px 34px 8px 34px !important; }
						.inner-button-icons { width: 26px; height: 26px; }
					</style>
					<div id="like" class="menu-buttons-actions button-icons">
						<button id="like-button" class="menu-buttons menu-buttons-text" onclick="likeButton()" aria-pressed="false" title="I like this">
							<div id="likebutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="like-count-renderer" class="menu-buttons-text">Like</span>
					</div>
					<div id="dislike" class="menu-buttons-actions button-icons">
						<button id="dislike-button" class="menu-buttons menu-buttons-text" onclick="dislikeButton()" aria-pressed="false" title="I dislike this">
							<div id="dislikebutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="dislike-count-renderer" class="menu-buttons-text">Dislike</span>
					</div>
					<div id="share" class="menu-buttons-actions button-icons">
						<button id="share-button" class="menu-buttons menu-buttons-text" onclick="shareButton()" title="Share this video">
							<div id="sharebutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="share-text-renderer" class="menu-buttons-text">Share</span>
					</div>
					<div id="live-chat" class="menu-buttons-actions button-icons">
						<button id="live-chat-button" class="menu-buttons menu-buttons-text" onclick="liveChatButton()" title="Live chat replay">
							<div id="livechatbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M16 3v11H7.59L5 16.59V3h11m1-1H4v17l4-4h9V2zM8 18h8l4 4V6h-1v13.59L16.41 17H8v1z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="live-chat-text-renderer" class="menu-buttons-text">chat</span>
					</div>
					<div id="remix" class="menu-buttons-actions button-icons">
						<button id="remix-button" class="menu-buttons menu-buttons-text" onclick="shareButton()" title="Remix this video">
							<div id="remixbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="remix-text-renderer" class="menu-buttons-text">Create</span>
					</div>
					<div id="stop-ads" class="menu-buttons-actions button-icons">
						<button id="stop-ads-button" class="menu-buttons menu-buttons-text" title="Stop the ads in this video with Premium">
							<div id="stopadsbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM3 12c0 2.31.87 4.41 2.29 6L18 5.29C16.41 3.87 14.31 3 12 3c-4.97 0-9 4.03-9 9zm15.71-6L6 18.71C7.59 20.13 9.69 21 12 21c4.97 0 9-4.03 9-9 0-2.31-.87-4.41-2.29-6z" fill-rule="evenodd"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="stop-ads-text-renderer" class="menu-buttons-text">Stop ads</span>
					</div>
					<div id="thanks" class="menu-buttons-actions button-icons">
						<button id="thanks-button" class="menu-buttons menu-buttons-text" onclick="shareButton()" title="Show support with Super Thanks">
							<div id="thanksbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm5.5-15c-1.74 0-3.41.88-4.5 2.28C10.91 2.88 9.24 2 7.5 2 4.42 2 2 4.64 2 7.99c0 4.12 3.4 7.48 8.55 12.58L12 22l1.45-1.44C18.6 15.47 22 12.11 22 7.99 22 4.64 19.58 2 16.5 2zm-3.75 17.85-.75.74-.74-.73-.04-.04C6.27 14.92 3 11.69 3 7.99 3 5.19 4.98 3 7.5 3c1.4 0 2.79.71 3.71 1.89L12 5.9l.79-1.01C13.71 3.71 15.1 3 16.5 3 19.02 3 21 5.19 21 7.99c0 3.7-3.28 6.94-8.25 11.86z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="thanks-text-renderer" class="menu-buttons-text">Thanks</span>
					</div>
					<div id="download" class="menu-buttons-actions button-icons">
						<button id="download-button" class="menu-buttons menu-buttons-text" aria-pressed="false" title="Download this video">
							<div id="downloadbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="download-text-renderer" class="menu-buttons-text">Download</span>
					</div>
					<div id="clip" class="menu-buttons-actions button-icons">
						<button id="clip-button" class="menu-buttons menu-buttons-text" onclick="clipButton()" title="Clip this video">
							<div id="clipbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="clip-text-renderer" class="menu-buttons-text">Clip</span>
					</div>
					<div id="save" class="menu-buttons-actions button-icons">
						<button id="save-button" class="menu-buttons menu-buttons-text" onclick="saveButton()" aria-pressed="false" title="Save this video">
							<div id="savebutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
										<path d="M4 20h14v1H3V6h1v14zm14-10h-4V6h-1v4H9v1h4v4h1v-4h4v-1zm3-7v15H6V3h15zm-1 1H7v13h13V4z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="save-text-renderer" class="menu-buttons-text">Save</span>
					</div>
					<div id="report" class="menu-buttons-actions button-icons">
						<button id="report-button" class="menu-buttons menu-buttons-text" onclick="reportButton()" title="Report this video">
							<div id="reportbutton-icon" class="inner-button-icons">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
										<path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="report-text-renderer" class="menu-buttons-text">Report</span>
					</div>
				</div>
			`
		);
	}, 77); // in milliseconds
}
