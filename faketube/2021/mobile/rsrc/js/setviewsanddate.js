


//	set views and date of the video published

setTimeout(function(){
	document.querySelector("#video-metadata.video-metadata-renderer").innerText = global_data.yt.viewCountFormatted + " • " + global_data.yt.uploadedYearsAgo;

	// including the code in injecting the video title because why not? :D
	document.querySelector("#video.title").innerText = global_data.yt.videoTitle;
	document.querySelector("#video-title-desc").innerText = global_data.yt.videoTitle; // at the description page

	// including the code in injecting the description text because why not? :D
	document.querySelector("#description-text").innerText = global_data.yt.descriptionText;

	// view counts at the description page
	document.querySelector("#total-view-counts-renderer").innerText = global_data.yt.viewCount.toLocaleString();

	document.querySelector("#upload-date-renderer").innerText = global_data.yt.uploadMonthDay;
	document.querySelector("#upload-date-title").innerText = global_data.yt.uploadYear;
}, __faketube_stvwsndte);
