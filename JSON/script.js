
/////////////////////////////////////////
///////////////// JSON //////////////////
///////////////////////////////////////// 



// JSON is a syntax for storing and exchanging data.
// JSON is text, written with JavaScript object notation.
// JSON is a lightweight data-interchange format.

// JSON can be put in objects or arrays. 
// {key:value} or [value1, value2, value3]

// JSON.stringify() - converts a JavaScript object or value to a JSON string

// const names = ["Ayrton Senna",
//     "Michael Schumacher",
//     "Lewis Hamilton",
//     "Sebastian Vettel",
//     "Fernando Alonso"
// ]
// const person = {
//     "name": "Ayrton Senna",
//     "age": 34,
//     "inEmployed": true,
//     "hobbies": [
//         "Racing",
//         "Football",
//         "Tennis"
//     ]
// }

// const people = [
//     {
//         "name": "Ayrton Senna",
//         "age": 34,
//         "inEmployed": true
//     },
//     {
//         "name": "Michael Schumacher",
//         "age": 50,
//         "inEmployed": false
//     },
//     {
//         "name": "Lewis Hamilton",
//         "age": 34,
//         "inEmployed": true
//     },
//     {
//         "name": "Sebastian Vettel",
//         "age": 32,
//         "inEmployed": true
//     },
//     {
//         "name": "Fernando Alonso",
//         "age": 38,
//         "inEmployed": false
//     }
// ]

// const jsonString = JSON.stringify(names)
// const jsonPerson = JSON.stringify(person)
// const jsonPeople = JSON.stringify(people)

// console.log(jsonString);
// console.log(jsonPerson);
// console.log(jsonPeople);




// JSON.parse() - converts a JSON string to a JavaScript object


// const jsonNames = `["Ayrton Senna",
//     "Michael Schumacher",
//     "Lewis Hamilton",
//     "Sebastian Vettel",
//     "Fernando Alonso"
// ]`
// const jsonPerson = `{
//     "name": "Ayrton Senna",
//     "age": 34,
//     "inEmployed": true,
//     "hobbies": [
//         "Racing",
//         "Football",
//         "Tennis"
//     ]
// }`

// const jsonPeople = `[
//     {
//         "name": "Ayrton Senna",
//         "age": 34,
//         "inEmployed": true
//     },
//     {
//         "name": "Michael Schumacher",
//         "age": 50,
//         "inEmployed": false
//     },
//     {
//         "name": "Lewis Hamilton",
//         "age": 34,
//         "inEmployed": true
//     },
//     {
//         "name": "Sebastian Vettel",
//         "age": 32,
//         "inEmployed": true
//     },
//     {
//         "name": "Fernando Alonso",
//         "age": 38,
//         "inEmployed": false
//     }
// ]`

// const parsedData = JSON.parse(jsonPerson)

// console.log(parsedData);


// // fetch() - allows you to make network requests similar to XMLHttpRequest (XHR)
// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.age)))
//     .catch(error => console.error(error))
// // this is how you fetch data from a json file and log it to the console.





/////////////////////////////////////////
///////// FETCH DATA FROM API //////////
///////////////////////////////////////


// fetch("https://pokeapi.co/api/v2/pokemon/gastly")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok.");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


fetchData();

async function fetchData() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }

        const data = await response.json()
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");


        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch (error) {
        console.error(error)
    }
}