// ############## Basic Strings Function Loop Array Object ###############
const addNumber = (a, b) => {
    return a + b;
}
// console.log(addNumber(9, 4));

const calculateArea = (length, breadth) => {
    return length * breadth;
}
// console.log(calculateArea(21, 34));

// # Write a function that takes a string and returns  the reverse verion of it
let firstString = "Hello World";
const reverseString = (str) => {
    // return str.split(" ").reverse().join(" "); // split with space Output World Hello
    return str.split("").reverse().join(""); // split without space reverse all words Output dlroW olleH
}
// console.log(reverseString(firstString));

// # Write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.
const checkOddEven = (num) => {
    if(num % 2 === 0) {
        return  `The given number ${num} is Even Number`;
    }else{
        return  `The given number ${num} is Odd Number`;
    }
}
// console.log(checkOddEven(9));

// # Create a program that checks if a given year is leap Year
const findLeapYear = (year) =>{
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return `Given year ${year} is a Leap Year`;
    }else{
        return `Given year ${year} is not a Leap Year`;
    }
}
// console.log(findLeapYear(2026));

// # Find the sum of all elements in an array

let firstArray = [32,42,52,123,5,64];

const sumOfArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
// console.log(sumOfArray(firstArray));

// #  Create an object representing a car with properties like make, model and year. Add a method to the car object to start the engine.

const car = {
    make : "Mahindra",
    model : "Thar",
    year : 2024
}

car.startEngine = () =>{
    console.log("Engine Started");
}
// car.startEngine()


// ############## Basic Dom Manipulation in index.html page####################

// # Change the text of Paragraph on a web page using javascript

// let paragraph = document.getElementById('myPara');
// console.log(paragraph);
// paragraph.textContent = "This text has been changed using Javascript";

// # Create a button dynamically and add it to the webpage and add eventListener with alert after clicked

// let buttonContainer = document.getElementById('buttonContainer');
// console.log(buttonContainer);
// let button = document.createElement("button");
// button.id = "newButton";
// button.textContent = "Click Me";
// buttonContainer.appendChild(button);

// let alertNew = document.getElementById("newButton");
// alertNew.addEventListener("click", () => {
//     alert("Clicked the button after creation");
// });


// # Write a function that calculates the factorial of a given number.

const factorial = (num) => {
    if(num === 1 || num === 0){
        return 1;
    }else{
        let factNum = 1;
        
        for(let i = 1; i <= num; i++){
            factNum *= i;
        }
        return factNum;
    }
}
// console.log(factorial(10));


// # Create a function that generates a random number between a given range.

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandomNumber(50, 100));


// # Write a function that takes an array of numbers and returns a new array with only the even numbers.

const secondArray = [5,10,15,20,25,30,35,40,45,50];

const filterEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 === 0);
}
// console.log(filterEvenNumbers(secondArray));
