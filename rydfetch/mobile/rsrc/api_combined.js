/*
	api_combined.js
	
	this contains a function that utilizes both apis from
	googleapis.com and returnyoutubedislikeapi.com
*/

function getCombinedVotes() {
	vibrate();

	if (noVideoId == true) {
		return;
	}
	
	// test the url first...
	UrlExists("https://returnyoutubedislikeapi.com/votes?videoId=" + altYtId);
	checkHttpStatusCode();
	
	// from Google APIs (YouTube)
	fetch(
		`https://www.googleapis.com/youtube/v3/videos?id=${altYtId}&key=${altAPIkey}&part=statistics`
		).then((response) => {
			response.json().then((json) => {
				if (json && ("error" in response)) {
					alert("Something went wrong, please try again.");
					return;
				}
				
				if (json && !("error" in response)) {
					var { kind, etag, items, pageInfo } = json;
					
					alt_rawJSONDataFromGoogleAPIs = JSON.stringify({ kind: kind, etag: etag, items: items, pageInfo: pageInfo });
					
					altReceivedData = items;
					altReceivedLikes = parseInt(altReceivedData[0].statistics.likeCount);
					altReceivedViews = parseInt(altReceivedData[0].statistics.viewCount);
					altReceivedComments = parseInt(altReceivedData[0].statistics.commentCount);
					altReceivedFavorites = parseInt(altReceivedData[0].statistics.favoriteCount);
					
					console.log("Data provided by Google APIs\nLink to the API: https://www.googleapis.com\n\nVideo ID: " + altYtId + "\nViews: " + altReceivedViews + "\nLike count: " + altReceivedLikes + "\nDislike count: null\nComment count: " + altReceivedComments + "\nFavorite count: " + altReceivedFavorites);
				}
			})
		}
	);
	
	// from Return YouTube Dislike API
	fetch(
		`https://returnyoutubedislikeapi.com/votes?videoId=${altYtId}`
		).then((response) => {
			response.json().then((json) => {
				if (json && !("traceId" in response)) {
					let { id, dateCreated, likes, dislikes, rawDislikes, rawLikes, rating, viewCount, deleted } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nAverage rating: " + rating + "\n\nJSON Data last created & updated: " + dateCreated + "\nDeleted: " + deleted);
					
					alt_rawJSONDataFromRYD = JSON.stringify({ id: id, dateCreated: dateCreated, likes: likes, rawDislikes: rawDislikes, rawLikes: rawLikes, dislikes: dislikes, rating: rating, viewCount: viewCount, deleted: deleted });
					
					// try to handle null values, it should be set to 0 at the very least
					if (rawLikes === null && rawDislikes === null) {
						altReceivedRawLikesFromRYD = 0;
						altReceivedRawDislikesFromRYD = 0;
						extensiondata_isnull = true;
					} else {
						altReceivedRawLikesFromRYD = rawLikes;
						altReceivedRawDislikesFromRYD = rawDislikes;
						extensiondata_isnull = false;
					}
					
					altReceivedRawLikesFromRYD = rawLikes;
					altReceivedLikesFromRYD = likes;
					altReceivedDislikesFromRYD = dislikes;
					altReceivedRawDislikesFromRYD = rawDislikes;
					altReceivedViewsFromRYD = viewCount;
					altReceivedAverageRatingFromRYD = rating;
				}
			})
		}
	);
	
	setTimeout(function(){
		alt_dislikes = altReceivedDislikesFromRYD * 1;
		alt_likes = altReceivedLikes * 5;
		
		alt_totalClicks = (altReceivedDislikesFromRYD + altReceivedLikes);
		alt_totalVotes = (alt_likes + alt_dislikes);
		averageRating = (alt_totalVotes / alt_totalClicks);
	  	
		alt_averageRating = averageRating.toPrecision(16);
	  	
		if (alt_averageRating.toString().split(".")[1] == 0)
			alt_averageRating = Number(alt_averageRating).toPrecision(1);
		
		alt_roundedRating = Number.parseFloat(alt_averageRating).toFixed(2);
		
		alt_stars = '&#9733;';
		document.getElementById('alt-display-results').style.display = 'block';
		document.querySelectorAll("#ratio-bar-renderer-container")[1].style = "display: block";
		document.getElementById('alt-avg').innerHTML = alt_roundedRating + " / 5";
		
		// for the ratio bar
		alt_percentage = altReceivedLikes + altReceivedDislikesFromRYD > 0 ? (altReceivedLikes / (altReceivedLikes + altReceivedDislikesFromRYD)) * 100 : 50;
		alt_likepercentage = alt_percentage.toPrecision(3);
		alt_dislikepercentage = 100 - alt_likepercentage;
		alt_roundedDislikePercentage = Number.parseFloat(alt_dislikepercentage).toFixed(1);
	  	
		for (var i = 0 ; i < (Math.round(alt_averageRating)) - 1; i++) {
			alt_stars = alt_stars + ' &#9733;';
		}
		
		document.getElementById("alt-round").innerHTML = alt_stars;
		document.querySelectorAll("#like-bar")[1].style = "width: " + alt_percentage + "%";
		
		// ignore this code block, it's irrelevant to the site's functionality
		try {
			document.querySelectorAll("#tooltip")[1].remove();
		} catch {
			console.log("attempting to remove the contents of the tooltip, but there's no data yet.\n\nPlease ignore this message, it's not critical.");
		}
		
		// handle the received raw likes & raw dislikes (ryd api - rating & percent)
		alt_rlc = altReceivedRawLikesFromRYD * 5; // raw like counts, multiplied by 5
		alt_rdc = altReceivedRawDislikesFromRYD * 1; // raw dislike counts, multiplied by 1
		
		alt_e_totalClicks = (altReceivedRawDislikesFromRYD + altReceivedRawLikesFromRYD);
		alt_e_totalVotes = (alt_rlc + alt_rdc);
		alt_e_averageRating = (alt_e_totalVotes / alt_e_totalClicks);
		alt_e_percentage = altReceivedRawLikesFromRYD + altReceivedRawDislikesFromRYD > 0 ? (altReceivedRawLikesFromRYD / (altReceivedRawLikesFromRYD + altReceivedRawDislikesFromRYD)) * 100 : 50;
		
		alt_formattedLikes = altReceivedLikes.toLocaleString();
		alt_formattedDislikes = altReceivedDislikesFromRYD.toLocaleString();
		alt_formattedViews = altReceivedViews.toLocaleString();
		alt_formattedComments = altReceivedComments.toLocaleString();
		alt_formattedFavorites = altReceivedFavorites.toLocaleString();
		alt_formattedRawLikes = altReceivedRawLikesFromRYD.toLocaleString();
		alt_formattedRawDislikes = altReceivedRawDislikesFromRYD.toLocaleString();
		document.querySelectorAll("tooltip-bar")[1].insertAdjacentHTML(
			"beforeend",
			`
			<div id="tooltip">
				<span class="tooltiptext">
					Likes: ${alt_likepercentage}% / Dislikes: ${alt_roundedDislikePercentage}%
				</span>
			</div>
			`
		);
		
		document.querySelector("#alt-likeCount").innerHTML = alt_formattedLikes;
		document.querySelector("#alt-dislikeCount").innerHTML = alt_formattedDislikes;
		document.querySelector("#alt-viewCount").innerHTML = alt_formattedViews;
		document.querySelector("#alt-likePercentage").innerHTML = alt_percentage;
		document.querySelector("#alt-averageRating").innerHTML = alt_averageRating;
		document.querySelector("#alt-commentCount").innerHTML = alt_formattedComments;
		document.querySelector("#alt-favoriteCount").innerHTML = alt_formattedFavorites;
		
		// if the raw extension likes & dislikes are null
		if (extensiondata_isnull === true) {
			document.querySelector("#alt-rawLikeCount").innerHTML = alt_formattedRawLikes + " (no data yet)";
			document.querySelector("#alt-rawDislikeCount").innerHTML = alt_formattedRawDislikes + " (no data yet)";
		} else {
			document.querySelector("#alt-rawLikeCount").innerHTML = alt_formattedRawLikes;
			document.querySelector("#alt-rawDislikeCount").innerHTML = alt_formattedRawDislikes;
		}
		
		document.querySelector("#alt-rawLikePercentage").innerHTML = alt_e_percentage;
		document.querySelector("#alt-rawAverageRating").innerHTML = alt_e_averageRating;
		document.querySelector("#alt-show-yt-embed-video-with-some-metadata").hidden = false;
	}, waitTimeMs);
}

function alt_copyRawJSONResponse() {
	if (document.querySelector("#json-data-sources-options").value == "googleapis") {
		navigator.clipboard.writeText(alt_rawJSONDataFromGoogleAPIs);
	}
	
	if (document.querySelector("#json-data-sources-options").value == "rydapi") {
		navigator.clipboard.writeText(alt_rawJSONDataFromRYD);
	}
	
	if (document.querySelector("#json-data-sources-options").value == "merged") {
		alert("this is being implemented at the moment, sorry...");
	}
}
