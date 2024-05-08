


// we use constants when we know the value will never change. 
// with constants we use capital letters to indicate that the value should never change.
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
    // we use the document object to access the HTML elements
    // we use the getElementById method to access the HTML elements by their id
    // we use the onclick event to trigger the function when the button is clicked
    radius = document.getElementById("myText").value;
    // we use the value property to get the value of the input element
    radius = Number(radius);
    // we use the Number function to convert the value to a number
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm.";
    // we use the textContent property to set the text of the h3 element
} 