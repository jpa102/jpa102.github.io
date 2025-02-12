/*
	==========================================================
			Like and Dislike buttons
	==========================================================
*/
function likeButton() {
	likebuttonpressedcheck();
}

function dislikeButton() {
	dislikebuttonpressedcheck();
}



/*
	==========================================================
				Other buttons
	==========================================================
*/
function shareButton() {
	console.log("function not implemented. [ln:22 buttonlistener.js]");
}

function downloadButton() {
	setTimeout(function() {
		if (faketube.config_.EXPERIMENT_FLAGS.web_old_menu_buttons == true) {
			document.querySelector("#download").style = "display: none !important"; // if the experimental flag for 2021 buttons is set to true
		} else {
			document.querySelector("#download-button").style = "display: none !important"; // default menu buttons
		}
	}, 200);
	setTimeout(function() {
		alert("Download unavailable");
	}, 900);
	console.log("sorry, no video download available.\n\nin fact, there's not even a single line of code here that provides download functionality. \(just kidding, set \"third_party_downloader_test\" variable to true\) [ln:36 buttonlistener.js]");

}

function saveButton() {
	console.log("function not implemented. [ln:40 buttonlistener.js]");
}

function moreButton() {
	console.log("function not implemented. [ln:44 buttonlistener.js]");
}



//	set the vote counts in the buttons
setTimeout(function(){
	// likes
	document.querySelector("#like-count-renderer").innerText = formattedlikes;
	document.querySelector("#like-button").ariaLabel = "Like this video along with " + likeCount.toLocaleString() + " other people";
	
	// dislikes
	document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
	document.querySelector("#dislike-button").ariaLabel = "Dislike this video along with " + dislikeCount.toLocaleString() + " other people";
	
	// set the likes, dislikes, like percentage, and average rating in the top part of the description
	document.querySelector("#total-like-counts-renderer").innerText = likeCount.toLocaleString();
	document.querySelector("#total-dislike-counts-renderer").innerText = dislikeCount.toLocaleString();
	document.querySelector("#total-like-percentage-renderer").innerText = likepercentage + "%";
	document.querySelector("#total-average-rating-renderer").innerText = averageRating;
}, 1150);
