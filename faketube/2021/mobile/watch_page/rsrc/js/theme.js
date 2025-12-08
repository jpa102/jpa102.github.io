/*
	theme.js
	
	a javascript file that changes the page's theme
	it has 2 parts:
		- automatically adjust the theme depending on the user's device preferences
		- change the theme manually by calling functions
*/



/*
	automatically set the theme (system light or dark mode)
	source: https://stackoverflow.com/a/60971231
*/
// Check to see if Media-Queries are supported
if (window.matchMedia) {
	// Check if the dark-mode Media-Query matches
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.querySelector("html").setAttribute("data-theme-display", "dark");
	} else {
		document.querySelector("html").setAttribute("data-theme-display", "light");
	}
} else {
	document.querySelector("html").setAttribute("data-theme-display", "light");
}

// looks like a class, amirite?
display = {
	theme: {
		_clear() {
			document.querySelector("html").setAttribute("data-theme-display", "light"); // shift to "light" mode
		},
		blackhole() {
			if (document.querySelector("html").getAttribute("data-theme-mode") == "blackhole") {
				console.log("the blackhole theme is already applied");
				DebugJS.console.log("info", "the blackhole theme is already applied");
				return;
			}

			document.querySelector("html").setAttribute("data-theme-display", "blackhole");
		},
		darkerdarkmode() {
			if (document.querySelector("html").getAttribute("data-theme-mode") == "darkerdarkmode") {
				console.log("the darker dark mode theme is already applied");
				DebugJS.console.log("info", "the darker dark mode theme is already applied");
				return;
			}

			document.querySelector("html").setAttribute("data-theme-display", "darkerdarkmode");
		},
		darkmode() {
			if (document.querySelector("html").getAttribute("data-theme-mode") == "darkmode") {
				console.log("the dark mode theme is already applied");
				DebugJS.console.log("info", "the dark mode theme is already applied");
				return;
			}

			document.querySelector("html").setAttribute("data-theme-display", "darkmode");
		},
		custom(backgroundcolor, themetype) {
			// default option when no string values are provided
			if (backgroundcolor == undefined && themetype == undefined) {
				console.log(`values provided: ${backgroundcolor}, ${themetype}\nusage example:\n\tcustom\(\"black\", \"blackhole\"\)\n\nwhere:\n\tbackgroundcolor - can be a literal color string or a hex code\n\tthemetype - the type of theme`);
				return;
			}

			// todo
			

			// add a console log note about clearing out the custom theme
			console.log(`"custom theme ${backgroundcolor} applied with type ${themetype}, make sure to _clear() it out once done before using default themes :D`);
			DebugJS.console.log(`"custom theme ${backgroundcolor} applied with type ${themetype}, make sure to _clear() it out once done before using default themes :D`);
		}
	}
}

// for those who still call this function
function changeThemeDisplay(colorOption) {
	console.log(`please refer to the new display.theme option as this has been reworked`);
}
