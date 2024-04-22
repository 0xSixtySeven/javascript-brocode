// There is 2 ways of getting user inputs in javascript using the prompt() and the readline() method. The prompt() method is used to display a dialog with an optional message prompting the user to input some text and the readline is used to read the input stream from the user.

// 1st way using prompt() method:

// let username;
// username = prompt("Enter your name");
// console.log("Hello, " + username);

// 2nd way, PROFESSIONAL WAY with HTML textbox (we use getElementByID)
let username;
document.getElementById("submitButton").onclick = function () { // document. 
    username = document.getElementById("myText").value;
    console.log("Hello, " + username);
    document.getElementById("myH1").textContent = `Hello ${username}`; // With TEMPLATE LITERALS, an expression can be embedded in a placeholder. A placeholder is represented by ${} , with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string: const method = 'interpolation' const dynamicString = `This string is using ${method}.



}  