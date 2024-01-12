const obj1 = { 1: "11", 2: "22", 3: "33" };
const obj2 = { 4: "44", 5: "55", 6: "66" };
// console.log(obj1);

const obj3 = { obj1, obj2 };

// console.log(obj3);

const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true

