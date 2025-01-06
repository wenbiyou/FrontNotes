let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// 跳过当前循环
// for (let i = 0; i < arr.length; i++) {
//   if (i === 4) {
//     continue;
//   }
//   console.log(i, arr[i]);
// }

// 退出循环
for (let i = 0; i < arr.length; i++) {
  if (i === 6) {
    break;
  }
  console.log(i, arr[i]);
}
