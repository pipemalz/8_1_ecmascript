const myPromise = () => {
    return new Promise((resolve, reject) => {
      reject("reject");
    });
  };
  
  const myPromise2 = () => {
    return new Promise((resolve, reject) => {
      reje("resolve");
    });
  };
  
  const myPromise3 = () => {
    return new Promise((resolve, reject) => {
      resolve("resolve2");
    });
  };
  
  Promise.any([myPromise(), myPromise2(), myPromise3()]).then((res) =>
    console.log(res)
  );
  

  //CAPTURA LA PRIMERA PROMESA QUE DEVUELVA CON RESOLVE