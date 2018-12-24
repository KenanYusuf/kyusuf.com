---
date: "2016-06-27"
title: "Completely CSS: Progressively collapsing navigation"
thumbnail: "/images/progressively-collapsing-nav/thumbnail.png"
description: "Not long ago, I became interested in how we can replace the hamburger menu and wrote that was relatively well received. One of the alternatives that I researched and really liked is known as a progressively collapsing navigation."
---
If you're confused as to what a progressively collapsing navigation is, I previously summarised it as a navigation that utilises space, prioritises visible items and keeps the optimal ‘desktop’ view for as long as possible. But read that [other post](/post/a-couple-of-alternatives-to-the-hamburger-menu) for more info.

All of the current applications of this type of navigation rely on JavaScript and like many other front-end developers, I am obsessed with cutting out JavaScript wherever possible. In this guide, I will show you how to create a progressively collapsing navigation with just HTML and CSS.

## Creating the structure

To start with, we'll create the structure of the navigation. I am using [BEM](http://getbem.com/naming/) to name my classes but feel free to name things as you wish. I have shoved a load of list items (stolen from the [BBC site](http://www.bbc.co.uk/)) in there to give us something to work with.

```html
<nav class="navigation">
  <input type="checkbox" id="more" aria-hidden="true" tabindex="-1" class="toggle"/>
  <div class="navigation__inner">
    <div class="navigation__logo"><a href="#" class="navigation__link">Local news</a></div>
    <ul class="navigation__list">
      <li class="navigation__item"><a href="#" class="navigation__link">News</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Sport</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Weather</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">TV</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Radio</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Travel</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Music</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Food</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Arts</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Earth</a></li>
      <li class="navigation__item"><a href="#" class="navigation__link">Local</a></li>
    </ul>
    <div class="navigation__toggle">
      <label for="more" aria-hidden="true" class="navigation__link">More</label>
    </div>
  </div>
</nav>
```

The markup itself isn't very complicated, though there is a controversial use of a checkbox; you'll notice in the HTML above that there is `checkbox` just before the `navigation__inner` element. This, along with the `label`, creates a toggleable menu and replicates a click event that we'd generally use JavaScript for.

Note: If this method really offends you, swap it out for a bit of JavaScript.

## Giving it style

Now we have the structure, we can do some clever things with CSS. I have added comments to any properties that I feel need further explanation.

```css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #e6e6e6;
  font-family: Helvetica, Arial, sans-serif;
}
.navigation {
  width: 100%;
  border-bottom: 1px solid #ccc;
  background: #fff;
  height: 50px /* Collapsed navigation height */;
}
.navigation__inner {
  display: flex;
  max-width: 900px;
  height: 50px /* Collapsed navigation height */;
  margin: 0 auto;
  overflow: hidden;
}
.toggle:checked ~ .navigation__inner {
  height: auto /* Full height when more is toggled */;
}
.navigation__link {
  display: block;
  padding: 0 20px;
  font-size: 14px;
  line-height: 50px /* Collapsed navigation height */;
  text-decoration: none;
  color: #000;
  cursor: pointer;
}
.navigation__link:hover {
  text-decoration: underline;
}
.navigation__logo {
  flex-shrink: 0 /* Stops logo collapsing */;
  align-self: flex-start /* Stops logo stretching with list */;
  border-left: 1px solid #ccc;
}
.navigation__logo .navigation__link {
  font-weight: bold;
}
.navigation__list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #ccc;
  border-top: 0;
  border-right: 0;
}
@media screen and (max-width: 400px) {
  .navigation__item {
    flex-basis: 100% /* Stops uneven wrapping */;
  }
}
.navigation__toggle {
  flex-shrink: 0 /* Stops more button collapsing */;
  background: #fff;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.navigation__toggle .navigation__link {
  position: relative;
  padding-right: 50px;
}
/* More button arrow */
.navigation__toggle .navigation__link:after {
  content: '';
  position: absolute;
  top: 22px;
  right: 20px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #000 transparent transparent transparent;
}
/* Flip the arrow when toggled */
.toggle:checked ~ .navigation__inner .navigation__toggle .navigation__link:after {
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent #000 transparent;
}
/* Hide the checkbox */
.toggle {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
```

To start with, it's worth pointing out that all this is doing is showing and hiding the overflowing list items - it's impossible to make CSS understand when something is not actually visible. By using flexbox, we can ensure that the `.navigation__logo` and `.navigation__toggle` are never shrunk, and therefore the list is forced to collapse.

## Demo

<iframe src="https://codier.io/embed/By5nOGOG7?tab=preview" style="width: 100%; height: 400px; border: 1px solid #D3D3D3;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" scrolling="no"></iframe>

## Known limitations

As with most pure CSS solutions, the functionality/styling is very limited. Also, it currently only works with [browsers that support flexbox](http://caniuse.com/#search=flexbox) - though I'm sure there are other methods.

The biggest issue with this method is that it will only work if there are always too many navigation items for the menu. As I previously mentioned, the CSS doesn't actually know that items are not visible, and therefore it is impossible to make the more button appear based on that. If this is functionality you require, check out [Vergil Penkov](https://twitter.com/vergilpenkov)'s [okayNav](https://github.com/VPenkov/okayNav) or [Matt Hojo](https://twitter.com/matt_hojo)'s [Responsive Unlimited Navigation](http://codepen.io/matthojo/pen/VjaWoo).
