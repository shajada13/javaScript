// String methods 

console.log ("   String methods")

let mess = "Hello, World"

// if you convert this message to Uppercase , then you use this function 
let UpperCase = mess.toUpperCase() // you must use another variable to work this function , beside thats it not possible to change a string variable ..
console.log("1. The string is = Hello , World ,, convert uppercase .. \n Ans : ", UpperCase)

// if you convert this message to Lowercase , then you use this function 
let lowercase = mess.toLowerCase()
console.log("2. Convert Lower case : \n Ans: ", lowercase)

// The trim() function in JavaScript is used to remove whitespace from both the beginning and end of a string.


let name = "   HI   ";
console.log(name);          // "   HI   "
console.log("3. Remove whitespace \n Ans :",name.trim());   // "HI"

// The slice() method returns a shallow copy of a portion of a string or array, selected from start to end (end not included).
//  The original string or array is not modified.
let text = "JavaScript";
console.log(text)
let part = text.slice(0, 4);
console.log("slice this text " , part);  // "Java"

//The concat() method is used to join (combine) two or more strings or arrays. 
// It returns a new string or array — the original is not changed.
let firstName = "Masum";
let lastName = "Mia";
let fullName = firstName.concat(" ", lastName);
console.log( " First name is Masum and second name is Mia , concat \n Ans : " ,fullName);  // "Masum Mia"

// The replace() method returns a new string where part of the original string is replaced with another value. 
// It does not change the original string.
let str = "apple banana apple";
let replaced = str.replace(/apple/g, "orange");
console.log(  "apple banana apple , replace \n  Ans : ", replaced);  // "orange banana orange"


//The charAt() method returns the character at a specific position (index) in a string.
