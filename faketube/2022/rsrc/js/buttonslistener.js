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

//	get the width of like and dislike buttons for the ratio bar
function setRatioBar() {
	barwidth = document.querySelector("#like-dislike-buttons-container").clientWidth - 1;
	
	document.querySelector("#sentiment.like-dislike-info-renderer").style = "width: " + barwidth + "px";
	
	likepercentage = likeCount + dislikeCount > 0 ? (likeCount / (likeCount + dislikeCount)) * 100 : 50;
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
}



/*
	==========================================================
						Other buttons
	==========================================================
*/
function shareButton() {
	console.log("function not implemented. [ln:32 buttonlistener.js]");
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
	console.log("sorry, no video download available.\nin fact, there's not even a single line of code here that provides download functionality.  [ln:36 buttonlistener.js]");

}

function saveButton() {
	console.log("function not implemented. [ln:40 buttonlistener.js]");
}

function moreButton() {
	console.log("function not implemented. [ln:44 buttonlistener.js]");
}



//	set the vote counts in the buttons
setTimeout(function(){
	// like
	document.querySelector("#like-count-renderer").innerText = formattedlikes;
	
	// dislike
	document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
	
	// system tooltip for the ratio bar (average rating and percentage)
	document.querySelector("ratio-bar-renderer").title = likepercentage + "% / " + averageRating;
	document.querySelector(".tooltiptext").innerText = "Data provided by Return YouTube Dislike API";
	
	setRatioBar();
}, 200);
