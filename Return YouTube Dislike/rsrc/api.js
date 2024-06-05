// internal config
let waitTimeMs = 400;
let ytId = "";

function getVotes(){

	if (noVideoId == true) {
		return;
	}
	
	fetch(
		`https://returnyoutubedislikeapi.com/votes?videoId=${ytId}`
		).then((response) => {
			response.json().then((json) => {
				if (json && !("traceId" in response)) {
					let { dislikes, likes, viewCount, id } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes);
					
					receivedLikes = likes;
					receivedDislikes = dislikes;
					receivedViews = viewCount;
				}
			})
		}
	);
	
	setTimeout(function(){
		likeCount = receivedLikes;
		dislikeCount = receivedDislikes;
		viewCount = receivedViews;

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
					Likes: ${likepercentage} / Dislikes: ${roundedDislikePercentage}
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
	}, waitTimeMs);
}

function Clear(){
	document.querySelector("input").value = "";
	document.getElementById('avg').innerHTML = "";
	document.getElementById('round').innerHTML = "";
	document.getElementById('resultTitle').style.display = 'none';
	document.getElementById('roundp').style.display = 'none';
	document.getElementById("ratio-bar-renderer-container").style.display = 'none';
	
	document.querySelector("#like-count").style = "display: none;";
	document.querySelector("#dislike-count").style = "display: none;";
	document.querySelector("#view-count").style = "display: none;";
	document.querySelector("#precise-percentage").style = "display: block;";
	document.querySelector("#precise-rating").style = "display: block;";
	
	document.querySelector("#likeCount").innerHTML = "";
	document.querySelector("#dislikeCount").innerHTML = "";
	document.querySelector("#viewCount").innerHTML = "";
	document.querySelector("#likePercentage").innerHTML = "";
	document.querySelector("#averageRating").innerHTML = "";
	
	
	
	document.querySelector("#ldv-container").style = "display: none;";
}
