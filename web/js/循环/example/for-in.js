// let person = {
//   name: "张三",
//   age: 18,
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (let key in iterable) {
  console.log(key);
}
// 0 1 2 foo arrCustom objCustom
