/* Task-1
Take four parameters. Multiply the four numbers and then return the result */

/* function multi(a, b, c, d) {
  let result = a * b * c * d;
  return result;
}

console.log(multi(4, 5, 2, 20)); */

/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */

/* function condMulti(number) {
  const result = number % 2 !== 0 ? number * 2 : number / 2;
  return result;
}

console.log(condMulti(11)); */

/* Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */
/* 
let array = [2, 4, 6, 8, 10];

function make_avg(array) {
  let len = array.length;
  let sum = 0;
  for (let el of array) {
    sum += el;
  }
  let avg = sum / len;
  console.log(`Total elements: ${len}, Sum: ${sum}, Average: ${avg}`);
}

make_avg(array); */

/* Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */

let binaryString = "1001001001000";

function countNow(bString) {
  let binaryArray = bString.split("");
  let count = 0;

  for (let i = 0; i <= binaryArray.length - 1; i++) {
    if (binaryArray[i] == "0") {
      count += 1;
    }
  }
  
  return `Total count of zero are: ${count}`;
  //   return "Total count of zero are " + count;
}

console.log(countNow(binaryString));

/* Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd */

/* function oddEvenDecision(number) {
    const result = number % 2 !== 0 ? "Odd" : "Even";
    return result;
  }
  
  console.log(oddEvenDecision(10));  */
