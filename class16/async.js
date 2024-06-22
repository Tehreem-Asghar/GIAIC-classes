"use strict";
// asynchoronous programing
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Data1");
console.log("Data2");
setTimeout(() => console.log("Data3"), 2000);
console.log("Data4");
// OutPut : Data1
// Data2
// Data4
// Data3
// callback And CallbackHell
function async(data, delay, cb) {
    setTimeout(() => {
        console.log(data);
        cb();
    }, delay);
}
// callback hell : this code is not understandable so this is not a good way of programing
async("Data1", 3000, () => {
    async("Data2", 2000, () => {
        async("Data3", 4000, () => {
            async("Data4", 5000, () => {
                console.log("Data Success");
            });
        });
    });
});
// promise
function promise(data, delayTime) {
    return new Promise((resolve, reject) => {
        if (typeof data === "string") {
            setTimeout(() => {
                console.log(data);
                resolve("Tehreem");
            }, delayTime);
        }
        else {
            reject("Your data is incorrect");
        }
    });
}
// Promise chaining
promise("Data1", 3000)
    .then(() => promise("Data2", 2000))
    .then(() => promise("Data3", 4000))
    .then(() => promise("Data4", 5000))
    .then(() => {
    console.log("Data Success");
})
    .catch((error) => {
    console.log(error);
});
// Async/await
function asyn_await() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let wait = yield promise("Data1", 3000);
            let wait2 = yield promise("Data2", 2000);
            let wait3 = yield promise("Data3", 4000);
            let wait4 = yield promise("Data4", 5000);
            console.log("Data Success");
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log("this is finally");
        }
    });
}
asyn_await();
