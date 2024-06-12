/*
	operations.js
	
	this module contains code that makes the page interactive
*/

function setRatioBar() {
	barwidth = document.querySelector("#like-dislike-buttons-container").clientWidth - 1;
	document.querySelector("#sentiment.like-dislike-info-renderer").style = "width: " + barwidth + "px";
}

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
