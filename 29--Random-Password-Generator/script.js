// RANDOM PASSWORD GENERATOR 


// It defines a function generatePassword that takes five parameters: (passwordLength, includeLowercase, includeUppercase, includeNumbers, and includeSymbols). These parameters determine the length of the password and the types of characters it should include.


function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    // Define the character sets for lowercase, uppercase, numbers, and symbols.
    // We then define an empty string allowedChars to store the allowed characters for the password and an empty string password to store the generated password.
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    let allowedChars = ''; // empty string to store the allowed characters for the password 
    let password = ''; // empty string to store the generated password

    allowedChars += (includeLowercase) ? lowercaseChars : ""; // if includeLowercase is true, add lowercaseChars to allowedChars, if false add blanc.
    allowedChars += (includeUppercase) ? uppercaseChars : ""; // if includeUppercase is true, add uppercaseChars to allowedChars, if false add blanc.
    allowedChars += (includeNumbers) ? numberChars : ""; // if includeNumbers is true, add numberChars to allowedChars, if false add blanc.
    allowedChars += (includeSymbols) ? symbolChars : ""; // if includeSymbols is true, add symbolChars to allowedChars, if false add blanc.

    if (passwordLength < 12) {
        return `Password must be at least 12 characters.`
    }
    if (allowedChars.length === 0) {
        return `(At least 1 set of characters needs to be selected);`
    }
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]; // add the random character to the password string 
        // we add password to password, this is the way we add the previous characters to the new one
        // it loops 12 times, each loop,  one random character is added to 'password'.
    }

    return password;
}
// passwordLength: The length of the password to generate.
// we use boolean values to determine whether to include lowercase, uppercase, numbers, and symbols in the password. We then concatenate the characters to the allowedChars string based on the boolean values.

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols); // call the function with the parameters we defined above.
// why do i need to call the parameters?
// the function is defined with parameters, but it is not executed, so we need to call the function with the parameters we defined above.

console.log(`Generated Password: ${password}`);