const _TITLE = "Copied!"
const _ACTION = "copy"
const _TEXTAREA = false

function new_copy_clipboard(text_to_copy, title=_TITLE, action=_ACTION, textarea = _TEXTAREA){
    const new_div = document.createElement("div")
    new_div.classList.add("copy-link", "form-group")

    let input = null

    if(!textarea){
        input = document.createElement("input")
        input.type = "text"
        input.classList.add("copy-link-input", "form-control")
        input.value = text_to_copy
        input.readOnly = true
    }else{
        input = document.createElement("textarea")
        input.type = "textarea"
        input.classList.add("copy-link-input", "form-control", "text-area")
        input.value = text_to_copy
        input.readOnly = true
    }

    const button = document.createElement("button");
    button.type = "button"
    button.classList.add("copy-link-button")

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.type = "svg";
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("width", "20")
    svg.setAttribute("height", "20")
    svg.setAttribute("fill", "currentColor")
    svg.classList.add("bi", "bi-copy")
    svg.setAttribute("viewBox", "0 0 16 16")

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.type = "path"
    path.setAttribute("fill-rule", "evenodd")
    path.setAttribute("d", "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z")

    svg.appendChild(path)
    button.appendChild(svg)

    new_div.appendChild(input)
    new_div.appendChild(button)


    clipboard_add_event_listener(button, input, title)
    return new_div
}

function new_span_copy_clipboard(text_to_copy, title=_TITLE){
    const span = document.createElement("span")
    span.type = "span"
    span.classList.add("span-copy-link")
    span.innerHTML = text_to_copy

    clipboard_add_event_listener(span, span, title)
    return span
}

function clipboard_add_event_listener(copy_button, text_field, title= "Copied!", action= "copy"){
    const tooltip_element = $(copy_button)
    tooltip_element.tooltip({
        title: title,
        trigger: "manual"
    })

    let text_to_copy = ""

    if (text_field.classList.contains("span-copy-link")){
        text_to_copy = text_field.innerHTML
    }else{
       text_to_copy = text_field.value
    }

    let timeout_id
    let shown = false

    copy_button.addEventListener("click", () => {
        navigator.clipboard.writeText(text_to_copy).then(() => {
            if(action === "cut"){
                text_field.value = ""
            }

            if(!shown){
                shown = true
                console.log(shown)
                tooltip_element.tooltip('show')
            }

            // Clear the previous timeout (if any)
            clearTimeout(timeout_id)

            // Set a new timeout to hide the tooltip after 2 seconds
            timeout_id = setTimeout(function () {
                shown = false
                tooltip_element.tooltip('hide')
                console.log(shown)
            }, 1500) // 1000 milliseconds = 1 seconds
        }).catch((error) => {
            console.error("Clipboard write error:", error)
        })

    })
}

/* Add EventListener to all Buttons */
$(document).ready(function() {
    document.querySelectorAll(".copy-link").forEach((copy_link_parent) => {
        const copy_button = copy_link_parent.querySelector(".copy-link-button")
        const text_field = copy_link_parent.querySelector(".copy-link-input")

        clipboard_add_event_listener(copy_button, text_field, _TITLE, _ACTION)
    })

   document.querySelectorAll(".span-copy-link").forEach((copy_link_parent) => {
        clipboard_add_event_listener(copy_link_parent, copy_link_parent, _TITLE, _ACTION)
    })
})
