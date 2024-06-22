// Rest parameter
function num(name) {
    var allSubMarks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allSubMarks[_i - 1] = arguments[_i];
    }
    console.log("name :", name);
    var marks = allSubMarks.reduce(function (total, currentValue) {
        return total + currentValue;
    }, 0);
    return "Total Marks : ".concat(marks);
}
console.log(num("Tehreem", 70, 80, 85, 88, 92)); //output name : Tehreem
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(12, 34)); // output 46   Addition
console.log(sum("5", "5")); // output : 55  concatanating
var Dve = {
    name: "Tehreem",
    Html: true,
    Css: true,
    Javascript: true,
    TypeScript: true,
};
var Dev1 = {
    name: "Ayesha",
    Html: true,
    Css: true,
    Javascript: true,
    TypeScript: true,
};
Dve = Dev1;
Dev1 = Dve;
var dev3 = {
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
var person = {
    name: "Aina",
    Html: true,
    Css: true,
};
person = Dve;
// Dve = person // Erorr : Type '{ name: string; Html: boolean; Css: boolean; }' is missing the following properties from type 'Dev': Javascript, TypeScript
// index signature
var person2 = {
    name: "Tehreem",
    f_Name: "Asghar",
};
var person3 = {
    name: "Aina",
    age: 19,
    f_Name: "Yousof",
};
person2 = person3;
person3 = person2;
function myConsoleLog() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}
myConsoleLog(true, 100, 'typeScript', null, ['a', 'b'], { name: 'Tehreem' });
