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
					
					.sidebar-icon {
						fill: var(--white-color);
					}
					
					#video-metadata.video-metadata-renderer {
						color: var(--gray-color) !important;
					}
					
					#video.title {
						font-weight: 500;
						color: var(--white-color);
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
					
					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}
					
					.menu-buttons-text {
						color: var(--white-color);
						font-weight: 500;
					}
					
					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button[aria-pressed=true] #dislike-count-renderer {
						color: var(--white-color) !important;
					}
					
					#dislike-button[aria-pressed=true], #dislikebutton-icon > div > div > svg {
						fill: var(--white-color);
					}
					
					.menu-buttons {
						fill: var(--white-color);
					}
					
					.menu-buttons:hover {
						cursor: pointer;
					}
					
					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}
					
					#button-border {
						background: rgba(255, 255, 255, 0.1);
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
					
					.watch-card {
						background-color: rgba(255, 255, 255, 0.05);
					}
					
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
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
					
					#video-date-published {
						color: var(--white-color);
					}
					
					.misc-buttons {
						border: 1px solid rgba(255, 255, 255, 0.1);
						background: rgba(255, 255, 255, 0.05);
					}
					
					.misc-buttons:hover {
						border: 1px solid rgba(255, 255, 255, 0.23);
						background: rgba(255, 255, 255, 0.12);
					}
					
					.misc-buttons:active {
						border: 1px solid rgba(255, 255, 255, 0.12);
						background: rgba(255, 255, 255, 0.07);
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
						background: var(--main-bankground-color) !important;
						border-bottom: 1px solid rgb(48, 48, 48);
					}
					
					#app-title-text {
						color: var(--white-color);
					}
					
					.sidenav {
						background: #262626 !important;
					}
					
					.sidenav a:hover {
						background: #262626 !important;
						color: var(--gray-color) !important;
					}
					
					.sidenav a:active {
						background: rgba(30, 124, 255, 0.15) !important;
						color: dodgerblue !important;
					}
					
					.sidebar-icon {
						fill: var(--white-color);
					}
					
					#video-metadata.video-metadata-renderer {
						color: var(--gray-color) !important;
					}
					
					#video.title {
						font-weight: 500;
						color: var(--white-color);
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
					
					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}
					
					.menu-buttons-text {
						color: var(--white-color);
						font-weight: 500;
					}
					
					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button[aria-pressed=true] #dislike-count-renderer {
						color: var(--white-color) !important;
					}
					
					#dislike-button[aria-pressed=true], #dislikebutton-icon > div > div > svg {
						fill: var(--white-color);
					}
					
					.menu-buttons {
						fill: var(--white-color);
					}
					
					.menu-buttons:hover {
						cursor: pointer;
					}
					
					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}
					
					#button-border {
						background: rgba(255, 255, 255, 0.1);
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
					
					.watch-card {
						background-color: rgba(255, 255, 255, 0.07);
					}
					
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
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
					
					#video-date-published {
						color: var(--white-color);
					}
					
					.misc-buttons {
						border: 1px solid rgba(255, 255, 255, 0.1);
						background: rgba(255, 255, 255, 0.05);
					}
					
					.misc-buttons:hover {
						border: 1px solid rgba(255, 255, 255, 0.23);
						background: rgba(255, 255, 255, 0.12);
					}
					
					.misc-buttons:active {
						border: 1px solid rgba(255, 255, 255, 0.12);
						background: rgba(255, 255, 255, 0.07);
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
						background: var(--main-bankground-color) !important;
						border-bottom: 1px solid rgb(48, 48, 48);
					}
					
					#app-title-text {
						color: var(--white-color);
					}
					
					.sidenav {
						background: #383838 !important;
					}
					
					.sidenav a {
						color: #9b9b9b !important;
					}
					
					.sidenav a:hover {
						background: #484848 !important;
						color: var(--gray-color) !important;
					}
					
					.sidenav a:active {
						background: rgba(30, 124, 255, 0.15) !important;
						color: dodgerblue !important;
					}
					
					.sidebar-icon {
						fill: var(--white-color);
					}
					
					#video-metadata.video-metadata-renderer {
						color: var(--gray-color) !important;
					}
					
					#video.title {
						font-weight: 500;
						color: var(--white-color);
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
					
					.menu-buttons:active {
						border: 1px solid rgb(64, 64, 64) !important;
						background-color: rgb(47, 47, 47) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}
					
					.menu-buttons-text {
						color: var(--white-color);
						font-weight: 500;
					}
					
					#like-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
					}
					
					#dislike-button[aria-pressed=true] #dislike-count-renderer {
						color: var(--white-color) !important;
					}
					
					#dislike-button[aria-pressed=true], #dislikebutton-icon > div > div > svg {
						fill: var(--white-color);
					}
					
					.menu-buttons {
						fill: var(--white-color);
					}
					
					.menu-buttons:hover {
						cursor: pointer;
					}
					
					.menu-buttons:active {
						background-color: rgba(255, 255, 255, 0.3) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
					}
					
					#button-border {
						background: rgba(255, 255, 255, 0.1);
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
					
					.watch-card {
						background-color: rgba(255, 255, 255, 0.08);
					}
					
					#border-bottom-metadata {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
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
					
					#video-date-published {
						color: var(--white-color);
					}
					
					.misc-buttons {
						border: 1px solid rgba(255, 255, 255, 0.1);
						background: rgba(255, 255, 255, 0.05);
					}
					
					.misc-buttons:hover {
						border: 1px solid rgba(255, 255, 255, 0.23);
						background: rgba(255, 255, 255, 0.12);
					}
					
					.misc-buttons:active {
						border: 1px solid rgba(255, 255, 255, 0.12);
						background: rgba(255, 255, 255, 0.07);
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
