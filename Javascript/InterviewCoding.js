// #1   console.log("Hello World");

// #2   Loops ------------------------------
// for (let index = 1; index <= 5; index++) {
//     // console.log(index);
// }

// let i = 1;

// while(i <= 5){
//   // console.log(i);
//   i+=2
// }

// let j = 1;

// do {
//   // console.log(j);
//   j++
// } while (j <= 5);

// #3 Functions----------------------

// function sum(a,b){
//   return a + b;
// }
// console.log(sum(5,7));

// const addNumber = (a,b) => {
//   return a + b;
// }
// console.log(addNumber(13,43));

// const numberAdd = (a,b) => (a + b);
// console.log(numberAdd(34,43));

// #4 String Manipulation : Write a function thant takes a string and return reversed version of it

// let str = "Hello World";
// const reverseString = (str) => {
//   return str.split("").reverse().join(" ");
// }
// console.log("string Reversed  =>  "+reverseString(str));

// let original = "Hello World";
// const reverseWord = (str) => {
//   return str.split(" ").reverse().join(" ");
// };
// console.log("Word Reversed  =>  "+reverseWord(original));

//#5 Conditional : Write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.

// const oddEven = (num) => {
//     if(num % 2 == 0){
//       return "Even";
//     }else{
//       return "Odd";
//     }
// }
// console.log(oddEven(21));

// let leapYear = (year) => {
//     if(year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
//       console.log( `${year} is a Leap Year`);
//     }else{
//       console.log( `${year} is not a Leap Year`);
//     }
// }

// leapYear(2100);

// #a : Find the Largest of Three Numbers Write a function to find the largest of three given numbers.
// let arr = [3,45,52,6,24,7,63,2345,76,246,77]

// const findLargest = (arr) => {
//     let largeNumber = arr[0];

//     for (let i = 0; i < arr.length; i++){
//       if(arr[i] > largeNumber){
//         largeNumber = arr[i];
//       }
//     }
//     return largeNumber;
// }

// console.log(findLargest(arr));



//#6 Arrays and Loops : Find the sum of all elements in loop;

// let array = [10,20,30,40,50];
// let sum = 0;
// for (let index = 0; index < array.length; index++) {
//     sum += array[index];
// }
// console.log(sum);

//#7 Objects : Create an object representing a car with properties like make, model, and year. Add a method to a car object to start the engine.

// let car = {
//   make : "Kia",
//   model : "Celtos",
//   year : 2024
// }

// car.startEngine = () => {
//   console.log("Engine Started");
// }
// car.startEngine();

// Higher Order Function : which takes functions as arguments and returns the functions as result
// const multiply = (num) => {
//     return num * 5;
// }

// const result = (num, operation) => {
//   return operation(num);
// }

// console.log(result(5,multiply));


//# Clone Object--------------------

// const userName = {name: "Yugant", age: 26};

// const newUser = Object.assign({}, userName);

// const anotherUser = {...newUser}

// console.log(anotherUser);


// Call() Function UseCase

// function setUser(username){
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, age) {
//     setUser.call(this, username);
//     this.email = email
//     this.age = age
// }

// const User = new createUser("Yugant", "yugant@mail.com", 26);

// console.log(User);


// const map = new Map();

// map.set("IN", "India");
// map.set("JR", "Jermany");
// map.set("JP", "Japan");
// map.set("SKR", "South Korea");

// // console.log(map);
// for (const [key, value] of map) {
//   // console.log(`${key} :- ${value}`);
// }


// const newArray = [1,2,3,4,5]

// for(const key of newArray){
//   console.log(`For of Loop - ${key}`);
// }

// for(const key in newArray){
//   console.log(`For in Loop - ${key}`);
// }


// ForEach Loop

// const coding = ["js", "python", "java", "ruby", "go"];

// coding.map((val) => {
//   // console.log(val);
// })
// coding.push("rust");
// // console.log(coding);

// coding.forEach((val) => {
//   console.log(val);
// })


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// let maxNum = Math.min(...arr2);

// let maxNum = arr2[0];

// for(let i=0; i <= arr2.length; i++){
//   if(arr2[i] > maxNum){
//     maxNum = arr2[i];
//   };
//   // return maxNum;
// }

// console.log(maxNum);



// const joinArray = [...arr1, ...arr2];

// console.log(joinArray);

// const coding = ["js", "python", "java", "ruby", "go"];

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);


// let obj1 = { key: "value" };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = "new value";
// obj2 = { key: "another value" };

// console.log(obj1.key, obj2.key, obj3.key);

// const sumOfAllArray = (numbers) => {
//   let sum = 0;
//   for(let i = 0; i < numbers.lenght; i++){
//     if(numbers[i] > 0){
//       sum += numbers[i]; 
//     }
//   }
//   return sum;
// }

// const myArray = [1, -2, 3, 4, -5, 6];

// console.log(sumOfAllArray(myArray));


// const removeVowels = (str) => {
//   let myVowels = ["a","e","i","o","u","A","E","I","O","U"];
//   let string = "";

//   for(let i=0; i < str.length; i++){
//     if(!myVowels.includes(str[i])){
//       string += str[i];
//     }
//   }
//   return string;
// }

// const str = "This is a test string with vowels";

// console.log(removeVowels(str));


// const stringSorting = (str) => {

//   return str.sort();

// }

// let str = ['b','r','s','g','a','d'];

// console.log(stringSorting(str));


// const sortingFunction = (str) => {
//     let sortedString = str;

//     for(var i=0; i < str.lenght; i++){
//       for(var j = i + 1; j < str.lenght - 1; j++){
//         if(str[i] < str[j]){
//           sortedString = swap(str, i, j);
//         }
//       }
//     }
//     return sortedString;
// }
// let str = "string";
// console.log(sortingFunction(str));

// const reverseString = (str) => {
//     const newString = str.split("").reverse().join("");
//     return str === newString;
// }

// console.log(reverseString("racecar"));.

// const secondHighestnumber = (arr) => {
//   const sortedArr = arr.sort((a, b) => b - a);
//   return sortedArr[1];
// }

// const number = [10,5,20,15,8];
// console.log(secondHighestnumber(number));

// const removeDuplicate = (arr) => {
//     return [... new Set(arr)];
// }

// const numbers = [1, 2, 3, 2, 1, 4, 5, 4];

// console.log(removeDuplicate(numbers));

// const getRandomColor = () => {
//     const hexChars = "0123456789ABCDEF";
//     let color = "#";

//     for(let i = 0; i < 6; i++){
//       color += hexChars[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// console.log(getRandomColor());

// let x = 5;
// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);.

// const obj = { a: 1, b: 2, c: 3 };
// const { a, b } = obj;
// console.log(a, b);


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

greet()
function greet(){
  console.log("good morning");
}