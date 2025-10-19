/*
	navigation.js
	
	this handles the sidebar
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
