/*
	theme.js
	
	a javascript file that changes the page's theme
	currently, there are two options:
	
		black hole
		youtube's dark mode
	
	internal choices are: blackhole, darkmode
*/

function changeThemeDisplay_remove() {
	if (document.querySelector("#blackhole-theme") != null) {
		document.querySelector("#blackhole-theme").remove();
	}
	
	if (document.querySelector("#dark-mode-theme") != null) {
		document.querySelector("#dark-mode-theme").remove();
	}
}

function changeThemeDisplay(colorOption) {
	if (colorOption == null) { return; }
	
	if (colorOption == "blackhole" && document.querySelector("#blackhole-theme") == null) {
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
						border: 1px solid transparent !important;
						background-color: rgba(255,255,255,0.1) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}
					
					#like-button:active {
						border: 1px solid transparent !important;
						background-color: rgba(255,255,255,0.1) !important;
					}
					
					#dislike-button:active {
						border: 1px solid trnasparent !important;
						background-color: rgba(255,255,255,0.1) !important;
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
					
					#border-top-metadata {
						border-bottom: 1px solid rgb(48, 48, 48) !important;
					}
					
					#border-bottom-metadata {
						border-bottom: 1px solid rgb(48, 48, 48) !important;
					}
					
					#recommendations-page {
						border: 1px solid rgb(48, 48, 48) !important;
					}
					
					#border-bottom {
						border-bottom: 1px solid rgb(48, 48, 48) !important;
					}
					
					#comment-counts {
						color: var(--white-color) !important;
					}
					
					#recommendations-text {
						color: var(--white-color) !important;
					}
				</style>
			`
		);
	} else {
		console.log("the blackhole theme is already applied");
	}
	
	if (colorOption == "darkmode" && document.querySelector("#dark-mode-theme") == null) {
		changeThemeDisplay_remove();
		document.querySelector("head").insertAdjacentHTML(
			"beforeend",
			`
				<style id="dark-mode-theme">
					:root {
						--main-background-color: #181818;
						--white-color: white;
						--gray-color: #adadad;
					}
					
					body {
						background: var(--main-background-color) !important;
					}
					
					#topbar {
						background: linear-gradient(to right, #262626 , #6a6a6a) !important;
					}
					
					#app-title-text {
						color: var(--white-color);
					}
					
					.sidenav {
						background: #282828 !important;
					}
					
					.sidenav a:hover {
						background: #3a3a3a !important;
						color: var(--gray-color) !important;
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
						border: 1px solid transparent !important;
						background-color: rgba(255,255,255,0.1) !important;
						transition: .2s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
					}
					
					#like-button:active {
						border: 1px solid transparent !important;
						background-color: rgba(255,255,255,0.1) !important;
					}
					
					#dislike-button:active {
						border: 1px solid transparent !important;
						background-color: rgba(255,255,255,0.1) !important;
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
					
					#border-top-metadata {
						border-bottom: 1px solid rgb(48, 48, 48) !important;
					}
					
					#border-bottom-metadata {
						border-bottom: 1px solid rgb(48, 48, 48) !important;
					}
					
					#recommendations-page {
						border: 1px solid rgb(48, 48, 48) !important;
					}
					
					#border-bottom {
						border-bottom: 1px solid rgb(48, 48, 48) !important;
					}
					
					#comment-counts {
						color: var(--white-color) !important;
					}
					
					#recommendations-text {
						color: var(--white-color) !important;
					}
				</style>
			`
		);
	} else {
		console.log("the dark mode theme is already applied");
	}
	
	if (colorOption == "lightmode") {
		changeThemeDisplay_remove();
	}
}
