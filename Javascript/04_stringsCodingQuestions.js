// #1: Write a function to check if a given string is a palindrome.
let palString = "racecar";
const findPalindrome = (str) => {
    let newString = str.split("").reverse().join("");
    if(str === newString) {
        return `The given string (${str} == ${newString}) is a Palindrom`;
    }else{
        return `The given string (${str} != ${newString}) is not a Palindrom`;
    }
}

console.log(findPalindrome(palString));
