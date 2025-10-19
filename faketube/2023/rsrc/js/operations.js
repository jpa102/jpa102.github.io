/*
	operations.js
	
	this module contains code that makes the page interactive
*/

function setRatioBar() {
	barwidth = document.querySelector("#like-dislike-buttons-container").clientWidth;
	
	document.querySelector("#sentiment.like-dislike-info-renderer").style = "width: " + barwidth + "px";
	
	likepercentage = likeCount + dislikeCount > 0 ? (likeCount / (likeCount + dislikeCount)) * 100 : 50;
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
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
					#likebutton-icon > div > svg {
						fill: lime !important;
					}
					
					#dislikebutton-icon > div > svg {
						fill: red !important;
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
					#likebutton-icon > div > svg {
						fill: dodgerblue !important;
					}
					
					#dislikebutton-icon > div > svg {
						fill: gold !important;
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
					#likebutton-icon > div > svg {
						fill: aqua !important;
					}
					
					#dislikebutton-icon > div > svg {
						fill: magenta !important;
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
					#likebutton-icon > div > svg {
						fill: ${likeColor} !important;
					}
					
					#dislikebutton-icon > div > svg {
						fill: ${dislikeColor} !important;
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

//	apply the metadata fetched from my github repository
if (faketube.config_.EXPERIMENT_FLAGS.apply_debug_metadata_immediately == true) {
	setTimeout(function() {
		FetchAdditionalVideoMetadata();
	}, 1400);
}

//	apply my favorite background color to the page
if (faketube.config_.apply_favorite_site_authors_background_color == true) {
	setTimeout(function() { document.querySelector("body").style = "background: #36c8ff;"; }, 301);
}

//	make the page editable
if (faketube.config_.web_page_editable == true) {
	document.designMode = "on";
}

//	third party website video downloader (y2mate.is)
var DownloaderSite = faketube.config_.downloader_site_urls.urls[0].url;
function newDownloadButton() { window.open(DownloaderSite + ytVideoId); }

if (faketube.config_.EXPERIMENT_FLAGS.third_party_downloader_test == true) {
	setTimeout(function() {
		if (document.querySelector("#download.version-7-buttons") != null) {
			document.querySelector("#download.version-7-buttons").addEventListener("click", newDownloadButton);
		} else {
			document.querySelector("#download-button").addEventListener("click", newDownloadButton);
		}
	}, 2900);
} else {
	setTimeout(function() {
		if (document.querySelector("#download.version-7-buttons") != null) {
			document.querySelector("#download.version-7-buttons").addEventListener("click", downloadButton);
		} else {
			document.querySelector("#download-button").addEventListener("click", downloadButton);
		}
	}, 2900);
}

//	make the video player frame look non-rounded
if (faketube.config_.EXPERIMENT_FLAGS.video_player_non_rounded == true) {
	setTimeout(function() {
		document.querySelector("head").insertAdjacentHTML(
			"afterbegin",
			`
				<style id="non-rounded-iframe-container-experimental-flag">
					iframe {
						border-radius: unset;
					}
				</style>
			`
		);
	}, 20);
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

//	hide the new video statistics inside the description
if (faketube.config_.EXPERIMENT_FLAGS.display_none_new_video_statistics
 == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="disable-new-video-statistics-css">
				#video-statistics { display: none; }
				#description > #border-bottom { display: none; }
				#video-metadata-and-yt-channel { display: flex !important; }
			</style>
		`
	);
}

//	force display the ratio bar under like and dislike buttons
if (faketube.config_.EXPERIMENT_FLAGS.force_display_ratio_bar
 == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="force-display-ratio-bar-css">
				ratio-bar-renderer { display: block !important; }
			</style>
		`
	);
	
	setTimeout(function() {
		setRatioBar();
	}, 1350);
}

//	make some action buttons below the video player look compact
if (faketube.config_.EXPERIMENT_FLAGS.web_simplified_action_buttons
 == true) {
	setTimeout(function() {
		// share
		document.querySelector("#share-button").style = "padding: 6px 6px;";
		document.querySelector("#share-button > #sharebutton-icon").style = "margin: unset;";
		document.querySelector("#share-text-renderer").innerText = "";
		
		// download
		document.querySelector("#download-button").style = "padding: 6px 6px;";
		document.querySelector("#download-button > #downloadbutton-icon").style = "margin: unset;";
		document.querySelector("#download-text-renderer").innerText = "";
		
		// save
		document.querySelector("#save-button").style = "padding: 6px 6px;";
		document.querySelector("#save-button > #savebutton-icon").style = "margin: unset;";
		document.querySelector("#save-text-renderer").innerText = "";
	}, 20);
}

//	disable the dislike counts and prevent it from showing up
if (faketube.config_.EXPERIMENT_FLAGS.disable_dislike_counts == true) {
	setTimeout(function() {
		document.querySelector("#dislike-button > #dislikebutton-icon").style = "margin-right: -2px;";
		document.querySelector("#dislike-count-renderer").style = "display: none;";
		document.querySelector("#dislike-button").insertAdjacentHTML(
			"beforeend",
			`
				<span id="no-dislike-count-renderer" class="menu-buttons-text"></span>
			`
		);
		document.querySelector("#no-dislike-count-renderer").innerText = "\u205f";
		document.querySelector("ratio-bar-renderer").hidden = true;
	}, 1150);
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
				#download-button {
					display: none !important;
				}
				
				/* if the old menu buttons experiment flag is enabled, hide it as well */
				#download {
					display: none !important;
				}
			</style>
		`
	);
}

//	revert the buttons to version 7
if (faketube.config_.EXPERIMENT_FLAGS.web_old_menu_buttons == true) {
	setTimeout(function() {
		document.head.insertAdjacentHTML(
			"beforeend",
			`
			<style id="web-old-menu-buttons-css">
				#menu {
					padding: 12px 0px 9px 0px !important;
				}

				.menu-buttons-actions {
					display: flex !important;
					justify-content: center !important;
					flex-direction: row !important;
					align-items: center !important;
				}

				.menu-buttons {
					padding: 5px 5px !important;
					border: 1px solid transparent !important;
					border-radius: 20px !important;
					margin-left: 12px !important;
					background: none !important;
					transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
				}

				.menu-buttons:hover {
					cursor: pointer !important;
				}

				.menu-buttons:active {
					border: 1px solid transparent !important;
					background-color: var(--buttons-active-color) !important;
					transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
				}

				.menu-buttons-text {
					font-size: 14px !important;
					text-transform: capitalize !important;
					color: #000 !important;
					font-family: "Roboto","Arial",sans-serif !important;
					font-weight: bold !important;
				}

				#like-dislike-buttons-container {
					display: flex !important;
					flex-direction: row !important;
				}

				.like-dislike-buttons {
					padding: 0px 6px 0px 0px !important;
					display: flex !important;
					justify-content: center !important;
					flex-direction: row !important;
					align-items: center !important;
				}

				#like-button {
					background: none !important;
					border: 1px solid transparent !important;
					border-radius: 20px !important;
					padding: 5px 5px !important;
					transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
				}

				#like-button:hover {
					cursor: pointer !important;
				}

				#like-button:active {
					border: 1px solid transparent !important;
					background-color: var(--buttons-active-color) !important;
				}

				#like-dislike-buttons-border {
					margin: 0px 5px !important;
				}

				#dislike-button {
					background: none !important;
					border: 1px solid transparent !important;
					border-radius: 20px !important;
					padding: 5px 5px !important;
					transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
				}

				#dislike-button:hover {
					cursor: pointer !important;
				}

				#dislike-button:active {
					border: 1px solid transparent !important;
					background-color: var(--buttons-active-color) !important;
				}
				
				.button-text-style {
					margin-right: 0px !important;
				}
				
				#sentiment.like-dislike-info-renderer {
					margin-top: 37px !important;
				}
			</style>
			`
		);
		
		document.querySelector("#menu").remove();
		document.querySelector("#segmented-channel-owner-and-menu").insertAdjacentHTML(
			"beforeend",
			`
			<div id="menu">
				<div id="all-buttons-container">
					<div id="like-dislike-buttons-container">
						<div id="like" class="like-dislike-buttons version-7-buttons" onclick="likeButton()">
							<button id="like-button" aria-pressed="false" title="I like this">
								<div id="likebutton-icon" class="button-text-style" aria-hidden="true">
									<div style="width: 100%; height: 100%; fill: currentcolor;">
										<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
										</svg>
									</div>
								</div>
							</button>
							<span id="like-count-renderer" class="menu-buttons-text"></span>
						</div>
						<div id="like-dislike-buttons-border"></div>
						<div id="dislike" class="like-dislike-buttons version-7-buttons" onclick="dislikeButton()">
							<button id="dislike-button" aria-pressed="false" title="I dislike this">
								<div id="dislikebutton-icon" class="button-text-style" aria-hidden="true">
									<div style="width: 100%; height: 100%; fill: currentcolor;">
										<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
										</svg>
									</div>
								</div>
							</button>
							<span id="dislike-count-renderer" class="menu-buttons-text"></span>
						</div>
						<ratio-bar-renderer id="sentiment" class="like-dislike-info-renderer" hidden="">
							<div id="container" class="like-dislike-info-renderer">
								<div id="like-bar" class="like-dislike-info-renderer">
								</div>
							</div>
							<tooltip-bar fit-to-visible-bounds="" class="like-dislike-info-renderer" role="tooltip">

								<div id="tooltip">

									<span class="tooltiptext">
										Place your vote counts here

									</span>
								</div>
							</tooltip-bar>
						</ratio-bar-renderer>
					</div>
					<div id="share" class="menu-buttons-actions version-7-buttons" onclick="shareButton()">
						<button id="share-button" class="menu-buttons menu-buttons-text" title="Share this video">
							<div id="sharebutton-icon">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="share-text-renderer" class="menu-buttons-text">share</span>
					</div>
					<div id="download" class="menu-buttons-actions version-7-buttons">
						<button id="download-button" class="menu-buttons menu-buttons-text" title="Download this video">
							<div id="downloadbutton-icon">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="download-text-renderer" class="menu-buttons-text">Download</span>
					</div>
					<div id="save" class="menu-buttons-actions version-7-buttons" onclick="saveButton()">
						<button id="save-button" class="menu-buttons menu-buttons-text" title="Save this video">
							<div id="savebutton-icon">
								<div style="width: 100%; height: 100%; fill: currentcolor;">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
										<path d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"></path>
									</svg>
								</div>
							</div>
						</button>
						<span id="save-text-renderer" class="menu-buttons-text">save</span>
					</div>
					<button id="more-button" class="menu-buttons version-7-buttons menu-buttons-text" onclick="moreButton()" title="More actions">
						<div id="morebutton-icon">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
								</svg>
							</div>
						</div>
					</button>
				</div>
			</div>
			`
		);
		document.querySelector("ratio-bar-renderer").hidden = false;
		
		if (document.querySelector("#like-count-renderer").innerText == "") { document.querySelector("#like-count-renderer").innerText = formattedlikes; }
		if (document.querySelector("#dislike-count-renderer").innerText == "") { document.querySelector("#dislike-count-renderer").innerText = formatteddislikes; }

		document.querySelector("ratio-bar-renderer").style = "width: " + barwidth + "px";
	}, 30);
}
