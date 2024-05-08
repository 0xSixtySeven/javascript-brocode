// CALCULATOR APP


const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input; // this will append the input to the display
    // This will add the input to the display value from left to right 
}

function clearDisplay() {
    display.value = "";

}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
} 