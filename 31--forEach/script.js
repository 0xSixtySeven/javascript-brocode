
// forEach() = Used to iterate over the elements of an array and apply and specified function (callback) to each element

// array.forEach(callback)

/////////// EXAMPLE 1 ///////////

// // element(1, 2, 3, 4, 5), index(0, 1, 2, 3, 4), array(numbers) are provided
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// // numbers.forEach(triple);
// numbers.forEach(display);

// function double(element, index, array) {
//     array[index] = element * 2; // we assign to each [index] in the array[] the element * 2.
// }

// function triple(element, index, array) {
//     array[index] = element * 3;
// }

// function square(element, index, array) {
//     array[index] = element ** 2;
// }

// function cube(element, index, array) {
//     array[index] = element ** 3;
// }

// function display(element) {
//     console.log(element);
// }


/////////// EXAMPLE 2 ///////////

let fruits = ['ApplE', 'BananA', 'CherrY', 'DatE', 'ElderberrY'];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperChase(element, index, array) { // transform the elements in the array to uppercase
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) { // transform the elements in the array to uppercase
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
    array[index] = element.trim().charAt(0).toUpperCase() + element.trim().slice(1).toLowerCase();
    // WITH METHOD CHAINING
    // trim() = remove white spaces
    // charAt(0) = get the first character
    // toUpperCase() = make the first character uppercase
    // slice(1) = get the rest of the string
    // toLowerCase() = make the rest of the string lowercase
}

function display(element) {
    console.log(element);
}
