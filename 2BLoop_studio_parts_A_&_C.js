
const input = require('readline-sync');

//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let proteinArr= ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grainArr= ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggieArr= ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverageArr= ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessertArr= ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];


//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
// a. One item per source arrays
// b. each ingredient can only be used ONCE
// c. print out each meal

let mealArr = [];

for (let i = 0; i < 6; i++) {
  mealArr.push([]); 

  for (let j = 0; j < 5; j++) {
      if (j === 0) {
        mealArr[i].push(proteinArr[i]);
      } else if (j === 1) {
        mealArr[i].push(grainArr[i]);
      } else if (j === 2) {
        mealArr[i].push(veggieArr[i]);
      } else if (j === 3) {
        mealArr[i].push(beverageArr[i]);
      } else {
        mealArr[i].push(dessertArr[i]);
      }
    }    
  console.log(mealArr[i]);
}

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

let numMeals = "0";

while (numMeals <= 1 || numMeals > 6 || isNaN(numMeals)) {
  numMeals = input.question("Enter the number of meals to assemble: ");
  if (numMeals <= 6) {
    console.log(`You selected ${numMeals} meals.`);
  } else {
    console.log("The maximum number of meals you can assemble is the number of Astronauts on board.");
  }
}


// Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
chickenMeal = mealArr[i].split(0);
console.log(chickenMeal);

// b. Use an “array of arrays” to store the food options in a ‘pantry’.
let pantry = [];
pantry.push(mealArr[i]);

// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow."/*
if (mealArr[i].includes(kale)) {
    console.log("Don’t worry, you can have double chocolate tomorrow.")
  } else {
    console.log("Bon appetite!")
  }

