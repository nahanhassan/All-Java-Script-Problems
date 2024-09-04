/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

/* const payment = 700;
let result = "";

if (payment > 500) {
  result = "Free Coke";
} else {
  result = "30tk";
}

console.log(result); */

/*

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

/* let weight = 68;
let height = 1.625;
let bmi = (weight / Math.pow(height, 2)).toFixed(2);

let overweight = bmi <= 29.9 && bmi >= 25.0;
let normal = bmi <= 24.9 && bmi >= 18.5;
let underweight = bmi < 18.5;

if (overweight) {
  console.log("you are overweight");
} else if (normal) {
  console.log("you are normal");
} else if (underweight) {
  console.log("you are underweight");
} else {
  console.log("you are obese");
} */

/*

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

*/

/* let marks = 55;
let grade = "";

let A, B, C, D, F;
A = marks >= 90 && marks <= 100;
B = marks >= 80 && marks <= 89;
C = marks >= 70 && marks <= 79;
D = marks >= 60 && marks <= 69;
F = marks >= 0 && marks <= 59;

if (A) {
  grade = "A";
} else if (B) {
  grade = "B";
} else if (C) {
  grade = "C";
} else if (D) {
  grade = "D";
} else if (F) {
  grade = "F";
} else {
  grade = "Invalid";
}

console.log(`Your grade is: ${grade}`); */

/*
if you get more than 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
Note: 
use nested if-else-if-else
*/

/* let yourScore = 90;
let friendScore = 50;

if (yourScore > 80) {
  console.log("Inside your friend's score.");
  if (friendScore > 80) {
    console.log("Go for a lunch.");
  } else if (friendScore >= 60 && friendScore <= 80) {
    console.log("Tell your friend, good luck next time.");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Keep your friend's message unseen.");
  } else if (friendScore < 40) {
    console.log("Block your friend.");
  }
} else {
  console.log("Go to home and sleep and act sad.");
} */

/*

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

/* let num1, num2, result;
num1 = 50;
num2 = 20;

result = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);

if (num1 > num2) {
  console.log(num1 * 2);
} else {
  console.log(num1 + num2);
} */

/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let passenger = "children";
let age = "15";

let regularFare = 800;
let discountedFare = "";

if (passenger == "children") {
           // nested
          if (age < 10) {
            discountedFare = "free";
          } else {
            discountedFare = regularFare;
          }
} else if (passenger == "student") {

  discountedFare = regularFare * 0.5;

} else if (passenger == "senior citizen") {
          // nested
          if (age >= 60) {
            discountedFare = regularFare * 0.85;
          } else {
            discountedFare = regularFare;
          }
} else {
  discountedFare = regularFare;
}

console.log(discountedFare);
