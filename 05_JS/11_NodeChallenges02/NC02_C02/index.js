let bodyElement = document.querySelector("body")
const mediaQuery = window.matchMedia('(min-width: 0px) and (max-width: 832px)')
// current code requires a refresh of browser when breakpoint has been reached


bodyElement.style.margin = "0";

let navBarContainer = document.createElement("div")
navBarContainer.classList.add("nav-bar-container")
document.body.appendChild(navBarContainer)

navBarContainer.style.width = "100%";
navBarContainer.style.height = "96px";
navBarContainer.style.backgroundColor = "darkblue";
navBarContainer.style.display = "flex";
navBarContainer.style.justifyContent = "space-around";
navBarContainer.style.alignItems = "center";

let navBarLeft = document.createElement("div")
navBarLeft.classList.add("nav-bar-left")
navBarContainer.appendChild(navBarLeft)

let logoLink = document.createElement("a")
logoLink.classList.add("logo-link")
logoLink.setAttribute("href", "#")
navBarLeft.appendChild(logoLink)

logoLink.style.textDecoration = "none"

let logoText = document.createElement("h1")
logoText.classList.add("logo-text")
logoText.innerHTML = "LOGO"
logoLink.appendChild(logoText)

logoText.style.color = "white"

let navBarRight = document.createElement("div")
navBarRight.classList.add("nav-bar-right")
navBarContainer.appendChild(navBarRight)

navBarRight.style.display = "flex"
navBarRight.style.justifyContent = "space-around"

let homeLink = document.createElement("a")
homeLink.classList.add("nav-bar-link")
homeLink.setAttribute("href", "#")
homeLink.innerHTML = "HOME"
navBarRight.appendChild(homeLink)

homeLink.style.color = "white"
homeLink.style.margin = "0 25%"
homeLink.style.padding = "10%"
homeLink.style.textDecoration = "none"

let blogLink = document.createElement("a")
blogLink.classList.add("nav-bar-link")
blogLink.setAttribute("href", "#")
blogLink.innerHTML = "BLOG"
navBarRight.appendChild(blogLink)

blogLink.style.color = "white"
blogLink.style.margin = "0 25%"
blogLink.style.padding = "10%"
blogLink.style.textDecoration = "none"

let contactUsLink = document.createElement("a")
contactUsLink.classList.add("nav-bar-link")
contactUsLink.setAttribute("href", "#")
contactUsLink.innerHTML = "CONTACT"
navBarRight.appendChild(contactUsLink)

contactUsLink.style.color = "white"
contactUsLink.style.margin = "0 25%"
contactUsLink.style.padding = "10%"
contactUsLink.style.textDecoration = "none"

if(mediaQuery.matches) {
    navBarContainer.style.width = "200px"
    navBarContainer.style.height = "100vh"
    navBarContainer.style.flexDirection = "column"
    navBarContainer.style.justifyContent = "flex-start"
    navBarContainer.style.alignItems = "flex-start"
    navBarContainer.style.padding = "0 0 0 36px"

    navBarRight.style.flexDirection = "column"
    navBarRight.style.justifyContent = "space-around"
    navBarRight.style.height = "30%"
}