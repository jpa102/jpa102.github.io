/*

	set views and date of the video published

*/



setTimeout(function(){
	document.querySelector("#video-metadata.video-metadata-renderer").innerText = numberFormat(unformattedviews) + " views • " + uploaddate;

	// including the code in injecting the video title because why not? :D
	document.querySelector("#video.title").innerText = ytVideoTitle;
;
}, __faketube_stvwsndte);
