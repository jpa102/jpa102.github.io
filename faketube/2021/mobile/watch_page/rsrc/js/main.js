/*
	main.js
*/

setTimeout(() => {
	window.scrollTo({ top: 0 });
}, 100);

class _internal {
	static _createVideoIdStateEntryArr() {
		
	}

	static createVideoIdStateEntry(videoId) {
		let m = new Map();
		let n = new Map();

		// video info container
		m.set("", "");

		// main video info
		n.set("videoId", videoId);
		n.set("videoState", "NEUTRAL");
		n.set("isDownloaded", "NOT_DOWNLOADED");
		n.set("isSaved", "NOT_SAVED");
		n.set("videoTitle", global_data.yt.videoTitle);
		n.set("channelName", global_data.yt.channelName);
		n.set("channelLink", channelLink);
		n.set("", );
		n.set("", );
	}
}

class buttonStates {
	static likeButton(setState) {
		
	}

	static dislikeButton(setState) {
		
	}

	static downloadButton(setState) {
		
	}

	static saveButton(setState) {
		
	}
}

// initialize the button states (like, dislike, download, save)
if (localStorage.getItem("_video_state_by_videoids") == null) {
	localStorage.setItem("_video_state_by_videoids", "");
}

// initialize the load related videos button setting
// by default, it's set to "none"
if (localStorage.getItem("_settings_display_load_related_type") == null) {
	localStorage.setItem("_settings_display_load_related_type", "none");
}

// read the _settings_display_load_related_type value
//		if set to "button_type", display the load button
//		if set to "auto_type", display the videos automatically
switch (localStorage.getItem("_settings_display_load_related_type")) {
	case "button_type":
		setTimeout(() => {
			document.querySelector("#show-related-videos-button").removeAttribute("style");
		}, 1000);
		break;
	case "auto_type":
		setTimeout(() => {
			loadRelatedVideos(true, 4000);
		}, 1000);
		break;
}

// initialize the load upcoming video button setting
// by default, it's set to "false"
if (localStorage.getItem("_settings_display_load_upcoming_video") == null) {
	localStorage.setItem("_settings_display_load_upcoming_video", "false");
}

// read the _settings_display_load_related_type value
//		if set to true, display the button
//		if set to false, don't display it
switch (localStorage.getItem("_settings_display_load_upcoming_video")) {
	case "true":
		setTimeout(() => {
			document.querySelector("#load-first-upcoming-video-button").removeAttribute("style");
		}, 1000);
		break;
	case "false":
		break;
}

// set the theme_type inside localStorage if it's not present
if (localStorage.getItem("theme_type") == null) {
	/*
		automatically set the theme (system light or dark mode)
		source: https://stackoverflow.com/a/60971231
	*/
	// Check to see if Media-Queries are supported
	if (window.matchMedia) {
		// Check if the dark-mode Media-Query matches
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			localStorage.setItem("theme_type", "darkmode"); // default value
			document.querySelector("html").setAttribute("data-theme-display", localStorage.getItem("theme_type"));
		} else {
			localStorage.setItem("theme_type", "light"); // default value
			document.querySelector("html").setAttribute("data-theme-display", localStorage.getItem("theme_type"));
		}
	} else {
		localStorage.setItem("theme_type", "light"); // default value
		document.querySelector("html").setAttribute("data-theme-display", localStorage.getItem("theme_type"));
	}
} else {
	document.querySelector("html").setAttribute("data-theme-display", localStorage.getItem("theme_type"));
}
