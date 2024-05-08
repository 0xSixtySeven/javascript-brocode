
// LOGICAL OPERATORS: used to combine or manipulate boolean values (true or false) 

//          && = AND
//          || = OR
//          ! = NOT


const temp = 0;


// WITH THE && STATEMENT

if (temp > 0 && temp <= 30) {
    console.log('The temperature is fine');
}

else {
    console.log('The temperature is shit');
}



// WITH THE || STATEMENT

if (temp <= 0 || temp > 30) {
    console.log('The temperature is shit');
}
else {
    console.log('The temperature is fine');
}


// WITHOUT "!"
const isSunny = false;

if (isSunny) {
    console.log("Its Sunny")
}
else {
    console.log("Its Cloudy")
}


// WITH "!"
if (!isSunny) {
    console.log("Its Cloudy")
}
else {
    console.log("Its Sunny")
}