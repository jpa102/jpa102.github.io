/*
	debug.js
	
*/

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
					let { dislikes, likes, viewCount, rating, id } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nAverage rating: " + rating);
					
					likeCount = likes;
					dislikeCount = dislikes;
					viewCount = viewCount;
					
					totalviews = viewCount.toLocaleString();
					formattedlikes = numberFormat(likeCount);
					formatteddislikes = numberFormat(dislikeCount);
					document.querySelector("#video-metadata").innerText = totalviews + " views • " + uploaddate;
					document.querySelector("#like-count-renderer").innerText = formattedlikes;
					document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
				}
			})
		}
	);
	
	setTimeout(setRatioBar, 1250); // using native function
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
					getPercentage(); // call the function from operations.js
					getAverageRating(); // call the function from operations.js
					
					document.querySelector("#like-counts").innerText = likes;
					document.querySelector("#dislike-counts").innerText = dislikes;
					document.querySelector("#averageratings").innerText = roundedRating;
					document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
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
	ReplaceVideoWithVideoId(inputvideoid);
	RefreshRydDataWithVideoId(inputvideoid);
	RefreshSomeYtdataInPage(inputvideoid);
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
			background-color: white;
			border: 1px solid white;
		}
		
		#dislike-button {
			background-color: white;
			border: 1px solid white;
		}
		
		.menu-buttons {
			background-color: white;
			border: 1px solid white;
		}
		
		#more-button {
			border: 1px solid white;
		}
		
		#button-border {
			background: rgba(0,0,0,0.0);
		}
	</style>
	`
	
	document.head.insertAdjacentHTML("beforeend", buttonsStyle);
}

function readdBackgroundInButtons() {
	document.querySelector("#removing-background-in-buttons").remove();
}

// this is for the jsConsole.js file because some commands don't work properly in this console
class jsConsole {
	static ReplaceTextInHtmlTitleTag(inputtext) {
		var TitleTagLastTextContent = document.querySelector("title").innerText; // stores the last text content just in case
		document.querySelector("title").innerText = inputtext;
		log("New title: " + inputtext);
	}
	
	static ReplaceChannelProfilePicture(replacementpfplink) {
		
	}
	
	static ReplaceSubscriberCount(subcount) {
		
	}
	
	static ReplaceVideoWithVideoId(id) {
		
	}
	
	static RefreshRydDataWithVideoId(id) {
		
	}
	
	static RefreshSomeYtdataInPage(id) {
		
	}
	
	static AllInOneVideoReplacementOperations(inputvideoid) {
		
	}
}
