/*
	set the vote count fields (likes and dislikes)
*/

fetch(
	`https://returnyoutubedislikeapi.com/votes?videoId=${v}`
	).then((response) => {
		response.json().then((json) => {
			if (json && !("traceId" in response) && !statsSet) {
				let { dislikes, likes } = json;
				likeCount = likes;
				dislikeCount = dislikes;
				
				// get averageRating from likes and dislikes ("star ratings" that was present in 2008 somewhere)
				oneStar = dislikeCount * 1;
				fiveStar = likeCount * 5;
				totalVotes = (dislikeCount + likeCount);
				totalStars = (oneStar + fiveStar);
				averageRating = (totalStars / totalVotes);
				roundedRating = averageRating.toPrecision(3);
				
				// get percentage from likes and dislikes
				likepercentage = likeCount + dislikeCount > 0 ? (likeCount / (likeCount + dislikeCount)) * 100 : 50;
				roundedlikepercentage = likepercentage.toPrecision(3);
				
				LikesFromRYD = likeCount.toLocaleString();
				DislikesFromRYD = dislikeCount.toLocaleString();
				formattedlikes = numberFormat(likeCount);
				formatteddislikes = numberFormat(dislikeCount);
				
				setTimeout(function() {
					document.querySelector("#like-button").ariaLabel="Like this video along with " + LikesFromRYD + " other people";
					document.querySelector("#dislike-button").ariaLabel="Dislike this video along with " + DislikesFromRYD + " other people";
				}, 1150);
			}
		})
	}
);
