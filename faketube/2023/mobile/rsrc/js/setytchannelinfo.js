/*
	sets the YouTube channel info
*/

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
}, __faketube_stytchnlifo);
