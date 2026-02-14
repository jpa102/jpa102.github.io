// globaldata_online.js
// this file contains code that requires internet connection

//	INTERNAL VARIABLES
//	numbers are in milliseconds, these are for waiting times
var __faketube_asnvltleryddta = 101;
var __faketube_aplydbgimdtly = 4500;
var __faketube_aplyfavstebgclr = 301;
var __faketube_sttrdptydwnldr = 4500;
var __faketube_stlkedlkecnts = 4400;
var __faketube_stvwsndte = 4377;
var __faketube_stvtecnts = 4350;
var __faketube_stytchnlifo = 5400;
var __faketube_injtplyr = 3900;
var __faketube_content_scraper_ytintlprms = 2100;
var __faketube_content_scraper_ytintldatams = 2200;
var __faketube_content_scraper_intlzedata = 2367;
var __faketube_wtchpge_intrnt_btm_notif_apr_ms = 500;
var __faketube_wtchpge_intrnt_btm_notif_clpse_ms = 3067;
var __faketube_loadwatchpage = 5000; /* todo: make an actual loading page transition */

/*
	main object for global data
	by default, these are either 0 or no data inside them
*/
var global_data = {
	_watch_page_strings: {
		_stored_vars: {
			dislikes_text_inject: "Dislike",
			download_text_inject: "Download",
			downloaded_text_inject: "Downloaded",
			save_text_inject: "Save",
			saved_text_inject: "Saved",
			back_online_text_inject: "Back online",
			no_internet_connection_text_inject: "No internet connection",
			check_your_internet_connection_text_inject: "You're offline. Check your connection."
		},
		ja: {
			back_online_text: "オンラインに復帰しました",
			no_internet_connection_text: "インターネットに接続されていません",
			check_your_internet_connection_text: "現在オフラインです。接続を確認してください。",
			likes_text: "高評価",
			dislikes_text: "低評価",
			chat_text: "チャット",
			share_text: "共有",
			create_text: "作成",
			remix_text: "リミックス",
			stop_ads_text: "広告の停止",
			clip_text: "クリップ",
			save_text: "保存",
			saved_text: "保存済み",
			download_text: "オフライン",
			downloaded_text: "一時保存済",
			report_text: "報告",
			subscribe_text: "チャンネル登録",
			comment_header_text: "コメント",
			add_a_comment_text: "コメントする...",
			likes_title_text: "高評価数",
			dislikes_title_text: "低評価数",
			view_count_title_text: "回視聴数",
			description_header_text: "概要"
		}
	},
	statsSet: false, // came from return youtube dislike's fetching code
	v: null, // video id variable (11-character string)
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
		innerMetadata: {
			availableCountries: [],
			canonicalUrl: "",
			categoryType: "",
			hasYpcMetadata: null,
			isFamilySafe: null,
			isShortsEligible: null,
			publishDate: ""
		},
		playbackStatus: {
			playableInEmbed: null,
			status: ""
		},
		videoDetails: {
			allowRatings: null,
			isCrawlable: null,
			isLiveContent: null,
			isOwnerViewing: null,
			isPrivate: null,
			isUnlisted: null,
			isUnpluggedCorpus: null,
			keywords: [],
			lengthSeconds: "",
			thumbnails: []
		},
		channelName: "content_scraper.js failed to fetch name",
		channelId: "",
		channelLink: "",
		channelSubConfirmLink: "",
		commentCount: 0,
		descriptionText: "",
		likeCount: 0,
		onlineProfilePicture: "rsrc/player/YourVideoId.jpg", // this is usually a fallback url
		subscriberCount: "0 subscribers",
		uploadMonthDay: "Month Day",
		uploadYear: "Year",
		uploadedYearsAgo: "0 years ago",
		uploadFormattedDate: "",
		videoId: null,
		videoTitle: "content_scraper.js failed to fetch title",
		viewCount: 0,
		viewCountFormatted: "0 views",
		viewCountFormattedFull: ""
	},
	uploaddate: "Month Day, Year",
	uploadtime: "T00:00:00-00:00"
}

//	define this variable
var _volatile_votes;



function getVideoIdFromUser() {
	global_data.v = prompt(`Enter a 11-character long YouTube video id\nExample is dQw4w9WgXcQ`);

	if (global_data.v == null || global_data.v == undefined) {
		alert("Please enter a video id first");
		return;
	}
	if (global_data.v.length < 11) {
		alert(`The video id is too short\n\nCurrent character count: ${global_data.v.length} \nCurrent input: ${global_data.v}`);
		return;
	}
	if (global_data.v.length > 11) {
		alert(`The video id is too long\n\nCurrent character count: ${global_data.v.length} \nCurrent input: ${global_data.v}`);
		return;
	}
}



// the video id checker loop
while (global_data.v == null || global_data.v.length < 11 || global_data.v.length > 11) {
	getVideoIdFromUser();
}

if (global_data.v == null || global_data.v == undefined) {
	localStorage.setItem("lastVideoId", "aQvGIIdgFDM"); // store the video id
	global_data.yt.videoId = localStorage.getItem("lastVideoId"); // store the video id
	global_data.v = localStorage.getItem("lastVideoId"); // set the video id to "Video Not Available" by YouTube Viewers
}

if (global_data.v != null) {
	localStorage.setItem("lastVideoId", global_data.v); // store the video id
	global_data.yt.videoId = global_data.v; // store the video id
	localStorage_storeVideoId(global_data.v); // store the video id in the array inside localStorage
}



// test the url for return youtube dislike api
UrlExists(`https://returnyoutubedislikeapi.com/votes?videoId=${global_data.v}`);



fetch(
	`https://returnyoutubedislikeapi.com/votes?videoId=${global_data.v}`
).then((response) => {
	response.json().then((json) => {
		if (json && !("traceId" in response) && !global_data.statsSet) {
			let { id, dateCreated, likes, dislikes, rawLikes, rawDislikes, rating, viewCount, deleted } = json;
			console.log(`Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: ${id} \nViews: ${viewCount} \nAverage rating: ${rating} \nLike count: ${likes} \nDislike count: ${dislikes} \nRaw like count: ${rawLikes} \nRaw dislike count: ${rawDislikes} \nDate created: ${dateCreated} \nDeleted: ${deleted}`);
			DebugJS.console.log("info", `Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: ${id} \nViews: ${viewCount} \nAverage rating: ${rating} \nLike count: ${likes} \nDislike count: ${dislikes} \nRaw like count: ${rawLikes} \nRaw dislike count: ${rawDislikes} \nDate created: ${dateCreated} \nDeleted: ${deleted}`);

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
			global_data.ryd_data.id = id;
			global_data.ryd_data.dateCreated = dateCreated;
			global_data.ryd_data.viewCount = viewCount;
			global_data.ryd_data.deleted = deleted;
		}
	})
}).catch(error => {
	//	i don't even know what i am typing here but okay

	console.log("[error] failed to contact https://returnyoutubedislikeapi.com, returning local values...", error);
	console.log("Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: \"\"\nViews: 0\nAverage rating: 0\nLike count: 0\nDislike count: 0\nRaw like count: 0\nRaw dislike count: 0\nDate created: \"\"\nDeleted: null");
	DebugJS.console.log("error", "[globaldata_online.js] failed to contact returnyoutubedislikeapi.com, returning local values...");
	DebugJS.console.log("info", "[globaldata_online.js] Data provided by Return YouTube Dislike API\nLink to the API: https://returnyoutubedislikeapi.com\n\nVideo ID: \"\"\nViews: 0\nAverage rating: 0\nLike count: 0\nDislike count: 0\nRaw like count: 0\nRaw dislike count: 0\nDate created: \"\"\nDeleted: null");
});

// if the http status code is 400 (bad request)
if (http.status == 400) {
	console.log(`[http ${http.status} error] return youtube dislike api - bad request\nsupplied video id: ${global_data.v}`);
// if the http status code is 0 (no internet connection)
} else if (http.status == 0) {
	console.log(`[http ${http.status} error] return youtube dislike api - no internet?`);

	//	i don't want the global_data.ryd_data to be directly edited by operations.js
	//	so i'm assigning them to a separate object
	_volatile_votes = {
		likes: "0",
		dislikes: "0",
		likeCount: 0,
		dislikeCount: 0,
		formattedlikes: "0",
		formatteddislikes: "0",
		oneStar: 0 * 0,
		fiveStar: 0 * 5,
		totalVotes: (0 + 0),
		totalStars: 0,
		averageRating: 0,
		roundedRating: 0,
		likepercentage: 0 + 0 > 0 ? (0 / (0 + 0)) * 100 : 50,
		roundedlikepercent: 0
	}
}



// !!! THIS IS A DEPRECATED CODE !!!
// test the url for noembed
// i got a reson to keep using noembed: to get non auto-translated video titles
if (faketube.config_.EXPERIMENT_FLAGS.deprecate_noembed_fetching == true) {
	//console.log(`skipping noembed fetch code, reason: deprecate_noembed_fetching: ${faketube.config_.EXPERIMENT_FLAGS.deprecate_noembed_fetching}`);
} else {
	UrlExists(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${lobal_data.v}`);

	if (http.status == 200) {
		fetch(
			`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${global_data.v}`
			).then((response) => {
				response.json().then((json) => {
					if (json && ("error" in response)) {

					}

					if (json && !("error" in response)) {
						let { error, title, author_name, author_url } = json;
						if (error !== undefined) {
							global_data.yt.videoTitle = `Video Unavailable`;
							global_data.yt.channelName = `No Author`;
							global_data.yt.channelIdLink = `https://jpa102.github.io/faketube/2021/mobile/watch_page/undefined/`;
							global_data.yt.channelSubConfirmLink = `https://jpa102.github.io/faketube/2021/mobile/watch_page/undefined/?sub_confirmation=1`;

							console.log(`YouTube video title: Video Unavailable`);
							console.log(`Uploaded by: No Author`);
							console.log(`No Author 's channel link: https://jpa102.github.io/faketube/2021/mobile/watch_page/undefined/`);
							DebugJS.console.log(`info`, `[globaldata_online.js] YouTube video title: title`);
							DebugJS.console.log(`info`, `[globaldata_online.js] Uploaded by: No Author`);
							DebugJS.console.log(`info`, `[globaldata_online.js] No Author's channel link: https://jpa102.github.io/faketube/2021/mobile/watch_page/undefined/`);
						} else {
							global_data.yt.videoTitle = title;
							global_data.yt.channelName = author_name;
							global_data.yt.channelIdLink = author_url;
							global_data.yt.channelSubConfirmLink = `${author_url}?sub_confirmation=1`;

							console.log(`YouTube video title: ${title}`);
							console.log(`Uploaded by: ${author_name}`);
							console.log(`${author_name}'s channel link: ${author_url}`);
							DebugJS.console.log("info", `[globaldata_online.js] YouTube video title: ${title}`);
							DebugJS.console.log("info", `[globaldata_online.js] Uploaded by: ${author_name}`);
							DebugJS.console.log("info", `[globaldata_online.js] ${author_name}'s channel link: ${author_url}`);
						}
					}
				})
			}
		);
	// if the http status code is 400 (bad request)
	} else if (http.status == 400) {
		console.log(`[http ${http.status} error] noembed - bad request\nsupplied video id: ${global_data.v}`);

		global_data.yt.videoTitle = `Failed to get video title [ ${http.status} ]`;
		global_data.yt.channelName = `Failed to get channel name [ ${http.status} ]`;
		global_data.yt.channelIdLink = `https://jpa102.github.io/faketube/2021/mobile/watch_page/undefined/`;
		global_data.yt.channelSubConfirmLink = `https://jpa102.github.io/faketube/2021/mobile/watch_page/undefined/?sub_confirmation=1`;
	// if the http status code is 0 (no internet connection)
	} else if (http.status == 0) {
		console.log(`[http ${http.status} error] noembed - no internet?`);

		global_data.yt.videoTitle = `Failed to get video title [ ${http.status} ]`;
		global_data.yt.channelName = `Failed to get channel name [ ${http.status} ]`;
		global_data.yt.channelIdLink = `https://jpa102.github.io/faketube/2021/mobile/watch_page/undefined/`;
		global_data.yt.channelSubConfirmLink = `https://jpa102.github.io/faketube/2021/mobile/watch_page/undefined/?sub_confirmation=1`;
	}
}
