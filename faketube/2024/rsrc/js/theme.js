/*
	theme.js
	
	a javascript file that changes the page's theme
	currently, there are three options:
	
		black hole
		youtube's dark mode
		2021 youtube dark mode
	
	internal choices are: blackhole, darkmode, legacydarkmode
*/

function changeThemeDisplay_remove() {
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
	
	if (colorOption == "blackhole") {
		changeThemeDisplay_remove();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="blackhole-theme">
					:root {
						--main-background-color: black;
						--white-color: white;
						--gray-color: #adadad;
					}
					
					body {
						background: var(--main-background-color) !important;
					}
					
					#topbar {
						background: var(--main-background-color) !important;
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
					
					#video-view-counts-and-date {
						color: var(--gray-color) !important;
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
					
					#yt-channel-link {
						color: var(--white-color) !important;
					}
					
					.yt-channel-sub-count {
						color: var(--gray-color);
					}
					
					#subscribe-button {
						background: white;
					}
					
					#subscribe-button:hover {
						background: rgba(255, 255, 255, 0.9) !important;
					}
					
					#subscribe-button:active {
						background: rgba(255, 255, 255, 0.8) !important;
					}
					
					#subscribe-text-renderer {
						color: black !important;
					}
					
					.menu-buttons-text {
						color: var(--white-color) !important;
					}
					
					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}
					
					#like-button {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					#like-button:hover {
						background-color: rgba(255, 255, 255, 0.2);
					}
					
					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					#dislike-button:hover {
						background-color: rgba(255, 255, 255, 0.2);
					}
					
					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					icon-shape > div {
						fill: var(--white-color) !important;
					}
					
					.menu-buttons {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					.menu-buttons:hover {
						background-color: rgba(255, 255, 255, 0.2);
						cursor: pointer;
					}
					
					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}
					
					#button-border {
						background: rgba(255, 255, 255, 0.1);
					}
					
					div > svg {
						fill: var(--white-color);
					}
					
					#expand-description-button {
						color: var(--gray-color) !important;
					}
					
					#expand-description-button:active {
						background: rgba(255, 255, 255, 0.3) !important;
					}
					
					.grouped-text-renderer {
						color: var(--white-color);
					}
					
					#description-title {
						color: var(--white-color) !important;
					}
					
					#description-text {
						color: var(--gray-color) !important;
					}
					
					.loading-video-thumbnails {
						background: rgba(255, 255, 255, 0.2);
					}
					
					.video-title-skeleton, .video-author-skeleton {
						background: rgba(255, 255, 255, 0.2);
					}
					
					.rounded-cards {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					.border-bottom {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}
					
					#video-metadata-info-container > .border-bottom {
						border-bottom: 1px solid rgb(48, 48, 48) !important;
					}
					
					#comment-counts {
						color: var(--white-color) !important;
					}
					
					#recommendations-text {
						color: var(--white-color) !important;
					}
					
					#more-button {
						color: var(--white-color);
					}
					
					#more-settings-and-sign-in-button > #more-button:hover {
						background: rgba(255, 255, 255, 0.2);
					}
					
					#more-settings-and-sign-in-button > #sign-in-button {
						border: 1px solid rgba(255, 255, 255, 0.2);
					}
					
					#more-settings-and-sign-in-button > #sign-in-button:hover {
						background: rgba(255, 255, 255, 0.2);
					}
					
					#description-text {
						border-left: 4px solid rgba(255, 255, 255, 0.1) !important;
						border-right: 4px solid rgba(255, 255, 255, 0.1) !important;
					}
				</style>
			`
		);
	} else {
		console.log("the blackhole theme is already applied");
	}
	
	if (colorOption == "darkmode") {
		changeThemeDisplay_remove();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="dark-mode-theme">
					:root {
						--main-background-color: #0f0f0f;
						--white-color: white;
						--gray-color: #adadad;
					}
					
					body {
						background: var(--main-background-color) !important;
					}
					
					#topbar {
						background: var(--main-background-color) !important;
						border-bottom: 1px solid rgb(48, 48, 48);
					}
					
					#app-title-text {
						color: var(--white-color);
					}
					
					.sidenav {
						background: #242424 !important;
					}
					
					.sidenav a:hover {
						background: rgba(255, 255, 255, 0.13) !important;
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
					
					#yt-channel-link {
						color: var(--white-color) !important;
					}
					
					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}
					
					a.yt-channel-sub-count:hover {
						color: #eb4646 !important;
					}
					
					.menu-buttons-text {
						color: var(--white-color) !important;
					}
					
					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}
					
					#like-button {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					#like-button:hover {
						background-color: rgba(255, 255, 255, 0.2);
					}
					
					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					#dislike-button:hover {
						background-color: rgba(255, 255, 255, 0.2);
					}
					
					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					icon-shape > div {
						fill: var(--white-color) !important;
					}
					
					.menu-buttons {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					.menu-buttons:hover {
						background-color: rgba(255, 255, 255, 0.2);
						cursor: pointer;
					}
					
					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}
					
					#button-border {
						background: rgba(255, 255, 255, 0.1);
					}
					
					div > svg {
						fill: var(--white-color);
					}
					
					#expand-description-button {
						color: var(--gray-color) !important;
					}
					
					#description-title {
						color: var(--white-color) !important;
					}
					
					#description-text {
						color: var(--gray-color) !important;
					}
					
					.loading-video-thumbnails {
						background: rgba(255, 255, 255, 0.2);
					}
					
					.video-title-skeleton, .video-author-skeleton {
						background: rgba(255, 255, 255, 0.2);
					}
					
					.rounded-cards {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					#border-bottom {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}
					
					#comment-counts {
						color: var(--white-color) !important;
					}
					
					#recommendations-text {
						color: var(--white-color) !important;
					}
					
					#more-button {
						color: var(--white-color);
					}
					
					#description-text {
						border-left: 4px solid rgba(255, 255, 255, 0.1) !important;
						border-right: 4px solid rgba(255, 255, 255, 0.1) !important;
					}
				</style>
			`
		);
	} else {
		console.log("the dark mode theme is already applied");
	}
	
	if (colorOption == "legacydarkmode") {
		changeThemeDisplay_remove();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="legacy-dark-mode-theme">
					:root {
						--main-background-color: #212121;
						--white-color: white;
						--gray-color: #adadad;
					}
					
					body {
						background: var(--main-background-color) !important;
					}
					
					#topbar {
						background: var(--main-background-color) !important;
						border-bottom: 1px solid rgb(48, 48, 48);
					}
					
					#app-title-text {
						color: var(--white-color);
					}
					
					.sidenav {
						background: #363636 !important;
					}
					
					.sidenav a:hover {
						background: rgba(255, 255, 255, 0.15) !important;
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
					
					#yt-channel-link {
						color: var(--white-color) !important;
					}
					
					a.yt-channel-sub-count {
						color: var(--gray-color) !important;
					}
					
					a.yt-channel-sub-count:hover {
						color: #eb4646 !important;
					}
					
					.menu-buttons-text {
						color: var(--white-color) !important;
					}
					
					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}
					
					#like-button {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					#like-button:hover {
						background-color: rgba(255, 255, 255, 0.2);
					}
					
					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					#dislike-button:hover {
						background-color: rgba(255, 255, 255, 0.2);
					}
					
					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					div > svg {
						fill: var(--white-color);
					}
					
					.menu-buttons {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					.menu-buttons:hover {
						background-color: rgba(255, 255, 255, 0.2);
						cursor: pointer;
					}
					
					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}
					
					#button-border {
						background: rgba(255, 255, 255, 0.1);
					}
					
					.yt-spec-button-shape-next__icon > div {
						fill: var(--white-color) !important;
					}
					
					#expand-description-button {
						color: var(--gray-color) !important;
					}
					
					#description-title {
						color: var(--white-color) !important;
					}
					
					#description-text {
						color: var(--gray-color) !important;
					}
					
					.loading-video-thumbnails {
						background: rgba(255, 255, 255, 0.2);
					}
					
					.video-title-skeleton, .video-author-skeleton {
						background: rgba(255, 255, 255, 0.2);
					}
					
					.rounded-cards {
						background-color: rgba(255, 255, 255, 0.1);
					}
					
					#border-bottom {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
					}
					
					#comment-counts {
						color: var(--white-color) !important;
					}
					
					#recommendations-text {
						color: var(--white-color) !important;
					}
					
					#more-button {
						color: var(--white-color);
					}
					
					#description-text {
						border-left: 4px solid rgba(255, 255, 255, 0.1) !important;
						border-right: 4px solid rgba(255, 255, 255, 0.1) !important;
					}
				</style>
			`
		);
	} else {
		console.log("the legacy dark mode theme is already applied");
	}
	
	if (colorOption == "lightmode") {
		changeThemeDisplay_remove();
	}
}
