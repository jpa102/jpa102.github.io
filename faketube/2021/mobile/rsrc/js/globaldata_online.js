// globaldata_online.js
// this file contains code that requires internet connection

//	INTERNAL VARIABLES
//	(numbers are in milliseconds)
var __faketube_aplydbgimdtly = 3100;
var __faketube_aplyfavstebgclr = 301;
var __faketube_sttrdptydwnldr = 3900;
var __faketube_stlkedlkecnts = 3450;
var __faketube_stvwsndte = 3777;
var __faketube_stvtecnts = 3550;
var __faketube_stytchnlifo = 3400;
var __faketube_injtplyr = 3500;



/*
	votes (likes, dislikes, and rating)
*/
var v = ""; // video id variable (11-character string)

function getVideoIdFromUser() {
	v = prompt("Enter a 11-character long YouTube video id\nExample is dQw4w9WgXcQ\n\n\(From https://www.youtube.com/watch?v=dQw4w9WgXcQ\)");

	if (v == "") {
		alert("Please enter a video id first");
		return;
	}
	if (v.length < 11) {
		alert("The video id is too short\n\nCurrent character count: " + v.length + "\nCurrent input: " + v);
		return;
	}
	if (v.length > 11) {
		alert("The video id is too long\n\nCurrent character count: " + v.length + "\nCurrent input: " + v);
		return;
	}
}

while (v == "") {
	getVideoIdFromUser();
}
while (v.length < 11) {
	getVideoIdFromUser();
}
while (v.length > 11) {
	getVideoIdFromUser();
}

let statsSet = false;

try {
	fetch(
		`https://returnyoutubedislikeapi.com/votes?videoId=${v}`
		).then((response) => {
			response.json().then((json) => {
				if (json) {
					let { id, dateCreated, likes, dislikes, rawLikes, rawDislikes, rating, viewCount, deleted } = json;
					console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nAverage rating: " + rating + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes + "\nDate created: " + dateCreated + "\nDeleted: " + deleted);
					DebugJS.console.log("info", "[globaldata_online.js] Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nAverage rating: " + rating + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes + "\nDate created: " + dateCreated + "\nDeleted: " + deleted);

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

					unformattedviews = viewCount;
					totalviews = unformattedviews.toLocaleString();
				}
			})
		}
	);
}
catch(err) {
	//	i don't even know what i am typing here but okay
	console.log(err.message + "\n[error] failed to fetch data from returnyoutubedislikeapi");
}
/*finally {
	console.log("[error] failed to contact returnyoutubedislikeapi.com, returning local values...");
	console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: \"\"\nViews: 0\nAverage rating: 0\nLike count: 0\nDislike count: 0\nRaw like count: 0\nRaw dislike count: 0\nDate created: \"\"\nDeleted: null");
	DebugJS.console.log("error", "[globaldata_online.js] failed to contact returnyoutubedislikeapi.com, returning local values...");
	DebugJS.console.log("info", "[globaldata_online.js] Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: \"\"\nViews: 0\nAverage rating: 0\nLike count: 0\nDislike count: 0\nRaw like count: 0\nRaw dislike count: 0\nDate created: \"\"\nDeleted: null");
}*/



fetch(
	`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${v}`
	).then((response) => {
		response.json().then((json) => {
			if (json) {
				let { title, author_name, author_url } = json;

				ytVideoTitle = title;
				ytChannelName = author_name;
				ytChannelIdLink = author_url;
				ytChannelSubConfirmLink = author_url + "?sub_confirmation=1";

				console.log("YouTube video title: " + title);
				console.log("Uploaded by: " + author_name);
				console.log(author_name + "'s channel link: " + author_url);
				DebugJS.console.log("info", "[globaldata_online.js] YouTube video title: " + title);
				DebugJS.console.log("info", "[globaldata_online.js] Uploaded by: " + author_name);
				DebugJS.console.log("info", "[globaldata_online.js] " + author_name + "'s channel link: " + author_url);
			}
		})
	}
);



/*
	views and date
*/

uploaddate = "Month Day, Year";
uploadtime = "T00:00:00-00:00";

/*
	yt info
*/
ytVideoId = v;
ytSubscriberCount = "0";
ytOnlineProfilePicture = "rsrc/player/YourVideoId.jpg";
