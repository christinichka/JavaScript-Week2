const input = require('readline-sync');
let str = "LaunchCode";
console.log(str.length);

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0,3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The first string prints: ${str} and second string prints: ${newStr}`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userInput = input.question("What number of letters should be relocated: ");

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let finalStr = str.slice(userInput) + str.slice(0,userInput);

if (str.length < userInput) {
  console.log(`ERROR: Too many characters. The word is only ${str.length} characters long.`);
} else {
  console.log(finalStr);
}
