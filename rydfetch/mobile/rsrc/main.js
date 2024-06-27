/*
	internal config
*/
let waitTimeMs = 529; // in milliseconds, 1000 is 1 second
let ytId = ""; // blank value for placeholder
let lastVideoId = ""; // blank value for placeholder

// ==============================================================================

// some variables to save the last fetched data in order to not overload the noembed.com site from fetching the same data over and over again
// case scenario: when a user clicks the "show video embed?" for fun
let last_title;
let last_author_name;
let last_author_url;

function getSomeMetadataFromVideoId() {
	fetch(
		`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${ytId}`
		).then((response) => {
			response.json().then((json) => {
				if (json && !("traceId" in response)) {
					let { title, author_name, author_url } = json;
					console.log("YouTube video title: " + title);
					console.log("Uploaded by: " + author_name);
					
					document.querySelector("#title-text-container").innerText = "Title: " + title;
					document.querySelector("#uploaded-by").innerText = "Uploaded by: " + author_name;
					document.querySelector("#channel-url").innerText = "YT Channel: " + author_url;
					document.querySelector("#channel-url").href = author_url;
					
					if (document.querySelector("iframe#ryd-api-embedded-video") == null) {
						document.querySelector("#display-youtube-embed").insertAdjacentHTML(
							"beforeend",
							`
							<iframe id="ryd-api-embedded-video" src="https://youtube.com/embed/${ytId}"></iframe>
							`
						);
					} else {
						document.querySelector("iframe#ryd-api-embedded-video").remove();
						document.querySelector("#display-youtube-embed").insertAdjacentHTML(
							"beforeend",
							`
							<iframe id="ryd-api-embedded-video" src="https://youtube.com/embed/${ytId}"></iframe>
							`
						);
					}
					
					document.querySelector("#display-youtube-embed").hidden = false;
				}
			})
		}
	);
	document.querySelector("#show-yt-embed-video-with-some-metadata").hidden = true;
}

function Clear(){
	document.getElementById('display-results').style.display = 'none';
	document.querySelector("input").value = "";
	document.getElementById('avg').innerHTML = "";
	document.getElementById('round').innerHTML = "";
	document.getElementById('resultTitle').style.display = 'none';
	document.getElementById('roundp').style.display = 'none';
	document.getElementById("ratio-bar-renderer-container").style.display = 'none';
	
	document.querySelector("#like-count").style = "display: none;";
	document.querySelector("#dislike-count").style = "display: none;";
	document.querySelector("#view-count").style = "display: none;";
	document.querySelector("#precise-percentage").style = "display: block;";
	document.querySelector("#precise-rating").style = "display: block;";
	
	document.querySelector("#likeCount").innerHTML = "";
	document.querySelector("#dislikeCount").innerHTML = "";
	document.querySelector("#viewCount").innerHTML = "";
	document.querySelector("#likePercentage").innerHTML = "";
	document.querySelector("#averageRating").innerHTML = "";
	
	ytId = "";
	
	document.querySelector("#ldv-container").style = "display: none;";
	
	document.querySelector("#display-youtube-embed").hidden = true;
}


function minimizeEmbedWindow() {
	if (document.querySelector("#embed-minimize-button").ariaPressed == "false") {
		setTimeout(function() {
			document.querySelector("#title-text-container").hidden = true;
			document.querySelector("#uploaded-by").hidden = true;
			document.querySelector("#channel-url").hidden = true;
			document.querySelector("iframe#ryd-api-embedded-video").hidden = true;
			
			document.querySelector("#embed-minimize-button").ariaPressed = "true";
			document.querySelector("#embed-minimize-button").title = "Maximize this window";
		}, waitTimeMs);
	}
	
	if (document.querySelector("#embed-minimize-button").ariaPressed == "true") {
		setTimeout(function() {
			document.querySelector("#title-text-container").hidden = false;
			document.querySelector("#uploaded-by").hidden = false;
			document.querySelector("#channel-url").hidden = false;
			document.querySelector("iframe#ryd-api-embedded-video").hidden = false;
			
			document.querySelector("#embed-minimize-button").ariaPressed = "false";
			document.querySelector("#embed-minimize-button").title = "Minimize this window";
		}, waitTimeMs);
	}
}

function closeEmbedWindow() {
	document.querySelector("#display-youtube-embed").hidden = true;
	document.querySelector("iframe#ryd-api-embedded-video").remove();
	
	document.querySelector("#title-text-container").innerText = "";
	document.querySelector("#uploaded-by").innerText = "";
	document.querySelector("#channel-url").innerText = "";
	document.querySelector("#channel-url").href = "";
	
	document.querySelector("#show-yt-embed-video-with-some-metadata").hidden = false;
}
