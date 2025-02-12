/*
	sets the YouTube channel info
*/

// i have no idea why i have to set up setTimeout every fucking time
setTimeout(function(){
	// remove the "failed to load yt channel" in the html
	document.querySelector("#yt-channel-failed-to-load").remove();

	// set up the channel with proper data
	document.querySelector("#yt-channel-container").insertAdjacentHTML(
		"afterbegin",
		`
		<div id="yt-channel">
			<img id="yt-channel-profile-picture" src="${ytOnlineProfilePicture}">
			<div id="yt-channel-name-renderer">
				<a id="yt-channel-link" href="${ytChannelIdLink}">${ytChannelName}</a>
				<span id="yt-subscriber-counts" class="yt-channel-sub-count">${ytSubscriberCount} subscribers</a>
			</div>
			<a id="subscribe-button-container-href" href="${ytChannelSubConfirmLink}">
				<button id="subscribe-button" class="menu-buttons" title="Subscribe to ${ytChannelName} (YouTube)">
					<span id="subscribe-text-renderer" class="menu-buttons-text">Subscribe</span>
				</button>
			</a>
		</div>
		`
	);
}, 500);
