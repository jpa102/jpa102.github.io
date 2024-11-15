/*
	api.js
	
	this contains a function that utilizes an
	api from returnyoutubedislikeapi.com
*/

function getVotes(){
	vibrate();

	if (noVideoId == true) {
		return;
	}
	
	// test the url first...
	UrlExists("https://returnyoutubedislikeapi.com/votes?videoId=" + ytId);
	checkHttpStatusCode();
	
	fetch(
		`https://returnyoutubedislikeapi.com/votes?videoId=${ytId}`
		).then((response) => {
			response.json().then((json) => {
				if (json && !("traceId" in response)) {
					let { id, dateCreated, likes, dislikes, rawLikes, rawDislikes, rating, viewCount, deleted } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes + "\nAverage rating: " + rating + "\n\nJSON Data - last created & updated: " + dateCreated + "\nDeleted: " + deleted);
					
					main_rawJSONDataFromRYD = JSON.stringify({ id: id, dateCreated: dateCreated, likes: likes, rawDislikes: rawDislikes, rawLikes: rawLikes, dislikes: dislikes, rating: rating, viewCount: viewCount, deleted: deleted });
					
					receivedLikes = likes;
					receivedDislikes = dislikes;
					receivedViews = viewCount;
					receivedAverageRating = rating;
					
					// try to handle null values, it should be set to 0 at the very least
					if (rawLikes === null && rawDislikes === null) {
						extensionLikes = 0;
						extensionDislikes = 0;
						extensiondata_isnull = true;
					} else {
						extensionLikes = rawLikes;
						extensionDislikes = rawDislikes;
						extensiondata_isnull = false;
					}
				}
			})
		}
	);
	
	setTimeout(function(){
		likeCount = receivedLikes;
		dislikeCount = receivedDislikes;
		viewCount = receivedViews;
		
		rawLikeCount = extensionLikes;
		rawDislikeCount = extensionDislikes;
		
		rlc = rawLikeCount * 5; // raw like counts, multiplied by 5
		rdc = rawDislikeCount * 1; // raw dislike counts, multiplied by 1
		
		e_totalClicks = (rawDislikeCount + rawLikeCount);
		e_totalVotes = (rlc + rdc);
		e_averageRating = (e_totalVotes / e_totalClicks);
		e_percentage = rawLikeCount + rawDislikeCount > 0 ? (rawLikeCount / (rawLikeCount + rawDislikeCount)) * 100 : 50;

		dislikes = dislikeCount * 1;
		likes = likeCount * 5;

		totalClicks = (dislikeCount + likeCount);
		totalVotes = (likes + dislikes);
		averageRating = (totalVotes / totalClicks);
	  
		averageRating = averageRating.toPrecision(16);
	  
		if (averageRating.toString().split(".")[1] == 0)
			averageRating = Number(averageRating).toPrecision(1);
		
		roundedRating = Number.parseFloat(averageRating).toFixed(2);

		stars = '&#9733;';
		document.getElementById('display-results').style.display = 'block';
		document.getElementById('resultTitle').style.display = 'block';
		document.getElementById('roundp').style.display = 'block';
		document.getElementById("ratio-bar-renderer-container").style.display = 'block';
		document.getElementById('avg').innerHTML = roundedRating + " / 5";

		// for the ratio bar
		percentage = likeCount + dislikeCount > 0 ? (likeCount / (likeCount + dislikeCount)) * 100 : 50;
		likepercentage = percentage.toPrecision(3);
		dislikepercentage = 100 - likepercentage;
		roundedDislikePercentage = Number.parseFloat(dislikepercentage).toFixed(1);
	  
		for (var i = 0 ; i < (Math.round(averageRating)) - 1; i++) {
			stars = stars + ' &#9733;';
		}
		
		document.getElementById('round').innerHTML = stars;
		document.querySelector("#like-bar").style = "width: " + percentage + "%";
		
		// ignore this code block, it's irrelevant to the site's functionality
		try {
			document.querySelectorAll("#tooltip")[0].remove();
		} catch {
			console.log("attempting to remove the contents of the tooltip, but there's no data yet.\n\nPlease ignore this message, it's not critical.");
		}
		
		formattedLikes = likeCount.toLocaleString();
		formattedDislikes = dislikeCount.toLocaleString();
		formattedViews = viewCount.toLocaleString();
		
		formattedRawLikeCount = rawLikeCount.toLocaleString();
		formattedRawDislikeCount = rawDislikeCount.toLocaleString();
		
		document.querySelectorAll("tooltip-bar")[0].insertAdjacentHTML(
			"beforeend",
			`
			<div id="tooltip">
				<span class="tooltiptext">
					Likes: ${likepercentage}% / Dislikes: ${roundedDislikePercentage}%
				</span>
			</div>
			`
		);
		
		document.querySelector("#ldv-container").style = "display: block;";
		
		document.querySelector("#likeCount").innerHTML = formattedLikes;
		document.querySelector("#dislikeCount").innerHTML = formattedDislikes;
		document.querySelector("#viewCount").innerHTML = formattedViews;
		document.querySelector("#likePercentage").innerHTML = percentage;
		document.querySelector("#averageRating").innerHTML = averageRating;
		
		// if the raw extension likes & dislikes are null
		if (extensiondata_isnull === true) {
			document.querySelector("#rawLikeCount").innerHTML = formattedRawLikeCount + " (no data yet)";
			document.querySelector("#rawDislikeCount").innerHTML = formattedRawDislikeCount + " (no data yet)";
		} else {
			document.querySelector("#rawLikeCount").innerHTML = formattedRawLikeCount;
			document.querySelector("#rawDislikeCount").innerHTML = formattedRawDislikeCount;
		}
		
		document.querySelector("#rawLikePercentage").innerHTML = e_percentage;
		document.querySelector("#rawAverageRating").innerHTML = e_averageRating;
		
		document.querySelector("#like-count").style = "display: block;";
		document.querySelector("#dislike-count").style = "display: block;";
		document.querySelector("#view-count").style = "display: block;";
		document.querySelector("#precise-percentage").style = "display: block;";
		document.querySelector("#precise-rating").style = "display: block;";
		document.querySelector("#raw-like-count").style = "display: block;";
		document.querySelector("#raw-dislike-count").style = "display: block;";
		document.querySelector("#raw-precise-percentage").style = "display: block;";
		document.querySelector("#raw-precise-rating").style = "display: block;";
		
		document.querySelector("#show-yt-embed-video-with-some-metadata").hidden = false;
	}, waitTimeMs);
}

function copyRawJSONResponseFromRYD() {
	navigator.clipboard.writeText(main_rawJSONDataFromRYD);
}
