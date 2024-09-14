/*
	set the vote count fields (likes and dislikes)
*/

setTimeout(function(){
	document.querySelector("#failed-to-load-vote-counts").remove();
	document.querySelector("#video-vote-counts").insertAdjacentHTML(
		"afterbegin",
		`
		<p class="vote-count">Likes: <span id="like-counts"></span> / Dislikes: <span id="dislike-counts"></span></p>
		<div id="video-average-rating">Rating: <span id="averageratings"></span> / 5 <span id="rounded-percentage"></span></div>
		`
	);
	
	document.querySelector("#like-counts").innerText = likeCount.toLocaleString();
	document.querySelector("#dislike-counts").innerText = dislikeCount.toLocaleString();
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
}, 500); // waiting for 0.5 seconds...
