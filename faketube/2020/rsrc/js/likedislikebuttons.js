/*
	likedislikebuttons.js
	
	a module that checks if the like / dislike button is pressed
	when true, it will swap out the icons to the black colored one
*/

function likebuttonpressedcheck() {
	if (document.querySelector("#like-button").ariaPressed == "false") {
		addLikeCount();
		
		document.querySelector("#like-button > div > div > svg").remove();
		document.querySelector("#like-button > div > div").insertAdjacentHTML(
			"afterbegin",
			`
			<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="fill: #167ac6; pointer-events: none; display: block; width: 100%; height: 100%;">
				<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path>
			</svg>
			`
		);
		
		setRatioBar();
		
		document.querySelector("#like-button").ariaPressed = "true";
		document.querySelector("#like-button").title = "Unlike";
		document.querySelector("ratio-bar-renderer").title = likepercentage + "% / " + averageRating;
		document.querySelector(".tooltiptext").innerText = likepercentage + "% / " + averageRating;
		
		document.querySelector("#like-bar").style = "background: #167ac6; width: " + likepercentage + "%";
		document.querySelector("#like-count-renderer").style = "color: #167ac6";
		
		//	check to see if dislike button is already pressed before liking it
		if (document.querySelector("#dislike-button").ariaPressed == "true") {
			subtractDislikeCount();
			
			document.querySelector("#dislike-button > div > div > svg").remove();
			document.querySelector("#dislike-button > div > div").insertAdjacentHTML(
				"afterbegin",
				`
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="fill: #909090; pointer-events: none; display: block; width: 100%; height: 100%;">
					<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path>
				</svg>
				`
			);
			
			setRatioBar();
		
			document.querySelector("#dislike-button").ariaPressed = "false";
			document.querySelector("#dislike-button").title = "I dislike this";
			document.querySelector("ratio-bar-renderer").title = likepercentage + "% / " + averageRating;
			document.querySelector(".tooltiptext").innerText = likepercentage + "% / " + averageRating;

			document.querySelector("#dislike-count-renderer").style = "color: #909090";
			document.querySelector("#like-bar").style = "background: #167ac6; width: " + likepercentage + "%";
		}
		
		return;
	}
	
	if (document.querySelector("#like-button").ariaPressed == "true") {
		subtractLikeCount();
		
		document.querySelector("#like-button > div > div > svg").remove();
		document.querySelector("#like-button > div > div").insertAdjacentHTML(
			"afterbegin",
			`
			<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="fill: #909090; pointer-events: none; display: block; width: 100%; height: 100%;">
				<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path>
			</svg>
			`
		);
		
		setRatioBar();
		
		document.querySelector("#like-button").ariaPressed = "false";
		document.querySelector("#like-button").title = "I like this";
		document.querySelector("ratio-bar-renderer").title = likepercentage + "% / " + averageRating;
		document.querySelector(".tooltiptext").innerText = likepercentage + "% / " + averageRating;
		
		document.querySelector("#like-bar").style = "background: #909090; width: " + likepercentage + "%";
		document.querySelector("#like-count-renderer").style = "color: #909090";
		
		return;
	}
}

function dislikebuttonpressedcheck() {
	if (document.querySelector("#dislike-button").ariaPressed == "false") {
		addDislikeCount();
		
		document.querySelector("#dislike-button > div > div > svg").remove();
		document.querySelector("#dislike-button > div > div").insertAdjacentHTML(
			"afterbegin",
			`
			<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="fill: #000; pointer-events: none; display: block; width: 100%; height: 100%;">
				<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path>
			</svg>
			`
		);
		
		setRatioBar();
		
		document.querySelector("#dislike-button").ariaPressed = "true";
		document.querySelector("#dislike-button").title = "Remove dislike";
		document.querySelector("ratio-bar-renderer").title = likepercentage + "% / " + averageRating;
		document.querySelector(".tooltiptext").innerText = likepercentage + "% / " + averageRating;
		
		document.querySelector("#dislike-count-renderer").style = "color: #000";
		
		if (faketube.config_.EXPERIMENT_FLAGS.display_dislike_pressed_popup == true) {
			setTimeout(function() { alert("Feedback shared with the creator."); }, 1000);
		}
		
		//	check to see if like button is already pressed before disliking it
		if (document.querySelector("#like-button").ariaPressed == "true") {
			subtractLikeCount();
			
			document.querySelector("#like-button > div > div > svg").remove();
			document.querySelector("#like-button > div > div").insertAdjacentHTML(
				"afterbegin",
				`
				<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="fill: #909090; pointer-events: none; display: block; width: 100%; height: 100%;">
					<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path>
				</svg>
				`
			);
			
			setRatioBar();
			
			document.querySelector("#like-button").ariaPressed = "false";
			document.querySelector("#like-button").title = "I like this";
			document.querySelector("ratio-bar-renderer").title = likepercentage + "% / " + averageRating;
			document.querySelector(".tooltiptext").innerText = likepercentage + "% / " + averageRating;
			
			document.querySelector("#like-bar").style = "background: #909090; width: " + likepercentage + "%";
			document.querySelector("#like-count-renderer").style = "color: #909090";
		}
		
		return;
	}
	
	if (document.querySelector("#dislike-button").ariaPressed == "true") {
		subtractDislikeCount();
		
		document.querySelector("#dislike-button > div > div > svg").remove();
		document.querySelector("#dislike-button > div > div").insertAdjacentHTML(
			"afterbegin",
			`
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="fill: #909090; pointer-events: none; display: block; width: 100%; height: 100%;">
				<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path>
			</svg>
			`
		);
		
		setRatioBar();
		
		document.querySelector("#dislike-button").ariaPressed = "false";
		document.querySelector("#dislike-button").title = "I dislike this";
		document.querySelector("ratio-bar-renderer").title = likepercentage + "% / " + averageRating;
		document.querySelector(".tooltiptext").innerText = likepercentage + "% / " + averageRating;
		
		document.querySelector("#dislike-count-renderer").style = "color: #909090";
		
		return;
	}
}
