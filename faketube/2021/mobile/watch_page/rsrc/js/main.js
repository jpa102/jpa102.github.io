/*
	main.js
*/

// initialize the load related videos button setting
// by default, it's set to "false"
if (localStorage.getItem("_settings_display_load_related_type") == null) {
	localStorage.setItem("_settings_display_load_related_type", "false");
}

// read the _settings_display_load_related_type value
//		if set to "button_type", display the load button
//		if set to "auto_type", display the videos automatically
switch (localStorage.getItem("_settings_display_load_related_type")) {
	case "button_type":
		setTimeout(() => {
			document.querySelector("#show-related-videos-button-container").removeAttribute("style");
		}, 1000);
		break;
	case "auto_type":
		setTimeout(() => {
			loadRelatedVideos(true, 4000);
		}, 1000);
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
