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
	console.log("function not implemented. [ln:55 buttonlistener.js]");
}

function saveButton() {
	console.log("function not implemented. [ln:59 buttonlistener.js]");
}

function moreButton() {
	console.log("function not implemented. [ln:63 buttonlistener.js]");
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
