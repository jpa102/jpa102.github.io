// player.js - javascript file providing about info (and also injecting the HTML for video player)

verNum = 1.0;
buildNum = 2.21;
creatorName = "John Patrick Adem";
appendFakeTubeString = " - FakeTube embeds";

setTimeout(function(){
	document.querySelector("#video-player").insertAdjacentHTML(
		"afterbegin",
		`
			<iframe src="https://www.youtube.com/embed/${ytVideoId}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		`
	);
	
	document.querySelector("title").innerText = ytVideoTitle + appendFakeTubeString;
}, 680);

function ver() {
	// placing them here because the video player has to be loaded first
	videoWidth = document.querySelector("#video-container").clientWidth;
	videoHeight = document.querySelector("#video-container").clientHeight;
	
	console.log("About Basic HTML Player\n\n" + "version: " + verNum + "\nBuild: " + buildNum + "\nVideo player resolution: " + videoWidth + "x" + videoHeight);
}