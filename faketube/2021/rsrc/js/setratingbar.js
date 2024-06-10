/*
	Set the ratio bar's width
*/

setTimeout(function(){
	// ratio bar
	document.querySelector("#like-bar").style = "width: " + likepercentage + "%";
	
	// ratio bar's tooltip
	document.querySelector("tooltip-bar").insertAdjacentHTML(
		"beforeend",
		`
		<div id="tooltip" class="hidden tooltip-box" style-target="tooltip">
			<span class="tooltiptext">

				Data provided by Return YouTube Dislike API

			</span>
		</div>
		`
	);
}, 1000); // waiting for 1 second...
