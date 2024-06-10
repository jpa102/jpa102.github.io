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
	// likes
	document.querySelector("#like-count-renderer").innerText = formattedlikes;
	
	// dislikes
	document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
	
	setRatioBar();
	
	document.querySelector("ratio-bar-renderer").hidden = false;
}, 1250);
