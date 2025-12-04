//	player.js - javascript file providing about info (and also injecting the src link for video player iframe)

var player = {
	verNum: 2.0,
	buildNum: 2.41,
	creatorName: "John Patrick Adem",
	fakeAndroidClientVer: "17.03.38"
}
var appendFakeTubeString = " - FakeTube embeds";
var lastYPos = window.scrollY;

setTimeout(function(){
	document.querySelector("#yt-video-player").src = "https://www.youtube.com/embed/" + global_data.v;
	document.querySelector("title").innerText = global_data.yt.videoTitle + appendFakeTubeString;
}, __faketube_injtplyr);

function ver() {
	// placing them here because the video player has to be loaded first
	let videoWidth = document.querySelector("#yt-video-player").clientWidth;
	let videoHeight = document.querySelector("#yt-video-player").clientHeight;

	console.log("About Basic HTML Player\n\n" + "version: " + player.verNum + "\nBuild: " + player.buildNum + "\nAndroid client version style: " + player.fakeAndroidClientVer + "\n\nVideo player resolution: " + videoWidth + "x" + videoHeight);
}
