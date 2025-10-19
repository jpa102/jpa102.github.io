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

you can add the view-source: at every beginning of a youtube video link to get the data from there

# comments

## why only copy paste the video id? why not use the full youtube video link?

i designed it that way. i think full youtube video links are overrated, why not something that's a little bit complicated and "unique"? *(kind of like entering a product key to activate windows)*

## why does it resemble the layouts from youtube?

again, i designed it that way, they are either inspired or i try to make a roughly "accurate" layout for fun. i get the designs from wayback machine

## why do you use the html embed for youtube videos?

it's convenient for me to use that way, i don't even know how get the actual youtube player and the video itself without relying on embedding yet...

## why do you use json files for the description, comment counts, etc... ? isn't it more time-consuming and impractical?

i don't know yet how to get them without relying on the view-source and grabbing all the necessary data from there. i did manage to get the video titles and channel names from [noembed.com](https://www.noembed.com) though which is what i currently use

i think this can be useful for archiving purposes such as when a video gets taken down for example and all you have is the youtube video link for it

## credit

https://returnyoutubedislikeapi.com - for the api and the code responsible for rounding down int values

https://www.w3schools.com - sidebar *(shouldn't have included this but this is where i got it)*

unofficial credit to https://www.youtube.com for the icons

https://web.archive.org - for archived youtube video pages with the relevant layout
