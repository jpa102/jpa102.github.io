/*
	theme.js
	
	a javascript file that changes the page's theme
	it has 2 parts:
		- automatically adjust the theme depending on the user's device preferences
		- change the theme manually by calling functions
*/



// looks like a class, amirite?
display = {
	theme: {
		_clear() {
			document.querySelector("html").setAttribute("data-theme-display", "light"); // shift to "light" mode
			localStorage.setItem("theme_type", "light");
		},
		blackhole() {
			if (document.querySelector("html").getAttribute("data-theme-display") == "blackhole") {
				console.log("the blackhole theme is already applied");
				return;
			}

			document.querySelector("html").setAttribute("data-theme-display", "blackhole");
			localStorage.setItem("theme_type", "blackhole")
		},
		darkmode() {
			if (document.querySelector("html").getAttribute("data-theme-display") == "darkmode") {
				console.log("the dark mode theme is already applied");
				return;
			}

			document.querySelector("html").setAttribute("data-theme-display", "darkmode");
			localStorage.setItem("theme_type", "darkmode");
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
		}
	}
}

// for those who still call this function
function changeThemeDisplay(colorOption) {
	console.log(`please refer to the new display.theme option as this has been reworked`);
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
