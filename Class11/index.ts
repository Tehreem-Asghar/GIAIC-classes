// Rest parameter

function num(name: string, ...allSubMarks: number[]) {

  console.log("name :", name);
  let marks = allSubMarks.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);

  return `Total Marks : ${marks}`;
}
console.log(num("Tehreem", 70, 80, 85, 88, 92)); //output name : Tehreem
// Total Marks : 415

//Function Overloading

function sum(num1: number, num2: number): number;
function sum(num1: string, num2: string): string;

function sum(num1: any, num2: any): any {
  return num1 + num2;
}
console.log(sum(12, 34));// output 46   Addition
console.log(sum("5", "5")); // output : 55  concatanating

// Structural Typing

// These two interfaces are completely
// transferrable in a structural type system:

interface Dev {
  name: string;
  Html: boolean;
  Css: boolean;
  Javascript: boolean;
  TypeScript: boolean;
}

interface Dev1 {
  name: string;
  Html: boolean;
  Css: boolean;
  Javascript: boolean;
  TypeScript: boolean;
}

let Dve: Dev = {
  name: "Tehreem",
  Html: true,
  Css: true,
  Javascript: true,
  TypeScript: true,
};

let Dev1: Dev1 = {
  name: "Ayesha",
  Html: true,
  Css: true,
  Javascript: true,
  TypeScript: true,
};

Dve = Dev1;
Dev1 = Dve;
//both interface properties same and length also same so that can transfare each other

// Creat one Other interface for one other Developer person
interface Dev3 {
  name: string;
  Html: boolean;
  Css: boolean;
  Javascript: boolean;
  TypeScript: boolean;
  NextJs: boolean;
}

let dev3: Dev3 = {
  name: "Arham",
  Html: true,
  Css: true,
  Javascript: true,
  TypeScript: true,
  NextJs: true,
};

// dev3 = Dve ; // Error : Property 'NextJs' is missing in type 'Dev' but required in type 'Dev3'.
Dve = dev3; // not eroor beacuse all dev properties available in also dev3

// inline structurall

let person: { name: string; Html: boolean; Css: boolean } = {
  name: "Aina",
  Html: true,
  Css: true,
};

person = Dve;
// Dve = person // Erorr : Type '{ name: string; Html: boolean; Css: boolean; }' is missing the following properties from type 'Dev': Javascript, TypeScript

// index signature

let person2: { name: string; [o: string]: any } = {
  name: "Tehreem",
  f_Name: "Asghar",
};

interface Person {
  name: string;
  age?: number;
  [x: string]: any;
}

let person3: Person = {
  name: "Aina",
  age: 19,
  f_Name: "Yousof",
};

person2 = person3;
person3 = person2;


function myConsoleLog(...data : any[]){
  for (let i = 0 ; i < data.length ; i++){
    console.log(data[i]);
  }
}

myConsoleLog(true,100,'typeScript',null , ['a','b'], {name : 'Tehreem'});
