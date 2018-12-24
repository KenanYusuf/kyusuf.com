---
date: "2018-01-11"
title: "A brief look at HTML 5.2 Dialog"
thumbnail: "/images/html-dialog/thumbnail.png"
description: "HTML Dialog has been hanging around for awhile, but until recently, was not part of W3C’s recommended spec. Now that major browsers have started to support the dialog element, we are likely to see it being used more widely. This article takes a brief look at how we use dialogs, why the new element is needed and how it can be used today."
---
## What is a dialog?

Dialogs are a design pattern that can be used in many ways, including, but not limited to: displaying important information, requesting a choice from a user or expanding on an existing piece of content. Although dialogs can take form in different ways, they are most commonly implemented as modals; isolated from other content in an overlay.

## Why is the dialog element needed?

Up until the release of the new element, to implement a dialog into a site you would have had to write it all from scratch or use an external library - there was no standard syntax or default styling for such component. A lack of standards meant that browsers and assistive technologies like screen readers could not differentiate dialog-related content from other page content by default.

To get around the accessibility issues, developers would have had to use aria attributes such as `role="dialog"` to describe the content within a dialog. Managing keyboard focus correctly is also important for accessibility with dialogs, for example, there must be at least one focusable control within the dialog. For a list of all of the accessibility requirements related to dialogs, check out [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role).

Some great libraries were created to make implementing accessible dialogs easier for developers, such as [A11y Dialog by Edenspiekermann](https://github.com/edenspiekermann/a11y-dialog). As well as such libraries, CSS frameworks like [Bootstrap](https://getbootstrap.com/docs/4.0/components/modal/) and [Foundation](https://foundation.zurb.com/sites/docs/reveal.html) put a lot of work into making their in-built modals/dialogs accessible.

Although these libraries and frameworks are still as relevant and useful today, having a native HTML element for dialogs ensures that there is the syntax, standards and accessibility that such a frequently used design pattern needs to be great for everyone. Also, having dialog logic built into browsers saves those precious bytes of code!

## Using the Dialog element

Now we understand why it is needed, let’s take a look at how we use the dialog element.

### HTML

The markup for a dialog element is as simple as wrapping some content in a `<dialog>` tag. In order to make the dialog functional, we need a button to open it, as well as a button to close or navigate away from it.

```html
<button type="button" class="js-open">Open Dialog</button>

<dialog class="js-dialog">
  <h2>Dialog heading</h2>
  <button type="button" class="js-close">Close Dialog</button>
</dialog>
```

To have the dialog open by default, an open attribute can be added.

```html
<dialog open>
```

If your dialog contains a form, the form element should have a method attribute set to dialog.

```html
<form method="dialog">
```

### JavaScript

Without JavaScript, the dialog element will not be interactive. We can hook up the buttons and dialog element from the HTML example above to some click event listeners.

```javascript
const dialog = document.querySelector('.js-dialog')
const openButton = document.querySelector('.js-open')
const closeButton = document.querySelector('.js-close')

openButton.addEventListener('click', () => {
  dialog.showModal()
})

closeButton.addEventListener('click', () => {
  dialog.close()
})
```

And that’s it, we have a working, native dialog!

### CSS

The default styling on the dialog element is not going to be to everyone’s taste… fortunately, we can style it with CSS.

```css
dialog {
  padding: 30px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
}
```

There is also a handy selector for the backdrop.
```css
dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
}
```

## Demo

Here is a demo of how the dialog element can be used.

<iframe src="https://codier.io/embed/rJoLKzufm?tab=preview" style="width: 100%; height: 400px; border: 1px solid #D3D3D3;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" scrolling="no"></iframe>

## Support

Way back in 2014, Chrome and Opera started supporting the dialog element and more recently, Chrome Android and the Samsung browser. It is also supported by Firefox but must be enabled through about:config. Despite a few of the major browsers not supporting dialog, there is a good [polyfill](https://github.com/GoogleChrome/dialog-polyfill) available.

[Can I Use dialog?](http://caniuse.com/#feat=dialog) Data on support for the dialog feature across the major browsers from caniuse.com.
