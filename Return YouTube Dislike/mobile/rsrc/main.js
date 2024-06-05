/*
	internal config
*/
let waitTimeMs = 529; // in milliseconds, 1000 is 1 second
let ytId = ""; // blank value for placeholder
let lastVideoId = ""; // blank value for placeholder

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
					
					if (document.querySelector("iframe") == null) {
						document.querySelector("#display-youtube-embed").insertAdjacentHTML(
							"beforeend",
							`
							<iframe src="https://youtube.com/embed/${ytId}"></iframe>
							`
						);
					} else {
						document.querySelector("iframe").remove();
						document.querySelector("#display-youtube-embed").insertAdjacentHTML(
							"beforeend",
							`
							<iframe src="https://youtube.com/embed/${ytId}"></iframe>
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
