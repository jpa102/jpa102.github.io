/*
	sets the YouTube channel info
*/


// fallback data if the http status is 0 (probably no internet)
if (http.status == 0) {
	console.log("[http " + http.status + " error] noembed - no internet?");

	global_data.yt.videoTitle = "Failed to get video title [http " + http.status + "]";
	global_data.yt.channelName = "Failed to get channel name [http " + http.status + "]";
	global_data.yt.channelIdLink = "https://jpa102.github.com/faketube/2021/undefined/";
	global_data.yt.channelSubConfirmLink = "https://jpa102.github.com/faketube/2021/undefined/?sub_confirmation=1";
}

// i have no idea why i have to set up setTimeout every fucking time
setTimeout(function(){
	// set up the channel with proper data
	document.querySelector("#yt-channel-profile-picture").src = global_data.yt.onlineProfilePicture; // the channel profile picture
	document.querySelector("#yt-channel-name-link").href = global_data.yt.channelIdLink; // the link to the youtube channel
	document.querySelector("#yt-channel-name-link").innerText = global_data.yt.channelName; // the name of the youtube channel
	document.querySelector(".yt-channel-sub-count.gray-text").innerText = global_data.yt.subscriberCount + " subscribers";

	document.querySelector("#subscribe-text-link").href = global_data.yt.channelSubConfirmLink;
	document.querySelector("#subscribe-text-link").title = "Subscribe to " + global_data.yt.channelName + " (YouTube)";

	// at the description page
	document.querySelector("#yt-channel-name-link-desc").href = global_data.yt.channelIdLink; // the link to the youtube channel
	document.querySelector("#yt-channel-name-link-desc").innerText = global_data.yt.channelName; // the name of the youtube channel
	document.querySelector("#yt-channel-profile-picture-desc").src = global_data.yt.onlineProfilePicture; // the channel profile picture
	document.querySelector("#channel-name-header-text-renderer").innerText = global_data.yt.channelName; // the name of the youtube channel
	document.querySelector("#videos-button").href = global_data.yt.channelIdLink + "/videos";
	document.querySelector("#about-button").href = global_data.yt.channelIdLink + "/about";
}, __faketube_stytchnlifo);
