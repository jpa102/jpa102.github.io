/*
	operations.js
	
	this module contains code that makes the page interactive
*/

function setRatioBar() {
	barwidth = document.querySelector("#like-dislike-buttons-container").clientWidth;
	document.querySelector("#sentiment.like-dislike-info-renderer").style = "width: " + barwidth + "px";
	
	document.querySelector("#like-bar").style = "width: " + likepercentage + "%;";
}

function getAverageRating() {
	oneStar = dislikeCount * 1;
	fiveStar = likeCount * 5;
	totalVotes = (dislikeCount + likeCount);
	totalStars = (oneStar + fiveStar);
	averageRating = (totalStars / totalVotes);
	roundedRating = averageRating.toPrecision(3);
}

function getPercentage() {
	likepercentage = likeCount + dislikeCount > 0 ? (likeCount / (likeCount + dislikeCount)) * 100 : 50;
	roundedlikepercent = likepercentage.toFixed(1);
}

/*
	LIKE AND DISLIKE BUTTONS
*/

function addLikeCount() {
	likeCount++;
	
	getAverageRating();
	getPercentage();
	
	likes = likeCount.toLocaleString();
	formattedlikes = numberFormat(likeCount);
	document.querySelector("#like-count-renderer").innerText = formattedlikes;
	
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
	
	document.querySelector("#like-counts").innerText = likes;
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
	
}

function subtractLikeCount() {
	likeCount--;
	
	getAverageRating();
	getPercentage();
	
	likes = likeCount.toLocaleString();
	formattedlikes = numberFormat(likeCount);
	document.querySelector("#like-count-renderer").innerText = formattedlikes;
	
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
	
	document.querySelector("#like-counts").innerText = likes;
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
}

function addDislikeCount() {
	dislikeCount++;
	
	getAverageRating();
	getPercentage();
	
	dislikes = dislikeCount.toLocaleString();
	formatteddislikes = numberFormat(dislikeCount);
	document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
	
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
	
	document.querySelector("#dislike-counts").innerText = dislikes;
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
}

function subtractDislikeCount() {
	dislikeCount--;
	
	getAverageRating();
	getPercentage();
	
	dislikes = dislikeCount.toLocaleString();
	formatteddislikes = numberFormat(dislikeCount);
	document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
	
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
	
	document.querySelector("#dislike-counts").innerText = dislikes;
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
}

/*
	set your own vote colors (like and dislike buttons & ratio bar colors)
	
	the three colors are taken and inspired from a feature present in Return YouTube Dislike extension
	fourth option allows you to set your own colors
*/

function ChangeVoteButtonsColors(colorOption, likeColor, dislikeColor){
	if (colorOption == "classic") {
		if (document.querySelector("#classic-votes-color") != null) { document.querySelector("#classic-votes-color").remove(); }
		if (document.querySelector("#accessible-votes-color") != null) { document.querySelector("#accessible-votes-color").remove(); }
		if (document.querySelector("#neon-votes-color") != null) { document.querySelector("#neon-votes-color").remove(); }
		if (document.querySelector("#custom-votes-color") != null) { document.querySelector("#custom-votes-color").remove(); }
		
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="classic-votes-color">
					#like-button > .yt-spec-button-shape-next__icon > div {
						fill: lime !important;
					}
					
					#like-count-renderer {
						color: lime !important;
					}
					
					#dislike-button > .yt-spec-button-shape-next__icon > div {
						fill: red !important;
					}
					
					#dislike-count-renderer {
						color: red !important;
					}
					
					#like-bar {
						background: lime !important;
					}
					
					#container {
						background: red !important;
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
				<style id="accessible-votes-color">
					#like-button > .yt-spec-button-shape-next__icon > div {
						fill: dodgerblue !important;
					}
					
					#like-count-renderer {
						color: dodgerblue !important;
					}
					
					#dislike-button > .yt-spec-button-shape-next__icon > div {
						fill: gold !important;
					}
					
					#dislike-count-renderer {
						color: gold !important;
					}
					
					#like-bar {
						background: dodgerblue !important;
					}
					
					#container {
						background: gold !important;
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
				<style id="neon-votes-color">
					#like-button > .yt-spec-button-shape-next__icon > div {
						fill: aqua !important;
					}
					
					#like-count-renderer {
						color: aqua !important;
					}
					
					#dislike-button > .yt-spec-button-shape-next__icon > div {
						fill: magenta !important;
					}
					
					#dislike-count-renderer {
						color: magenta !important;
					}
					
					#like-bar {
						background: aqua !important;
					}
					
					#container {
						background: magenta !important;
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
				<style id="custom-votes-color">
					#like-button > .yt-spec-button-shape-next__icon > div {
						fill: ${likeColor} !important;
					}
					
					#like-count-renderer {
						color: ${likeColor} !important;
					}
					
					#dislike-button > .yt-spec-button-shape-next__icon > div {
						fill: ${dislikeColor} !important;
					}
					
					#dislike-count-renderer {
						color: ${dislikeColor} !important;
					}
					
					#like-bar {
						background: ${likeColor} !important;
					}
					
					#container {
						background: ${dislikeColor} !important;
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
	UrlExists("https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/archived/" + v + ".json");
	
	if (urldoesexists === true) {
		setTimeout(function() {
			fetch(
				"https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/archived/" + ytVideoId + ".json"
			).then(
				(response) => {
					response.json().then((json) => {
						if (json) {
							let { id, shortdesc, fulldesc, uploaddateandtime, uploaddate, uploadtime, subcountintguess, commentCount, profilepicturelink, archiveddata } = json;
							
							ArchivedData = archiveddata;
							ReceivedVideoMetadata = {
								"id": id,
								"shortdesc": shortdesc,
								"fulldesc": fulldesc,
								"uploaddateandtime": uploaddateandtime,
								"uploaddate": uploaddate,
								"uploadtime": uploadtime,
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
			document.querySelector("title").innerText = ArchivedData.ytvideotitle + appendFakeTubeString + " (archive)"; // html title
			document.querySelector("iframe").src = ArchivedData.archivedvideourl; // video
			document.querySelector("#video.title").innerText = ArchivedData.ytvideotitle; // video title
			document.querySelector("#video-metadata").innerText = totalviews + " • " + ReceivedVideoMetadata.uploaddate; // total views and date
			document.querySelector("#yt-channel-link").innerText = ArchivedData.ytchannelname; // youtube channel name
			document.querySelector("#yt-channel-link").href = ArchivedData.ytchannelidlink; // youtube channel link
			document.querySelector("a.yt-channel-sub-count").innerText = numberFormat(ReceivedVideoMetadata.subcountintguess) + " subscribers";  // subscriber counts
			document.querySelector("a.yt-channel-sub-count").href = ArchivedData.ytchannelsubconfirmlink; // youtube channel link (subscribe link)
			document.querySelector("a.yt-channel-sub-count").title = "Subscribe to " + ArchivedData.ytchannelname + " (YouTube)";
			document.querySelector("#yt-channel-profile-picture").src = ReceivedVideoMetadata.profilepicturelink; // online profile picture
			document.querySelector("#description-text").innerText = ReceivedVideoMetadata.shortdesc; // short description (description preview)
			
			uncollapseddescription = ReceivedVideoMetadata.fulldesc; // short description
			collapseddescription = ReceivedVideoMetadata.shortdesc; // full description
			
			document.querySelector("#comment-count-renderer").innerText = ReceivedVideoMetadata.commentCount.toLocaleString(); // comment counts
			
			// display an info box below the video player indicating that it's been sourced from https://web.archive.org/
			document.querySelector("#video-title-and-date-published").insertAdjacentHTML(
				"afterbegin",
				`
					<div id="archive-site-message-about-video-archive" style="padding: 10px 12px; background: #f5d562; font-family: 'Google Sans'; margin-bottom: 20px; display: flex; flex-direction: row; justify-content: space-between;">
						<p style="margin: unset;">NOTE: This video was archived by someone using ${ArchivedData.sourcesite}. <a href="${ArchivedData.sourceurl}" title="the ${ArchivedData.sourcesite} source link used to get the archived data">Source link</a></p>
						<button id="archive-site-info-box-button" style="cursor: pointer;" class="close-info-button" title="Remove this information box.">X</button>
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

// make the page display a popup whenever the dislike button is pressed (likedislikebutton.js - dislikebuttonpressedcheck() function)

// apply the metadata fetched from my github repository
if (faketube.config_.EXPERIMENT_FLAGS.apply_debug_metadata_immediately == true) {
	setTimeout(function() {
		FetchAdditionalVideoMetadata();
	}, 1400);
}

// apply my favorite background color to the page
if (faketube.apply_favorite_site_authors_background_color == true) {
	setTimeout(function() { document.querySelector("body").style = "background: #36c8ff;"; }, 301);
}

// make the page editable
if (faketube.config_.web_page_editable == true) {
	document.designMode = "on";
}

// third party website video downloader (y2mate.is)
var DownloaderSite = "https://www.youtubepi.com/watch?v="; // redirects to y2mate.is
function newDownloadButton() { window.open(DownloaderSite + ytVideoId); }

if (faketube.config_.EXPERIMENT_FLAGS.third_party_downloader_test == true) {
	setTimeout(function() {
		document.querySelector("#download").addEventListener("click", newDownloadButton);
	}, 2900);
} else {
	setTimeout(function() {
		document.querySelector("#download").addEventListener("click", downloadButton);
	}, 2900);
}

//	return youtube dislike api: real time data update
if (faketube.config_.EXPERIMENT_FLAGS.return_youtube_dislike_api.enable_real_time_data == true) {
	var ryd_i = 0;
	
	setInterval(function() {
		if (ryd_i < faketube.config_.EXPERIMENT_FLAGS.return_youtube_dislike_api.ryd_request_loop_limit) {
			ryd_i++;
			RefreshRydDataWithVideoId(ytVideoId);
		}
	}, faketube.config_.EXPERIMENT_FLAGS.return_youtube_dislike_api.real_time_data_timer);
}

//	hide the download button in the actions container
if (faketube.config_.EXPERIMENT_FLAGS.web_download_button_hidden == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="web-download-button-hidden-css">
				#download {
					display: none !important;
				}
			</style>
		`
	);
}

//	make the embedded youtube player's aspect ratio look 9 / 16 for youtube shorts (it will fetch the video id's metadata)
if (faketube.config_.EXPERIMENT_FLAGS.video_player_is_youtube_shorts == true) {
	metadataurl = "https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/" + v + ".json";
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
									<style id="youtube-shorts-styled-embeddded-player">
										#video-container {
											aspect-ratio: 9 / 16 !important;
										}
										
										#video-player {
											aspect-ratio: 9 / 16 !important;
										}
										
										iframe {
											aspect-ratio: 9 / 16 !important;
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
