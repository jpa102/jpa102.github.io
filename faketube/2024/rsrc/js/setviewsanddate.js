/*

	set views and date of the video published

*/

setTimeout(function(){
	document.querySelector("#total-view-counts-renderer").innerText = totalviews;
	document.querySelector("#date-uploaded-renderer").innerText = uploaddate;

	// including the code in replacing the video title because why not? :D
	
	document.querySelector("#video-title-failed.video-title-failed-to-load").style = "display: none";
	document.querySelector("#video-title-and-date-published").insertAdjacentHTML(
		"afterbegin",
		`
		<h1 id="video" class="title">

			${ytVideoTitle}

		</h1>
		`
	);
	
	document.querySelector("#video-view-counts-and-date").innerHTML = "<span id=\"formatted-view-counts\">" + numberFormat(totalviewsint) + " views</span><span id=\"nbsp-separator\">&nbsp;&nbsp;&nbsp;</span><span id=\"formatted-upload-date\">" + uploaddate + "</span>";
}, 900);
