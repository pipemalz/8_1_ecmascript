const myPromise = () => {
  return new Promise((resolve, reject) => {
    reject("reject");
  });
};

const myPromise2 = () => {
  return new Promise((resolve, reject) => {
    resolve("resolve");
  });
};

const myPromise3 = () => {
  return new Promise((resolve, reject) => {
    resolve("resolve2");
  });
};

Promise.allSettled([myPromise(), myPromise2(), myPromise3()]).then((res) =>
  console.log(res)
);
