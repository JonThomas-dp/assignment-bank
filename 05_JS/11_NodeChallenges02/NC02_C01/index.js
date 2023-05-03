// 1st Challenge

function elementCreation(elementTag, contentInElement, styleProperty, styleValue) {
    let headingTemp = document.createElement(elementTag);
    headingTemp.innerText = contentInElement;
    headingTemp.style[`${styleProperty}`] = styleValue
    document.body.appendChild(headingTemp)
};

// let titleElement = elementCreation("h1", "Hello World", "color", "blue")
// let subtitleElement = elementCreation("h2", "We hope you have a good day")
// let paragraphElement = elementCreation("p", "As we continue to build our dreams our dreams will continue to build us")

// 1st Challenge: Additional Practice


