// string method = allows you to manipulate and work with text(strings) in various ways. 

let userName = " Miguel de los Rios.  ";

// userName. lets you access all the methods that are available to strings.
console.log(userName.charAt(1));
// charAt(0) returns the first character of the string. 0 is the first index of the string.

// if we want it the other way around, we use .indexOf() method. This will return the index of the character we input
console.log(userName.indexOf("i"));
// "M" would return the index "1"

console.log(userName.lastIndexOf("i"));
// we use lastIndexOf() to get the last index of a character that is repeated in the string. In this case "i" is repeated twice.

console.log(userName.length);
// to get the number of characters of the string we use .length 

userNameTrim = userName.trim();
// we use .trim to remove white spaces from the beginning and end of a string.
console.log(userNameTrim);


userNameLower = userName.toLowerCase();
console.log(userNameLower);

userNameUpper = userName.toUpperCase();
console.log(userNameUpper);

userNameRepeat = userName.repeat(3);
console.log(userNameRepeat);



// BOOLEAN TO KNOW IF THE FIRST CHARACTER OF THE STRING IS IN startsWith()
let result1 = userName.startsWith(" "); //True
// startsWith is a boolean, if what is in parenthesis is == to the first character of the string it will return True, else False
if (result1) {
    console.log("Username cant begin with ' '")
    // this means that if the string in userName begins with a space ' '(True), it will return  console.log("Username cant begin with ' '")
}
else {
    console.log(userName);
}

// ITS THE SAME AS .startsWith but at the end of the string
let result2 = userName.endsWith(" "); //True
// startsWith is a boolean, if what is in parenthesis is == to the first character of the string it will return True, else False
if (result2) {
    console.log("Username cant end with ' '")
    // this means that if the string in userName begins with a space ' '(True), it will return  console.log("Username cant begin with ' '")
}
else {
    console.log(userName);
}

// SAME AS THE ABOVE, .includes CAN HAVE THE CHARACTER ANYWHERE IN THE STRING.
let result3 = userName.includes(" ")
if (result3) {
    console.log("Username cant include space ' ' in the text.")

}
else {
    console.log(userName);
}


/////////////////////////////////////////////

let phoneNumber = "123-456-7890";

// .replaceAll replaces a character for another one
phoneNumberReplace = phoneNumber.replaceAll("-", "") // 
console.log(phoneNumberReplace); // 1234567890

// .padStart adds the second element inside parenthesis, and the first element is the total length of the string
phoneNumberStart = phoneNumber.padStart(15, "0")
phoneNumberEnd = phoneNumber.padEnd(17, "0")

console.log(phoneNumberStart); // 000123-456-7890
console.log(phoneNumberEnd);

