mainmessage = "You are now watching: ";
WelcomeMessage = "Welcome to Basic HTML Player!\nEnjoy watching!\n\nBasic HTML Player, a player built for all browsers.";

alert(WelcomeMessage);
alert(mainmessage + ytVideoTitle);

setTimeout(function() {
	console.log("alert output: " + WelcomeMessage);
	console.log("alert output: " + mainmessage + ytVideoTitle);
}, 5000);