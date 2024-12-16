const num = 42;

// console.log(num);

const myNum = new Number(211);

// console.log(typeof myNum);
// console.log(myNum);
// console.log(myNum.toString().length);
// console.log(myNum.toFixed(3));
// console.log(myNum.toPrecision(2));

const otherNumber = 123.854646;
// console.log(otherNumber.toPrecision(5));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toFixed(2));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-12));
// console.log(Math.round(2.33));
// console.log(Math.round(4.67));
// console.log(Math.ceil(5.33)); //upper value
// console.log(Math.floor(3.33)); // lower Value
// console.log(Math.sqrt(25)); //for square root

const myNumArray = [3,5,7,8,4,53,2,12,56,24,71,2,44,84];
// console.log(typeof myNumArray);

// console.log(Math.min(...myNumArray));
// console.log(Math.max(...myNumArray));


// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10) + 1));
// console.log(Math.ceil((Math.random()*10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
