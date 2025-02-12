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
				if (json && !("traceId" in response) && !statsSet) {
					let { dislikes, likes, rawLikes, rawDislikes, viewCount, rating, id } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nAverage rating: " + rating + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes);
					
					likeCount = likes;
					dislikeCount = dislikes;
					viewCount = viewCount;
					ryd_likeCount = rawLikes;
					ryd_dislikeCount = rawDislikes;
					
					getAverageRating(); // using native function from operations.js
					getPercentage(); // using native function from operations.js
					
					totalviews = viewCount.toLocaleString();
					formattedlikes = numberFormat(likeCount);
					formatteddislikes = numberFormat(dislikeCount);
					document.querySelector("#video-metadata").innerText = totalviews + " views • " + ReceivedVideoMetadata.dateuploaded;
					document.querySelector("#like-count-renderer").innerText = formattedlikes;
					document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
					document.querySelector("#like-counts").innerText = likeCount.toLocaleString();
					document.querySelector("#dislike-counts").innerText = dislikeCount.toLocaleString();
					document.querySelector("#averageratings").innerText = roundedRating;
					document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
					
					document.querySelector(".tooltiptext").innerText = "Data provided by Return YouTube Dislike API";
					document.querySelector("ratio-bar-renderer").title = likepercentage + " / " + averageRating;
				}
			})
		}
	);
	
	setTimeout(setRatioBar, 1250); // using native function from operations.js
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
					document.querySelector("#subscribe-text-renderer").href = author_url + "?sub_confirmation=1";
					document.querySelector("#subscribe-text-renderer").title = "Subscribe to " + author_name + " (YouTube)";
					
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
	}, 800);
}

function appendVideoIdToUrl() {
	if (window.confirm("Are you sure you want to append the Video ID to the URL?") == true) {
		console.log("Video ID \(" + ytVideoId + "\) has been appended to the URL, please remove it afterwards if you're going to refresh the page.");
		window.history.replaceState(null, '', "https://jpa102.github.io/faketube/2022/" + v);
	} else {
		return;
	}
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
						console.log(ReceivedVideoMetadata);
						
						// apply the data to the page
						collapseddescription = shortdesc; // add data to collapsed description
						uncollapseddescription = fulldesc; // add data to expanded description
						
						document.querySelector(".video-metadata-renderer").innerText = totalviews + " views • " + uploaddate; // views and date
						document.querySelector("#date-uploaded-renderer").innerText = uploaddate;
						document.querySelector(".yt-channel-sub-count").innerText = numberFormat(subcountintguess) + " subscribers"; // subscriber counts
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
						
						document.querySelector(".video-metadata-renderer").innerText = totalviews + " views • " + uploaddate; // views and date
						document.querySelector("#date-uploaded-renderer").innerText = uploaddate;
						document.querySelector(".yt-channel-sub-count").innerText = numberFormat(subcountintguess) + " subscribers"; // subscriber counts
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

function printAverageRating() {
	console.log("Rounded like percentage: " + roundedlikepercentage + "%\nRaw like percentage: " + likepercentage);
}

function printLikePercentage() {
	getAverageRating();
	console.log("Average rating: " + averageRating);
}

function removeBackgroundInButtons() {
	let buttonsStyle = `
	<style id="removing-background-in-buttons">
		#like-button {
			background-color: transparent;
			border: 1px solid transparent;
		}
		
		#dislike-button {
			background-color: transparent;
			border: 1px solid transparent;
		}
		
		.menu-buttons {
			background-color: transparent;
			border: 1px solid transparent;
		}
		
		#more-button {
			border: 1px solid transparent;
		}
	</style>
	`
	
	document.head.insertAdjacentHTML("beforeend", buttonsStyle);
}

function readdBackgroundInButtons() {
	document.querySelector("#removing-background-in-buttons").remove();
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
