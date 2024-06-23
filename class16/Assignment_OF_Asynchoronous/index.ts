//Question 1: Write a TypeScript function that uses async/await to wait for
// 2 seconds and then returns a string "Hello World".

function helloWorld(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 2000);
  });
}

async function async1(): Promise<void> {
  let wait = await helloWorld();
  console.log(wait);
}
async1();

//Question 2: Create a TypeScript function that takes a callback function as an
//argument and uses setTimeout to call the callback after 1 second.

function callback(cb: () => void): void {
  setTimeout(() => {
    cb();
  }, 1000);
}
callback(() => {
  console.log("After One Second");
});

//Question 3: Write a TypeScript function that returns a Promise that resolves
// with the value "Resolved!" after 3 seconds.

function resolved(): Promise<string> {
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

function promises(value: string, delay: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}
async function asynPromise() {
  let wait1 = await promises("Result1", 3000);
  let wait2 = await promises("Result2", 4000);
  let array = [wait1, wait2];
  console.log(array);
}
asynPromise();

//Question 5: Write a TypeScript function that uses async/await to wait for a
// Promise to resolve and then logs the result to the console.

function Q5(value: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 4000);
  });
}
async function q5() {
  let wait = await Q5("Typescript");
  console.log(wait); // logs the result to the console.
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
async function q6() {
  try {
    let wait = Q6();
    return wait;
  } catch (error) {
    console.log(error);
  }
}

q6();

//Question 7: Create a TypeScript function that takes a number as an argument
// and returns a Promise that resolves with the square of the number after a
//delay of 1 second.

function Q7(number: number) {
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

function Q8(value: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  });
}
async function q8(): Promise<string[]> {
  let wait = [Q8("JavaScript"), Q8("TypeScript"), Q8("OpenAI")];
  let all = await Promise.all(wait);
  return all;
}
(async () => {
  try {
    const results = await q8();
    console.log(results);
  } catch (error) {
    console.error("Error:", error);
  }
})();

//Question 9: Create a TypeScript function that uses setTimeout to call a function
// repeatedly every 2 seconds.

function Q9(): void {
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

function resolveAfter2Sec(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 2000);
  });
}
async function Q10(num: number): Promise<number> {
  const result = await resolveAfter2Sec(num);
  return new Promise((resolve, reject) => {
    resolve(result * 2);
  });
}

Q10(5).then((value) => {
  console.log(value);
});
