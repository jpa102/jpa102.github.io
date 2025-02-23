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

function showDescriptionButton() {
	if (document.querySelector("#description-button").ariaPressed == "false") {
		document.querySelector("#description-button").ariaPressed = "true";
		document.querySelector("#description").hidden = false;
		
		return;
	}
	
	if (document.querySelector("#description-button").ariaPressed == "true") {
		document.querySelector("#description-button").ariaPressed = "false";
		document.querySelector("#description").hidden = true;
		
		return;
	}
}

function moreButton() {
	console.log("function not implemented. [ln:60 buttonlistener.js]");
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
	document.querySelector("#total-like-percentage-renderer").innerText = roundedlikepercent;
	document.querySelector("#total-average-rating-renderer").innerText = roundedRating;
	
	document.querySelector("#total-raw-like-counts-renderer").innerText = ryd_likeCount.toLocaleString();
	document.querySelector("#total-raw-dislike-counts-renderer").innerText = ryd_dislikeCount.toLocaleString();
	raw_oneStar = ryd_dislikeCount * 1;
	raw_fiveStar = ryd_likeCount * 5;
	raw_totalVotes = (ryd_dislikeCount + ryd_likeCount);
	raw_totalStars = (raw_oneStar + raw_fiveStar);
	raw_averageRating = (raw_totalStars / raw_totalVotes);
	raw_roundedRating = raw_averageRating.toPrecision(3);
	rawlikepercentage = ryd_likeCount + ryd_dislikeCount > 0 ? (ryd_likeCount / (ryd_likeCount + ryd_dislikeCount)) * 100 : 50;
	rawroundedlikepercent = rawlikepercentage.toFixed(1);
	document.querySelector("#raw-like-percentage-renderer").innerText = rawroundedlikepercent;
	document.querySelector("#raw-average-rating-renderer").innerText = raw_roundedRating;
}, 1150);
