/*
	base code source: https://stackoverflow.com/a/50812705

	content_scraper.js v1.0
	my first take at scraping youtube's desktop html hehe
*/



var downloaded_youtube_html;
var scriptindex = {
	html: [
		{
			tagPositionIndex: 0,
			reference: "ytInitialPlayerResponse",
			remarks: "seems to be not changing so far"
		},
		{
			tagPositionIndex: 1,
			reference: "ytcfg",
			remarks: "this is volatile and can change at any time, might write a function that does the pathfinding automatically"
		},
		{
			tagPositionIndex: 11,
			reference: "ytcfg.set",
			remarks: "this is volatile and can change at any time, might write a function that does the pathfinding automatically"
		},
		{
			tagPositionIndex: 26,
			reference: "ytInitialData",
			remarks: "seems to be not changing so far"
		}
	]
}

async function _content_scraper(videoId) {
	// if a user calls this function without inputting a valid video id
	if (videoId == null) {
		console.log(`no video id provided, terminating...`);
		return;
	}

	/*
		todo: provide a functional cors related data so users don't have to use another browser with extension support

		await fetch(`https://www.youtube.com/watch?v=${videoId}&app=desktop`, {
				method: "HEAD",
				mode: "CORS",
				headers: {
					":authority": "www.youtube.com",
					":method": "GET",
					":path": `/watch?v=${videoId}&app=desktop`,
					":scheme": "https",
					"accept": "**",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": `${window.navigator.language},${window.navigator.language.slice(0, 2)},q=0.9`,
					"origin": null,
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "cross-site",
					"user-agent": `${navigator.userAgent}`,
					"Access-Control-Allow-Origin": "https://jpa102.github.io"
				}
			}) // use the desktop html for more data with "&app=desktop"
	*/

	// current implementation: this needs a cors extension for this fetch request to work
	// example of an extension: https://chrome.google.com/webstore/detail/lhobafahddgcelffkeicbaginigeejlf
	await fetch(`https://www.youtube.com/watch?v=${videoId}&app=desktop`) // use the desktop html for more data with "&app=desktop"
		.then(response => {
			return response.text();
		})
		.then(html => {
			// save a copy of the data to a variable - getYoutubeTranscript() function
			downloaded_youtube_html = html;

			// Initialize the DOM parser
			const parser = new DOMParser();

			// Parse the text
			const ythtml = parser.parseFromString(html, "text/html");

			//console.log(ythtml); // uncomment for quick inspecting

			setTimeout(function() {
				var _ytInitialPlayerResponse = ythtml.querySelectorAll("html > body > script")[scriptindex.html[0].tagPositionIndex].innerHTML;
				var setyipr = document.createElement("script");
				setyipr.setAttribute("id", "ytInitialPlayerResponse");
				setyipr.innerHTML = _ytInitialPlayerResponse;
				document.head.insertBefore(setyipr, document.head.children[0]);
	
				var _ytcfg = ythtml.querySelectorAll("html > head > script")[scriptindex.html[1].tagPositionIndex].innerHTML;
				var setcfg = document.createElement("script");
				setcfg.setAttribute("id", "ytcfg");
				setcfg.innerHTML = _ytcfg;
				document.head.insertBefore(setcfg, document.head.children[0]);
			}, __faketube_content_scraper_ytintlprms);

			setTimeout(function() {
				var _ytInitialData = ythtml.querySelectorAll("html > body > script")[scriptindex.html[3].tagPositionIndex].innerHTML;
				var setyid = document.createElement("script");
				setyid.setAttribute("id", "ytInitialData");
				setyid.innerHTML = _ytInitialData;
				document.head.insertBefore(setyid, document.head.children[0]);

				var __ytcfg = ythtml.querySelectorAll("html > head > script")[scriptindex.html[2].tagPositionIndex].innerText;
				var _setcfg = document.createElement("script");
				_setcfg.setAttribute("id", "data_ytcfg");
				_setcfg.innerHTML = __ytcfg;
				document.head.insertBefore(_setcfg, document.head.children[0]);
			}, __faketube_content_scraper_ytintldatams);

			setTimeout(function() {
				global_data.yt.viewCountFormatted = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.shortViewCount.simpleText; // moving at the top because it seems delayed?
				global_data.yt.viewCountFormattedFull = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.viewCount.simpleText; // moving at the top because it seems delayed?
				global_data.yt.uploadedYearsAgo = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.relativeDateText.simpleText; // moving at the top because it seems delayed?
				global_data.yt.uploadFormattedDate = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.dateText.simpleText; // moving at the top because it seems delayed?
				global_data.yt.channelId = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.externalChannelId;
				global_data.yt.channelLink = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.ownerProfileUrl;
				global_data.yt.channelSubConfirmLink = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.ownerProfileUrl + "?sub_confirmation=1";
				global_data.yt.commentCount = ytInitialData.engagementPanels[0].engagementPanelSectionListRenderer.header.engagementPanelTitleHeaderRenderer.contextualInfo.runs[0].text;
				global_data.yt.likeCount = parseInt(ytInitialPlayerResponse.microformat.playerMicroformatRenderer.likeCount);
				global_data.yt.channelName = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.ownerChannelName;
				global_data.yt.videoTitle = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.title.simpleText;
				global_data.yt.onlineProfilePicture = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails[2].url;
				global_data.yt.descriptionText = ytInitialPlayerResponse.videoDetails.shortDescription;
				global_data.yt.subscriberCount = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText.simpleText;
				global_data.yt.videoId = ytInitialPlayerResponse.videoDetails.videoId;
				global_data.yt.viewCount = parseInt(ytInitialPlayerResponse.videoDetails.viewCount);

				/*
					here comes the great wall of try catch blocks!
					yes, i know it's messy, but this should do for now (as if the raw data from youtube isn't messy enough already)

					the reason for this great wall is because the upload year, month and day are in 3 different sections depending on the type of video
				*/

				// attempt to get upload month and day text from 3 types of videos (regular, music, shorts)
				try {
					global_data.yt.uploadMonthDay = ytInitialData.engagementPanels[5].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.label.simpleText;
				} catch {
					// console.log(`failed to get month and day text from ytInitialData.engagementPanels[5]`);
				}
				try {
					global_data.yt.uploadMonthDay = ytInitialData.engagementPanels[4].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.label.simpleText;
				} catch {
					// console.log(`failed to get month and day text from ytInitialData.engagementPanels[4]`);
				}
				try {
					global_data.yt.uploadMonthDay = ytInitialData.engagementPanels[3].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.label.simpleText;
				} catch {
					// console.log(`failed to get month and day text from ytInitialData.engagementPanels[3]`);
				}



				// attempt to get upload year text from 3 types of videos (regular, music, shorts)
				try {
					global_data.yt.uploadYear = ytInitialData.engagementPanels[3].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.value.simpleText;
				} catch {
					// console.log(`failed to get year text from ytInitialData.engagementPanels[5]`);
				}
				try {
					global_data.yt.uploadYear = ytInitialData.engagementPanels[4].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.value.simpleText;
				} catch {
					// console.log(`failed to get year text from ytInitialData.engagementPanels[4]`);
				}
				try {
					global_data.yt.uploadYear = ytInitialData.engagementPanels[5].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.value.simpleText;
				} catch {
					// console.log(`failed to get year text from ytInitialData.engagementPanels[3]`);
				}

				global_data.uploaddate = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.uploadDate.slice(0, 10);
				global_data.uploadtime = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.uploadDate.slice(10);
				global_data.yt.innerMetadata.availableCountries = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.availableCountries;
				global_data.yt.innerMetadata.canonicalUrl = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.canonicalUrl;
				global_data.yt.innerMetadata.categoryType = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.category;
				global_data.yt.innerMetadata.hasYpcMetadata = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.hasYpcMetadata;
				global_data.yt.innerMetadata.isFamilySafe = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.isFamilySafe;
				global_data.yt.innerMetadata.isShortsEligible = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.isShortsEligible;
				global_data.yt.innerMetadata.publishDate = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.publishDate;
				global_data.yt.playbackStatus.playableInEmbed = ytInitialPlayerResponse.playabilityStatus.playableInEmbed;
				global_data.yt.playbackStatus.status = ytInitialPlayerResponse.playabilityStatus.status;
				global_data.yt.videoDetails.allowRatings = ytInitialPlayerResponse.videoDetails.allowRatings;
				global_data.yt.videoDetails.isCrawlable = ytInitialPlayerResponse.videoDetails.isCrawlable;
				global_data.yt.videoDetails.isLiveContent = ytInitialPlayerResponse.videoDetails.isLiveContent;
				global_data.yt.videoDetails.isOwnerViewing = ytInitialPlayerResponse.videoDetails.isOwnerViewing;
				global_data.yt.videoDetails.isPrivate = ytInitialPlayerResponse.videoDetails.isPrivate;
				global_data.yt.videoDetails.isUnlisted = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.isUnlisted;
				global_data.yt.videoDetails.isUnpluggedCorpus = ytInitialPlayerResponse.videoDetails.isUnpluggedCorpus;
				global_data.yt.videoDetails.keywords = ytInitialPlayerResponse.videoDetails.keywords;
				global_data.yt.videoDetails.lengthSeconds = ytInitialPlayerResponse.videoDetails.lengthSeconds;
				global_data.yt.videoDetails.thumbnails = ytInitialPlayerResponse.videoDetails.thumbnail.thumbnails;

				_volatile_votes.likeCount = global_data.yt.likeCount; // reset the like count to the scraped one
			}, __faketube_content_scraper_intlzedata);
		})
	.catch(error => {
		console.error(`Failed to fetch html from https://www.youtube.com/watch?v=${global_data.v}&app=desktop\nReason:`, error);
	})
}

_content_scraper(global_data.v);
