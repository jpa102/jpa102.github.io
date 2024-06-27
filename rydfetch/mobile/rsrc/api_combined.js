/*
	api_combined.js
	
	this contains a function that utilizes both apis from
	googleapis.com and returnyoutubedislikeapi.com
	
	this is the first time that i'm including my own api key from googleapis
	to make this work and possible for all
	
	NOTE: if you even think about getting this api key, good luck.
*/

let googleapisYouTubeKey = "AIzaSyAmTDTyFvTg8jnCUxdpRuc-SvoxBhnvDTs"; // i can revoke this key anytime i want to

function getCombinedVotes() {
	if (document.querySelector("#videoIdAlt").value == "") {
		noVideoId = true;
		return;
	}
	
	ytId = document.querySelector("#videoIdAlt").value;
	
	// from Return YouTube Dislike API
	fetch(
		`https://returnyoutubedislikeapi.com/votes?videoId=${ytId}`
		).then((response) => {
			response.json().then((json) => {
				if (json && !("traceId" in response)) {
					let { id, dateCreated, likes, dislikes, rating, viewCount, deleted } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nAverage rating: " + rating + "\n\nJSON Data last created & updated: " + dateCreated + "\nDeleted: " + deleted);
					
					altReceivedLikes = likes;
					altReceivedDislikes = dislikes;
					altReceivedViews = viewCount;
					altReceivedAverageRating = rating;
				}
			})
		}
	);
	
	setTimeout(function(){
		likeCount = altReceivedLikes;
		dislikeCount = altReceivedDislikes;
		viewCount = altReceivedViews;

		dislikes = dislikeCount * 1;
		likes = likeCount * 5;

		totalClicks = (dislikeCount + likeCount);
		totalVotes = (likes + dislikes);
		averageRating = (totalVotes / totalClicks);
	  
		averageRating = averageRating.toPrecision(16);
	  
		if(averageRating.toString().split(".")[1]==0)
			averageRating = Number(averageRating).toPrecision(1);
		
		roundedRating = Number.parseFloat(averageRating).toFixed(2);

		stars = '&#9733;';
		document.getElementById('display-results').style.display = 'block';
		document.getElementById('resultTitle').style.display = 'block';
		document.getElementById('roundp').style.display = 'block';
		document.getElementById("ratio-bar-renderer-container").style.display = 'block';
		document.getElementById('avg').innerHTML = roundedRating;

		// for the ratio bar
		percentage = likeCount + dislikeCount > 0 ? (likeCount / (likeCount + dislikeCount)) * 100 : 50;
		likepercentage = percentage.toPrecision(3);
		dislikepercentage = 100 - likepercentage;
		roundedDislikePercentage = Number.parseFloat(dislikepercentage).toFixed(1);
	  
		for(var i = 0 ;i<(Math.round(averageRating))-1;i++)
		{
			stars=stars+' &#9733;';
		}
		document.getElementById('round').innerHTML = stars;
		document.querySelector("#like-bar").style = "width: " + percentage + "%";
		
		// ignore this code block, it's irrelevant to the site's functionality
		try {
			document.querySelector("#tooltip").remove();
		} catch {
			console.log("attempting to remove the contents of the tooltip, but there's no data yet.\n\nPlease ignore this message, it's not critical.");
		}
		
		formattedLikes = likeCount.toLocaleString();
		formattedDislikes = dislikeCount.toLocaleString();
		formattedViews = viewCount.toLocaleString();
		document.querySelector("tooltip-bar").insertAdjacentHTML(
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
		
		document.querySelector("#like-count").style = "display: block;";
		document.querySelector("#dislike-count").style = "display: block;";
		document.querySelector("#view-count").style = "display: block;";
		document.querySelector("#precise-percentage").style = "display: block;";
		document.querySelector("#precise-rating").style = "display: block;";
		
		document.querySelector("#show-yt-embed-video-with-some-metadata").hidden = false;
	}, waitTimeMs);
}
