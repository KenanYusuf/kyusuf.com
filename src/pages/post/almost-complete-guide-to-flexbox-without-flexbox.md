---
date: "2016-03-28"
title: "Almost complete guide to flexbox (without flexbox)"
thumbnail: "/images/flexbox-without-flexbox/thumbnail.png"
description: "Unfortunately, not everyone has a browser/device capable of viewing flexbox layouts. This is a cheatsheet-esque guide that offers backwards compatible alternatives to flexbox properties."
---
Whilst some of the CSS in this guide may seem obvious, I am looking to challenge the use of flexbox as well as provide simple solutions to problems were around before it became popular.

## flex-direction

### row
Displays items horizontally

![Example of flex-direction's row value](/images/flexbox-without-flexbox/flex-direction-row.png)

```css
.item {
  display: inline-block;
}
```

### row-reverse
Displays items horizontally in reverse order

![Example of flex-direction's row-reverse value](/images/flexbox-without-flexbox/flex-direction-row-reverse.png)

```css
.container {
  direction: rtl;
}

.item {
  display: inline-block;
}
```

### column
Displays items vertically

![Example of flex-direction's column value](/images/flexbox-without-flexbox/flex-direction-column.png)

```css
.item {
  display: block;
}
```

### column-reverse
Displays items vertically in reverse order

![Example of flex-direction's column-reverse value](/images/flexbox-without-flexbox/flex-direction-column-reverse.png)

```css
.container, .item {
  transform: scaleY(-1);
}

.item {
  display: block;
}
```

_Credit: [Vincent Valentin](https://twitter.com/htmlvv/status/717758817807777793)_

## flex-wrap

### nowrap
Squishes items to stop wrapping

![Example of flex-wrap's nowrap value](/images/flexbox-without-flexbox/flex-wrap-nowrap.png)

```css
.container {
  display: table;
}

.item {
  display: table-cell;
}
```

### wrap
Wraps items when altogether wider than container

![Example of flex-wrap's wrap value](/images/flexbox-without-flexbox/flex-wrap-wrap.png)

```css
.item {
  display: inline-block;
}
```

### wrap-reverse
Wraps items in reverse order when altogether wider than container

![Example of flex-wrap's wrap-reverse value](/images/flexbox-without-flexbox/flex-wrap-wrap-reverse.png)

```css
.container, .item {
  transform: scaleY(-1);
}

.item {
  display: inline-block;
}
```

## justify-content

### flex-start
Horizontally aligns items to start of container

![Example of justify-content's flex-start value](/images/flexbox-without-flexbox/justify-content-flex-start.png)

```css
.item {
  display: inline-block;
}
```

### flex-end
Horizontally aligns items to end of container

![Example of justify-content's flex-end value](/images/flexbox-without-flexbox/justify-content-flex-end.png)

```css
.container {
  text-align: right;
}

.item {
  display: inline-block;
}
```

### center
Horizontally aligns items to center of container

![Example of justify-content's center value](/images/flexbox-without-flexbox/justify-content-center.png)

```css
.container {
  text-align: center;
}

.item {
  display: inline-block;
}
```

### space-between
Spaces items between start and end of container

![Example of justify-content's space-between value](/images/flexbox-without-flexbox/justify-content-space-between.png)

```css
.container {
  text-align: justify;
}

.container:after {
  content: '';
  display: inline-block;
  width: 100%;
}

.item {
  display: inline-block;
}
```

_Note: This method only works with uncompressed HTML and requires a fixed height on the container_

### space-around
Spaces items with equidistant space

![Example of justify-content's space-around value](/images/flexbox-without-flexbox/justify-content-space-around.png)

```css
.container {
  display: table;
}

.item {
  display: table-cell;
  text-align: center;
}
```

## align-items

### flex-start
Vertically aligns items to start of container

![Example of align-items flex-start value](/images/flexbox-without-flexbox/align-items-flex-start.png)

```css
.item {
  display: inline-block;
}
```

### flex-end
Vertically aligns items to end of container

![Example of align-items flex-end value](/images/flexbox-without-flexbox/align-items-flex-end.png)

```css
.container {
  display: table;
}

.item {
  display: table-cell;
  vertical-align: bottom;
}
```

### center
Vertically aligns items to center of container

![Example of align-items center value](/images/flexbox-without-flexbox/align-items-center.png)

```css
.container {
  display: table;
}

.item {
  display: table-cell;
  vertical-align: middle;
}
```

### stretch
Vertically stretches items from start to end of container

![Example of align-items stretch value](/images/flexbox-without-flexbox/align-items-stretch.png)

```css
.item {
  display: inline-block;
  height: 100%;
}
```

## align-content

### flex-start
Vertically aligns items to start of container

![Example of align-content's flex-start value](/images/flexbox-without-flexbox/align-content-flex-start.png)

```css
.item {
  display: inline-block;
}
```

### flex-end
Vertically aligns items to end of container

![Example of align-content's flex-end value](/images/flexbox-without-flexbox/align-content-flex-end.png)

```css
.container {
  display: table-cell;
  vertical-align: bottom;
}

.item {
  display: inline-block;
}
```

### center
Vertically aligns items to center of container

![Example of align-content's center value](/images/flexbox-without-flexbox/align-content-center.png)

```css
.container {
  display: table-cell;
  vertical-align: middle;
}

.item {
  display: inline-block;
}
```

## flex items

### flex-grow
Grows an item to fill remaining space

![Example of the flex-grow property](/images/flexbox-without-flexbox/flex-items-flex-grow.png)

```css
.container {
  display: table;
}

.item {
  display: table-cell;
}

.item.grow {
  width: 100%;
}
```

### flex-shrink
Shrinks an item and other items fill remaining space

![Example of the flex-shrink property](/images/flexbox-without-flexbox/flex-items-flex-shrink.png)

```css
.container {
  display: table;
}

.item {
  display: table-cell;
}

.item.shrink {
  width: 1px;
}
```

### align-self
Shrinks an item and other items fill remaining space

![Example of the align-self property](/images/flexbox-without-flexbox/flex-items-align-self.png)

```css
.container {
  display: table;
}

.item {
  display: table-cell;
}

.item.bottom {
  vertical-align: bottom;
}
```
