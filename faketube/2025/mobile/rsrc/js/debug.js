/*
	debug.js
	
	this file contains hidden functions that can be executed
	"native" console hotkeys: ctrl + shift + j
*/

//	deliberately make the http variable accessible
var http = new XMLHttpRequest();
function UrlExists(url) {
	http.open('HEAD', url, false);
	http.send();
	if (http.status != 404) {
		urldoesexists = true;
	} else {
		urldoesexists = false;
	}
}

function ReplaceTextInHtmlTitleTag(inputtext) {
	TitleTagLastTextContent = document.querySelector("title").innerText; // stores the last text content just in case
	document.querySelector("title").innerText = inputtext;
} 

function ReplaceChannelProfilePicture(replacementpfplink) {
	ytOnlineProfilePicture = replacementpfplink;
	document.querySelector("#yt-channel-profile-picture").src = ytOnlineProfilePicture;
}

function ReplaceSubscriberCount(subcount) {
	ytSubscriberCount = subcount;
	document.querySelector("a.yt-channel-sub-count").innerText = ytSubscriberCount + " subscribers";
}

function ReplaceVideoWithVideoId(id) {
	replacementembedvideo = "https://www.youtube.com/embed/" + id;
	document.querySelector("iframe").src = replacementembedvideo;
}

function RefreshRydDataWithVideoId(id) {
	fetch(
		`https://returnyoutubedislikeapi.com/votes?videoId=${id}`
		).then((response) => {
			response.json().then((json) => {
				if (json && !("traceId" in response) && !global_data.statsSet) {
					let { id, dateCreated, likes, dislikes, rawLikes, rawDislikes, rating, viewCount, deleted } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nAverage rating: " + rating + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes + "\nDate created: " + dateCreated + "\nDeleted: " + deleted);
					DebugJS.console.log("info", "[globaldata_online.js] Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nAverage rating: " + rating + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes + "\nDate created: " + dateCreated + "\nDeleted: " + deleted);

					//	i don't want the global_data.ryd_data to be directly edited by operations.js
					//	so i'm assigning them to a separate object
					_volatile_votes = {
						likes: likes.toLocaleString(),
						dislikes: dislikes.toLocaleString(),
						likeCount: likes,
						dislikeCount: dislikes,
						formattedlikes: numberFormat(likes),
						formatteddislikes: numberFormat(dislikes),
						oneStar: dislikes * 1,
						fiveStar: likes * 5,
						totalVotes: (dislikes + likes),
						totalStars: 0,
						averageRating: rating,
						roundedRating: rating.toPrecision(3),
						likepercentage: likes + dislikes > 0 ? (likes / (likes + dislikes)) * 100 : 50,
						roundedlikepercent: 0
					}

					global_data.ryd_data.likeCount = likes;
					global_data.ryd_data.dislikeCount = dislikes;
					global_data.ryd_data.rawLikes = rawLikes;
					global_data.ryd_data.rawDislikes = rawDislikes;

					// get averageRating from likes and dislikes ("star ratings" that was present in 2008 somewhere)
					global_data.ryd_data.calcRating.oneStar = dislikes * 1;
					global_data.ryd_data.calcRating.fiveStar = likes * 5;
					global_data.ryd_data.calcRating.totalVotes = (dislikes + likes);
					global_data.ryd_data.calcRating.totalStars = (global_data.ryd_data.calcRating.oneStar + global_data.ryd_data.calcRating.fiveStar);
					global_data.ryd_data.calcRating.averageRating = (global_data.ryd_data.calcRating.totalStars / global_data.ryd_data.calcRating.totalVotes);
					global_data.ryd_data.calcRating.roundedRating = global_data.ryd_data.calcRating.averageRating.toPrecision(3);

					// get percentage from likes and dislikes
					global_data.ryd_data.likepercentage = likes + dislikes > 0 ? (likes / (likes + dislikes)) * 100 : 50;
					global_data.ryd_data.roundedlikepercentage = global_data.ryd_data.likepercentage.toPrecision(3);

					global_data.ryd_data.LikesFromRYD = likes.toLocaleString();
					global_data.ryd_data.DislikesFromRYD = dislikes.toLocaleString();
					global_data.ryd_data.formattedlikes = numberFormat(global_data.ryd_data.likeCount);
					global_data.ryd_data.formatteddislikes = numberFormat(global_data.ryd_data.dislikeCount);

					global_data.ryd_data.unformattedviews = viewCount;
					global_data.ryd_data.totalviews = global_data.ryd_data.unformattedviews.toLocaleString();

					// assign non existent keys
					global_data.yt.videoId = id;
					global_data.ryd_data.id = id;
					global_data.ryd_data.dateCreated = dateCreated;
					global_data.ryd_data.viewCount = viewCount;
					global_data.ryd_data.deleted = deleted;

					// inject the values into like and dislike text renderers
					document.querySelector("#like-count-renderer").innerText = global_data.ryd_data.formattedlikes;
					document.querySelector("#dislike-count-renderer").innerText = global_data.ryd_data.formatteddislikes;

					// inject the values into like and dislike text renderers (description page)
					document.querySelector("#total-like-counts-renderer").innerText = global_data.ryd_data.LikesFromRYD;
					document.querySelector("#total-dislike-counts-renderer").innerText = global_data.ryd_data.DislikesFromRYD;
					document.querySelector("#total-view-counts-renderer").innerText = global_data.ryd_data.totalviews;
				}
			})
		}
	);
}

function RefreshSomeYtdataInPage(id) {
	// safeguard check if the global_data.v value has a valid video id in it
	if (global_data.yt.videoId != "") {
		fetch(
			`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`
			).then((response) => {
				response.json().then((json) => {
					if (json && !("traceId" in response)) {
						// stuff originally returned in the json: { width, html, provider_name, type, url, author_name, provider_url, thumbnail_url, thumbnail_width, version, thumbnail_height, author_url, height, title }
						let { provider_name, type, url, author_name, author_url, title, provider_url, thumbnail_url, version } = json;
						console.log("Data provided by Noembed\nWebsite: https://www.noembed.com/\n\nVideo title: " + title + "\nUploaded by: " + author_name + "\nYouTube channel: " + author_url + "\nVideo link: " + url + "\nProvided by: " + provider_name + "\nNoembed version: " + version);
						DebugJS.console.log("info", "[debug.js] Data provided by Noembed\nWebsite: https://www.noembed.com/\n\nVideo title: " + title + "\nUploaded by: " + author_name + "\nYouTube channel: " + author_url + "\nVideo link: " + url + "\nProvided by: " + provider_name + "\nNoembed version: " + version);

						global_data.yt.videoTitle = title;
						global_data.yt.channelName = author_name;
						global_data.yt.channelIdLink = author_url;
						global_data.yt.channelSubConfirmLink = author_url + "?sub_confirmation=1";

						document.querySelector("#video.title").innerText = title;
						document.querySelector("#yt-channel-name-link").innerText = author_name;
						document.querySelector("#yt-channel-name-link").href = author_url; // can't get the raw channel id, so the url with modern handle will be used instead
						document.querySelector("#subscribe-text-link").href = author_url + "?sub_confirmation=1";
						document.querySelector("#subscribe-text-link").title = "Subscribe to " + author_name + " (" + provider_name + ")";

						// channel info at the description
						document.querySelector("#yt-channel-name-link-desc").href = global_data.yt.channelIdLink; // the link to the youtube channel
						document.querySelector("#yt-channel-name-link-desc").innerText = global_data.yt.channelName; // the name of the youtube channel
						document.querySelector("#video-title-desc").innerText = global_data.yt.videoTitle; // the video title
					}
				})
			}
		);
	} else {
		console.log("[error] video id is null, setting local fallback values...");

		global_data.yt.videoTitle = "Failed to get video title because there's no valid video id [" + http.status + "]";
		global_data.yt.channelName = "Failed to get channel name because there's no valid video id [" + http.status + "]";
		global_data.yt.channelIdLink = "https://jpa102.github.io/faketube/2023/undefined/";
		global_data.yt.channelSubConfirmLink = "https://jpa102.github.io/faketube/2023/undefined/?sub_confirmation=1";

		// watch page
		document.querySelector("#video.title").innerText = global_data.yt.videoTitle;
		document.querySelector("#yt-channel-name-link").innerText = global_data.yt.channelName;
		document.querySelector("#yt-channel-name-link").href = global_data.yt.channelIdLink; // can't get the raw channel id, so the url with modern handle will be used instead
		document.querySelector("#subscribe-text-link").href = global_data.yt.channelIdLink + "?sub_confirmation=1";
		document.querySelector("#subscribe-text-link").title = "Subscribe to " + global_data.yt.channelName + " (" + provider_name + ")";

		// channel info at the description
		document.querySelector("#yt-channel-name-link-desc").href = global_data.yt.channelIdLink; // the link to the youtube channel
		document.querySelector("#yt-channel-name-link-desc").innerText = global_data.yt.channelName; // the name of the youtube channel
		document.querySelector("#video-title-desc").innerText = global_data.yt.videoTitle; // the video title
	}
}

function RenderDebugLines() {
	if (document.querySelector("#render-debug-lines-css") == null) {
		document.head.insertAdjacentHTML(
			"beforeend",
			`
				<style id="render-debug-lines-css" type="text/css">
					/* render "debug" lines - css */

					:root {
						--debug-line-color: green;
					}

					* {
						border: 1px solid var(--debug-line-color);
					}
				</style>
			`
		);
		return;
	}
	
	if (document.querySelector("#render-debug-lines-css") != null) {
		document.querySelector("#render-debug-lines-css").remove();
		return;
	}
}

function AllInOneVideoReplacementOperations(inputvideoid) {
	ReplaceVideoWithVideoId(inputvideoid);
	RefreshRydDataWithVideoId(inputvideoid);
	RefreshSomeYtdataInPage(inputvideoid);
	FetchAdditionalVideoMetadata(inputvideoid);

	setTimeout(function() {
		ReplaceTextInHtmlTitleTag(global_data.yt.videoTitle + appendFakeTubeString);
	}, 1300);
}

function appendVideoIdToUrl() {
	if (window.confirm("Are you sure you want to append the Video ID to the URL?") == true) {
		console.log("Video ID \(" + ytVideoId + "\) has been appended to the URL, please remove it afterwards if you're going to refresh the page.");
		DebugJS.console.log("info", "[debug.js] Video ID \(" + ytVideoId + "\) has been appended to the URL, please remove it afterwards if you're going to refresh the page.");
		window.history.replaceState(null, '', "https://jpa102.github.io/faketube/2021/mobile/" + v);
	} else {
		return;
	}
}

function FetchAdditionalVideoMetadata(videoId) {
	metadataurl = "https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/" + videoId + ".json";
	nullmetadataurl = "https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/null.json";
	UrlExists(metadataurl);

	if (urldoesexists == true) {
		fetch(
			metadataurl
			).then((response) => {
				response.json().then((json) => {
					if (json) {
						let { shortdesc, fulldesc, uploaddateandtime, uploaddate, uploadtime, subcountintguess, commentCount, profilepicturelink, isYouTubeShort } = json;
						console.log("Data provided by jpa102 from GitHub\nLink to the repository: https://www.github.com/jpa102/jpa102.github.io/");
						
						ReceivedVideoMetadata = {
							collapseddescription: shortdesc,
							uncollapseddescription: fulldesc,
							dateandtimeuploaded: uploaddateandtime,
							dateuploaded: uploaddate,
							timeuploaded: uploadtime,
							subcountint: subcountintguess,
							commentCount: commentCount,
							ytOnlineProfilePicture: profilepicturelink,
							isYouTubeShorts: isYouTubeShort
						}
						console.log("\nShort description: " + ReceivedVideoMetadata.collapseddescription + "\nLong description: " + ReceivedVideoMetadata.uncollapseddescription + "\nDate and time uploaded: " + ReceivedVideoMetadata.dateandtimeuploaded + "\nDate uploaded: " + ReceivedVideoMetadata.dateuploaded + "\nTime uploaded: " + ReceivedVideoMetadata.timeuploaded + "\nSub counts with 0's: " + ReceivedVideoMetadata.subcountint + "\nComment count: " + ReceivedVideoMetadata.commentCount + "\nProfile picture link: " + ReceivedVideoMetadata.ytOnlineProfilePicture + "\nVideo is YouTube Shorts: " + ReceivedVideoMetadata.isYouTubeShorts);
						DebugJS.console.log("info", "[debug.js] \nShort description: " + ReceivedVideoMetadata.collapseddescription + "\nLong description: " + ReceivedVideoMetadata.uncollapseddescription + "\nDate and time uploaded: " + ReceivedVideoMetadata.dateandtimeuploaded + "\nDate uploaded: " + ReceivedVideoMetadata.dateuploaded + "\nTime uploaded: " + ReceivedVideoMetadata.timeuploaded + "\nSub counts with 0's: " + ReceivedVideoMetadata.subcountint + "\nComment count: " + ReceivedVideoMetadata.commentCount + "\nProfile picture link: " + ReceivedVideoMetadata.ytOnlineProfilePicture + "\nVideo is YouTube Shorts: " + ReceivedVideoMetadata.isYouTubeShorts);
						
						// apply the data to the description page
						//collapseddescription = shortdesc; // add data to collapsed description
						document.querySelector("#description-text").innerText = fulldesc;
						
						document.querySelector(".video-metadata-renderer").innerText = numberFormat(global_data.ryd_data.unformattedviews) + " views • " + ReceivedVideoMetadata.dateuploaded; // views and date

						// weird that this does not apply the profile picture and sub counts immediately, this is a delay to try mitigate that
						setTimeout(function() {
							document.querySelector("a.yt-channel-sub-count").innerText = numberFormat(ReceivedVideoMetadata.subcountint) + " subscribers"; // subscriber counts
							document.querySelector("#yt-channel-profile-picture").src = profilepicturelink; // profile picture
							document.querySelector("#yt-channel-profile-picture-desc").src = ReceivedVideoMetadata.ytOnlineProfilePicture; // at the description page
						}, 777);

						document.querySelector("#comment-counts").innerText = commentCount.toLocaleString();
					}
				})
			}
		);
	}

	if (urldoesexists == false) {
		fetch(
			nullmetadataurl
			).then((response) => {
				response.json().then((json) => {
					if (json) {
						let { shortdesc, fulldesc, uploaddateandtime, uploaddate, uploadtime, subcountintguess, commentCount, profilepicturelink, isYouTubeShort } = json;
						console.log("Data provided by jpa102 from GitHub\nLink to the repository: https://www.github.com/jpa102/jpa102.github.io/");
						
						ReceivedVideoMetadata = {
							collapseddescription: shortdesc,
							uncollapseddescription: fulldesc,
							dateandtimeuploaded: uploaddateandtime,
							dateuploaded: uploaddate,
							timeuploaded: uploadtime,
							subcountint: subcountintguess,
							commentCount: commentCount,
							ytOnlineProfilePicture: profilepicturelink,
							isYouTubeShorts: isYouTubeShort
						}
						console.log("\nShort description: " + ReceivedVideoMetadata.collapseddescription + "\nLong description: " + ReceivedVideoMetadata.uncollapseddescription + "\nDate and time uploaded: " + ReceivedVideoMetadata.dateandtimeuploaded + "\nDate uploaded: " + ReceivedVideoMetadata.dateuploaded + "\nTime uploaded: " + ReceivedVideoMetadata.timeuploaded + "\nSub counts with 0's: " + ReceivedVideoMetadata.subcountint + "\nComment count: " + ReceivedVideoMetadata.commentCount + "\nProfile picture link: " + ReceivedVideoMetadata.ytOnlineProfilePicture + "\nVideo is YouTube Shorts: " + ReceivedVideoMetadata.isYouTubeShorts);
						DebugJS.console.log("info", "[debug.js] \nShort description: " + ReceivedVideoMetadata.collapseddescription + "\nLong description: " + ReceivedVideoMetadata.uncollapseddescription + "\nDate and time uploaded: " + ReceivedVideoMetadata.dateandtimeuploaded + "\nDate uploaded: " + ReceivedVideoMetadata.dateuploaded + "\nTime uploaded: " + ReceivedVideoMetadata.timeuploaded + "\nSub counts with 0's: " + ReceivedVideoMetadata.subcountint + "\nComment count: " + ReceivedVideoMetadata.commentCount + "\nProfile picture link: " + ReceivedVideoMetadata.ytOnlineProfilePicture + "\nVideo is YouTube Shorts: " + ReceivedVideoMetadata.isYouTubeShorts);

						// apply the data to the page
						//collapseddescription = shortdesc; // add data to collapsed description
						document.querySelector("#description-text").innerText = fulldesc;
						
						document.querySelector(".video-metadata-renderer").innerText = numberFormat(global_data.ryd_data.unformattedviews) + " views • " + ReceivedVideoMetadata.dateuploaded; // views and date

						// weird that this does not apply the profile picture and sub counts immediately, this is a delay to try mitigate that
						setTimeout(function() {
							document.querySelector("a.yt-channel-sub-count").innerText = numberFormat(ReceivedVideoMetadata.subcountint) + " subscribers"; // subscriber counts
							document.querySelector("#yt-channel-profile-picture").src = profilepicturelink; // profile picture
							document.querySelector("#yt-channel-profile-picture-desc").src = ReceivedVideoMetadata.ytOnlineProfilePicture; // at the description page
						}, 777);

						document.querySelector("#comment-counts").innerText = commentCount.toLocaleString();
					}
				})
			}
		);
	}
}

function printLikePercentage() {
	console.log("Rounded like percentage: " + roundedlikepercentage + "%\nRaw like percentage: " + likepercentage);
}

function printAverageRating() {
	getAverageRating();
	console.log("Average rating: " + averageRating);
}

function randomYtVideoId() {
	StackOverflowSourceLink = "https://stackoverflow.com/questions/73276694/youtube-video-id-algorithm";

	let chars2replace = {'/': '-', '+': '_', '=': ''};
	let random_bytes = new Uint8Array(8).map(() => Math.floor(Math.random() * 256))
	let base64_hash = btoa(String.fromCharCode.apply(0, random_bytes));
	base64_hash = base64_hash.replace(/[/+=]/g, match => chars2replace[match]);
	return base64_hash;
}

// this is for the jsConsole.js file because some commands don't work properly in this console
class jsConsole {
	static ReplaceTextInHtmlTitleTag(inputtext) {
		var TitleTagLastTextContent = document.querySelector("title").innerText; // stores the last text content just in case
		document.querySelector("title").innerText = inputtext;
	}

	static ReplaceChannelProfilePicture(replacementpfplink) {
		ytOnlineProfilePicture = replacementpfplink;
		document.querySelector("#yt-channel-profile-picture").src = ytOnlineProfilePicture;
	}

	static ReplaceSubscriberCount(subcount) {
		ytSubscriberCount = subcount;
		document.querySelector("a.yt-channel-sub-count").innerText = ytSubscriberCount + " subscribers";
	}

	static ReplaceVideoWithVideoId(id) {
		replacementembedvideo = "https://www.youtube.com/embed/" + id;
		document.querySelector("iframe").src = replacementembedvideo;
	}

	static RefreshRydDataWithVideoId(id) {
		fetch(
			`https://returnyoutubedislikeapi.com/votes?videoId=${id}`
			).then((response) => {
				response.json().then((json) => {
					if (json && !("traceId" in response) && !statsSet) {
						let { dislikes, likes, viewCount, rating, id } = json;
						console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nAverage rating: " + rating);
						
						likeCount = likes;
						dislikeCount = dislikes;
						viewCount = viewCount;
						
						getAverageRating(); // using native function from operations.js
						getPercentage(); // using native function from operations.js
						
						totalviews = viewCount.toLocaleString();
						formattedlikes = numberFormat(likeCount);
						formatteddislikes = numberFormat(dislikeCount);
						document.querySelector("#video-metadata").innerText = totalviews + " views • " + uploaddate;
						document.querySelector("#like-count-renderer").innerText = formattedlikes;
						document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;

						document.querySelector(".tooltiptext").innerText = "Data provided by Return YouTube Dislike API";
					}
				})
			}
		);
		
		setTimeout(setRatioBar, 1250); // using native function from operations.js
	}

	static RefreshSomeYtdataInPage(id) {
		fetch(
			`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`
			).then((response) => {
				response.json().then((json) => {
					if (json && !("traceId" in response) && !statsSet) {
						let { title, author_name, author_url } = json;
						console.log("YouTube video title: " + title);
						console.log("Uploaded by: " + author_name);
						console.log("Channel url: " + author_url);

						ytVideoTitle = title;
						ytChannelName = author_name;
						ytHandle = author_url;
						ytVideoId = id;

						document.querySelector("#video.title").innerText = title;
						document.querySelector("#yt-channel-link").innerText = author_name;
						document.querySelector("#yt-channel-link").href = author_url; // can't get the raw channel id, so the url with modern handle will be used instead
						document.querySelector("a.yt-channel-sub-count").href = author_url + "?sub_confirmation=1";
						document.querySelector("a.yt-channel-sub-count").title = "Subscribe to " + author_name + " (YouTube)";
						
						likes = likeCount.toLocaleString();
						dislikes = dislikeCount.toLocaleString();
						
						setTimeout(function() {
							document.querySelector("#like-counts").innerText = likes;
							document.querySelector("#dislike-counts").innerText = dislikes;
							document.querySelector("#averageratings").innerText = roundedRating;
							document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
						}, 1234); // wait time to apply
					}
				})
			}
		);
	}
	
	static AllInOneVideoReplacementOperations(inputvideoid) {
		ReplaceVideoWithVideoId(inputvideoid);
		RefreshRydDataWithVideoId(inputvideoid);
		RefreshSomeYtdataInPage(inputvideoid);
		
		setTimeout(function() {
			ReplaceTextInHtmlTitleTag(ytVideoTitle + appendFakeTubeString);
		}, 800);
	}
}
