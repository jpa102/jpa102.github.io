/*
	operations.js
	
	this module contains code that makes the page interactive
	and some math too
*/



function getAverageRating(likeCount, dislikeCount, returnType) {
	let oneStar = dislikeCount * 1;
	let fiveStar = likeCount * 5;
	let totalVotes = (dislikeCount + likeCount);
	let totalStars = (oneStar + fiveStar);
	let averageRating = (totalStars / totalVotes);
	let roundedRating = averageRating.toPrecision(3);

	if (returnType === 1) { return oneStar }
	if (returnType === 2) { return fiveStar }
	if (returnType === 3) { return totalVotes }
	if (returnType === 4) { return totalStars }
	if (returnType === 5) { return averageRating }
	if (returnType === 6) { return roundedRating }

	// if it was called without proper arguments supplied
	console.log("return types:\n\t1 - oneStar\n\t2 - fiveStar\n\t3 - totalVotes\n\t4 - totalStars\n\t5 - averageRating\n\t6 - roundedRating");
	DebugJS.console.log("info", "[operations.js] return types:\n\t1 - oneStar\n\t2 - fiveStar\n\t3 - totalVotes\n\t4 - totalStars\n\t5 - averageRating\n\t6 - roundedRating");
}

function getPercentage(likeCount, dislikeCount, returnType) {
	let likepercentage = likeCount + dislikeCount > 0 ? (likeCount / (likeCount + dislikeCount)) * 100 : 50;
	let roundedlikepercent = likepercentage.toFixed(1);

	if (returnType === 1) { return likepercentage }
	if (returnType === 2) { return roundedlikepercent }

	// if it was called without proper arguments supplied
	console.log("return types:\n\t1 - oneStar\n\t2 - fiveStar\n\t3 - totalVotes\n\t4 - totalStars\n\t5 - averageRating\n\t6 - roundedRating");
	DebugJS.console.log("info", "[operations.js] return types:\n\t1 - oneStar\n\t2 - fiveStar\n\t3 - totalVotes\n\t4 - totalStars\n\t5 - averageRating\n\t6 - roundedRating");
}

/*
	LIKE AND DISLIKE BUTTONS
*/

function addLikeCount() {
	_volatile_votes.likeCount++;

	_volatile_votes.likes = _volatile_votes.likeCount.toLocaleString();
	_volatile_votes.formattedlikes = numberFormat(_volatile_votes.likeCount);
	document.querySelector("#like-count-renderer").innerText = _volatile_votes.formattedlikes;

	document.querySelector("#like-counts").innerText = _volatile_votes.likes;

	document.querySelector("#averageratings").innerText = getAverageRating(_volatile_votes.likeCount, _volatile_votes.dislikeCount, 6);
	document.querySelector("#rounded-percentage").innerText = `(${getPercentage(_volatile_votes.likeCount, _volatile_votes.dislikeCount, 2)}%)`;
}

function subtractLikeCount() {
	_volatile_votes.likeCount--;
	
	_volatile_votes.likes = _volatile_votes.likeCount.toLocaleString();
	_volatile_votes.formattedlikes = numberFormat(_volatile_votes.likeCount);
	document.querySelector("#like-count-renderer").innerText = _volatile_votes.formattedlikes;
	
	document.querySelector("#like-counts").innerText = _volatile_votes.likes;
	
	document.querySelector("#averageratings").innerText = getAverageRating(_volatile_votes.likeCount, _volatile_votes.dislikeCount, 6);
	document.querySelector("#rounded-percentage").innerText = `(${getPercentage(_volatile_votes.likeCount, _volatile_votes.dislikeCount, 2)}%)`;
}

function addDislikeCount() {
	_volatile_votes.dislikeCount++;
	
	_volatile_votes.dislikes = _volatile_votes.dislikeCount.toLocaleString();
	_volatile_votes.formatteddislikes = numberFormat(_volatile_votes.dislikeCount);
	document.querySelector("#dislike-count-renderer").innerText = _volatile_votes.formatteddislikes;
	
	document.querySelector("#dislike-counts").innerText = _volatile_votes.dislikes;
	
	document.querySelector("#averageratings").innerText = getAverageRating(_volatile_votes.likeCount, _volatile_votes.dislikeCount, 6);
	document.querySelector("#rounded-percentage").innerText = `(${getPercentage(_volatile_votes.likeCount, _volatile_votes.dislikeCount, 2)}%)`;
}

function subtractDislikeCount() {
	_volatile_votes.dislikeCount--;
	
	_volatile_votes.dislikes = _volatile_votes.dislikeCount.toLocaleString();
	_volatile_votes.formatteddislikes = numberFormat(_volatile_votes.dislikeCount);
	document.querySelector("#dislike-count-renderer").innerText = _volatile_votes.formatteddislikes;
	
	document.querySelector("#dislike-counts").innerText = _volatile_votes.dislikes;
	
	document.querySelector("#averageratings").innerText = getAverageRating(_volatile_votes.likeCount, _volatile_votes.dislikeCount, 6);
	document.querySelector("#rounded-percentage").innerText = `(${getPercentage(_volatile_votes.likeCount, _volatile_votes.dislikeCount, 2)}%)`;
}

function displaySecondaryDescription() {
	// save the last x position before hiding
	lastYPos = window.scrollY;
	
	document.querySelector("#video-metadata-info-and-recommendations-container").hidden = true;
	document.querySelector("#description-section-container").hidden = false;
}

function hideSecondaryDescription() {
	document.querySelector("#video-metadata-info-and-recommendations-container").hidden = false;
	document.querySelector("#description-section-container").hidden = true;
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
					
					#dislikebutton-icon > div {
						fill: red !important;
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
					
					#dislikebutton-icon > div {
						fill: gold !important;
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
					
					#dislikebutton-icon > div {
						fill: magenta !important;
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
					
					#dislikebutton-icon > div {
						fill: ${dislikeColor} !important;
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
			document.querySelector("#video-metadata").innerText = numberFormat(global_data.ryd_data.unformattedviews) + " views • " + calcYear + " years ago"; // total views and date
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
			document.querySelector("#video-metadata-info-container").insertAdjacentHTML(
				"afterbegin",
				`
					<div id="archive-site-message-about-video-archive" style="padding: 10px 15px; background: #f5d562; font-family: 'Google Sans'; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
						<p style="margin: unset;">NOTE: This video was archived by someone using ${ArchivedData.sourcesite}. <a href="${ArchivedData.sourceurl}" title="the ${ArchivedData.sourcesite} source link used to get the archived data">Source link</a></p>
						<button id="archive-site-info-box-button" style="cursor: pointer; padding: 6px; background: transparent; border: none;" class="close-info-button" title="Remove this information box.">
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

function showRydData() {
	if (document.querySelector("#ryd-data-estimated-container").hidden === true) {
		document.querySelector("#ryd-data-estimated-container").hidden = false;
		document.querySelector("#ryd-like-counts-renderer").innerText = global_data.ryd_data.rawLikes.toLocaleString();
		document.querySelector("#ryd-dislike-counts-renderer").innerText = global_data.ryd_data.rawDislikes.toLocaleString();
		document.querySelector("#ryd-average-rating-renderer").innerText = `${getAverageRating(global_data.ryd_data.rawLikes, global_data.ryd_data.rawDislikes, 6)} / ${global_data.ryd_data.calcRating.roundedRating}`;
		document.querySelector("#ryd-percentage-renderer").innerText = `${getPercentage(global_data.ryd_data.rawLikes, global_data.ryd_data.rawDislikes, 2)} / ${global_data.ryd_data.roundedlikepercentage}`;
		return;
	}

	if (document.querySelector("#ryd-data-estimated-container").hidden === false) {
		document.querySelector("#ryd-data-estimated-container").hidden = true;
		document.querySelector("#ryd-like-counts-renderer").innerText = NaN;
		document.querySelector("#ryd-dislike-counts-renderer").innerText = NaN;
		document.querySelector("#ryd-average-rating-renderer").innerText = NaN;
		document.querySelector("#ryd-percentage-renderer").innerText = NaN;
		return;
	}
}

function estimateLikeCountFromRYD() {
	if (window.confirm(`by executing this function, you accept that it will use a high dangerous usage of cpu while calculating the estimated like counts\n\nare you sure you want to continue? this may take some time depending on the votes...\n\nactual likes: ${global_data.ryd_data.likeCount.toLocaleString()}, raw likes: ${global_data.ryd_data.rawLikes.toLocaleString()}\nestimated dislikes: ${global_data.ryd_data.dislikeCount.toLocaleString()}, raw dislikes: ${global_data.ryd_data.rawDislikes.toLocaleString()}\n\n\(this is only used to estimate like counts based on rawLikes and rawDislikes from Return YouTube Dislike API, if there's enough votes for them\)`) == true) {
		let art_rating = 1.01;
		_volatile_votes.averageRating = getAverageRating(global_data.ryd_data.rawLikes, global_data.ryd_data.rawDislikes, 5);

		// do a test if the averageRating from raw votes are lower than the averageRating from raw likes and actual dislikes
		let _a = getAverageRating(global_data.ryd_data.rawLikes, global_data.ryd_data.dislikeCount, 5);
		let _b = getAverageRating(global_data.ryd_data.rawLikes, global_data.ryd_data.rawDislikes, 5);

		if (global_data.ryd_data.likeCount == 0 && _a > _b) {
			console.log(`the average rating ${_a} (rawLikes and estimated dislikes) is greater than this average rating ${_b} (rawLikes and rawDislikes)`);
			return;
		}

		/*
			for the sake of this while loop failing to be equals, it uses a <= operator
			rather than checking if the active art_rating variable is now equals to the pre-calculated _volatile_votes.averageRating from raw likes and dislikes
		*/
		while (art_rating <= _volatile_votes.averageRating) {
			_volatile_votes.likeCount++;
			_volatile_votes.likepercentage = getPercentage(global_data.ryd_data.rawLikes, global_data.ryd_data.rawDislikes, 1);
			_volatile_votes.roundedlikepercent = parseFloat(getPercentage(global_data.ryd_data.rawLikes, global_data.ryd_data.rawDislikes, 1).toFixed(1));
			_volatile_votes.formattedlikes = numberFormat(_volatile_votes.likeCount);

			document.querySelector("#total-like-counts-renderer").innerText = _volatile_votes.likeCount.toLocaleString();
			document.querySelector("#like-count-renderer").innerText = _volatile_votes.formattedlikes;

			art_rating = getAverageRating(_volatile_votes.likeCount, global_data.ryd_data.dislikeCount, 5);
		}

		if (art_rating > _volatile_votes.averageRating) {
			console.log(`operation finished, the average rating ${art_rating} (rawLikes and estimated dislikes) is now greater than this average rating ${_volatile_votes.averageRating} (rawLikes and rawDislikes), which means the estimated like counts should be displayed (it can be inaccurate though)\n\nestimated like count: ${_volatile_votes.likeCount.toLocaleString()}`);
		}
	} else {
		return;
	}
}

function onCreateTranscriptPage() {
	document.querySelector("#description-section-container").hidden = true;
	document.querySelector("#transcripts-section-container").hidden = false;
}

function onDestroyTranscriptPage() {
	document.querySelector("#description-section-container").hidden = false;
	document.querySelector("#transcripts-section-container").hidden = true;
}

function onCreateIntFuncsPage() {
	document.querySelector("#video-metadata-info-and-recommendations-container").hidden = true;
	document.querySelector("#internal-functions-section-container").hidden = false;
}

function onDestroyIntFuncsPage() {
	document.querySelector("#video-metadata-info-and-recommendations-container").hidden = false;
	document.querySelector("#internal-functions-section-container").hidden = true;
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

//	hide the gradient header
if (faketube.config_.hide_gradient_header == true) {
	setTimeout(function() {
		document.querySelector("header").hidden = true;
	}, 50);
}

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

//	
if (faketube.config_.display_intfuncs_button == true) {
	setTimeout(function() { document.querySelector("#intfuncs").removeAttribute("style"); }, 50);
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
			console.log("[return youtube dislike] loop limit reached: " + ryd_i + " / " + faketube.config_.EXPERIMENT_FLAGS.return_youtube_dislike_api.ryd_request_loop_limit);
		}
	}, faketube.config_.EXPERIMENT_FLAGS.return_youtube_dislike_api.real_time_data_timer);
}

//	hide the dislike counts in the watch page and description
if (faketube.config_.EXPERIMENT_FLAGS.hide_public_dislike_counts_to_protect_creators == true) {
	setTimeout(function() {
		if (document.querySelector("#dislike > #dislike-count-renderer") != null) {
			document.querySelector("#dislike > #dislike-count-renderer").style.display = "none";
			document.querySelector("#dislike").insertAdjacentHTML("beforeend", `<span id="no-dislike-count-renderer" class="menu-buttons-text">Dislike</span>`);
		}

		if (document.querySelector("#dislike > #dislike-button > #dislike-count-renderer") != null) {
			document.querySelector("#dislike > #dislike-button > #dislike-count-renderer").style.display = "none";
			document.querySelector("#dislike > #dislike-button > #dislikebutton-icon").style.marginRight = "0px";
			document.querySelector("#dislike > #dislike-button").insertAdjacentHTML("beforeend", `<span id="no-dislike-count-renderer" class="menu-buttons-text"></span>`);
		}

		document.querySelector("#total-dislike-counts-container").style.display = "none";
	}, __faketube_asnvltleryddta);
}

//	hide the download button in the actions container
if (faketube.config_.web_download_button_hidden == true) {
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

//	hide the stop ads button in the actions container
if (faketube.config_.web_stop_ads_button_hidden == true) {
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="web-stop-ads-button-hidden-css">
				#stop-ads {
					display: none !important;
				}
			</style>
		`
	);
}

//	input a country code and language (example: ja-JP for japanese - japan)
if (faketube.config_.EXPERIMENT_FLAGS.forced_country_code_and_language != "") {
	setTimeout(function() { document.querySelector("html").lang = faketube.config_.EXPERIMENT_FLAGS.forced_country_code_and_language; }, 1000);
} else {
	// set the default one if it's null
	setTimeout(function() { document.querySelector("html").lang = document.querySelector("html").lang = navigator.language; }, 1000);
}

//	inject and style the action bar buttons from 15.xx.xx versions of youtube app
if (faketube.config_.EXPERIMENT_FLAGS.match_older_15_xx_xx_version == true) {
	setTimeout(function() {
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="match-older-15xxxx-version" type="text/css">
					.yt-channel-sub-count { display: block !important; }
					#subscribe-text-container { display: flex; flex-direction: row; align-items: center; }
					.button-renderer-icon { width: 17px; height: 17px; margin: 0 8px 0 0; }
				</style>
				`
		);

		document.querySelector("#subscribe-text-container").insertAdjacentHTML(
			"afterbegin",
			`
				<div class="button-renderer-icon">
					<svg viewBox="0 0 67 60" preserveAspectRatio="xMidYMid meet" fill="#c00">
						<path d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31 c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56 C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30 S64.31,19.77,63,14.87z"></path>
						<polygon fill="#FFFFFF" class="logo-arrow" points="26.6,39.43 42.93,30 26.6,20.57"></polygon>
					</svg>
				</div>
			`
		);

		document.querySelector("#like-count-renderer").style.color = "#909090";
		document.querySelector("#likebutton-icon > div > svg > path").remove();
		document.querySelector("#likebutton-icon > div > svg").insertAdjacentHTML(
			"afterbegin",
			`
				<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" style="stroke: none; fill-rule: nonzero; fill: #909090; fill-opacity: 1;"></path>
			`
		);

		document.querySelector("#dislike-count-renderer").style.color = "#909090";
		document.querySelector("#dislikebutton-icon > div > svg > path").remove();
		document.querySelector("#dislikebutton-icon > div > svg").insertAdjacentHTML(
			"afterbegin",
			`
				<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" style="stroke: none; fill-rule: nonzero; fill: #909090; fill-opacity: 1;"></path>
			`
		);

		document.querySelector("#share-text-renderer").style.color = "#909090";
		document.querySelector("#sharebutton-icon > div > svg > path").remove();
		document.querySelector("#sharebutton-icon > div > svg").insertAdjacentHTML(
			"afterbegin",
			`
				<path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z" style="stroke: none; fill-rule: nonzero; fill: #909090; fill-opacity: 1;"></path>
			`
		);

		document.querySelector("#download-text-renderer").style.color = "#909090";
		document.querySelector("#downloadbutton-icon > div > svg > path").remove();
		document.querySelector("#downloadbutton-icon > div > svg").insertAdjacentHTML(
			"afterbegin",
			`
				<path d="M 10.761719 0.0976562 C 5.519531 0.546875 1.164062 4.429688 0.230469 9.476562 C 0.0351562 10.539062 0.0351562 12.460938 0.230469 13.519531 C 1.089844 18.183594 4.949219 21.941406 9.738281 22.773438 C 10.828125 22.964844 12.804688 22.964844 13.890625 22.773438 C 18.683594 21.941406 22.542969 18.183594 23.398438 13.519531 C 23.59375 12.460938 23.59375 10.539062 23.398438 9.476562 C 22.328125 3.675781 16.808594 -0.421875 10.761719 0.0976562 Z M 14.125 7.5 L 14.125 9.605469 L 15.535156 9.632812 L 16.9375 9.65625 L 14.445312 12.109375 L 11.953125 14.554688 L 9.414062 12.082031 L 6.875 9.613281 L 9.785156 9.613281 L 9.785156 5.390625 L 14.125 5.390625 Z M 16.984375 16.710938 L 16.984375 17.429688 L 6.921875 17.429688 L 6.921875 15.992188 L 16.984375 15.992188 Z M 16.984375 16.710938" style="stroke: none; fill-rule: nonzero; fill: #909090; fill-opacity: 1;"></path>
			`
		);

		document.querySelector("#clip-text-renderer").style.color = "#909090";
		document.querySelector("#clipbutton-icon > div > svg > path").remove();
		document.querySelector("#clipbutton-icon > div > svg").insertAdjacentHTML(
			"afterbegin",
			`
				<path d="M22 3h-4l-5 5 3 3 6-6V3zM10.79 7.79c.12-.41.21-.84.21-1.29C11 4.01 8.99 2 6.5 2S2 4.01 2 6.5 4.01 11 6.5 11c.45 0 .88-.09 1.29-.21L9 12l-1.21 1.21c-.41-.12-.84-.21-1.29-.21C4.01 13 2 15.01 2 17.5S4.01 22 6.5 22s4.5-2.01 4.5-4.5c0-.45-.09-.88-.21-1.29L12 15l6 6h4v-2L10.79 7.79zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8zm0 11c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16s1.5.67 1.5 1.5S7.33 19 6.5 19z" style="stroke: none; fill-rule: nonzero; fill: #909090; fill-opacity: 1;"></path>
			`
		);

		document.querySelector("#save-text-renderer").style.color = "#909090";
		document.querySelector("#savebutton-icon > div > svg > path").remove();
		document.querySelector("#savebutton-icon > div > svg").insertAdjacentHTML(
			"afterbegin",
			`
				<path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" style="stroke: none; fill-rule: nonzero; fill: #909090; fill-opacity: 1;"></path>
			`
		);

		document.querySelector("#report-text-renderer").style.color = "#909090";
		document.querySelector("#reportbutton-icon > div > svg > path").remove();
		document.querySelector("#reportbutton-icon > div > svg").insertAdjacentHTML(
			"afterbegin",
			`
				<path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" style="stroke: none; fill-rule: nonzero; fill: #909090; fill-opacity: 1;"></path>
			`
		);
	}, 100); // in milliseconds
}

//	match the look of older 16.xx.xx versions
if (faketube.config_.EXPERIMENT_FLAGS.match_older_16_xx_xx_version == true) {
	document.querySelector("head").insertAdjacentHTML(
		"beforeend",
		`
			<style id="match-older-16xxxx-version" type="text/css">
				.loading-video-thumbnails { margin: 0px var(--video-player-margin-left) 14px; }
				#live-chat, #remix, #stop-ads, #thanks, #clip, #report { display: none !important; }
				#all-buttons-container { gap: unset; justify-content: unset; justify-content: space-between; }
				#menu { flex-direction: column; padding: 0px 18px 12px; }
				.menu-buttons-actions { width: 3.8rem; }
				.yt-channel-sub-count { display: none; }
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

// enable the experimental material you comments section in the watch page
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_experimental_material_you_comments_section == true) {
	document.querySelector("head").insertAdjacentHTML(
		"beforeend",
		`
			<style id="experimental-material-you-comments-section-css" type="text/css">
				:root { --video-player-comment-caption-size: 0.86em !important; }

				#comment-section {
					background: rgba(0, 0, 0, 0.1);
					border-radius: 12px;
					padding: 0px 14px 13px;
					margin: 14px !important;
				}

				#comment-section-profile-picture {
					width: 24px !important;
					height: 24px !important;
				}

				#comment-field {
					border-radius: 20px !important;
					background: rgba(0, 0, 0, 0.1) !important;
					padding: 3px 12px !important;
				}

				#comment-expand-container { display: none; }

				html:not([data-theme-display='light']) #comment-section { background: rgba(255, 255, 255, 0.1); }
				html:not([data-theme-display='light']) #comment-field { background: rgba(255, 255, 255, 0.1) !important; }
			</style>
		`
	);
}

//	add a right arrow svg beside the comment field box
//	added a safeguard if the experimental material style comment section is set to false
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_experimental_material_you_comments_section == false && faketube.config_.EXPERIMENT_FLAGS.watch_page_experimental_material_you_comments_section_migration_phase == true) {
	setTimeout(function() {
		document.querySelector("#account-picture-and-comment-entrypoint").insertAdjacentHTML(
			"beforeend",
			`
				<div style="width: 17px; height: 17px; margin: 0px 0px 0px 14px;">
					<style id="experimental-material-you-comments-section-migration-phase" type="text/css">
						#comment-expand-container { display: none !important; }
						#comment-caption, #comment-counts { font-size: 0.8em !important; margin-bottom: 0.6em !important }
						#comment-field { border-radius: 4px !important; }
					</style>
					<svg class="subpage-button-icon" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
						<path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path>
					</svg>
				</div>
			`
		);
	}, 77); // in milliseconds
}

//	enable the experimental material you buttons in the action bar
if (faketube.config_.EXPERIMENT_FLAGS.watch_page_experimental_material_you_action_buttons == true) {
	setTimeout(function() {
		document.querySelector("#all-buttons-container").remove();
		document.querySelector("#menu").insertAdjacentHTML(
			"afterbegin",
			`
				<div id="all-buttons-container" class="exp-all-buttons-container">
					<style id="experimental_material_you_action_buttons" type="text/css">
						:root { --video-player-menu-buttons-text-size: 0.86em; }
						.exp-like-dislike-buttons-container { display: flex; align-items: center; }
						#like-button, #dislike-button { display: flex; align-items: center; }
						#like-button { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
						#dislike-button { border-top-left-radius: 0px; border-bottom-left-radius: 0px; padding-left: 0px; }
						.button-text-style { width: 1.5rem; height: 1.5rem; margin-right: 10px; }
						#menu { padding: 8px 16px; }
						.menu-buttons { display: flex; align-items: center; padding: 6px 14px; background-color: rgba(0, 0, 0, 0.1) !important; }
						.menu-buttons:active { background-color: rgba(0, 0, 0, 0.2) !important; }
						.menu-buttons-text { display: revert; text-overflow: revert; min-width: unset; font-size: revert; font-weight: 600; }
						.button-border { content: ""; border-left: 0.13rem solid rgba(0, 0, 0, 0.1); padding-left: 14px; }
						#all-buttons-container { gap: 8px; }
						html:not([data-theme-display='light']) .button-text-style { color: var(--white-color); }
						html:not([data-theme-display='light']) .menu-buttons { background: rgba(255, 255, 255, 0.1) !important; }
						html:not([data-theme-display='light']) .menu-buttons:active { background: rgba(255, 255, 255, 0.2) !important; }
						html:not([data-theme-display='light']) .button-border { content: ""; border-left: 0.13rem solid rgba(255, 255, 255, 0.1) !important; }
					</style>
					<div id="like-dislike-buttons-container" class="exp-like-dislike-buttons-container">
						<div id="like" class="like-dislike-buttons">
							<button id="like-button" class="menu-buttons" onclick="likeButton()" title="I like this" aria-pressed="false">
								<div id="likebutton-icon" class="button-text-style" aria-hidden="true">
									<div style="width: 100%; height: 100%; fill: currentcolor;">
										<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
										</svg>
									</div>
								</div>
								<span id="like-count-renderer" class="menu-buttons-text">Like</span>
							</button>
						</div>
						<div id="dislike" class="like-dislike-buttons">
							<button id="dislike-button" class="menu-buttons" onclick="dislikeButton()" title="I dislike this" aria-pressed="false">
								<div id="dislikebutton-icon" class="button-text-style button-border" aria-hidden="true">
									<div style="width: 100%; height: 100%; fill: currentcolor;">
										<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
										</svg>
									</div>
								</div>
								<span id="dislike-count-renderer" class="menu-buttons-text">Dislike</span>
							</button>
						</div>
					</div>
					<button id="share-button" class="menu-buttons" onclick="shareButton()" title="Share this video">
						<div id="sharebutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
								</svg>
							</div>
						</div>
						<span id="share-text-renderer" class="menu-buttons-text">Share</span>
					</button>
					<button id="live-chat-button" class="menu-buttons" onclick="liveChatButton()" title="Live chat replay">
						<div id="livechatbutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M16 3v11H7.59L5 16.59V3h11m1-1H4v17l4-4h9V2zM8 18h8l4 4V6h-1v13.59L16.41 17H8v1z"></path>
								</svg>
							</div>
						</div>
						<span id="live-chat-text-renderer" class="menu-buttons-text">Chat</span>
					</button>
					<button id="super-thanks-button" class="menu-buttons" onclick="thanksButton()" title="Show support with Super Thanks">
						<div id="superthanksbutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm5.5-15c-1.74 0-3.41.88-4.5 2.28C10.91 2.88 9.24 2 7.5 2 4.42 2 2 4.64 2 7.99c0 4.12 3.4 7.48 8.55 12.58L12 22l1.45-1.44C18.6 15.47 22 12.11 22 7.99 22 4.64 19.58 2 16.5 2zm-3.75 17.85-.75.74-.74-.73-.04-.04C6.27 14.92 3 11.69 3 7.99 3 5.19 4.98 3 7.5 3c1.4 0 2.79.71 3.71 1.89L12 5.9l.79-1.01C13.71 3.71 15.1 3 16.5 3 19.02 3 21 5.19 21 7.99c0 3.7-3.28 6.94-8.25 11.86z"></path>
								</svg>
							</div>
						</div>
						<span id="super-thanks-text-renderer" class="menu-buttons-text">Thanks</span>
					</button>
					<button id="remix-button" class="menu-buttons" onclick="createButton()" title="Remix this video">
						<div id="remixbutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
								</svg>
							</div>
						</div>
						<span id="remix-text-renderer" class="menu-buttons-text">Remix</span>
					</button>
					<button id="stop-ads-button" class="menu-buttons"  title="Stop the ads in this video with Premium">
						<div id="stopads-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM3 12c0 2.31.87 4.41 2.29 6L18 5.29C16.41 3.87 14.31 3 12 3c-4.97 0-9 4.03-9 9zm15.71-6L6 18.71C7.59 20.13 9.69 21 12 21c4.97 0 9-4.03 9-9 0-2.31-.87-4.41-2.29-6z" fill-rule="evenodd"></path>
								</svg>
							</div>
						</div>
						<span id="stop-ads-text-renderer" class="menu-buttons-text">Stop Ads</span>
					</button>
					<button id="download-button" class="menu-buttons" aria-pressed="false" title="Download this video">
						<div id="downloadbutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
								</svg>
							</div>
						</div>
						<span id="download-text-renderer" class="menu-buttons-text">Download</span>
					</button>
					<button id="clip-button" class="menu-buttons" onclick="clipButton()" title="Clip this video">
						<div id="clipbutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"></path>
								</svg>
							</div>
						</div>
						<span id="clip-text-renderer" class="menu-buttons-text">Clip</span>
					</button>
					<button id="save-button" class="menu-buttons" onclick="saveButton()" aria-pressed="false" title="Save this video">
						<div id="savebutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M4 20h14v1H3V6h1v14zm14-10h-4V6h-1v4H9v1h4v4h1v-4h4v-1zm3-7v15H6V3h15zm-1 1H7v13h13V4z"></path>
								</svg>
							</div>
						</div>
						<span id="save-text-renderer" class="menu-buttons-text">Save</span>
					</button>
					<button id="report-button" class="menu-buttons" onclick="reportButton()" title="Report this video">
						<div id="reportbutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
								</svg>
							</div>
						</div>
						<span id="report-text-renderer" class="menu-buttons-text">Report</span>
					</button>
					<button id="intfuncs-button" class="menu-buttons" onclick="onCreateIntFuncsPage()" title="Execute some internal functions of FakeTube!" style="display: none;">
						<div id="intfuncsbutton-icon" class="button-text-style">
							<div style="width: 100%; height: 100%; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
									<path d="M21 6H3V5h18v1zm-8 3-9.99.01V10L13 9.99V9zm8 4H3v1h18v-1zm-8 4H3v1h10v-1z"></path>
								</svg>
							</div>
						</div>
						<span id="intfuncs-text-renderer" class="menu-buttons-text">IntFuncs</span>
					</button>
				</div>
			`
		);
	}, 77); // in milliseconds
}
