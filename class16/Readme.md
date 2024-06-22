# Synchronous programing:

synchronous means the codes run in a paerticular sequence of instruction given in the program each instraction wait for the previous instruction to complete it's execution. for example : if one operation takes a long time (such as waiting for a file to be read or a network request to complete), the entire program may appear to pause or "block" until that operation finishes.

- so that's why we used here asynchronouse programing

# Asynchronous programing :

Due to synchronouse programing sometimes importent instruction get blocked due to some previous instruction , which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

# CAllbacks :

Callback is a function passed as an argument to another function that's call callbacks for example :

function sum (a,b){
console.log(a+b);
}
function abc(a,b,cb:(a:number,b:number)=>void){
cb(a,b)
}
abc(1,2,sum)

# callback Hell :
When our callbacks are deeply nested at a high level we encounter the problem known as "callback hell." for Example :

function async(data: string, delay: number, cb: () => void) {
setTimeout(() => {
console.log(data);
cb();
}, delay);
}
- async("Data1", 3000, () => {
  async("Data2", 2000, () => {
    async("Data3", 4000, () => {
      async("Data4", 5000, () => {
        console.log("Data Success");
      });
    });
  });
});

 this code is not understandable so deficult to understand that's why solve this problem we have come promises 

 # promises 
 Promises provide a cleaner, more readable way to handle asynchronous operations, avoiding the deep nesting of callback hell. They allow chaining of asynchronous tasks and better error handling. for Example : 

 function async(data: string, delay: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(data);
            resolve();
        }, delay);
    });
}

async("Data1", 3000)
    .then(() => async("Data2", 2000))
    .then(() => async("Data3", 4000))
    .then(() => async("Data4", 5000))
    .then(() => {
        console.log("Data Success");
    })
    .catch((error) => {
        console.error("Error:", error);
    });

In this code, we use promise chaining with .then(), which helps to avoid the deep nesting seen in callback hell. Each .then() call waits for the previous promise to resolve before executing the next asynchronous task. The .catch() method at the end of the chain is used for error handling.

due to promise chaining we have come async/await concept  

# Async/await 

While promises help to make asynchronous code more readable, using .then() for chaining can still become cumbersome. To further simplify asynchronous code, we can use async/await. async/await allows writing asynchronous code that looks synchronous, making it even more readable and easier to manage.

for Example: 

function asyncTask(data: string, delay: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(data);
            resolve();
        }, delay);
    });
}

async function runTasks() {
    try {
        await asyncTask("Data1", 3000);
        await asyncTask("Data2", 2000);
        await asyncTask("Data3", 4000);
        await asyncTask("Data4", 5000);
        console.log("Data Success");
    } catch (error) {
        console.error("Error:", error);
    }
}

runTasks();
