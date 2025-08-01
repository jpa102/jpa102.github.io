/*
	sets the YouTube channel info
*/

// i have no idea why i have to set up setTimeout every fucking time
setTimeout(function(){
	// set up the channel with proper data
	document.querySelector("#yt-channel-profile-picture").src = ytOnlineProfilePicture; // the channel profile picture
	document.querySelector("#yt-channel-name-link").href = ytChannelIdLink; // the link to the youtube channel
	document.querySelector("#yt-channel-name-link").innerText = ytChannelName; // the name of the youtube channel
	document.querySelector(".yt-channel-sub-count.gray-text").innerText = ytSubscriberCount + " subscribers";

	document.querySelector("#subscribe-text-link").href = ytChannelSubConfirmLink;
	document.querySelector("#subscribe-text-link").title = "Subscribe to " + ytChannelName + " (YouTube)";
}, __faketube_stytchnlifo);
