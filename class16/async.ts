// asynchoronous programing

console.log("Data1");
console.log("Data2");
setTimeout(() => console.log("Data3"), 2000);
console.log("Data4");
// OutPut : Data1
// Data2
// Data4
// Data3

// callback And CallbackHell

function async(data: string, delay: number, cb: () => void) {
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

function promise(data: string, delayTime: number) {
  return new Promise((resolve, reject) => {
    if (typeof data === "string") {
      setTimeout(() => {
        console.log(data);
        resolve("Tehreem");
      }, delayTime);
    } else {
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

async function asyn_await() {
  try {
    let wait = await promise("Data1", 3000);
    let wait2 = await promise("Data2", 2000);
    let wait3 = await promise("Data3", 4000);
    let wait4 = await promise("Data4", 5000);
    console.log("Data Success");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("this is finally");
  }
}

asyn_await();
