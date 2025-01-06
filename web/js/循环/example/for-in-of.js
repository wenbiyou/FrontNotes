let arr = [1, 2, , , 5, 6];
for (let key in arr) {
  console.log(key, arr[key]);
}
console.log("--------");
for (let value of arr) {
  console.log(value);
}
