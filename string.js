/* Task-1:
Count how many times a string has the letter a */

/* let str = "bangladesh";
let strArray = str.split("");
let count = 0;


for (let i = 0; i <= strArray.length; i++) {
  if (strArray[i] == "a") {
    count += 1;
  }
}
console.log(count); */

/* Task-2:
Count how many times a string has the letter a or A */

/* let str = "BANGLADESH is my land";
let strArray = str.split("");
let count = 0;


for (let i = 0; i <= strArray.length; i++) {
  if (strArray[i] == "a" || strArray[i] == "A" ) {
    count += 1;
  }
}
console.log(count); */

/* Task-3:
Check whether a string contains all the vowels a, e, i, o, u */

/* let str = "Programming HERO";
let vArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let strArray = str.split("");
let count = 0;

for (let i = 0; i <= strArray.length; i++) {
  if (vArray.includes(strArray[i])) {
    count += 1;
  }
}
console.log(count); */

/* Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y. */

/* let givenString = "X FILE";
let givenArray = givenString.split("");

for (let i = 0; i <= givenArray.length - 1; i++) {
  if (givenArray[i] === "X") {
    givenArray[i] = "Y";
  } else if (givenArray[i] === "x") {
    givenArray[i] = "y";
}
}
console.log(givenArray.join("")); */

/* Task-5:
Capitalize Every first Letter of each word in a String */

/* let string = "programming hero";
let stringArray = string.split("");
stringArray[0] = stringArray[0].toUpperCase();
console.log(stringArray.join("")); */


