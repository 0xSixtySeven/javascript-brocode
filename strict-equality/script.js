// strict equality operator 

//  = assignment operator
//  == equality operator (compares of the values are equal)
//  === strict equality operator (compares i the values and datatype are equal)
//  != inequality operator
//  !== strict inequality operator
//  !=== invalid


const PI = 3.14;

// === equality operator: accepts the value && datatype
if (PI === 3.14) {
    console.log("THIS IS CAKE")
}

// == strict equality operator: accepts the value
if (PI == "3.14") {
    console.log("THIS IS ALSO CAKE")
}

//  !== strict inequality operator: accepts the value
if (PI != "3.14") {
    console.log("THIS IS NOT CAKE")
}
else {
    console.log("THIS IS CAKE WITH '!=' ")
}

//  != inequality operator: accepts the value && datatype
if (PI !== "3.14") {
    console.log("THIS IS NOT CAKE WITH '!==' ")
}

