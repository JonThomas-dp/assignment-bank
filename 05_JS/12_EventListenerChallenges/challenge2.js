function updateHeader() {
    headerOne.innerHTML = inputOne.value
}

function clearHeader() {
    headerOne.innerHTML = ""
}

let paraOne = document.createElement("p")
paraOne.innerHTML = "insert text and press [enter] or [left-mouse-click] outside the input field to update the header"
document.body.appendChild(paraOne)

let headerOne = document.createElement("h1")
headerOne.style.height = "48px"
document.body.appendChild(headerOne)

let inputOne = document.createElement("input")
inputOne.setAttribute("maxlength", "50")
document.body.appendChild(inputOne)

inputOne.setAttribute("onChange", "updateHeader()")

let submitButton = document.createElement("button")
submitButton.innerHTML = "Clear Header"
submitButton.setAttribute("onclick", "clearHeader()")
submitButton.style.display = "block"
submitButton.style.margin = "24px 0"
submitButton.style.cursor = "pointer"
document.body.appendChild(submitButton)