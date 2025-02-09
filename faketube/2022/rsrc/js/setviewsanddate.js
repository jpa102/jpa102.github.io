/*

	set views and date of the video published

*/

setTimeout(function(){
	document.querySelector("#failed-to-load-views-and-date").style = "display: none";
	document.querySelector("#video-views-and-date").insertAdjacentHTML(

		"beforeend",

		`

		<p id="video-metadata" class="video-metadata-renderer">

			${totalviews} views • ${uploaddate}

		</p>
		`
	);

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
