/*
	==========================================================
			Navigation buttons (top)
	==========================================================
*/
// currently a todo because this is a dry run



/*
	==========================================================
			Navigation buttons (bottom)
	==========================================================
*/
function homeButton() {
	if (document.querySelector("#home-button").ariaPressed == "false") {
		HomeTabButton(true);
		ExploreOrShortsTabButton(false);
		SubscriptionsTabButton(false);
		LibraryOrYouTabButton(false);
	}
}

function exploreOrShortsButton() {
	if (document.querySelector("#explore-and-shorts-button").ariaPressed == "false") {
		HomeTabButton(false);
		ExploreOrShortsTabButton(true);
		SubscriptionsTabButton(false);
		LibraryOrYouTabButton(false);
	}
}

function subscriptionsButton() {
	if (document.querySelector("#subscriptions-button").ariaPressed == "false") {
		HomeTabButton(false);
		ExploreOrShortsTabButton(false);
		SubscriptionsTabButton(true);
		LibraryOrYouTabButton(false);
	}
}

function libraryButton() {
	if (document.querySelector("#library-or-you-tab-button").ariaPressed == "false") {
		HomeTabButton(false);
		ExploreOrShortsTabButton(false);
		SubscriptionsTabButton(false);
		LibraryOrYouTabButton(true);
	}
}



//	initialize the buttons
setTimeout(function() {
	document.querySelector("#home-button").addEventListener("click", homeButton);
	document.querySelector("#explore-and-shorts-button").addEventListener("click", exploreOrShortsButton);
	document.querySelector("#subscriptions-button").addEventListener("click", subscriptionsButton);
	document.querySelector("#library-or-you-tab-button").addEventListener("click", libraryButton);
}, 100);
