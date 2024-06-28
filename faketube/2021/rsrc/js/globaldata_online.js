// globaldata_online.js
// this file contains code that requires internet connection

/*
	votes (likes, dislikes, and rating)
*/
v = ""; // video id variable (11-character string)

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

fetch(
	`https://returnyoutubedislikeapi.com/votes?videoId=${v}`
	).then((response) => {
		response.json().then((json) => {
			if (json) {
				let { dislikes, likes, viewCount, id } = json;
				console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nLike count: " + likes + "\nDislike count: " + dislikes)
			}
		})
	}
);



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
