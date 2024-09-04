/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

/* for (let i = 0; i <= 200; i++) {
  if ((i == 100)) {
    break;
  } else {
    console.log(i);
  }
} */

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

/* let i = 1;
let sum = 0;

while (i <= 50) {
  if (sum <= 100) {
    console.log(sum);
  } else {
    break;
  }
  sum += i;
  i++;
} */

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

/* let i = 1;

for (; i <= 100; i++) {
  console.log(i);
  if (i == Math.sqrt(i)) {
    break;
  }
} */

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

/* let i = 1;

for(; i<=40; i++){
  if(i%2 !== 0){
    continue;
  }
  console.log(i)
}

let i = 1;

while (i <= 40) {
  i++;
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
} */

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

/* let i = 55;

while (i <= 85) {
  i++;
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
} */

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/* let repeat = "I will invest at least 6 hrs every single day for next 60 days!";

for (let i = 1; i <= 60; i++) {
  console.log(i, repeat);
} */

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/* let i = 78;
let array = [];

while (i <= 98) {
  i++;
  array.push(i);
}
console.log(array) */

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/* let i = 51;
let sum = 0;

while (i <= 85) {
  i++;
  if (i % 2 !== 0) {
    continue;
  }
  sum += i;
}
console.log(i, sum); */

/***

Generate a multiplication table for number 9

 */

let j = 1;

while (j <= 10) {
  console.log(j);
  j++;
}

// Output: upto 11



for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Output: upto 10


