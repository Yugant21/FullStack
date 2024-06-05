// function square(num){
//     return num * num;
// }

// function displaySquare(fn){
//     console.log("Square is  " + fn(5))
// };

// displaySquare(square)


// ====================

// (function (x){
//     return (function(y){
//         console.log(x);
//     })(2);
// })(3);

// for (let i = 0; i < 5; i++) {
//     setTimeout( function () {
//         console.log(i);
//     }, i * 1000);
// }

// greet(); // "Hello, world!"

// function greet() {
//   console.log("Hello, world!");
// }

// let students = [
//     { name : "Piyush", rollNumber : 31, marks : 80 },
//     { name : "Jennt", rollNumber : 15, marks : 69 },
//     { name : "Akash", rollNumber : 16, marks : 75 },
//     { name : "Dilpreet", rollNumber : 7, marks : 55 },
// ]



// const names = students.map( stu => stu.name.toUpperCase())

// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase())
    
// }

// console.log(names)

// const marks = students.filter( stu => stu.marks > 60 && stu.rollNumber > 15)

// console.log(marks)

// const sumOfMarks = students.reduce((acc, curr) => acc + curr.marks, 0) 

// console.log(sumOfMarks);

// const onlynames = students.filter( stu => stu.marks > 60).map(stu => stu.name);

// console.log(onlynames);

var a = 20;

(function foo(){
    console.log(a);
    var a = 10;
})
