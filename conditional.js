/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const payment = 700;
let result = "";

if (payment > 500) {
  result = "Free Coke";
} else {
  result = "30tk";
}

console.log(result);

/*

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 68;
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
}


