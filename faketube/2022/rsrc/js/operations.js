/*
	operations.js
	
	this module contains code that makes the page interactive
*/

function getAverageRating() {
	oneStar = dislikeCount * 1;
	fiveStar = likeCount * 5;
	totalVotes = (dislikeCount + likeCount);
	totalStars = (oneStar + fiveStar);
	averageRating = (totalStars / totalVotes);
	roundedRating = averageRating.toPrecision(3);
}

function getPercentage() {
	likepercentage = likeCount + dislikeCount > 0 ? (likeCount / (likeCount + dislikeCount)) * 100 : 50;
	roundedlikepercent = likepercentage.toFixed(1);
}

/*
	LIKE AND DISLIKE BUTTONS
*/

function addLikeCount() {
	likeCount++;
	
	getAverageRating();
	getPercentage();
	
	likes = likeCount.toLocaleString();
	formattedlikes = numberFormat(likeCount);
	document.querySelector("#like-count-renderer").innerText = formattedlikes;
	
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
	
	document.querySelector("#like-counts").innerText = likes;
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
	
}

function subtractLikeCount() {
	likeCount--;
	
	getAverageRating();
	getPercentage();
	
	likes = likeCount.toLocaleString();
	formattedlikes = numberFormat(likeCount);
	document.querySelector("#like-count-renderer").innerText = formattedlikes;
	
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
	
	document.querySelector("#like-counts").innerText = likes;
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
}

function addDislikeCount() {
	dislikeCount++;
	
	getAverageRating();
	getPercentage();
	
	dislikes = dislikeCount.toLocaleString();
	formatteddislikes = numberFormat(dislikeCount);
	document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
	
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
	
	document.querySelector("#dislike-counts").innerText = dislikes;
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
}

function subtractDislikeCount() {
	dislikeCount--;
	
	getAverageRating();
	getPercentage();
	
	dislikes = dislikeCount.toLocaleString();
	formatteddislikes = numberFormat(dislikeCount);
	document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;
	
	document.querySelector("#like-bar.like-dislike-info-renderer").style = "width: " + likepercentage + "%";
	
	document.querySelector("#dislike-counts").innerText = dislikes;
	
	document.querySelector("#averageratings").innerText = roundedRating;
	document.querySelector("#rounded-percentage").innerText = "(" + roundedlikepercent + "%)";
}



/*
	[begin] format the like and dislike counts
*/

//	vote count settings
const extConfig = {
	numberDisplayFormat: "compactShort", // [compactShort*, compactLong, standard] Number format (For non-English locale users, you may be able to improve appearance with a different option. Please file a feature request if your locale is not covered)
	numberDisplayRoundDown: false, // [true*, false] Round down numbers (Show rounded down numbers)
}

function roundDown(num) {
	if (num < 1000) return num;
	const int = Math.floor(Math.log10(num) - 2);
	const decimal = int + (int % 3 ? 1 : 0);
	const value = Math.floor(num / 10 ** decimal);
	return value * 10 ** decimal;
}

function getNumberFormatter(optionSelect) {
	let userLocales;
	if (document.documentElement.lang) {
		userLocales = document.documentElement.lang;
	} else if (navigator.language) {
		userLocales = navigator.language;
	} else {
		try {
			userLocales = new URL(
				Array.from(document.querySelectorAll("head > link[rel='search']"))
				?.find((n) => n?.getAttribute("href")?.includes("?locale="))
				?.getAttribute("href"),
			)?.searchParams?.get("locale");
		} catch {
			console.log(
				"Cannot find browser locale. Use en as default for number formatting.",
			);
			userLocales = "en";
		}
	}
	
	let formatterNotation;
	let formatterCompactDisplay;
	switch (optionSelect) {
		case "compactLong":
			formatterNotation = "compact";
			formatterCompactDisplay = "long";
			break;
		case "standard":
			formatterNotation = "standard";
			formatterCompactDisplay = "short";
			break;
		case "compactShort":
		default:
			formatterNotation = "compact";
			formatterCompactDisplay = "short";
	}
	
	const formatter = Intl.NumberFormat(userLocales, {
		notation: formatterNotation,
		compactDisplay: formatterCompactDisplay,
	});
	return formatter;
}

function numberFormat(numberState) {
	let numberDisplay;
	if (extConfig.numberDisplayRoundDown === false) {
		numberDisplay = numberState;
	} else {
		numberDisplay = roundDown(numberState);
	}
	return getNumberFormatter(extConfig.numberDisplayFormat).format(
		numberDisplay,
	);
}

/*
	[end] format the like and dislike counts
*/



/*
	faketube's EXPERIMENT FLAGS functions
*/

// make the page display a popup whenever the dislike button is pressed (likedislikebutton.js - dislikebuttonpressedcheck() function)

// make the page editable
if (faketube.config_.web_page_editable == true) {
	document.designMode = "on";
}

//	revert the buttons to version 7
if (faketube.config_.EXPERIMENT_FLAGS.web_old_menu_buttons == true) {
	setTimeout(function() {
		document.head.insertAdjacentHTML(
			"beforeend",
			`
			<style id="web-old-menu-buttons-css">
				#menu {
					text-align: right !important;
					margin-top: -56px !important;
					padding: 12px 0px 9px 0px !important;
				}

				.menu-buttons-actions {
					display: flex !important;
					justify-content: center !important;
					flex-direction: row !important;
					align-items: center !important;
				}

				.menu-buttons {
					padding: 5px 5px !important;
					border: 1px solid rgb(0 0 0 / 0%) !important;
					border-radius: 20px !important;
					margin-left: 12px !important;
					background: none !important;
					transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
				}

				.menu-buttons:hover {
					cursor: pointer !important;
				}

				.menu-buttons:active {
					border: 1px solid rgb(0 0 0 / 0%) !important;
					background-color: rgba(0,0,0,0.2) !important;
					transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
				}

				.menu-buttons-text {
					font-size: 14px !important;
					text-transform: capitalize !important;
					color: #000 !important;
					font-family: "Roboto","Arial",sans-serif !important;
					font-weight: bold !important;
				}

				#like-dislike-buttons-container {
					display: flex !important;
					flex-direction: row !important;
				}

				.like-dislike-buttons {
					padding: 0px 8px 0px 0px !important;
					display: flex !important;
					justify-content: center !important;
					flex-direction: row !important;
					align-items: center !important;
				}

				#like-button {
					background: none !important;
					border: 1px solid rgb(0 0 0 / 0%) !important;
					border-radius: 20px !important;
					padding: 5px 5px !important;
					transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
				}

				#like-button:hover {
					cursor: pointer !important;
				}

				#like-button:active {
					border: 1px solid gray !important;
					background-color: lightgray !important;
				}

				#like-dislike-buttons-border {
					margin: 0px 3.5px !important;
				}

				#dislike-button {
					background: none !important;
					border: 1px solid rgb(0 0 0 / 0%) !important;
					border-radius: 20px !important;
					padding: 5px 5px !important;
					transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
				}

				#dislike-button:hover {
					cursor: pointer !important;
				}

				#dislike-button:active {
					border: 1px solid gray !important;
					background-color: lightgray !important;
				}
				
				.button-text-style {
					margin-right: 0px !important;
				}
				
				#sentiment.like-dislike-info-renderer {
					margin-top: 37px !important;
				}
			</style>
			`
		);
		
		document.querySelector("#menu").remove();
		document.querySelector("#video-title-and-date-published").insertAdjacentHTML(
			"beforeend",
			`
			<div id="menu">
				<div id="all-buttons-container">
					<div id="like-dislike-buttons-container">
						<div id="like" class="like-dislike-buttons" onclick="likeButton()">
							<button id="like-button" aria-pressed="false" title="I like this">
								<div id="likebutton-icon" class="button-text-style" aria-hidden="true">
									<yt-icon class="undefined" style="">
										<!--css-build:shady-->
										<!--css-build:shady-->
										<yt-icon-shape class="style-scope yt-icon">
											<icon-shape class="yt-spec-icon-shape">
												<div style="width: 100%; height: 100%; fill: currentcolor;">
													<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
														<path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
													</svg>
												</div>
											</icon-shape>
										</yt-icon-shape>
									</yt-icon>
								</div>
							</button>
							<span id="like-count-renderer" class="menu-buttons-text"></span>
						</div>
						<div id="like-dislike-buttons-border"></div>
						<div id="dislike" class="like-dislike-buttons" onclick="dislikeButton()">
							<button id="dislike-button" aria-pressed="false" title="I dislike this">
								<div id="dislikebutton-icon" class="button-text-style" aria-hidden="true">
									<yt-icon class="undefined" style="">
										<!--css-build:shady-->
										<!--css-build:shady-->
										<div class="style-scope yt-icon">
											<icon-shape class="yt-spec-icon-shape">
												<div style="width: 100%; height: 100%; fill: currentcolor;">
													<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
														<path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
													</svg>
												</div>
											</icon-shape>
										</div>
									</yt-icon>
								</div>
							</button>
							<span id="dislike-count-renderer" class="menu-buttons-text"></span>
						</div>
						<ratio-bar-renderer id="sentiment" class="like-dislike-info-renderer" hidden="">
							<div id="container" class="like-dislike-info-renderer">
								<div id="like-bar" class="like-dislike-info-renderer">
								</div>
							</div>
							<tooltip-bar fit-to-visible-bounds="" class="like-dislike-info-renderer" role="tooltip">
								<div id="tooltip">
									<span class="tooltiptext">
										Place your vote counts here
									</span>
								</div>
							</tooltip-bar>
						</ratio-bar-renderer>
					</div>
					<div id="share" class="menu-buttons-actions" onclick="shareButton()">
						<button id="share-button" class="menu-buttons menu-buttons-text" title="Share this video">
							<div id="sharebutton-icon">
								<yt-icon class="undefined" style="width: 24px; height: 24px;">
									<yt-icon-shape class="style-scope yt-icon">
										<icon-shape class="yt-spec-icon-shape">
											<div style="width: 100%; height: 100%; fill: currentcolor;">
												<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
													<path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
												</svg>
											</div>
										</icon-shape>
									</yt-icon-shape>
								</yt-icon>
							</div>
						</button>
						<span id="share-text-renderer" class="menu-buttons-text">share</span>
					</div>
					<div id="save" class="menu-buttons-actions" onclick="saveButton()">
						<button id="save-button" class="menu-buttons menu-buttons-text" title="Save this video">
							<div id="savebutton-icon">
								<yt-icon class="undefined style-scope ytd-menu-renderer" style="width: 24px; height: 24px;">
									<yt-icon-shape class="style-scope yt-icon">
										<icon-shape class="yt-spec-icon-shape">
											<div style="width: 100%; height: 100%; fill: currentcolor;">
												<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
													<path d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"></path>
												</svg>
											</div>
										</icon-shape>
									</yt-icon-shape>
								</yt-icon>
							</div>
						</button>
						<span id="save-text-renderer" class="menu-buttons-text">save</span>
					</div>
					<button id="more-button" class="menu-buttons menu-buttons-text" onclick="moreButton()" title="More actions">
						<div id="morebutton-icon">
							<yt-icon style="width: 24px; height: 24px;">
								<yt-icon-shape class="style-scope yt-icon">
									<icon-shape class="yt-spec-icon-shape">
										<div style="width: 100%; height: 100%; fill: currentcolor;">
											<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
												<path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
											</svg>
										</div>
									</icon-shape>
								</yt-icon-shape>
							</yt-icon>
						</div>
					</button>
				</div>
			</div>
			`
		);
		document.querySelector("ratio-bar-renderer").hidden = false;
		
		if (document.querySelector("#like-count-renderer").innerText == "") document.querySelector("#like-count-renderer").innerText = formattedlikes;
		if (document.querySelector("#dislike-count-renderer").innerText == "") document.querySelector("#dislike-count-renderer").innerText = formatteddislikes;

		document.querySelector("ratio-bar-renderer").style = "width: " + barwidth + "px";
	}, 20);
}
