// 1: Variables and Data Types
// Tasks/Activities

// Activity 1: Variable Declaration

// Task 1 : Declare a variable using var, assign it a number, and log the value to the console.
var numValue = 21;
// console.log(numValue);

// Task 2 : Declare a variable using let, assign it a string, and log the value to the console.
let strValue = "Yugant";
// console.log(strValue);

// Activity 2: Const Declaration

// Task 3 : Declare a variable using const, assign it a boolean, and log the value to the console.
const boolValue = true;
// console.log(boolValue);

// Activity 3: Data Types

// Task 4 : Create variable of different data types (number, string, boolean, object, array) and log each variable's type using typeof operator.

const numberVal = 25;
// console.log( numberVal);

const stringVal = "Yugant Khadse";
// console.log(typeof stringVal);

const booleanVal = false;
// console.log(typeof booleanVal);

const objVal = {name: stringVal, age: numberVal};
// console.log(typeof objVal);

const arrVal = [stringVal, numberVal, booleanVal];
// console.log(typeof arrVal);

// Activity 4: Reassigning Variables

// Task 5: Declare variable using let, assign it an value, reassign a new value and log both the values

let emialID = "yugant@mail.com";
// console.log(emialID);
emialID = "khadse@mail.com";
// console.log(emialID);

// Activity 4: Understanding Const
// Task 6: Try reassigning a variable declared with const and observe the error

const constVar = "name";
// constVar = "age";

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variable of different data types and logs both the value and type of each variable to the console.

function checkVarType(param){
    console.log("Type:" ,typeof param, "and" ,"Value:" ,param );
}
// checkVarType(arrVal)

// 2. Reassignment Demo: Create a Script that demonstrates the difference in between let and const when it comes to reassignment

// Example with let
let mutableVariable = 10;
// console.log('Initial value of mutableVariable:', mutableVariable);

// Reassigning mutableVariable
mutableVariable = 20;
// console.log('Reassigned value of mutableVariable:', mutableVariable);

// Example with const
const immutableVariable = 30;
// console.log('Initial value of immutableVariable:', immutableVariable);

// Attempt to reassign immutableVariable
try {
  immutableVariable = 40; // This will throw an error
} catch (error) {
  console.error('Error when reassigning immutableVariable:', error.message);
}