// let arr = [1, 2, , , 5, 6];
// console.log("--------");
// for (let value of arr) {
//   console.log(value);
// }

// let map = new Map([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]);
// for (let value of map) {
//   console.log(value);
// }

// let iterable = [1, 2, 5, 6];
// const iterable = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// const iterable = {
//   [Symbol.iterator]() {
//     let i = 1;
//     return {
//       next() {
//         if (i <= 3) {
//           return { value: i++, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };
// const iterable = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   },
// };

// const iterable = {
//   i: 1,
//   next() {
//     if (this.i <= 3) {
//       return { value: this.i++, done: false };
//     } else {
//       return { value: undefined, done: true };
//     }
//   },
//   [Symbol.iterator]() {
//     return this;
//   },
// };

// for (const value of iterable) {
//   console.log(value);
// }

// function* source() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator = source();

// for (let value of generator) {
//   console.log(">>>>111", value);
// }

// const source = [1, 2, 3, 4];
// const sourceIterator = source[Symbol.iterator]();
// for (let value of sourceIterator) {
//   if (value === 2) {
//     break;
//   }
//   console.log("--->111", value);
// }
// for (let value of sourceIterator) {
//   console.log("--->222", value);
// }
// for (let value of sourceIterator) {
//   console.log("--->333", value);
// }
