/*
	Exception handler file (exception.js)
	Where all possible exceptions are written here
*/

//	Check if the form is empty (when it was first started)

function checkFormContainer() {
	ytId = document.querySelector("#videoId").value;
	
	if (ytId == "") {
		alert("Please enter a Video ID.");
		noVideoId = true;
	} else {
		noVideoId = false;
		getVotes();
	}
	
	//	store the last Video ID entered by the user
	lastVideoId = ytId;
}



//	Check if the Video ID is the same as the one from lastVideoId variable (to prevent errors)

function checkVideoIdInput() {
	if (lastVideoId != ytId) {
		return;
	}

	if (lastVideoId == ytId) {
		alert("You are attempting to request data from the same Video ID, please check and try again.");
	}
}



//	Check the url http status code

function checkHttpStatusCode() {
	if (urlbadgetaway == true) {
		setTimeout(function() { alert("hmm, the RYD server seems to be down at the moment..."); }, 600);
		return;
	}
}
