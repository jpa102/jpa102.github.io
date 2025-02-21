/*
	theme.js
	
	a javascript file that changes the page's theme
	currently, there are three options:
	
		light mode
		dark mode
		black hole
	
	todo: being able to set your own theme color with custom values
*/



function lightModeOption() {
	vibrate();
	
	if (document.querySelector("#black-hole-injected-css") !== null) {
		document.querySelector("#black-hole-injected-css").remove();
	}
	
	if (document.querySelector("#dark-mode-injected-css") !== null) {
		document.querySelector("#dark-mode-injected-css").remove();
	}
	
	if (document.querySelector("#extreme-black-hole-injected-css") !== null) {
		document.querySelector("#extreme-black-hole-injected-css").remove();
	}
	
	if (document.querySelector("#custom-theme-injected-css") !== null) {
		document.querySelector("#custom-theme-injected-css").remove();
	}
	
	
	
	// long check, this is for the option to have the "selected" graphic
	if (document.querySelector("#light-mode-option").classList == "") {
		document.querySelector("#light-mode-option").classList.add("selected");
	}
	
	if (document.querySelector("#dark-mode-option").classList != "") {
		document.querySelector("#dark-mode-option").classList.remove("selected");
	}
	
	if (document.querySelector("#black-hole-option").classList != "") {
		document.querySelector("#black-hole-option").classList.remove("selected");
	}
	
	if (document.querySelector("#extreme-black-hole-option").classList != "") {
		document.querySelector("#extreme-black-hole-option").classList.remove("selected");
	}
}

function darkModeOption() {
	vibrate();
	
	if (document.querySelector("#black-hole-injected-css") !== null) {
		document.querySelector("#black-hole-injected-css").remove();
	}
	
	if (document.querySelector("#extreme-black-hole-injected-css") !== null) {
		document.querySelector("#extreme-black-hole-injected-css").remove();
	}
	
	if (document.querySelector("#dark-mode-injected-css") !== null) {
		return;
	}
	
	if (document.querySelector("#custom-theme-injected-css") !== null) {
		document.querySelector("#custom-theme-injected-css").remove();
	}
	
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="dark-mode-injected-css" type="text/css">
				h2 {
					font-weight: 100;
				}
				
				body {
					background-color: #212121;
				}
				
				#topbar {
					background-color: #2a2a2a;
				}
				
				.sidenav {
					background-color: #323232;
				}
				
				.container {
					background: rgba(255, 255, 255, 0.1);
				}
				
				.action-buttons:active {
					background: rgba(255, 255, 255, 0.2) !important;
				}
				
				#app-title-text {
					color: white;
				}
				
				a {
					color: dodgerblue;
				}
				
				.sidebar-icon {
					fill: white;
				}
				
				.sidenav a:hover {
					background: rgba(255, 255, 255, 0.1);
					color: white;
				}
				
				.selected {
					background: rgba(255, 255, 255, 0.1);
				}
				
				input {
					background: rgba(255, 255, 255, 0.13);
					color: white;
				}
				
				#header-text {
					color: white;
					font-weight: unset;
				}
				
				#dislikes-reminder-text {
					color: darkgray;
				}
				
				#inputs-from-user {
					color: darkgray;
				}
				
				#resultTitle, #alt-result-title {
					color: white;
				}
				
				#roundp, #alt-roundp {
					color: darkgray;
				}
				
				#ldv-container > h2 {
					color: white;
				}
				
				#ldv-container, #alt-ldv-container {
					color: darkgray;
				}
				
				hr {
					border: 1px solid rgba(255, 255, 255, 0.15) !important;
				}
				
				.action-buttons {
					color: white;
					background: rgba(255, 255, 255, 0.1);
				}
				
				#embed-window-title-and-action-buttons > h2 {
					color: white;
				}
				
				#title-text-container, #alt-title-text-container {
					color: darkgray;
				}
				
				#uploaded-by, #alt-uploaded-by {
					color: darkgray;
				}
				
				#credits-container > h2 {
					color: white;
				}
				
				#credits-container > p {
					color: darkgray;
				}
				
				#frontend-tutorial-box {
					color: white;
				}
				
				#ryd-changelog-page-container > h2 {
					color: white;
				}
				
				#ryd-changelog-page-container > span {
					color: white;
				}
				
				#ryd-changelog-page-container {
					color: darkgray;
				}
				
				#about-container > h2 {
					color: white;
				}
				
				#about-container > p {
					color: darkgray;
				}
				
				.border-bottom-separator {
					border-bottom: 1px solid rgba(255, 255, 255, 0.15);
				}
				
				select#json-data-sources-options {
					color: white;
					background: rgba(255, 255, 255, 0.1);
				}
				
				.option-select-json-data-apis {
					background-color: rgb(33, 33, 33);
				}
			</style>
		`
	);
	
	
	
	// long check, this is for the option to have the "selected" graphic
	if (document.querySelector("#light-mode-option").classList != "") {
		document.querySelector("#light-mode-option").classList.remove("selected");
	}
	
	if (document.querySelector("#dark-mode-option").classList == "") {
		document.querySelector("#dark-mode-option").classList.add("selected");
	}
	
	if (document.querySelector("#black-hole-option").classList != "") {
		document.querySelector("#black-hole-option").classList.remove("selected");
	}
	
	if (document.querySelector("#extreme-black-hole-option").classList != "") {
		document.querySelector("#extreme-black-hole-option").classList.remove("selected");
	}
}

function blackHoleOption() {
	vibrate();
	
	if (document.querySelector("#dark-mode-injected-css") !== null) {
		document.querySelector("#dark-mode-injected-css").remove();
	}
	
	if (document.querySelector("#extreme-black-hole-injected-css") !== null) {
		document.querySelector("#extreme-black-hole-injected-css").remove();
	}
	
	if (document.querySelector("#black-hole-injected-css") !== null) {
		return;
	}
	
	if (document.querySelector("#custom-theme-injected-css") !== null) {
		document.querySelector("#custom-theme-injected-css").remove();
	}
	
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="black-hole-injected-css" type="text/css">
				h2 {
					font-weight: 100;
				}
				
				body {
					background-color: black;
				}
				
				#topbar {
					background-color: black;
					border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				}
				
				.sidenav {
					background-color: black;
				}
				
				.container {
					background: rgba(255, 255, 255, 0.06);
				}
				
				#app-title-text {
					color: white;
				}
				
				a {
					color: dodgerblue;
				}
				
				.sidebar-icon {
					fill: white;
				}
				
				.sidenav a:hover {
					background: rgba(255, 255, 255, 0.06);
					color: white;
				}
				
				.selected {
					background: rgba(255, 255, 255, 0.07);
				}
				
				input {
					background: rgba(255, 255, 255, 0.13);
					color: white;
				}
				
				#header-text {
					color: white;
					font-weight: unset;
				}
				
				#dislikes-reminder-text {
					color: darkgray;
				}
				
				#inputs-from-user {
					color: darkgray;
				}
				
				#resultTitle, #alt-result-title {
					color: white;
				}
				
				#roundp, #alt-roundp {
					color: darkgray;
				}
				
				#ldv-container > h2 {
					color: white;
				}
				
				#ldv-container, #alt-ldv-container {
					color: darkgray;
				}
				
				hr {
					border: 1px solid rgba(255, 255, 255, 0.15) !important;
				}
				
				.action-buttons {
					color: white;
					background: rgba(255, 255, 255, 0.1);
				}
				
				#embed-window-title-and-action-buttons > h2 {
					color: white;
				}
				
				#title-text-container, #alt-title-text-container {
					color: darkgray;
				}
				
				#uploaded-by, #alt-uploaded-by {
					color: darkgray;
				}
				
				#credits-container > h2 {
					color: white;
				}
				
				#credits-container > p {
					color: darkgray;
				}
				
				#frontend-tutorial-box {
					color: white;
				}
				
				#ryd-changelog-page-container > h2 {
					color: white;
				}
				
				#ryd-changelog-page-container > span {
					color: white;
				}
				
				#ryd-changelog-page-container {
					color: darkgray;
				}
				
				#about-container > h2 {
					color: white;
				}
				
				#about-container > p {
					color: darkgray;
				}
				
				.border-bottom-separator {
					border-bottom: 1px solid rgba(255, 255, 255, 0.15);
				}
				
				select#json-data-sources-options {
					color: white;
					background: rgba(255, 255, 255, 0.1);
				}
				
				.option-select-json-data-apis {
					background-color: rgb(0, 0, 0);
				}
			</style>
		`
	);
	
	
	
	// long check, this is for the option to have the "selected" graphic
	if (document.querySelector("#light-mode-option").classList != "") {
		document.querySelector("#light-mode-option").classList.remove("selected");
	}
	
	if (document.querySelector("#dark-mode-option").classList != "") {
		document.querySelector("#dark-mode-option").classList.remove("selected");
	}
	
	if (document.querySelector("#extreme-black-hole-option").classList != "") {
		document.querySelector("#extreme-black-hole-option").classList.remove("selected");
	}
	
	if (document.querySelector("#black-hole-option").classList == "") {
		document.querySelector("#black-hole-option").classList.add("selected");
	}
}

function e_blackHoleOption() {
	vibrate();
	
	if (document.querySelector("#dark-mode-injected-css") !== null) {
		document.querySelector("#dark-mode-injected-css").remove();
	}
	
	if (document.querySelector("#black-hole-injected-css") !== null) {
		document.querySelector("#black-hole-injected-css").remove();
	}
	
	if (document.querySelector("#custom-theme-injected-css") !== null) {
		document.querySelector("#custom-theme-injected-css").remove();
	}
	
	if (document.querySelector("#extreme-black-hole-injected-css") !== null) {
		return;
	}
	
	document.head.insertAdjacentHTML(
		"beforeend",
		`
			<style id="extreme-black-hole-injected-css" type="text/css">
				h2 {
					font-weight: 100;
				}
				
				body {
					background-color: black;
				}
				
				#topbar {
					background-color: black;
					border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				}
				
				.sidenav {
					background-color: black;
				}
				
				.container {
					background: black;
					border: 1px solid rgba(255, 255, 255, 0.1);
				}
				
				#app-title-text {
					color: white;
				}
				
				a {
					color: dodgerblue;
				}
				
				.sidebar-icon {
					fill: white;
				}
				
				.sidenav a:hover {
					background: rgba(255, 255, 255, 0.06);
					color: white;
				}
				
				.selected {
					background: rgba(255, 255, 255, 0.07);
				}
				
				input {
					background: black;
					border: 1px solid rgba(255, 255, 255, 0.1);
					color: white;
				}
				
				#header-text {
					color: white;
					font-weight: unset;
				}
				
				#dislikes-reminder-text {
					color: darkgray;
				}
				
				#inputs-from-user {
					color: darkgray;
				}
				
				#resultTitle, #alt-result-title {
					color: white;
				}
				
				#roundp, #alt-roundp {
					color: darkgray;
				}
				
				#ldv-container > h2 {
					color: white;
				}
				
				#ldv-container, #alt-ldv-container {
					color: darkgray;
				}
				
				hr {
					border: 1px solid rgba(255, 255, 255, 0.15) !important;
				}
				
				.action-buttons {
					color: white;
					background: black;
					border: 1px solid rgba(255, 255, 255, 0.1);
				}
				
				#embed-minimize-button {
					border: unset;
				}
				
				#embed-close-button {
					border: unset;
				}
				
				#embed-window-title-and-action-buttons > h2 {
					color: white;
				}
				
				#title-text-container, #alt-title-text-container {
					color: darkgray;
				}
				
				#uploaded-by, #alt-uploaded-by {
					color: darkgray;
				}
				
				#credits-container > h2 {
					color: white;
				}
				
				#credits-container > p {
					color: darkgray;
				}
				
				#frontend-tutorial-box {
					color: white;
				}
				
				#ryd-changelog-page-container > h2 {
					color: white;
				}
				
				#ryd-changelog-page-container > span {
					color: white;
				}
				
				#ryd-changelog-page-container {
					color: darkgray;
				}
				
				#about-container > h2 {
					color: white;
				}
				
				#about-container > p {
					color: darkgray;
				}
				
				.border-bottom-separator {
					border-bottom: 1px solid rgba(255, 255, 255, 0.15);
				}
				
				select#json-data-sources-options {
					color: white;
					background: black;
					border: 1px solid rgba(255, 255, 255, 0.1);
				}
				
				.option-select-json-data-apis {
					background-color: black;
				}
			</style>
		`
	);
	
	
	
	// long check, this is for the option to have the "selected" graphic
	if (document.querySelector("#light-mode-option").classList != "") {
		document.querySelector("#light-mode-option").classList.remove("selected");
	}
	
	if (document.querySelector("#dark-mode-option").classList != "") {
		document.querySelector("#dark-mode-option").classList.remove("selected");
	}
	
	if (document.querySelector("#black-hole-option").classList != "") {
		document.querySelector("#black-hole-option").classList.remove("selected");
	}
	
	if (document.querySelector("#extreme-black-hole-option").classList == "") {
		document.querySelector("#extreme-black-hole-option").classList.add("selected");
	}
}

function customThemeOption(colorValue, themeType) {
	if (document.querySelector("#black-hole-injected-css") !== null) {
		document.querySelector("#black-hole-injected-css").remove();
	}
	
	if (document.querySelector("#extreme-black-hole-injected-css") !== null) {
		document.querySelector("#extreme-black-hole-injected-css").remove();
	}
	
	if (document.querySelector("#dark-mode-injected-css") !== null) {
		document.querySelector("#dark-mode-injected-css").remove();
	}
	
	if (document.querySelector("#extreme-black-hole-injected-css") !== null) {
		document.querySelector("#extreme-black-hole-injected-css").remove();
	}
	
	if (colorValue == "remove" && themeType == "customtheme") {
		document.querySelector("#custom-theme-injected-css").remove();
		return;
	}
	
	// this will prevent adding another style tag in the head tag, unless you entered "customThemeOption("remove", "customtheme");"
	if (document.querySelector("#custom-theme-injected-css") !== null) {
		return;
	}
	
	switch (themeType) {
		case "light":
			document.head.insertAdjacentHTML(
				"beforeend",
				`
					<style id="custom-theme-injected-css" type="text/css">
						body {
							background-color: ${colorValue};
						}
						
						#topbar {
							background-color: ${colorValue};
							border-bottom: 1px solid rgba(255, 255, 255, 0.1);
						}
						
						.sidenav {
							background-color: ${colorValue};
						}
					</style>
				`
			);
		case "dark":
			document.head.insertAdjacentHTML(
				"beforeend",
				`
					<style id="custom-theme-injected-css" type="text/css">
						body {
							background-color: ${colorValue};
						}
					</style>
				`
			);
		default:
			return;
	}
}
