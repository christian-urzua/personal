// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const colorfield = document.getElementById("color-field")
const fontsizefield = document.getElementById("font-size-field")
const clickbutton = document.getElementById("click-button")
const text = document.getElementById("text")
const body=document.body
//let
//var
function buttonpress() {
    text.innerHTML="Wow! you pressed it";
    body.style.backgroundColor=colorfield.value;
    text.style.fontSize=`${fontsizefield.value}px`

}