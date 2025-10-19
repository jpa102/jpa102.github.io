﻿// globaldata_online.js
// this file contains code that requires internet connection

//	INTERNAL VARIABLES
//	(numbers are in milliseconds)
var __faketube_asnvltleryddta = 1200;
var __faketube_aplydbgimdtly = 3100;
var __faketube_aplyfavstebgclr = 301;
var __faketube_sttrdptydwnldr = 3900;
var __faketube_stlkedlkecnts = 3450;
var __faketube_stvwsndte = 3777;
var __faketube_stvtecnts = 3550;
var __faketube_stytchnlifo = 3400;
var __faketube_injtplyr = 3500;

/*
	main object for global data
	by default, these are either 0 or no data inside them
*/
var global_data = {
	statsSet: false, // came from return youtube dislike's fetching code
	v: "", // video id variable (11-character string)
	ryd_data: {
		likeCount: 0,
		dislikeCount: 0,
		calcRating: {
			oneStar: 0,
			fiveStar: 0,
			totalVotes: 0,
			totalStars: 0,
			averageRating: 0,
			roundedRating: 0
		},
		likepercentage: 0,
		roundedlikepercentage: 0,
		LikesFromRYD: "0",
		DislikesFromRYD: "0",
		rawLikes: 0,
		rawDislikes: 0,
		formattedlikes: "0",
		formatteddislikes: "0",
		unformattedviews: 0,
		totalviews: "0"
	},
	yt: {
		channelName: "",
		channelIdLink: "",
		channelSubConfirmLink: "",
		onlineProfilePicture: "rsrc/player/YourVideoId.jpg",
		subscriberCount: "0",
		videoId: "",
		videoTitle: ""
	},
	uploaddate: "Month Day, Year",
	uploadtime: "T00:00:00-00:00"
}

//	define this variable
var _volatile_votes;



function getVideoIdFromUser() {
	global_data.v = prompt("Enter a 11-character long YouTube video id\nExample is dQw4w9WgXcQ\n\n\(From https://www.youtube.com/watch?v=dQw4w9WgXcQ\)");

	if (global_data.v == "") {
		alert("Please enter a video id first");
		return;
	}
	if (global_data.v.length < 11) {
		alert("The video id is too short\n\nCurrent character count: " + v.length + "\nCurrent input: " + v);
		return;
	}
	if (global_data.v.length > 11) {
		alert("The video id is too long\n\nCurrent character count: " + v.length + "\nCurrent input: " + v);
		return;
	}
}

while (global_data.v == "") {
	getVideoIdFromUser();
}
while (global_data.v.length < 11) {
	getVideoIdFromUser();
}
while (global_data.v.length > 11) {
	getVideoIdFromUser();
}



// test the url for return youtube dislike api
UrlExists("https://returnyoutubedislikeapi.com/votes?videoId=" + global_data.v);


// if the http status code is 200 (basically the api is accessible and the user has good internet connection)
if (http.status == 200) {
	try {
		fetch(
		`https://returnyoutubedislikeapi.com/votes?videoId=${global_data.v}`
			).then((response) => {
				response.json().then((json) => {
					if (json && !("traceId" in response) && !global_data.statsSet) {
						let { id, dateCreated, likes, dislikes, rawLikes, rawDislikes, rating, viewCount, deleted } = json;
						console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nAverage rating: " + rating + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes + "\nDate created: " + dateCreated + "\nDeleted: " + deleted);
						DebugJS.console.log("info", "[globaldata_online.js] Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: " + id + "\nViews: " + viewCount + "\nAverage rating: " + rating + "\nLike count: " + likes + "\nDislike count: " + dislikes + "\nRaw like count: " + rawLikes + "\nRaw dislike count: " + rawDislikes + "\nDate created: " + dateCreated + "\nDeleted: " + deleted);

						//	i don't want the global_data.ryd_data to be directly edited by operations.js
						//	so i'm assigning them to a separate object
						_volatile_votes = {
							likes: likes.toLocaleString(),
							dislikes: dislikes.toLocaleString(),
							likeCount: likes,
							dislikeCount: dislikes,
							formattedlikes: numberFormat(likes),
							formatteddislikes: numberFormat(dislikes),
							oneStar: dislikes * 1,
							fiveStar: likes * 5,
							totalVotes: (dislikes + likes),
							totalStars: 0,
							averageRating: rating,
							roundedRating: rating.toPrecision(3),
							likepercentage: likes + dislikes > 0 ? (likes / (likes + dislikes)) * 100 : 50,
							roundedlikepercent: 0
						}

						global_data.ryd_data.likeCount = likes;
						global_data.ryd_data.dislikeCount = dislikes;
						global_data.ryd_data.rawLikes = rawLikes;
						global_data.ryd_data.rawDislikes = rawDislikes;

						// get averageRating from likes and dislikes ("star ratings" that was present in 2008 somewhere)
						global_data.ryd_data.calcRating.oneStar = dislikes * 1;
						global_data.ryd_data.calcRating.fiveStar = likes * 5;
						global_data.ryd_data.calcRating.totalVotes = (dislikes + likes);
						global_data.ryd_data.calcRating.totalStars = (global_data.ryd_data.calcRating.oneStar + global_data.ryd_data.calcRating.fiveStar);
						global_data.ryd_data.calcRating.averageRating = (global_data.ryd_data.calcRating.totalStars / global_data.ryd_data.calcRating.totalVotes);
						global_data.ryd_data.calcRating.roundedRating = global_data.ryd_data.calcRating.averageRating.toPrecision(3);

						// get percentage from likes and dislikes
						global_data.ryd_data.likepercentage = likes + dislikes > 0 ? (likes / (likes + dislikes)) * 100 : 50;
						global_data.ryd_data.roundedlikepercentage = global_data.ryd_data.likepercentage.toPrecision(3);

						global_data.ryd_data.LikesFromRYD = likes.toLocaleString();
						global_data.ryd_data.DislikesFromRYD = dislikes.toLocaleString();
						global_data.ryd_data.formattedlikes = numberFormat(global_data.ryd_data.likeCount);
						global_data.ryd_data.formatteddislikes = numberFormat(global_data.ryd_data.dislikeCount);

						global_data.ryd_data.unformattedviews = viewCount;
						global_data.ryd_data.totalviews = global_data.ryd_data.unformattedviews.toLocaleString();

						// assign non existent keys
						global_data.yt.videoId = id;
						global_data.ryd_data.id = id;
						global_data.ryd_data.dateCreated = dateCreated;
						global_data.ryd_data.viewCount = viewCount;
						global_data.ryd_data.deleted = deleted;
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
// if the http status code is 400 (bad request)
} else if (http.status == 400) {
	console.log("[http " + http.status + " error] return youtube dislike api - bad request\nsupplied video id: " + global_data.v);
// if the http status code is 0 (no internet connection)
} else if (http.status == 0) {
	console.log("[http " + http.status + " error] return youtube dislike api - no internet?");
}



// test the url for noembed
UrlExists("https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + global_data.v);

if (http.status == 200) {
	fetch(
		`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${global_data.v}`
		).then((response) => {
			response.json().then((json) => {
				if (json) {
					let { title, author_name, author_url } = json;

					global_data.yt.videoTitle = title;
					global_data.yt.channelName = author_name;
					global_data.yt.channelIdLink = author_url;
					global_data.yt.channelSubConfirmLink = author_url + "?sub_confirmation=1";

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
// if the http status code is 400 (bad request)
} else if (http.status == 400) {
	console.log("[http " + http.status + " error] noembed - bad request\nsupplied video id: " + global_data.v);

	global_data.yt.videoTitle = "Failed to get video title [" + http.status + "]";
	global_data.yt.channelName = "Failed to get channel name [" + http.status + "]";
	global_data.yt.channelIdLink = "https://jpa102.github.com/faketube/2021/undefined/";
	global_data.yt.channelSubConfirmLink = "https://jpa102.github.com/faketube/2021/undefined/?sub_confirmation=1";
// if the http status code is 0 (no internet connection)
} else if (http.status == 0) {
	console.log("[http " + http.status + " error] noembed - no internet?");

	global_data.yt.videoTitle = "Failed to get video title [" + http.status + "]";
	global_data.yt.channelName = "Failed to get channel name [" + http.status + "]";
	global_data.yt.channelIdLink = "https://jpa102.github.com/faketube/2021/undefined/";
	global_data.yt.channelSubConfirmLink = "https://jpa102.github.com/faketube/2021/undefined/?sub_confirmation=1";
}
