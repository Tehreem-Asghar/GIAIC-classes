"use strict";
//Question 1: Write a TypeScript function that uses async/await to wait for
// 2 seconds and then returns a string "Hello World".
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function helloWorld() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    });
}
function async1() {
    return __awaiter(this, void 0, void 0, function* () {
        let wait = yield helloWorld();
        console.log(wait);
    });
}
async1();
//Question 2: Create a TypeScript function that takes a callback function as an
//argument and uses setTimeout to call the callback after 1 second.
function callback(cb) {
    setTimeout(() => {
        cb();
    }, 1000);
}
callback(() => {
    console.log("After One Second");
});
//Question 3: Write a TypeScript function that returns a Promise that resolves
// with the value "Resolved!" after 3 seconds.
function resolved() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved("Resolved!");
        }, 3000);
    });
}
let storeReturnValue = resolved();
storeReturnValue
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log(error);
});
//Question 4: Create a TypeScript function that uses async/await to wait for
//two Promises to resolve and then returns their results as an array.
function promises(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}
function asynPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        let wait1 = yield promises("Result1", 3000);
        let wait2 = yield promises("Result2", 4000);
        let array = [wait1, wait2];
        console.log(array);
    });
}
asynPromise();
//Question 5: Write a TypeScript function that uses async/await to wait for a
// Promise to resolve and then logs the result to the console.
function Q5(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, 4000);
    });
}
function q5() {
    return __awaiter(this, void 0, void 0, function* () {
        let wait = yield Q5("Typescript");
        console.log(wait); // logs the result to the console.
    });
}
q5();
//Question 6: Write a TypeScript function that uses async/await to wait for a
//Promise to reject and then logs the error to the console.
function Q6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("some Thing wrong");
        }, 5000);
    });
}
function q6() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let wait = Q6();
            return wait;
        }
        catch (error) {
            console.log(error);
        }
    });
}
q6();
//Question 7: Create a TypeScript function that takes a number as an argument
// and returns a Promise that resolves with the square of the number after a
//delay of 1 second.
function Q7(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let square = number * number;
            resolve(square);
        }, 1000);
    });
}
Q7(8).then((value) => {
    console.log(value);
});
//Question 8: Write a TypeScript function that uses async/await to wait for an
//array of Promises to resolve and then returns an array of their results.
function Q8(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, 2000);
    });
}
function q8() {
    return __awaiter(this, void 0, void 0, function* () {
        let wait = [Q8("JavaScript"), Q8("TypeScript"), Q8("OpenAI")];
        let all = yield Promise.all(wait);
        return all;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield q8();
        console.log(results);
    }
    catch (error) {
        console.error("Error:", error);
    }
}))();
//Question 9: Create a TypeScript function that uses setTimeout to call a function
// repeatedly every 2 seconds.
function Q9() {
    function q9() {
        console.log("Hello World");
        setTimeout(q9, 2000);
    }
    setTimeout(q9, 2000);
}
Q9();
//Question 10: Write a TypeScript function that uses async/await to wait for a
//Promise to resolve and then returns a new Promise that resolves with the result
// multiplied by 2.
function resolveAfter2Sec(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    });
}
function Q10(num) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield resolveAfter2Sec(num);
        return new Promise((resolve, reject) => {
            resolve(result * 2);
        });
    });
}
Q10(5).then((value) => {
    console.log(value);
});
