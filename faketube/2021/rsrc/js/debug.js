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
					document.querySelector("#averageratings").innerText = averageRating;
					document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
				}
			})
		}
	);
}

// todo: add an option to render lines with css in javascript
function RenderDebugLines() {}

function AllInOneVideoReplacementOperations(inputvideoid) {
	ReplaceVideoWithVideoId(inputvideoid);
	RefreshRydDataWithVideoId(inputvideoid);
	RefreshSomeYtdataInPage(inputvideoid);
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
