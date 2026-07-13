// JavaScript goes here!
console.log("Hello, World!");


// You can declare variables using the let keyword
let firstName = "John";
let lastName = "Doe";

console.log(firstName);
console.log(lastName);


// Variables can be reassigned:
let age = 11;
console.log(age); // outputs 11 to the console

age = 54;

console.log(age); // 54 will be the new output after reassigning variables.
 
// Notice the lack of let on line above - we don’t need it since the variable has already been declared earlier and we are just re-assigning it!


// Never need to be re-assigned - will result in an error
// const pi = 3.14;
// pi = 10;

// console.log(pi);


// ASSIGNMENT EXERCISES

// 1. Add 2 numbers together! In your script, type in console.log(23 + 97). Running this should log 120.
console.log(23 + 97);
 
// 2. Do the same thing but add 6 different numbers together.
console.log(9 + 10 + 21 + 69 + 420 + 911);

// 3. Now log the value of the following expression: (4 + 6 + 9) / 77. The console should log approximately 0.24675.
console.log((4 + 6 + 9) / 77);

/* 4. Let’s use some variables!
   1. Add this statement to the script tag: let a = 10.
   2. Below it, add console.log(a). When you run this, the browser console should log 10.
   3. Afterwards, re-assign a with a different number value. Log a again afterwards and it should show the updated value.
   4. Now add to the bottom of the script let b = 7 * a.
   5. Log what b is. It should log the result of 7 multiplied by whatever you re-assigned a with.
*/
let a = 25;
console.log(a);

let b = 7 * a;
console.log(b);

/*
5. Try this sequence:
   1. Declare a const variable max with the value 57.
   2. Declare another const variable actual and assign it max - 13.
   3. Declare another const variable percentage and assign it actual / max.
   4. Now if you log percentage, you should see a value in the console like 0.7719.
*/
const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage);

// 6. Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make these things show up on the webpage, but all of this logic will remain the same. Make sure you’re comfortable with it before moving on.
