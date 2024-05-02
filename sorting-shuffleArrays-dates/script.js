
// // ----------- SORTING -----------
// // method used to sort elements of an array in place.
// // Sorts elements as strings in lexicographic order, not alphabetically.
// // lexicographic = (alphabet + numbers + symbols) 



// // ----------- EXAMPLE 1 -----------

// // SORTING STRINGS
// let strings = ['banana', 'apple', 'orange', 'mango'];

// strings.sort();
// console.log(strings);


// // SORTING NUMBERS
// let numbers = [1, 100, 2, 20, 3, 30];

// numbers.sort((a, b) => a - b);
// // this is like a boolean, if (a - b) we keep the smaller number first, if not change the smaller with the bigger, so we have an ascendent order.
// // For example if we wanted to be descendent we would change (a - b) with (b - a).
// console.log(numbers);



// // ----------- EXAMPLE 2 -----------

// const people = [{ name: "Miguel", age: 35, gpa: 3.0 }, { name: "Maria", age: 25, gpa: 3.5 }, { name: "Jose", age: 30, gpa: 3.2, }, { name: "Ana", age: 20, gpa: 3.8 }];

// // people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.name.localeCompare(b.name)); // For strings we need to use the .localeCompare to arrange the words lexicographic way.

// console.log(people);

// // ----------- EXAMPLE 3 -----------
// // FISHER YATES SHUFFLE ALGORITHM

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// shuffle(cards);

// console.log(cards);

// function shuffle(array) {
//     // we go from the last element to the first one
//     for (let i = array.length - 1; i > 0; i--) {
//         const random = Math.floor(Math.random() * (i + 1));

//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }


// ----------- date objects -----------
// The Date object is used to work with dates and times.
// Date objects are created with the new Date() constructor.
// There are four ways of instantiating a date:
// 1. new Date()
// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
// 3. new Date(date string)
// 4. new Date(milliseconds)

//// ----------- EXAMPLE 1 ----------- ////

// // 1.
// // // Current date and time
// // const date1 = new Date(2024, 0, 1, 12, 3, 32, 0);
// // console.log(date1);


// // // 2.
// // // new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // const date2 = new Date(2024, 0, 1, 12, 3, 32, 0);
// // console.log(date2);


// // // 3.
// // // new Date(date string)

// // const date3 = new Date('2024-01-01T12:03:32Z')
// // console.log(date3);

// // // 4.
// // // new Date(milliseconds)

// const date4 = new Date();

// const year = date4.getFullYear();
// const month = date4.getMonth();
// const day = date4.getDate();
// const hour = date4.getHours();
// const min = date4.getMinutes();
// const sec = date4.getSeconds();
// const ms = date4.getMilliseconds();
// const dayOfWeek = date4.getDay();


// console.log(year, month, day, hour, min, sec, ms, dayOfWeek);



// //// ----------- EXAMPLE 2 ----------- ////
// // set a date

// const date = new Date();

// date.setFullYear(2022);
// date.setMonth(4);
// date.setDate(4);
// date.setHours(10);
// date.setMinutes(43);
// date.setSeconds(29);

// console.log(date)


//// ----------- EXAMPLE 3 ----------- ////



const dateA = new Date("2023-12-31")
const dateB = new Date("2024-1-1")

if (dateA >= dateB && dateA <= dateB) { // why i cant use === here? because the date is an object and it will never be the same, so we need to use >= and <=

    console.log("Its duplicated")
}
else {
    console.log("Date doesnt match")
}

if (dateB > dateA) {
    console.log('Happy New YEAR')
}
else {
    console.log('Soon...')
}