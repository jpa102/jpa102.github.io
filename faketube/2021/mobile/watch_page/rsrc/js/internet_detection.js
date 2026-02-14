/*
	internet_detection.js
	
	module that detects internet connection
	i got this from google's ai search code box
*/

window.addEventListener('online', (event) => {
	console.log(global_data._watch_page_strings._stored_vars.back_online_text_inject);
	document.querySelector("#status-text").innerText = global_data._watch_page_strings._stored_vars.back_online_text_inject;
	setTimeout(() => {
		document.querySelector("#internet-status-bottom").style = "transform: translateY(32px);";
		document.querySelector("#status-text").style = "background: #2ba640";
	}, __faketube_wtchpge_intrnt_btm_notif_clpse_ms);
});

window.addEventListener('offline', (event) => {
	console.log(global_data._watch_page_strings._stored_vars.no_internet_connection_text_inject);
	document.querySelector("#status-text").innerText = global_data._watch_page_strings._stored_vars.no_internet_connection_text_inject;
	setTimeout(() => {
		document.querySelector("#internet-status-bottom").style = "transform: translateY(0px);";
		document.querySelector("#status-text").removeAttribute("style");
	}, __faketube_wtchpge_intrnt_btm_notif_apr_ms);
});
