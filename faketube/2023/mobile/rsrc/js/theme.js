/*
	theme.js
	
	a javascript file that changes the page's theme
	currently, there are three options:
	
		black hole
		youtube's dark mode
		2021 youtube dark mode
		dark mode from devtools (chrome v109.0.5414.120)
	
	internal choices are: blackhole, darkmode, legacydarkmode, devtools_dark
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

	if (document.querySelector("#devtools-dark-theme") != null) {
		document.querySelector("#devtools-dark-theme").remove();
	}
}

function changeThemeDisplay(colorOption) {
	if (colorOption == null) { console.log("expected a value, got " + colorOption + " instead"); return; }

	if (colorOption == "unset") { _check(); return; }

	if (colorOption == "blackhole" && document.querySelector("#blackhole-theme") == null) {
		_check();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="blackhole-theme" text="text/css">
					:root {
						--main-background-color: black;
						--white-color: white;
						--gray-color: #adadad;
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

					.yt-icon {
						fill: var(--white-color);
					}

					#video-metadata.video-metadata-renderer {
						color: var(--gray-color) !important;
					}

					#video.title {
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

					#like-bar {
						background: var(--white-color) !important;
					}

					#yt-channel-name-link {
						color: var(--white-color) !important;
					}

					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}

					#subscribe-text-link {
						color: black;
						background: white;
					}

					#comment-field {
						background-color: rgba(255, 255, 255, 0.1);
					}

					.menu-buttons {
						background-color: rgba(255, 255, 255, 0.1) !important;
					}

					.menu-buttons-text, .button-text-style {
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

					.button-border {
						border-left: 1px solid rgba(255, 255, 255, 0.1) !important;
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
						background: rgba(255, 255, 255, 0.1);
					}

					#border-top-metadata,
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}

					#comment-section {
						background: rgba(255, 255, 255, 0.1) !important;
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

		return;
	} else {
		console.log("the blackhole theme is already applied");
		DebugJS.console.log("info", "the blackhole theme is already applied");
	}

	if (colorOption == "darkmode" && document.querySelector("#dark-mode-theme") == null) {
		_check();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="dark-mode-theme" type="text/css">
					:root {
						--main-background-color: #0f0f0f;
						--white-color: white;
						--gray-color: #adadad;
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

					.yt-icon {
						fill: var(--white-color);
					}

					#video-metadata.video-metadata-renderer {
						color: var(--gray-color) !important;
					}

					#video.title {
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

					#like-bar {
						background: var(--white-color) !important;
					}

					#yt-channel-name-link {
						color: var(--white-color) !important;
					}

					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}

					#subscribe-text-link {
						color: black;
						background: white;
					}

					#comment-field {
						background-color: rgba(255, 255, 255, 0.1);
					}

					.menu-buttons {
						background-color: rgba(255, 255, 255, 0.1) !important;
					}

					.menu-buttons-text, .button-text-style {
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

					.button-border {
						border-left: 1px solid rgba(255, 255, 255, 0.1) !important;
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
						background: rgba(255, 255, 255, 0.1);
					}

					#border-top-metadata,
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}

					#comment-section {
						background: rgba(255, 255, 255, 0.1) !important;
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

		return;
	} else {
		console.log("the dark mode theme is already applied");
		DebugJS.console.log("info", "the dark mode theme is already applied");
	}
	
	if (colorOption == "legacydarkmode" && document.querySelector("#legacy-dark-mode-theme") == null) {
		_check();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="legacy-dark-mode-theme" type="text/css">
					:root {
						--main-background-color: #212121;
						--white-color: white;
						--gray-color: #adadad;
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

					.yt-icon {
						fill: var(--white-color);
					}

					#video-metadata.video-metadata-renderer {
						color: var(--gray-color) !important;
					}

					#video.title {
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

					#like-bar {
						background: var(--white-color) !important;
					}

					#yt-channel-name-link {
						color: var(--white-color) !important;
					}

					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}

					#subscribe-text-link {
						color: black;
						background: white;
					}

					#comment-field {
						background-color: rgba(255, 255, 255, 0.1);
					}

					.menu-buttons {
						background-color: rgba(255, 255, 255, 0.1) !important;
					}

					.menu-buttons-text, .button-text-style {
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

					.button-border {
						border-left: 1px solid rgba(255, 255, 255, 0.1) !important;
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
						background: rgba(255, 255, 255, 0.1);
					}

					#border-top-metadata,
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}

					#comment-section {
						background: rgba(255, 255, 255, 0.1) !important;
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

		return;
	} else {
		console.log("the legacy dark mode theme is already applied");
		DebugJS.console.log("info", "the legacy dark mode theme is already applied");
	}

	if (colorOption == "devtools_dark" && document.querySelector("#devtools-dark-theme") == null) {
		_check();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="devtools-dark-theme" text="text/css">
					:root {
						--main-background-color: rgb(32, 32, 35);
						--white-color: white;
						--gray-color: #adadad;
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

					.yt-icon {
						fill: var(--white-color);
					}

					#video-metadata.video-metadata-renderer {
						color: var(--gray-color) !important;
					}

					#video.title {
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

					#like-bar {
						background: var(--white-color) !important;
					}

					#yt-channel-name-link {
						color: var(--white-color) !important;
					}

					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}

					#subscribe-text-link {
						color: black;
						background: white;
					}

					#comment-field {
						background-color: rgba(255, 255, 255, 0.1);
					}

					.menu-buttons {
						background-color: rgba(255, 255, 255, 0.1) !important;
					}

					.menu-buttons-text, .button-text-style {
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

					.button-border {
						border-left: 1px solid rgba(255, 255, 255, 0.1) !important;
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
						background: rgba(255, 255, 255, 0.1);
					}

					#border-top-metadata,
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}

					#comment-section {
						background: rgba(255, 255, 255, 0.1) !important;
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

		return;
	} else {
		console.log("the devtools_dark theme is already applied");
		DebugJS.console.log("info", "the devtools_dark theme is already applied");
	}

	if (colorOption == "lightmode") {
		_check();

		console.log("not implemented yet, sorry!");
		DebugJS.console.log("warning", "not implemented yet, sorry!");

		return;
	}
}
