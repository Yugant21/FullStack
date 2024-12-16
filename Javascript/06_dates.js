const myDate = new Date();

// console.log(myDate.getTime()); // Output 1733140479390
// console.log(myDate.toISOString()); // Output 2024-12-02T11:54:39.390Z
// console.log(myDate.getFullYear()); // Output 2024
// console.log(myDate.toUTCString()); // Output Mon, 02 Dec 2024 11:54:39 GMT
// console.log(myDate.toString()); // Output Mon Dec 02 2024 17:24:39 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Output Mon Dec 02 2024
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.getUTCDate());
// console.log(myDate.getMonth());

// let createDate = new Date(2024, 11, 2);
let createDate = new Date("2024-12-2")

// console.log(createDate.toDateString());
// console.log(createDate.toLocaleDateString());

let newDate = new Date();

newDate.toLocaleString('dafault', {
    weekday: "long",
})

console.log(newDate);

