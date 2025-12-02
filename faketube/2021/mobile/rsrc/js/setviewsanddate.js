


//	set views and date of the video published

setTimeout(function(){
	document.querySelector("#video-metadata.video-metadata-renderer").innerText = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.shortViewCount.simpleText + " • " + ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.relativeDateText.simpleText;

	// including the code in injecting the video title because why not? :D
	document.querySelector("#video.title").innerText = global_data.yt.videoTitle;
	document.querySelector("#video-title-desc").innerText = global_data.yt.videoTitle; // at the description page

	// including the code in injecting the description text because why not? :D
	document.querySelector("#description-text").innerText = ytInitialPlayerResponse.videoDetails.shortDescription;

	// view counts at the description page
	document.querySelector("#total-view-counts-renderer").innerText = global_data.yt.viewCount.toLocaleString();

	document.querySelector("#upload-date-renderer").innerText = global_data.yt.uploadYear;
	document.querySelector("#upload-date-title").innerText = global_data.yt.uploadMonthDay;
}, __faketube_stvwsndte);
