// asynchronous

console.log("one");
console.log("Two");

setTimeout(() => console.log("Typescript"), 4000);

console.log("Three");
console.log("four");

//Callback  &  callBackHell:

function instaLog(userdata: string | number, cb?: () => void) {
  setTimeout(() => {
    console.log("userData :", userdata);
    if (cb) {
      cb();
    }
  }, 3000);
}

// callback hell : this code is not understandable so this is not a good way of programing
//nested callback
instaLog("Tehreem", () => {
  console.log("Getting Data Two.......");
  instaLog(12345, () => {
    console.log("Getting Data Three.....");
    instaLog("tehreem24@gmail.com", () => {
      console.log("Getting Data Four......");
      instaLog("successfully login");
    });
  });
});
// outPut :
// userData : Tehreem
// Getting Data Two.......
// userData : 12345
// Getting Data Three.....
// userData : tehreem24@gmail.com
// Getting Data Four......
// userData : successfully login

// callBackHell Another Example

function data(username: string | number, nextData: () => void) {
  setTimeout(() => {
    console.log("UserName:", username);
    nextData();
  }, 3000);
}

data("Tehreem", () => {
  console.log("username is correct");
  console.log("Enter password");
  data(1122345, () => {
    console.log("your password is correct");
  });
});

//Promises

function asyn(userId: number) {
  let promise = new Promise((resolve, reject) => {
    console.log("Searching");
    let data = {
      UserName: "Tehreem Asghar",
      phone: 1234567889,
      email: "tehreem@gmail.com",
    };
    setTimeout(() => {
      if (userId === 2468) {
        resolve(data);
      } else {
        reject("we can't get your data");
      }
    }, 3000);
  });
  return promise;
}

asyn(2468)
  .then((res) => {
    console.log("data get successfuly");
    console.log(res);
  })
  .catch((err) => {
    console.log("Invalid ID");
    console.log(err);
  });

// chaining in promise

function promise2(ID: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ID === typeof Number) {
        console.log("Data", ID);
        resolve("success");
      } else {
        reject("Invalid ID");
      }
    }, 4000);
  });
}

promise2(1)
  .then((res) => {
    console.log(res);
    promise2(2).then((resu) => {
      console.log(resu);
      promise2(3).then((resul) => {
        console.log(resul);
        promise2(4).then((result) => {
          console.log(result);
        });
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

promise2(1)
  .then((res) => {
    return promise2(2);
  })
  .then((res) => {
    return promise2(3);
  })
  .then((res) => {
    return promise2(4);
  })
  .then((res) => {
    console.log(res);
  });

// aync/await
function fun(name: any) {
  return new Promise((resolve, reject) => {
    console.log("Pending");
    setTimeout(() => {
      if (typeof name === "string") {
        resolve(name + "success");
      } else {
        reject(name + "  invalid name \n Try again");
      }
    }, 3000);
  });
}

async function async() {
  try {
    await fun("Tehreem");
    console.log("Tehreem: Success");
    await fun("Arham");
    console.log("Arham: Success");
    await fun(124);
    console.log("Ayesha: Success");
  } catch (error) {
    console.error("Error: " + error);
  } finally {
    console.log("this is finally");
  }
}

async();
