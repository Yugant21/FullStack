const myName = "Yugant";

// ############## STRING METHODS #################

//#1 : String.prototype.at() :- The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

// console.log(myName.at(2));
// console.log(myName.at(-2));
// -------------------------------------------------------------------


//#2 : String.prototype.charAt() :- The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
// charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt() and String.fromCodePoint().

// console.log(myName.charAt(3));
// --------------------------------------------------------------------


//#3 : String.prototype.charCodeAt() :- The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// charCodeAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt().

// console.log(myName.charCodeAt(5));


//#4 : String.prototype.codePointAt() :- The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.

const icons = '☃★♲';
// console.log(icons.codePointAt(1));


//#5 : String.prototype.concat() :- The concat() method of String values concatenates the string arguments to this string and returns a new string.

// let str1 = 'Hello';
// let str2 = 'World';

// console.log(str1.concat(' ', str2));
// console.log(str2.concat(', ', str1));


//#6 : String.prototype.endsWith() :- The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

// let str1 = 'Cats are the best!';
// console.log(str1.endsWith('best!'));
// console.log(str1.endsWith('best', 16));

// let str2 = 'Is this a question?';
// console.log(str2.endsWith('question?'));


//#7 : String.prototype.includes() :- The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const word = 'foxl';

// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? 'is' : 'is not'
//   } in the sentence`,
// );


//#8: String.prototype.indexOf() :- The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

// const paragraph = "I think Ruth's dog is cuter than your dog and their is one another dog!";

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf("dog");

// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// const indexofSecond = paragraph.indexOf(searchTerm,indexOfFirst + 1);
// console.log(indexofSecond);

// console.log(paragraph.indexOf(searchTerm, indexofSecond + 2));


//#9 : String.prototype.lastIndexOf() :- The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = 'dog';

// console.log(paragraph.lastIndexOf(searchTerm));


// #10 : String.prototype.localeCompare() :- The localeCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.

// const a = 'réservé'; // With accents, lowercase
// const b = 'RESERVE'; // No accents, uppercase

// // console.log(a.localeCompare(b));
// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));


// #11 : String.prototype.match() :- The match() method of String values retrieves the result of matching this string against a regular expression.

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);


// #12 : String.prototype.matchAll() :- The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.

// const regexp = /t(e)(st(\d?))/g;
// const str = 'test1test2';

// const array = [...str.matchAll(regexp)];

// console.log(array[0]);
// // Expected output: Array ["test1", "e", "st1", "1"]

// console.log(array[1]);
// // Expected output: Array ["test2", "e", "st2", "2"]


// #13 : String.prototype.padEnd() & String.prototype.padStart()  

// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(17, '.'));
// // Expected output: "Breaded Mushrooms........"

// const str1 = '5';
// console.log(str1.padStart(3, '0'));
// Expected output: "05"

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber);
// Expected output: "************5581"


// #14 : String.prototype.repeat() :- The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

// const mood = 'Sad! ';
// console.log(`I feel ${mood.repeat(4)}`);


// **#15 : String.prototype.replace() :- The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replaceAll("dog", 'monkey'));


// #16 : String.prototype.replaceAll()

// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replaceAll('dog', 'monkey'));


// #17 : String.prototype.search() : The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
// const regex = /[^\w\s']/g;
// console.log(paragraph.search(regex));
// console.log(paragraph[paragraph.search(regex)]);


// #18 : String.prototype.slice() :- The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));

// console.log(str.slice(4, 19));

// console.log(str.slice(-4));

// console.log(str.slice(-9, -5));


// #19 : String.prototype.split() : The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// const chars = str.split('');
// console.log(chars[8]);
// const strCopy = str.split();
// console.log(strCopy);


// #20: String.prototype.startsWith() :- The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// console.log(str1.startsWith('Sat', 0));


// #21: String.prototype.substring() : The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// const str = 'Mozilla';
// console.log(str.substring(0, 3));
// console.log(str.substring(2));

// #22: String.prototype.toLocaleLowerCase() : The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.

const dotted = 'İstanbul';
// console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// console.log(`TR: ${dotted.toLocaleLowerCase()}`);


// #23: String.prototype.toLocaleUpperCase() :- The toLocaleUpperCase() method of String values returns this string converted to upper case, according to any locale-specific case mappings.

const city = 'istanbul';

// console.log(city.toLocaleUpperCase('en-US'));
// console.log(city.toLocaleUpperCase('TR'));


// #24 : String.prototype.toLowerCase() : The toLowerCase() method of String values returns this string converted to lower case.

const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.toLowerCase());

// #25: String.prototype.toString() : The toString() method of String values returns this string value.

const stringObj = new String('foo');

// console.log(stringObj);
// console.log(stringObj.toString());


// #26: String.prototype.toUpperCase() :- The toUpperCase() method of String values returns this string converted to uppercase.

// console.log(sentence.toUpperCase());


// #27 : String.prototype.trim() : The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const greeting = '   Hello world!   ';

// console.log(greeting);
// console.log(greeting.trim());
// console.log(greeting.trimEnd());
// console.log(greeting.trimStart());


// # 28 : String.prototype.valueOf() : The valueOf() method of String values returns this string value.

// console.log(stringObj);
// console.log(stringObj.valueOf());

// #29 : String: length : The length data property of a String value contains the length of the string in UTF-16 code units.

// const str = 'Life, the universe and everything. Answer:';
// console.log(`${str} ${str.length}`);