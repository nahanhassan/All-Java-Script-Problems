/* Task 1
Write a JavaScript code to reverse the array colors without using the reverse method. */

/* const colors = ["red", "blue", "green", "yellow", "orange"];
const newColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  newColors.push(colors[i]);
}
console.log(newColors); */

/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique. */

/* const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenArray = [];
const oddArray = [];

let i, len;
i = 0;
len = numbers.length - 1;

for (; i <= len; i++) {
  if (numbers[i] % 2 === 0) {
    evenArray.push(numbers[i]);
  } else {
    oddArray.push(numbers[i]);
  }
}
console.log(evenArray, oddArray); */

/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string. */

/* let numbers = ["Tom", "Tim", "Tin", "Tik"];
let numString = "";

for (let num of numbers) {
  numString += num;
}
  
console.log(numString); */

/* Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output */

/* let statement = "I am a hard working person";
let statArray = statement.split(" ");
let revArray = [];

for (let i = statArray.length - 1; i >= 0; i--) {
  revArray.push(statArray[i]);
}
console.log(revArray.join(" ")); */


