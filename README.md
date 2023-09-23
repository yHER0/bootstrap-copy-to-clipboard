# Bootstrap5 copy-to-clipboard
Easily create flexible copy-to-clipboard with a tooltip for your Bootstrap5 website, create them statically or dynamically in runtime with JavaScript.

## Usage
You can create clipboards statically with HTML or dynamically with JavaScript:

### HTML
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

### JavaScript
```javascript
const clipboard = new_copy_clipboard("This text will be copied");
document.body.appendChild(clipboard);
```
---
### Change the clipboards
You can define these things for your clipboard: 
- `title` ➡️ Set the text (Tooltip Title) which appears at the tooltip; default = "Copied!" [str]
- `action` ➡️ Set if the text gets only copied, or if the text gets cut; default = "copy"  ["copy"/"cut"]
- `textarea` ➡️ Set whether the text is in a textfield or textarea; default = false [true/false]


#### Change with JavaScript
```javascript
const clipboard = new_copy_clipboard("This text will be copied", title = "Text Copied!", action = "cut", textare = false);
document.body.appendChild(clipboard);
```

#### Change with HTML
In line 97 you can change the default behavior for clipboard added with HTML: `clipboard_add_event_listener(copy_button, text_field)` and add `title`, `action`
```javascript
clipboard_add_event_listener(copy_button, text_field, title="Text copied!", action="cut");
```
If you want to have a textarea instead of a textfield you need to remove `<input type="text" class="copy-link-input form-control" value="Insert your text to copy" readonly>` and insert this:
```html
<textarea class="copy-link-input form-control" readonly>Text to copy\nNew Line to copy</textarea>
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
