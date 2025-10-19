/*
	debug.js
	
	this file contains hidden functions that can be executed
	"native" console hotkeys: ctrl + shift + j
*/

function UrlExists(url) {
	var http = new XMLHttpRequest();
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
	setTimeout(function() { document.querySelector("title").innerText = inputtext; }, 1150);
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
				if (json && !("traceId" in response) && !statsSet) {
					let { id, dateCreated, likes, dislikes, rawLikes, rawDislikes, rating, viewCount, deleted } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes + "\nAverage rating: " + rating + "\n\nJSON Data - last created & updated: " + dateCreated + "\nDeleted: " + deleted);
					
					likeCount = likes;
					dislikeCount = dislikes;
					viewCount = viewCount;
					
					getAverageRating(); // using native function from operations.js
					getPercentage(); // using native function from operations.js
					
					totalviews = viewCount.toLocaleString();
					formattedlikes = numberFormat(likeCount);
					formatteddislikes = numberFormat(dislikeCount);
					document.querySelector("#video-metadata").innerText = totalviews + " views";
					document.querySelector("#like-count-renderer").innerText = likeCount.toLocaleString();
					document.querySelector("#dislike-count-renderer").innerText = dislikeCount.toLocaleString();
				}
			})
		}
	);
	
	setTimeout(setRatioBar, 1150); // using native function from operations.js
}

function RefreshSomeYtdataInPage(id) {
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
				}
			})
		}
	);
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
	ytVideoId = inputvideoid; // immediately store the value here
	
	ReplaceVideoWithVideoId(inputvideoid);
	RefreshRydDataWithVideoId(inputvideoid);
	RefreshSomeYtdataInPage(inputvideoid);
	FetchAdditionalVideoMetadata();
	
	setTimeout(function() {
		ReplaceTextInHtmlTitleTag(ytVideoTitle + appendFakeTubeString);
	}, 1400);
}

function appendVideoIdToUrl() {
	if (window.confirm("Are you sure you want to append the Video ID to the URL?") == true) {
		console.log("[SUCCESS] Video ID \(" + ytVideoId + "\) has been appended to the URL, please remove it afterwards if you're going to refresh the page.");
		window.history.replaceState(null, '', "https://jpa102.github.io/faketube/2017/" + v);
	} else {
		console.log("[INFO] you cancelled the operation to append the video id to the URL.");
		return;
	}
}

function unappendVideoIdToUrl() {
	console.log("[SUCCESS] Video ID \(" + ytVideoId + "\) has been removed from the URL.");
	window.history.replaceState(null, '', "https://jpa102.github.io/faketube/2017/");
}

function replaceUrlToYouTube() {
	if (window.confirm("Are you sure you want to replace the URL to YouTube?") == true) {
		console.log("[SUCCESS] Video ID \(" + ytVideoId + "\) has been appended to the new URL, refreshing the page will load YouTube instead.");
		window.history.replaceState(null, '', "https://www.youtube.com/watch?v=" + v);
	} else {
		console.log("[INFO] you cancelled the operation to replace the URL.");
		return;
	}
}

function undoReplaceUrlToYouTube() {
	console.log("[SUCCESS] URL has been reverted back to the original one");
	window.history.replaceState(null, '', "https://jpa102.github.io/faketube/2017/");
}

function FetchAdditionalVideoMetadata() {
	metadataurl = "https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/" + ytVideoId + ".json";
	nullmetadataurl = "https://raw.githubusercontent.com/jpa102/jpa102.github.io/main/faketube/metadata/null.json";
	UrlExists(metadataurl);
	
	if (urldoesexists == true) {
		fetch(
			metadataurl
			).then((response) => {
				response.json().then((json) => {
					if (json) {
						let { shortdesc, fulldesc, uploaddateandtime, uploaddate, uploadtime, subcountintguess, commentCount, profilepicturelink } = json;
						console.log("Data provided by jpa102 from GitHub\nLink to the repository: https://www.github.com/jpa102/jpa102.github.io/");
						
						ReceivedVideoMetadata = {
							collapseddescription: shortdesc,
							uncollapseddescription: fulldesc,
							dateandtimeuploaded: uploaddateandtime,
							dateuploaded: uploaddate,
							timeuploaded: uploadtime,
							subcountint: subcountintguess,
							commentCount: commentCount,
							ytOnlineProfilePicture: profilepicturelink
						}
						console.log(ReceivedVideoMetadata);
						
						// apply the data to the page
						collapseddescription = shortdesc; // add data to collapsed description
						uncollapseddescription = fulldesc; // add data to expanded description
						
						document.querySelector(".video-metadata-renderer").innerText = totalviews + " views"; // views
						document.querySelector("#date-published").innerText = uploaddate;
						document.querySelector("a.yt-channel-sub-count").innerText = numberFormat(subcountintguess) + " subscribers"; // subscriber counts
						document.querySelector("#yt-channel-profile-picture").src = profilepicturelink; // profile picture
						
						if (document.querySelector("#expand-description-button").ariaPressed == true) {
							descriptionButton(); // make the text inside the button show up as "Show more"
							document.querySelector("#description-text").innerText = shortdesc;
						} else {
							document.querySelector("#description-text").innerText = shortdesc;
						}
						
						document.querySelector("#comment-count-renderer").innerText = commentCount.toLocaleString();
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
						let { shortdesc, fulldesc, uploaddateandtime, uploaddate, uploadtime, subcountintguess, commentCount, profilepicturelink } = json;
						console.log("Data provided by jpa102 from GitHub\nLink to the repository: https://www.github.com/jpa102/jpa102.github.io/");
						
						ReceivedVideoMetadata = {
							collapseddescription: shortdesc,
							uncollapseddescription: fulldesc,
							dateandtimeuploaded: uploaddateandtime,
							dateuploaded: uploaddate,
							timeuploaded: uploadtime,
							subcountint: subcountintguess,
							commentCount: commentCount,
							ytOnlineProfilePicture: profilepicturelink
						}
						console.log(ReceivedVideoMetadata);
						
						// apply the data to the page
						collapseddescription = shortdesc; // add data to collapsed description
						uncollapseddescription = fulldesc; // add data to expanded description
						
						document.querySelector(".video-metadata-renderer").innerText = totalviews + " views"; // views
						document.querySelector("#date-published").innerText = uploaddate;
						document.querySelector("a.yt-channel-sub-count").innerText = numberFormat(subcountintguess) + " subscribers"; // subscriber counts
						document.querySelector("#yt-channel-profile-picture").src = profilepicturelink; // profile picture
						
						if (document.querySelector("#expand-description-button").ariaPressed == true) {
							descriptionButton(); // make the text inside the button show up as "Show more"
							document.querySelector("#description-text").innerText = shortdesc;
						} else {
							document.querySelector("#description-text").innerText = shortdesc;
						}
						
						document.querySelector("#comment-count-renderer").innerText = commentCount.toLocaleString();
					}
				})
			}
		);
	}
}

function printLikePercentage() {
	getPercentage();
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
						document.querySelector("#video-metadata").innerText = totalviews + " views";
						document.querySelector("#like-count-renderer").innerText = likeCount.toLocaleString();
						document.querySelector("#dislike-count-renderer").innerText = dislikeCount.toLocaleString();
					}
				})
			}
		);
		
		setTimeout(setRatioBar, 1150); // using native function from operations.js
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
		}, 1150);
	}
}
