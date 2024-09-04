/* 1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array */

/* let fruits = ["apple", "banana", "mango", "orange", "litchi"];
fruits[2] = "jambura";
console.log(fruits, fruits[3]); */

/* 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output */

let touristPlace = ["cox bazar", "bandorban", "sundarban"];
touristPlace.push("dhaka");
touristPlace.push("chittagong", "shylet");
touristPlace.pop();

console.log(touristPlace);

/* 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not. */

let books = ["math", "chemistry", "science", "javascript"];
let check = "javascript";

if (books.includes(check)) {
  console.log("The books is there");
  console.log(`The position is at: ${books.indexOf(check)}`);
} else {
  console.log("The books is not there");
}

/* 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not. */

let array = [1, 2, 3, 4, 5, 6];

console.log(Array.isArray(array));

/* 5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = ["a", "b", "c", "d", "e"];

let array3 = array1.concat(array2);
let array4 = array3.reverse();
console.log(array3);

