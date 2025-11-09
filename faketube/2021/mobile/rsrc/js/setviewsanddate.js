


//	set views and date of the video published

setTimeout(function(){
	document.querySelector("#video-metadata.video-metadata-renderer").innerText = numberFormat(global_data.ryd_data.unformattedviews) + " views • " + global_data.uploaddate;

	// including the code in injecting the video title because why not? :D
	document.querySelector("#video.title").innerText = global_data.yt.videoTitle;
	document.querySelector("#video-title-desc").innerText = global_data.yt.videoTitle; // at the description page

	// view counts at the description page
	document.querySelector("#total-view-counts-renderer").innerText = global_data.ryd_data.totalviews;
;
}, __faketube_stvwsndte);
