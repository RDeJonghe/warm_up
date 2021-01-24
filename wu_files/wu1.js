// Warm up exercises from LS materials

// LOOPS

// loops chapter from intro to programming with javascript. Exercises 2 & 6. Same problem solve 2 ways with loop and recursion.

/*  2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:

n!	Expansion	Result 
1!	1	= 1
2!	1 * 2	= 2
3!	1 * 2 * 3	= 6
4!	1 * 2 * 3 * 4	= 24
5!	1 * 2 * 3 * 4 * 5	= 120
Use a loop of some kind to solve this. Don't use recursion; we'll do that later.

You may assume that the argument is always a positive integer. */
/* ANSWER
function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
} */

/* 6. Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer. */

/*ANSWER
function factorRec(num) {
  if (num === 1) return 1; // I THINK THIS MUST BE SIMILAR TO THE STOPPING CONDITION?
  return num * factorRec(num - 1);
}
*/

/* Loops exercises example: Take a moment to read the MDN documentation on the continue statement.

Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console. */

let cities = [
  'Istanbul',
  'Los Angeles',
  'Tokyo',
  null,
  'Vienna',
  null,
  'London',
  'Beijing',
  null
];

/* ANSWER
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === null) continue;
  console.log(cities[i].length);
} */

/* Loops exercises example: Write a while loop that logs all odd natural numbers between 1 and 40. */

/* Answer
let index = 1;
while (index < 40) {
  console.log(index);
  index += 2;
} */

// ARRAYS

/* Array problem 5 from the intro to program with JS book
Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

Example
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 
You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise. */

let things = [
  1,
  'a',
  '1',
  3,
  NaN,
  3.1415,
  -4,
  null,
  false
];

/* ANSWER
function findIntegers(array) {
  let intArray = [];
  array.filter(function(el) {
    if (Number.isInteger(el)) {
      return intArray.push(el);
    }
  });
  return intArray;
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
*/

/* Problem 6 from the intro to JS book chapter on arrays */

let myVariable = 'Hello, World';
myVariable = 23;

console.log(myVariable);
