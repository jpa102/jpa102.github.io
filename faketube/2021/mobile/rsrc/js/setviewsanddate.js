


//	set views and date of the video published

setTimeout(function(){
	document.querySelector("#video-metadata.video-metadata-renderer").innerText = numberFormat(global_data.ryd_data.unformattedviews) + " views • " + global_data.uploaddate;

	// including the code in injecting the video title because why not? :D
	document.querySelector("#video.title").innerText = global_data.yt.videoTitle;
;
}, __faketube_stvwsndte);
