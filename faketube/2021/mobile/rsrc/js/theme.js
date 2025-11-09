/*
	theme.js
	
	a javascript file that changes the page's theme
	currently, there are three options:
	
		black hole
		youtube's dark mode
		2021 youtube dark mode
	
	internal choices are: blackhole, darkmode, legacydarkmode
*/



function _check() {
	if (document.querySelector("#blackhole-theme") != null) {
		document.querySelector("#blackhole-theme").remove();
	}

	if (document.querySelector("#dark-mode-theme") != null) {
		document.querySelector("#dark-mode-theme").remove();
	}

	if (document.querySelector("#legacy-dark-mode-theme") != null) {
		document.querySelector("#legacy-dark-mode-theme").remove();
	}
}

function changeThemeDisplay(colorOption) {
	if (colorOption == null) { return; }

	if (colorOption == "unset") { _check(); }

	if (colorOption == "blackhole") {
		_check();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="blackhole-theme">
					:root {
						--main-background-color: black;
						--white-color: white;
						--gray-color: #adadad;
					}

					.touch-by-touch:active {
						background: rgba(255, 255, 255, 0.1);
					}

					.engagement-panel-drag-line {
						background: rgba(255, 255, 255, 1);
					}

					body {
						background: var(--main-background-color) !important;
					}

					#topbar {
						background: var(--main-bankground-color) !important;
						border-bottom: 1px solid rgb(48, 48, 48);
					}

					#app-title-text {
						color: var(--white-color);
					}

					.sidenav {
						background: #161616 !important;
					}

					.sidenav a:hover {
						background: #262626 !important;
						color: var(--gray-color) !important;
					}

					.sidenav a:active {
						background: rgba(30, 124, 255, 0.15) !important;
						color: dodgerblue !important;
					}

					#comment-expand-container, #videos-icon > div > svg, #about-icon > div > svg {
						fill: var(--white-color);
					}

					#video-metadata.video-metadata-renderer, #follow-transcript-text {
						color: var(--gray-color) !important;
					}

					#video.title, #transcript-text-header, #more-from-author-text-header {
						font-weight: 500;
						color: var(--white-color);
					}

					#statistics {
						color: var(--white-color) !important;
					}

					.vote-count {
						color: var(--gray-color) !important;
					}

					#video-average-rating {
						color: var(--gray-color) !important;
					}

					#yt-channel-name-link {
						color: var(--white-color) !important;
					}

					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}

					#subscribe-text-link {
						color: rgb(255, 84, 84);
					}

					#comment-field {
						background-color: rgba(255, 255, 255, 0.1);
					}

					.menu-buttons-text {
						color: var(--white-color) !important;
					}

					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}

					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}

					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}

					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}

					#display-sec-desc-button-icon,
					#hide-sec-desc-button-icon {
						fill: var(--white-color) !important;
					}

					#description-title {
						color: var(--white-color) !important;
					}

					#description-text {
						color: var(--gray-color) !important;
					}

					#border-top-metadata,
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}

					#comment-caption {
						color: var(--white-color) !important;
					}

					#comment-counts {
						color: var(--gray-color) !important;
					}

					input {
						color: var(--white-color) !important;
					}

					#video-title-desc {
						color: var(--white-color);
						font-weight: 500;
					}

					#yt-channel-name-link-desc {
						color: var(--white-color) !important;
					}

					#video-stats-desc {
						color: var(--white-color);
						font-weight: 500;
					}

					#more-button {
						color: var(--white-color);
					}

					#thick-border {
						border: 4px solid rgba(255, 255, 255, 0.1);
					}

					.transparent-button-with-border {
						border: 1px solid rgba(255, 255, 255, 0.1);
					}

					.loading-video-thumbnails,
					.img-author-skeleton,
					.video-title-skeleton,
					.video-author-skeleton,
					.shorts-skeleton {
						background: rgba(255, 255, 255, 0.1);
					}
				</style>
			`
		);
	} else {
		console.log("the blackhole theme is already applied");
		DebugJS.console.log("info", "the blackhole theme is already applied");
	}

	if (colorOption == "darkerdarkmode") {
		_check();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="dark-mode-theme">
					:root {
						--main-background-color: #0f0f0f;
						--white-color: white;
						--gray-color: #adadad;
					}

					.touch-by-touch:active {
						background: rgba(255, 255, 255, 0.1);
					}

					.engagement-panel-drag-line {
						background: rgba(255, 255, 255, 1);
					}

					body {
						background: var(--main-background-color) !important;
					}

					#topbar {
						background: var(--main-bankground-color) !important;
						border-bottom: 1px solid rgb(48, 48, 48);
					}

					#app-title-text {
						color: var(--white-color);
					}

					.sidenav {
						background: #161616 !important;
					}

					.sidenav a:hover {
						background: #262626 !important;
						color: var(--gray-color) !important;
					}

					.sidenav a:active {
						background: rgba(30, 124, 255, 0.15) !important;
						color: dodgerblue !important;
					}

					#comment-expand-container, #videos-icon > div > svg, #about-icon > div > svg {
						fill: var(--white-color);
					}

					#video-metadata.video-metadata-renderer, #follow-transcript-text {
						color: var(--gray-color) !important;
					}

					#video.title, #transcript-text-header, #more-from-author-text-header {
						font-weight: 500;
						color: var(--white-color);
					}

					#statistics {
						color: var(--white-color) !important;
					}

					.vote-count {
						color: var(--gray-color) !important;
					}

					#video-average-rating {
						color: var(--gray-color) !important;
					}

					#yt-channel-name-link {
						color: var(--white-color) !important;
					}

					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}

					#subscribe-text-link {
						color: rgb(255, 84, 84);
					}

					#comment-field {
						background-color: rgba(255, 255, 255, 0.1);
					}

					.menu-buttons-text {
						color: var(--white-color) !important;
					}

					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}

					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}

					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}

					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}

					#display-sec-desc-button-icon,
					#hide-sec-desc-button-icon {
						fill: var(--white-color) !important;
					}

					#description-title {
						color: var(--white-color) !important;
					}

					#description-text {
						color: var(--gray-color) !important;
					}

					#border-top-metadata,
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}

					#comment-caption {
						color: var(--white-color) !important;
					}

					#comment-counts {
						color: var(--gray-color) !important;
					}

					input {
						color: var(--white-color) !important;
					}

					#video-title-desc {
						color: var(--white-color);
						font-weight: 500;
					}

					#yt-channel-name-link-desc {
						color: var(--white-color) !important;
					}

					#video-stats-desc {
						color: var(--white-color);
						font-weight: 500;
					}

					#more-button {
						color: var(--white-color);
					}

					#thick-border {
						border: 4px solid rgba(255, 255, 255, 0.1);
					}

					.transparent-button-with-border {
						border: 1px solid rgba(255, 255, 255, 0.1);
					}

					.loading-video-thumbnails,
					.img-author-skeleton,
					.video-title-skeleton,
					.video-author-skeleton,
					.shorts-skeleton {
						background: rgba(255, 255, 255, 0.1);
					}
				</style>
			`
		);
	} else {
		console.log("the darker-dark mode theme is already applied");
		DebugJS.console.log("info", "the darker-dark mode theme is already applied");
	}
	
	if (colorOption == "darkmode") {
		_check();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="legacy-dark-mode-theme">
					:root {
						--main-background-color: #212121;
						--white-color: white;
						--gray-color: #adadad;
					}

					.touch-by-touch:active {
						background: rgba(255, 255, 255, 0.1);
					}

					.engagement-panel-drag-line {
						background: rgba(255, 255, 255, 1);
					}

					body {
						background: var(--main-background-color) !important;
					}

					#topbar {
						background: var(--main-bankground-color) !important;
						border-bottom: 1px solid rgb(48, 48, 48);
					}

					#app-title-text {
						color: var(--white-color);
					}

					.sidenav {
						background: #161616 !important;
					}

					.sidenav a:hover {
						background: #262626 !important;
						color: var(--gray-color) !important;
					}

					.sidenav a:active {
						background: rgba(30, 124, 255, 0.15) !important;
						color: dodgerblue !important;
					}

					#comment-expand-container, #videos-icon > div > svg, #about-icon > div > svg {
						fill: var(--white-color);
					}

					#video-metadata.video-metadata-renderer, #follow-transcript-text {
						color: var(--gray-color) !important;
					}

					#video.title, #transcript-text-header, #more-from-author-text-header {
						font-weight: 500;
						color: var(--white-color);
					}

					#statistics {
						color: var(--white-color) !important;
					}

					.vote-count {
						color: var(--gray-color) !important;
					}

					#video-average-rating {
						color: var(--gray-color) !important;
					}

					#yt-channel-name-link {
						color: var(--white-color) !important;
					}

					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}

					#subscribe-text-link {
						color: rgb(255, 84, 84);
					}

					#comment-field {
						background-color: rgba(255, 255, 255, 0.1);
					}

					.menu-buttons-text {
						color: var(--white-color) !important;
					}

					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}

					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}

					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}

					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}

					#display-sec-desc-button-icon,
					#hide-sec-desc-button-icon {
						fill: var(--white-color) !important;
					}

					#description-title {
						color: var(--white-color) !important;
					}

					#description-text {
						color: var(--gray-color) !important;
					}

					#border-top-metadata,
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}

					#comment-caption {
						color: var(--white-color) !important;
					}

					#comment-counts {
						color: var(--gray-color) !important;
					}

					input {
						color: var(--white-color) !important;
					}

					#video-title-desc {
						color: var(--white-color);
						font-weight: 500;
					}

					#yt-channel-name-link-desc {
						color: var(--white-color) !important;
					}

					#video-stats-desc {
						color: var(--white-color);
						font-weight: 500;
					}

					#more-button {
						color: var(--white-color);
					}

					#thick-border {
						border: 4px solid rgba(255, 255, 255, 0.1);
					}

					.transparent-button-with-border {
						border: 1px solid rgba(255, 255, 255, 0.1);
					}

					.loading-video-thumbnails,
					.img-author-skeleton,
					.video-title-skeleton,
					.video-author-skeleton,
					.shorts-skeleton {
						background: rgba(255, 255, 255, 0.1);
					}
				</style>
			`
		);
	} else {
		console.log("the dark mode theme is already applied");
		DebugJS.console.log("info", "the dark mode theme is already applied");
	}

	if (colorOption == "lightmode") {
		_check();

		console.log("not implemented yet, sorry!");
		DebugJS.console.log("warning", "not implemented yet, sorry!");
	}
}



/*
	automatically set the theme (system light or dark mode)
	source: https://stackoverflow.com/a/60971231
*/
// Check to see if Media-Queries are supported
if (window.matchMedia) {
	// Check if the dark-mode Media-Query matches
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		changeThemeDisplay("darkmode");
	} else {
		// Light
	}
} else {
	// Default (when Media-Queries are not supported)
}
