

/////////////////////////////////////////
///////////////  DOM  ///////////////////
/////////////////////////////////////////

// DOM - Document Object Model
// It is a programming interface for web documents.
// It represents the structure of a document as a tree of nodes.
// Each node is an object representing a part of the document.
// The DOM is used to connect webpages to scripts like JavaScript.
// It is a way to interact with the HTML and CSS of a webpage.

//      object {} 
//      - Represents the page you see in the web browser and provides a way to interact with it with an API.
//      - Web browser constructs the DOM from the HTML file, and structures it as a tree of objects.
//      - JavaScript can interact with the DOM to change the content, structure, and style of the page. 



const username = "Miguel de los Rios"

const welcomeMsg = document.getElementById("msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

