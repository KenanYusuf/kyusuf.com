---
date: "2016-11-04"
title: "Mailto links: Letting the user decide"
thumbnail: "/images/mailto-alternative/thumbnail.png"
description: "There has been a bit of talk recently about mailto links, more specifically how to block them from opening your age old email client. There are occasions where mailto links are exactly what I want, especially useful when they fill out a long email address or subject line for me. However, in general, I would rather just use the Gmail web client… and I'm not alone."
---
One of the mailto blocking tools was created by [Matt Downing](https://twitter.com/mattcdowning), and comes in the form of [a Google Chrome extension called NoMailto:](https://chrome.google.com/webstore/detail/nomailto/kpjfofodmdaoclidmbinmjeihnokblej). If a mailto link is sniffed out, NoMailto: will prompt you and ask if you would like to copy the email address or open your default email client.

![NoMailto: blocking a mailto link](/images/mailto-alternative/nomailto.gif)
_NoMailto: blocking a mailto link_

Mailto links wouldn't be too much of an issue if you always knew that you were clicking them - the problem is that quite often they have generic _contact_ themed wording. For example, some sites have a link in the navigation that says _Contact me_ or _Get in touch_. If I were to click on one of those links, I would expect to be taken to a contact page, not have Outlook pop up.

## The solution

So there are a couple of things we can do to prevent users from getting frustrated. The first thing is if using mailto links, make it obvious to the user that that is what you are doing. Instead of having the link text as _Contact me_, you could write _Send me an email_ or even just have the email address: _example@gmail.com_. May not be as nice on the eye, but saves your user having to sync Apple Mail for an hour.

The second and perhaps more important part of this all is giving users the option. Much like the NoMailto: extension, once the user has clicked a _contact_ themed link, give them a choice of either copying the email address to their clipboard or opening their default email app. What if users don't have a default email application? Well, you could even give users a convenient button to open their favourite webmail client.

## Demo

Based on my thoughts and experience with the issues of mailto links, I have created a demo that explores the ideas mentioned in the solution above.

<iframe src="https://codier.io/embed/BJlS3I9x4?tab=preview" style="width: 100%; height: 600px; border: 1px solid #D3D3D3;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" scrolling="no"></iframe>

Have you seen any applications of handling mailto links well? If so, let me know in the comments below or tweet at me [@KebabYusuf](https://twitter.com/KebabYusuf).
