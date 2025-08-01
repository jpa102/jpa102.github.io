/*
	set the vote count fields (likes and dislikes)
*/

//	set the vote counts in the buttons
setTimeout(function(){
	// likes
	document.querySelector("#like-count-renderer").innerText = numberFormat(likeCount);
	
	// dislikes
	document.querySelector("#dislike-count-renderer").innerText = numberFormat(dislikeCount);
}, __faketube_stlkedlkecnts);

setTimeout(function() {
	document.querySelector("#like-button").ariaLabel="Like this video along with " + LikesFromRYD + " other people";
	document.querySelector("#dislike-button").ariaLabel="Dislike this video along with " + DislikesFromRYD + " other people";
}, __faketube_stvtecnts);
