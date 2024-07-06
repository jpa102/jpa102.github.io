/*
	navigation.js
	
	this handles the sidebar "links"
*/

/*
	sidebar source: https://www.w3schools.com/howto/howto_js_sidenav.asp
*/
function openNav() {
	document.getElementById("mySidenav").style.width = "286px";
	vibrate();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	vibrate();
}

function gotoHomePage() {
	vibrate();
	if (document.querySelector("#main-home-page").hidden == false) {
		console.log("You are already in the home page.");
		closeNav();
	} else {
		document.querySelector("#main-home-page").hidden = false;
		document.querySelector("#return-youtube-dislike-api-page").hidden = true;
		document.querySelector("#combined-apis-page").hidden = true;
		document.querySelector("#ryd-tutorial-page").hidden = true;
		document.querySelector("#ryd-changelog-page").hidden = true;
		document.querySelector("#about-screen-page").hidden = true;
		closeNav();
	}
}

function gotoMainFrontend() {
	vibrate();
	if (document.querySelector("#return-youtube-dislike-api-page").hidden == false) {
		console.log("You are already in the main frontend page.");
		closeNav();
	} else {
		document.querySelector("#main-home-page").hidden = true;
		document.querySelector("#return-youtube-dislike-api-page").hidden = false;
		document.querySelector("#combined-apis-page").hidden = true;
		document.querySelector("#ryd-tutorial-page").hidden = true;
		document.querySelector("#ryd-changelog-page").hidden = true;
		document.querySelector("#about-screen-page").hidden = true;
		closeNav();
	}
}

function gotoAlternateFrontend() {
	vibrate();
	if (document.querySelector("#combined-apis-page").hidden == false) {
		console.log("You are already in the alternate frontend page.");
		closeNav();
	} else {
		document.querySelector("#main-home-page").hidden = true;
		document.querySelector("#return-youtube-dislike-api-page").hidden = true;
		document.querySelector("#combined-apis-page").hidden = false;
		document.querySelector("#ryd-tutorial-page").hidden = true;
		document.querySelector("#ryd-changelog-page").hidden = true;
		document.querySelector("#about-screen-page").hidden = true;
		closeNav();
	}
}

function gotoTutorialPage() {
	vibrate();
	if (document.querySelector("#ryd-tutorial-page").hidden == false) {
		console.log("You are already in the tutorial page.");
		closeNav();
	} else {
		document.querySelector("#main-home-page").hidden = true;
		document.querySelector("#return-youtube-dislike-api-page").hidden = true;
		document.querySelector("#combined-apis-page").hidden = true;
		document.querySelector("#ryd-tutorial-page").hidden = false;
		document.querySelector("#ryd-changelog-page").hidden = true;
		document.querySelector("#about-screen-page").hidden = true;
		closeNav();
	}
}

function gotoChangelogPage() {
	vibrate();
	if (document.querySelector("#ryd-changelog-page").hidden == false) {
		console.log("You are already in the changelog page.");
		closeNav();
	} else {
		document.querySelector("#main-home-page").hidden = true;
		document.querySelector("#return-youtube-dislike-api-page").hidden = true;
		document.querySelector("#combined-apis-page").hidden = true;
		document.querySelector("#ryd-tutorial-page").hidden = true;
		document.querySelector("#ryd-changelog-page").hidden = false;
		document.querySelector("#about-screen-page").hidden = true;
		closeNav();
	}
}

function gotoAboutPage() {
	vibrate();
	if (document.querySelector("#about-screen-page").hidden == false) {
		console.log("You are already in the about page.");
		closeNav();
	} else {
		document.querySelector("#main-home-page").hidden = true;
		document.querySelector("#return-youtube-dislike-api-page").hidden = true;
		document.querySelector("#combined-apis-page").hidden = true;
		document.querySelector("#ryd-tutorial-page").hidden = true;
		document.querySelector("#ryd-changelog-page").hidden = true;
		document.querySelector("#about-screen-page").hidden = false;
		closeNav();
	}
}
