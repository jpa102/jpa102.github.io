/*
	internal config
*/
let waitTimeMs = 529; // in milliseconds, 1000 is 1 second
let ytId = ""; // blank value for placeholder
let lastVideoId = ""; // blank value for placeholder
let vibratems = 69; // time to vibrate
let showRawJSONResponseInConsoleLog = false;

// ==============================================================================

// some variables to save the last fetched data in order to not overload the noembed.com site from fetching the same data over and over again
// case scenario: when a user clicks the "show video embed?" for fun
let last_title;
let last_author_name;
let last_author_url;

function UrlExists(url) {
	var http = new XMLHttpRequest();
	http.open('HEAD', url, false);
	http.send();
	if (http.status != 400) {
		badrequest = false;
	}
	
	if (http.status == 400) {
		badrequest = true;
	}
	
	if (http.status != 404) {
		urldoesexists = true;
	}
	
	if (http.status == 404) {
		urldoesexists = false;
	}
	
	if (http.status != 502) {
		urlbadgetaway = false;
	}
	
	if (http.status == 502) {
		urlbadgetaway = true;
	}
	
	if (http.status == 0) {
		nointernet = true;
	}
	
	if (http.status != 0) {
		nointernet = false;
	}
}

function getSomeMetadataFromVideoId() {
	vibrate();
	
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
						setTimeout(function() {
							document.querySelector("#display-youtube-embed").insertAdjacentHTML(
								"beforeend",
								`
									<iframe id="ryd-api-embedded-video" src="https://youtube.com/embed/${ytId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
								`
							);
						}, waitTimeMs);
					} else {
						setTimeout(function() {
							document.querySelector("iframe#ryd-api-embedded-video").remove();
							document.querySelector("#display-youtube-embed").insertAdjacentHTML(
								"beforeend",
								`
									<iframe id="ryd-api-embedded-video" src="https://youtube.com/embed/${ytId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
								`
							);
						}, waitTimeMs);
					}
					
					setTimeout(function() { document.querySelector("#display-youtube-embed").hidden = false; }, waitTimeMs);
				}
			})
		}
	);
	document.querySelector("#show-yt-embed-video-with-some-metadata").hidden = true;
}

function alt_getSomeMetadataFromVideoId() {
	vibrate();
	
	let ytId = document.querySelector("#video-id").value;
	fetch(
		`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${ytId}`
		).then((response) => {
			response.json().then((json) => {
				if (json) {
					let { title, author_name, author_url } = json;
					console.log("YouTube video title: " + title);
					console.log("Uploaded by: " + author_name);
					
					document.querySelector("#alt-title-text-container").innerText = "Title: " + title;
					document.querySelector("#alt-uploaded-by").innerText = "Uploaded by: " + author_name;
					document.querySelector("#alt-channel-url").innerText = "YT Channel: " + author_url;
					document.querySelector("#alt-channel-url").href = author_url;
					
					if (document.querySelector("iframe#alt-ryd-api-embedded-video") == null) {
						setTimeout(function() {
							document.querySelector("#alt-display-youtube-embed").insertAdjacentHTML(
								"beforeend",
								`
									<iframe id="alt-ryd-api-embedded-video" src="https://youtube.com/embed/${ytId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
								`
							);
						}, waitTimeMs);
					} else {
						setTimeout(function() {
							document.querySelectorAll("iframe#ryd-api-embedded-video")[1].remove();
							document.querySelector("#alt-display-youtube-embed").insertAdjacentHTML(
								"beforeend",
								`
									<iframe id="alt-ryd-api-embedded-video" src="https://youtube.com/embed/${ytId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
								`
							);
						}, waitTimeMs);
					}
					
					setTimeout(function() { document.querySelector("#alt-display-youtube-embed").hidden = false; }, waitTimeMs);
				}
			})
		}
	);
	document.querySelector("#alt-show-yt-embed-video-with-some-metadata").hidden = true;
}

function Clear(){
	vibrate();
	
	document.getElementById('display-results').style.display = 'none';
	document.querySelector("input").value = "";
	document.getElementById('avg').innerHTML = "";
	document.getElementById('round').innerHTML = "";
	document.getElementById('resultTitle').style.display = 'none';
	document.getElementById('roundp').style.display = 'none';
	document.getElementById("ratio-bar-renderer-container").style.display = 'none';
	
	document.querySelector("#like-count").style = "";
	document.querySelector("#dislike-count").style = "";
	document.querySelector("#view-count").style = "";
	document.querySelector("#precise-percentage").style = "";
	document.querySelector("#precise-rating").style = "";
	document.querySelector("#raw-like-count").style = "";
	document.querySelector("#raw-dislike-count").style = "";
	document.querySelector("#raw-precise-percentage").style = "";
	document.querySelector("#raw-precise-rating").style = "";
	
	document.querySelector("#likeCount").innerHTML = "";
	document.querySelector("#dislikeCount").innerHTML = "";
	document.querySelector("#viewCount").innerHTML = "";
	document.querySelector("#likePercentage").innerHTML = "";
	document.querySelector("#averageRating").innerHTML = "";
	document.querySelector("#rawLikeCount").innerHTML = "";
	document.querySelector("#rawDislikeCount").innerHTML = "";
	document.querySelector("#rawLikePercentage").innerHTML = "";
	document.querySelector("#rawAverageRating").innerHTML = "";

	
	ytId = "";
	
	document.querySelector("#ldv-container").style = "display: none;";
	
	document.querySelector("#display-youtube-embed").hidden = true;
}

function ClearAlt() {
	vibrate();
	
	document.getElementById('alt-display-results').style.display = 'none';
	document.querySelector("#video-id").value = "";
	document.querySelector("#google-api-key").value = "";
	document.getElementById('alt-avg').innerHTML = "";
	document.getElementById('alt-round').innerHTML = "";
	
	altYtId = "";
	
	document.querySelector("#ldv-container").style = "display: none;";
	
	document.querySelector("#alt-display-youtube-embed").hidden = true;
}

function minimizeEmbedWindow() {
	vibrate();
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

function alt_minimizeEmbedWindow() {
	vibrate();
	if (document.querySelectorAll("#embed-minimize-button")[1].ariaPressed == "false") {
		setTimeout(function() {
			document.querySelector("#alt-title-text-container").hidden = true;
			document.querySelector("#alt-uploaded-by").hidden = true;
			document.querySelector("#alt-channel-url").hidden = true;
			document.querySelector("iframe#alt-ryd-api-embedded-video").hidden = true;
			
			document.querySelectorAll("#embed-minimize-button")[1].ariaPressed = "true";
			document.querySelectorAll("#embed-minimize-button")[1].title = "Maximize this window";
		}, waitTimeMs);
	}
	
	if (document.querySelectorAll("#embed-minimize-button")[1].ariaPressed == "true") {
		setTimeout(function() {
			document.querySelector("#alt-title-text-container").hidden = false;
			document.querySelector("#alt-uploaded-by").hidden = false;
			document.querySelector("#alt-channel-url").hidden = false;
			document.querySelector("iframe#alt-ryd-api-embedded-video").hidden = false;
			
			document.querySelectorAll("#embed-minimize-button")[1].ariaPressed = "false";
			document.querySelectorAll("#embed-minimize-button")[1].title = "Minimize this window";
		}, waitTimeMs);
	}
}

function closeEmbedWindow() {
	vibrate();
	document.querySelector("#display-youtube-embed").hidden = true;
	document.querySelector("iframe#ryd-api-embedded-video").remove();
	
	document.querySelector("#title-text-container").innerText = "";
	document.querySelector("#uploaded-by").innerText = "";
	document.querySelector("#channel-url").innerText = "";
	document.querySelector("#channel-url").href = "";
	
	document.querySelector("#show-yt-embed-video-with-some-metadata").hidden = false;
}

function alt_closeEmbedWindow() {
	vibrate();
	document.querySelector("#alt-display-youtube-embed").hidden = true;
	document.querySelector("iframe#alt-ryd-api-embedded-video").remove();
	
	document.querySelector("#alt-title-text-container").innerText = "";
	document.querySelector("#alt-uploaded-by").innerText = "";
	document.querySelector("#alt-channel-url").innerText = "";
	document.querySelector("#alt-channel-url").href = "";
	
	document.querySelector("#alt-show-yt-embed-video-with-some-metadata").hidden = false;
}

function vibrate() {
	navigator.vibrate(vibratems);
}



/*
	initialize the selectors (tapping anywhere should automatically close the sidebar)
*/
if (closeSidebarTrial === true) {
	setTimeout(function() {
		document.querySelectorAll(".body-container")[0].addEventListener("click", closeNav);
		document.querySelectorAll(".body-container")[1].addEventListener("click", closeNav);
		document.querySelectorAll(".body-container")[2].addEventListener("click", closeNav);
		document.querySelectorAll(".body-container")[3].addEventListener("click", closeNav);
		document.querySelectorAll(".body-container")[4].addEventListener("click", closeNav);
		document.querySelectorAll(".body-container")[5].addEventListener("click", closeNav);
	}, 2500);
}

/*
	automatically set the theme (system light or dark mode)
	source: https://stackoverflow.com/a/60971231
*/
// Check to see if Media-Queries are supported
if (window.matchMedia) {
	// Check if the dark-mode Media-Query matches
	if(window.matchMedia('(prefers-color-scheme: dark)').matches){
		darkModeOption();
		
		// set the dark theme option to "selected"
		setTimeout(function() {
			if (document.querySelector("#light-mode-option").classList != "") {
				document.querySelector("#light-mode-option").classList.remove("selected");
			}
			if (document.querySelector("#dark-mode-option").classList == "") {
				document.querySelector("#dark-mode-option").classList.add("selected");
			}
		}, 1550);
	} else {
		// Light
	}
} else {
	// Default (when Media-Queries are not supported)
}
