---
date: "2016-04-19"
title: "Another way of styling visited and unvisited links"
thumbnail: "/images/visited-links/thumbnail.png"
description: ""
---
Today I read an article called [the lost art of visited links](http://jgthms.com/the-lost-art-of-visited-links.html) that does a great job of explaining why we should not neglect visited link styles. What I didn’t realise until reading this article is just how limited visited link styling is.

By default, visited links are coloured purple. Unfortunately, `color` is one of the only CSS properties that we can use to alter the appearance - this is due to a [privacy issue](https://developer.mozilla.org/en/docs/Web/CSS/:visited) that enabled sites to use your visited links to form browsing history. Aside from `color`, your properties are limited to: `background-color`, `border-color`, `outline-color` and `column-rule-color`.

## Failed attempts

The limitations of styling `a:visited` elements inspired me to start thinking of alternative methods. One thing that sprung to mind was to use a general sibling selector to alter the sibling of a visited link, like this:

```css
a:visited ~ span {
  ...
}
```

But this doesn't work. I then attempted to style the `:before` and `:after` selectors of an `a:visited` element, like this:

```css
a:visited:after {
  content: "";
}
```

No luck.

## Somewhat of a success

I then decided to take a deeper look into the properties that I knew I could use for sure. After trying out various ways of showing and hiding things with `border-color`, I came up with this:

<iframe src="https://codier.io/embed/rJBZPL5xE?tab=preview" style="width: 100%; height: 400px; border: 1px solid #D3D3D3;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" scrolling="no"></iframe>

The markup is relatively simple, an ordered list with list items and anchors:

```html
<ol>
  <li><a href="#link1">Click on me and watch new disappear</a></li>
  <li><a href="#link2">Pretty cool eh? Try again here</a></li>
  <li><a href="#link3">One last try</a></li>
</ol>
```

Aside from the standard font properties, the CSS contains one very thick border and some magic numbers:

```css
li {
  margin-bottom: 20px;
  font-size: 40px;
  color: #cecece;
}

a {
  border-right: 60px solid #f44336;
  text-decoration: none;
  color: #2aa1c0;
}

a:after {
  content: 'NEW';
  position: absolute;
  padding: 2px 5px;
  border-width: 15px 5px 15px 15px;
  border-style: solid;
  border-color: #fff;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}

a:hover {
  border-color: #d32f2f;
  color: #0e647d;
}

a:visited,
a:visited:hover {
  border-color: #fff;
  color: #cecece;
}
```

Essentially, all that is happening is that we are showing and hiding the `NEW` element by changing the `border-color` on a visited link. The `:after` selector on the link uses it's own border to hide the colour that bleeds behind the `NEW` text.

The same method can be applied in reverse, to style visited links:

<iframe src="https://codier.io/embed/r1imSLcgV?tab=preview" style="width: 100%; height: 400px; border: 1px solid #D3D3D3;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" scrolling="no"></iframe>

This technique is extremely limited and should only be seen as an experiment. I’d be interesting in seeing other creative ways of styling visited and unvisited links - if you know of any, hit me up on twitter [@KebabYusuf](//twitter.com/KebabYusuf) or in the comments below.
