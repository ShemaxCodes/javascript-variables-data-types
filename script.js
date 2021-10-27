/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/
let isIsland = "United States";
let language;
let country = "United States";
let continent = "North America";
let population = 130000;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

//Extra Practice
console.log(typeof null);

// We use the const variable to delcare variables that are not supposed to change.

const birthYear = 1991;
//birthYear = 1990;
/* script.js:27 Uncaught TypeError: Assignment to constant variable.
at script.js:27
This is perfect because the birth year of a person can
never change 
*/

// var pretty much works the same way as let
// however, we should never use var
var job = "programmer";
job = "teacher"

// Always properly declare variables

// OPERATORS (mathematical operators)

//Subtraction

const now = 2037
const ageJonas = 2037 - 1991;
console.log(ageJonas);
const ageSarah = now - 1994;
console.log(ageSarah);

// Multiply and Division and Exponents
console.log(ageJonas * 2, ageJonas / 10, 2**3);

// We can use the plus sign to join or concatenate strings

const firstName = 'Jonas';
const lastName = "Panapa";
console.log(firstName + " " + lastName);


console.log(2+2);

// ASSIGNMENT OPERATORS

let x = 10 + 5;
x += 10
x *= 4
console.log(x);

x += 10 // what this means is x equals x plus 10 (x = x + 10), which equals 25.

x *= 4 // this means x equals x times 4 (x = x * 4), which equals 100


// COMPARISON OPERATORS
//We use these to produce booleans

console.log(ageJonas > ageSarah);
// the result of this is "true"

console.log(ageSarah >= 18);
//this checks whether Sarah is at least 18 years of age
