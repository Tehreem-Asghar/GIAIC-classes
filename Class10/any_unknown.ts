// for loop
for (let i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}

let BF: string[] = ["Hajra", "shaheen", "namal", "humail"];
console.log(BF);
console.log(BF[2]); // namal
console.log(BF[3]); // humail
console.log((BF[3] = "mehak")); // update : humail to mehak

// Better method: use loop to iterate all names one by one
for (let i = 0; i < BF.length; i++) {
  console.log(BF[i]);
}

// any

let data: any;
data = "Tehreem";

(<string> data).toUpperCase();// type Assertion 
(data as string).toLowerCase(); // type Assertion
console.log(data.slice(3,5));

// unknown 

let gameData : unknown ;

gameData = ['a','b','c','d']

// gameData[1] // Error : 'gameData' is of type 'unknown'.

// here we need narrowing 

//Array.isArray is a built-in JavaScript function that checks if a given value is an array. If it is, TypeScript will then treat gameData as an array within the scope of the if block, allowing you to safely access its elements.

if (Array.isArray(gameData)) {
  console.log(gameData[1]); // Output: 'b'
} else {
  console.log('gameData is not an array');
}

let Data : unknown;
Data = 'Tehreem';
//Data.slice() // Error : 'Data' is of type 'unknown'.

if (typeof Data === 'string'){
 console.log(Data.slice(0));
 
}

// Enumration 

enum colors {
  Green, Red , Blue
}

console.log(colors.Blue);// 2
console.log(colors.Green);//0
console.log(colors[2]);// Blue
console.log(colors[0]);// Green


// enum names {
//   Tehreem , Ayesha , Taha
// }

