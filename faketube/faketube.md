# FakeTube

a simple site for viewing youtube videos in embedded format

## how does it work?

simply get the 11-character video id from the url (example: https://youtube.com/watch?v=wTHJ_V96lFQ) and paste it in the dialog form box to watch it

when a valid video id is entered, it will fetch not only the youtube video, but also various data like the title, views, likes and dislikes, and others which feels like you're watching it from the official youtube site

## where does it get the other data?

aside from it getting the video from youtube of course, it gets the data from the following:

* [noembed.com](https://noembed.com) (video title, channel name, channel link)
* [returnyoutubedislikeapi.com](https://returnyoutubedislikeapi.com) (likes, dislikes, and view counts)

optionally, i add metadata files to display the following:

* date uploaded
* rounded subscriber counts
* description texts
* channel's profile picture
* comment counts (either from https://www.googleapis.com or from https://www.youtube.com/watch page)

metadata files can be either created by me or other users who request / create metadata files themselves for videos that they like

they can be found here: https://github.com/jpa102/jpa102.github.io/tree/main/faketube/metadata

## credit

https://returnyoutubedislikeapi.com - for the api and the code responsible for rounding down int values

https://www.w3schools.com - sidebar *(shouldn't have included this but this is where i got it)*

unofficial credit to https://www.youtube.com for the icons
