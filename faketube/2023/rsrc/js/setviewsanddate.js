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
}, 900);
