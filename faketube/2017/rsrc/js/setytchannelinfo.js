/*
	sets the YouTube channel info
*/

// i have no idea why i have to set up setTimeout every fucking time
setTimeout(function(){
	// remove the "failed to load yt channel" in the html
	document.querySelector("#yt-channel-failed-to-load").remove();

	// set up the channel with proper data
	document.querySelector("#yt-channel-container").insertAdjacentHTML(
		"beforeend",
		`
		<div id="yt-channel">
			<img id="yt-channel-profile-picture" src="${ytOnlineProfilePicture}">
			<div id="yt-channel-name-renderer">
				<a id="yt-channel-link" href="${ytChannelIdLink}">${ytChannelName}</a>
				<a class="yt-channel-sub-count" href="${ytChannelSubConfirmLink}" title="Subscribe to ${ytChannelName} (YouTube)">${ytSubscriberCount} subscribers</a>
			</div>
		</div>
		`
	);
}, 1150);
