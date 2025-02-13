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

function downloadButton() {
	setTimeout(function() {
		document.querySelector("#download").style = "display: none !important";
	}, 200);
	setTimeout(function() {
		alert("Download unavailable");
	}, 900);
	console.log("sorry, no video download available.\nin fact, there's not even a single line of code here that provides download functionality.  [ln:36 buttonlistener.js]");

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
}, 1150);
