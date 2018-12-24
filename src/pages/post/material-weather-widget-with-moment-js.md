---
date: "2016-02-11"
title: "Material weather widget with Moment.js"
thumbnail: "/images/weather-widget/thumbnail.png"
description: ""
---
Recently, I stumbled across a CodePen [demo](http://codepen.io/Jackthomsonn/pen/VedzwX) in which the creator used [OpenWeatherMap](http://openweathermap.org/api) and a [Geolocation](http://ip-api.com/) API to find a user's location and weather data. Inspired by this, I decided to expand upon his pen and create a weather widget with [Moment.js](http://momentjs.com/) that allows for multiple locations.

As this is just an experiment, I'm not going to create a step by step guide as to how I created it - it is far from perfect. However, I will briefly go over the general idea and how the two API's work together.

## How it's done

First of all, the widget checks whether the select box is in its default state, which if correct, will grab the user's geolocation data. When the select box is changed to something other than the user's location, the widget then takes the current value and throws it at the OpenWeatherMap API. Both APIs return JSON which contains the chosen location's latitude and longitude.

Using the coordinates, the widget once again looks at the OpenWeatherMap API and finds the local weather information. This data includes temperature, an icon code and a description of the weather which is then appended to elements within our HTML.

Moment.js comes into play when finding the location's time and date information. Fortunately, Moment.js and OpenWeatherMap both use the standard timezone format (Country/City) - stamping out any need to duplicate data. In a similar way to the weather information, the widget looks at that location's data and appends it to the appropriate element.

Some other trickery involved includes styling the widget differently depending on the time of day. This is highly inaccurate and could, in fact, use real dawn/dusk data provided by OpenWeatherMap - but that's for another day (feel free to figure this out).

## Demo

<iframe src="https://codier.io/embed/Sytc1UqxE?tab=preview" style="width: 100%; height: 400px; border: 1px solid #D3D3D3;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" scrolling="no"></iframe>
