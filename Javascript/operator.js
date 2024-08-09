// 2: Operators
// Tasks/Activities

// Activity 1: Arithmetic Operations

// Task 1 : Write a program to add two numbers and log the result to the console
let sum = 2 + 3;
// console.log(sum);

// Task 2 : Write a program to substract two numbers and log the result to the console
let substract = 8 - 3;
// console.log(substract);/

// Task 3 : Write a program to multilpy two numbers and log the result to the console
let multilpy = 2 * 3;
// console.log(multilpy);

// Task 4 : Write a program to divide two numbers and log the result to the console
let divide = 7 / 2;
// console.log(divide);

// Task 5 : Write a program to find the remainder when one number is divided by anonther and log the result in console.
let remainder = 7 % 2;
// console.log(remainder);

// Activity 2: Assignment Operators

// Task 6 : Use the += operator to add a number to a variable and log the result in console.
let a = 5;
let b = 10;

a += b;
//  console.log(a);

// Task 7 : Use the 0= operator to substract a number to a variable and log the result in console.
b -= a;
// console.log(b);

// Activity 2: Comparison Operators

// Task 8 : Write a program to compare two numbers using < and > and log the result to the console.

function comparison(num1, num2) {
  if (num1 < num2) {
    console.log(`${num1} is smaller than ${num2}`);
  } else if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`);
  } else if ((num1 = num2)) {
    console.log(`${num1} is equal to ${num2}`);
  }
}

// comparison(15,15)

// Task 9 : Write a program to compare two numbers using >= & <= and log the result to the console

function equalToComparison (num1, num2) {
    if (num1 >= num2) {
        console.log(`${num1} is greater or equal to ${num2}`);
    } else if (num1 <= num2) {
        console.log(`${num1} is smaller or equal to ${num2}`);
    }
}

// equalToComparison(5,7);

function numComparison (num1, num2) {
    if(num1 == num2){
        console.log("they are equal ==");
    }
    if (num1 === num2) {
        console.log("their data types also same");
    }
}

// numComparison(5,"5")