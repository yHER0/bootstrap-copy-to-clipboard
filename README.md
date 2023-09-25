# Bootstrap5 copy-to-clipboard

<div align="center">
    <img src="https://i.imgur.com/zhq6pcg.png" alt="Logo" width="500" height="130">
  </a>
</div>

Easily create flexible copy-to-clipboard with a tooltip for your Bootstrap5 website, create them statically or dynamically in runtime with JavaScript. [Here](https://i.imgur.com/NkyV9YD.mp4) is an example gif.

## Usage
You can create three different clipboards statically with HTML or dynamically with JavaScript.   
[Textfield + Button](https://camo.githubusercontent.com/4f696012e4c9b09a0ef217e326bc4e164bb7a2175b7ddc24ccffed568ba58a43/68747470733a2f2f692e696d6775722e636f6d2f7a6871367063672e706e67), [Textarea + Button](https://i.imgur.com/qrOCSb9.png), [span with Text click to copy](https://i.imgur.com/wwpQudg.png)

### HTML
Textfield with a button to copy:
```html
<div class="copy-link form-group">
    <input type="text" class="copy-link-input form-control" value="Insert your text to copy" readonly>
    <button type="button" class="copy-link-button" >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
    </button>
</div>
```
Text (span) which can be copied on click:
```html
<span class="span-copy-link" data-value="This text will be copied">This text will be shown</span>
```

### JavaScript
```javascript
const clipboard = new_copy_clipboard("This text will be copied")
document.body.appendChild(clipboard)

const span = new_span_copy_clipboard("This text will be shown", "This text will be copied")
document.body.appendChild(span)
```
---
### Change the clipboards
You can define these things for your clipboard: 
- `title` ➡️ Set the text (Tooltip Title) which appears at the tooltip; default = "Copied!" [str]
- `action` ➡️ Set if the text gets only copied, or if the text gets cut; default = "copy"  ["copy"/"cut"]
- `textarea` ➡️ Set whether the text is in a textfield or textarea; default = false [true/false]


#### Change with JavaScript
```javascript
const clipboard = new_copy_clipboard("This text will be copied\nNew Line", title = "Text Copied!", action = "cut", textarea = true)
document.body.appendChild(clipboard)
```
For the span you can only change the title:
```javascript
const span = new_span_copy_clipboard("This text will be shown", "This text will be copied", title="Text Copied!")
```

#### Change with HTML
In the first three lines you can change the default settings for clipboards created with HTML.
```javascript
const _TITLE = "Copied!"
const _ACTION = "copy"
const _TEXTAREA = false
```
If you want to have a textarea instead of a textfield you need to remove `<input type="text" class="copy-link-input form-control" value="Insert your text to copy" readonly>` and insert this:
```html
<textarea class="copy-link-input form-control text-area" readonly>Text to copy&#10;New Line to copy</textarea>
```
---
### Dependencies
It uses jQuery, Vanilla JS, Bootstrap5 and individual CSS-code.
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
<link rel="stylesheet" href="clipboard-styles.css">

<script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
```

## Help
Create a [Discussion](https://github.com/arber-hakaj/b5-copy-to-clipboard/discussions), if you need help.
