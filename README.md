# Signature-Pad

## A signature pad for Salesforce (desktop & mobile)

![screenshot](https://i.imgur.com/wyBnjsm.png)

This utilizes an awesome project called signature_pad 🎩

You can see demos and much, much more there: [https://github.com/szimek/signature_pad](https://github.com/szimek/signature_pad)

## Usage

### API

``` javascript

// Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
this.template.querySelector('c-signature-pad').toDataURL(); // save image as PNG
this.template.querySelector('c-signature-pad').toDataURL("image/jpeg"); // save image as JPEG
this.template.querySelector('c-signature-pad').toDataURL("image/svg+xml"); // save image as SVG

// Draws signature image from data URL.
// NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
this.template.querySelector('c-signature-pad').fromDataURL("data:image/png;base64,iVBORw0K...");

// Returns signature image as an array of point groups
const data = this.template.querySelector('c-signature-pad').toData();

// Draws signature image from an array of point groups
this.template.querySelector('c-signature-pad').fromData(data);

// Clears the canvas
this.template.querySelector('c-signature-pad').clear();

// Returns true if canvas is empty, otherwise returns false
this.template.querySelector('c-signature-pad').isEmpty();

// Unbinds all event handlers
this.template.querySelector('c-signature-pad').off();

// Rebinds all event handlers
signaturePad.attach(); // had to change signature pad lib so this equates to ".on()"
```

### Options

backgroundColor

- (string) Color used to clear the background. Can be any color format accepted by `context.fillStyle`
- Defaults to `"rgba(0,0,0,0)"` (transparent black)
- Use a non-transparent color e.g. `"rgb(255,255,255)"` (opaque white) if you'd like to save signatures as JPEG images

penColor

- (string) Color used to draw the lines. Can be any color format accepted by `context.fillStyle`
- Defaults to `"black"`

You can set options during placement:

```html
<c-signature-pad
    pen-color="rgb(0,0,0)"
    background-color="rgb(255,255,255)"
></c-signature-pad>
```

### Tips and tricks

See much, much more on the underlying library\'s project @ [https://github.com/szimek/signature_pad](https://github.com/szimek/signature_pad)

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)

[Library](https://github.com/szimek/signature_pad) used also under the [MIT License](http://www.opensource.org/licenses/MIT)

---

coded while petting a 🐶 by [Jamie Smith](https://jsmith.dev)
