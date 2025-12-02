// code source: https://stackoverflow.com/a/50812705

var scriptindex = {
	html: [
		{
			tag: 0,
			reference: "ytInitialPlayerResponse"
		},
		{
			tag: 26,
			reference: "ytInitialData"
		}
	]
}

fetch(`https://www.youtube.com/watch?v=${global_data.v}&app=desktop`) // use the desktop html for more data with "&app=desktop"
	.then(response => {
		return response.text();
	})
	.then(html => {
		// Initialize the DOM parser
		const parser = new DOMParser();

		// Parse the text
		ythtml = parser.parseFromString(html, "text/html"); // don't declare as const so it can be exposed

		//console.log(ythtml); // uncomment for quick inspecting

		setTimeout(function() {
			var _ytInitialPlayerResponse = ythtml.querySelectorAll("html > body > script")[scriptindex.html[0].tag].innerHTML;
			setyipr = document.createElement("script");
			setyipr.setAttribute("id", "ytInitialPlayerResponse");
			setyipr.innerHTML = _ytInitialPlayerResponse;
			document.head.insertBefore(setyipr, document.head.children[0]);
		}, 2100);

		setTimeout(function() {
			document.querySelector("#ytInitialPlayerResponse").remove();
			var _ytInitialData = ythtml.querySelectorAll("html > body > script")[scriptindex.html[1].tag].innerHTML;
			setyid = document.createElement("script");
			setyid.setAttribute("id", "ytInitialData");
			setyid.innerHTML = _ytInitialData;
			document.head.insertBefore(setyid, document.head.children[0]);
		}, 2200);

		setTimeout(function() {
			document.querySelector("#ytInitialData").remove();
		}, 2260);

		setTimeout(function() {
			global_data.yt.commentCount = parseInt(ytInitialData.engagementPanels[0].engagementPanelSectionListRenderer.header.engagementPanelTitleHeaderRenderer.contextualInfo.runs[0].text);
			global_data.yt.onlineProfilePicture = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails[2].url;
			global_data.yt.descriptionText = ytInitialPlayerResponse.videoDetails.shortDescription;
			global_data.yt.subscriberCount = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText.simpleText;
			
			if (ytInitialData.engagementPanels[3].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer == null) {
				global_data.yt.uploadMonthDay = ytInitialData.engagementPanels[5].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.label.simpleText;
			} else {
				global_data.yt.uploadMonthDay = ytInitialData.engagementPanels[3].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.label.simpleText;
			}
			
			if (ytInitialData.engagementPanels[5] == null) {
				global_data.yt.uploadYear = ytInitialData.engagementPanels[3].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.value.simpleText;
			} else {
				global_data.yt.uploadYear = ytInitialData.engagementPanels[5].engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items[0].videoDescriptionHeaderRenderer.factoid[2].factoidRenderer.value.simpleText;
			}
			
			global_data.yt.uploadedYearsAgo = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.relativeDateText.simpleText;
			global_data.yt.videoId = ytInitialPlayerResponse.videoDetails.videoId;
			global_data.yt.viewCount = parseInt(ytInitialPlayerResponse.videoDetails.viewCount);
			
			global_data.yt.viewCountFormatted = ytInitialData.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.shortViewCount.simpleText;
		}, 2300);
	})
.catch(error => {
	console.error(`Failed to fetch html from https://www.youtube.com/watch?v=${global_data.v}&app=desktop`);
})
