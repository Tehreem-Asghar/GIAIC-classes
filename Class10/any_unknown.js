"use strict";
// for loop
for (let i = 1; i <= 10; i++) {
    console.log(`3 * ${i} = ${3 * i}`);
}
let BF = ["Hajra", "shaheen", "namal", "humail"];
console.log(BF);
console.log(BF[2]); // naml
console.log(BF[3]); // humail
console.log((BF[3] = "mehak")); // update : humail to mehak
// Better method: use loop to iterate all names one by one
for (let i = 0; i < BF.length; i++) {
    console.log(BF[i]);
}
// any
let data;
data = "Tehreem";
data.toUpperCase(); // type Assertion 
data.toLowerCase(); // type Assertion
console.log(data.slice(3, 5));
// unknown 
let gameData;
gameData = ['a', 'b', 'c', 'd'];
// gameData[1] // Error : 'gameData' is of type 'unknown'.
// here we need narrowing 
//Array.isArray is a built-in JavaScript function that checks if a given value is an array. If it is, TypeScript will then treat gameData as an array within the scope of the if block, allowing you to safely access its elements.
if (Array.isArray(gameData)) {
    console.log(gameData[1]); // Output: 'b'
}
else {
    console.log('gameData is not an array');
}
let Data;
Data = 'Tehreem';
//Data.slice() // Error : 'Data' is of type 'unknown'.
if (typeof Data === 'string') {
    console.log(Data.slice(0));
}
