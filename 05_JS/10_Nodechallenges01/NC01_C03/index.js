const colOne = document.querySelector('#col1')
const colTwo = document.querySelector('#col2')
const colThree = document.querySelector('#col3')

const styleOne = getComputedStyle(col1)
const styleTwo = getComputedStyle(col2)
const styleThree = getComputedStyle(col3)

document.getElementById("col1").innerHTML = styleOne.backgroundColor;
document.getElementById("col2").innerHTML = styleTwo.backgroundColor;
document.getElementById("col3").innerHTML = styleThree.backgroundColor;