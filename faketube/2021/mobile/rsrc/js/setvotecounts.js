/*
	set the vote count fields (likes and dislikes)
*/



//	set the vote counts in the buttons
setTimeout(function(){
	// likes
	document.querySelector("#like-count-renderer").innerText = numberFormat(global_data.yt.likeCount);
	
	// dislikes
	document.querySelector("#dislike-count-renderer").innerText = numberFormat(global_data.ryd_data.dislikeCount);
}, __faketube_stlkedlkecnts);

setTimeout(function() {
	document.querySelector("#like-button").ariaLabel="Like this video along with " + global_data.yt.likeCount.toLocaleString() + " other people";
	document.querySelector("#dislike-button").ariaLabel="Dislike this video along with " + global_data.ryd_data.DislikesFromRYD + " other people";

	// inject the values into like and dislike text renderers (description page)
	document.querySelector("#total-like-counts-renderer").innerText = global_data.yt.likeCount.toLocaleString();
	document.querySelector("#total-dislike-counts-renderer").innerText = global_data.ryd_data.DislikesFromRYD;
}, __faketube_stvtecnts);
