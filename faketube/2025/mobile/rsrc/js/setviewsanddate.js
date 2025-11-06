


//	set views and date of the video published

setTimeout(function(){
	document.querySelector("#video-metadata.video-metadata-renderer").innerText = numberFormat(global_data.ryd_data.unformattedviews) + " views • " + global_data.uploaddate;

	// including the code in injecting the video title because why not? :D
	if (global_data.yt.videoId != "") {
		document.querySelector("#video.title").innerText = global_data.yt.videoTitle;
		document.querySelector("#video-title-desc").innerText = global_data.yt.videoTitle; // at the description page
	} else {
		// try to get the http status code from this call
		UrlExists("https://www.noembed.com/embed?url=https://www.youtube.com/watch?v=" + global_data.yt.videoId);
		console.log("[error] video id is null, setting local fallback values...");

		document.querySelector("#video.title").innerText = "Failed to get video title because there's no valid video id [" + http.status + "]";
		document.querySelector("#video-title-desc").innerText = "Failed to get channel name because there's no valid video id [" + http.status + "]";
	}

	// view counts at the description page
	document.querySelector("#total-view-counts-renderer").innerText = global_data.ryd_data.totalviews;
;
}, __faketube_stvwsndte);

