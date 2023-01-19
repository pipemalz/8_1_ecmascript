//📏 JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER. 
//Fuera de estos límites, los cálculos matemáticos pueden fallar y mostrar resultados erróneos. 
//Con BigInt esto se resuelve.

const aBigN = 829101929383093801312312n;
console.log(aBigN,typeof(aBigN))

const anotherBigN = BigInt(498237401392874123);
console.log(anotherBigN, typeof(anotherBigN))