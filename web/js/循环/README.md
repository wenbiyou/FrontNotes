# javaScript 循环

## for 循环

创建一个循环，包含 3 个可选表达式，用分号分隔：
`for (initialization; condition; afterthought) {}`
[demo](./example/for.js)

## for...in 循环/for...of 循环/for await of 循环

#### for...in

迭代一个对象的可枚举的属性（除 Symbol 以外），包括对象原型链上的属性.
[demo](./example/for-in.js)

#### for...of

迭代可迭代对象定义的要迭代的值，包括数组、字符串、Map、Set、TypedArray、arguments 对象等等。
[demo](./example/for-of.js)

#### for...in 与 for...of 的区别

- for...in 循环返回的是属性名，for...of 循环返回的是属性值。
- 在稀数组中，for-of 会遍历空槽，for-in 不会遍历空槽。[demo](./example/for-in-of.js)

#### for await of 循环

## while 循环/do...while 循环

- while(condition) 创建一个循环，只要条件为真，则执行循环内的语句
- do...while(condition) 创建一个循环，只要条件为真，则执行循环内的语句.至少执行一次。
  [demo](./example//while.js)

## 数组循环

#### forEach()

#### map()

#### filter()

#### reduce()/reduceRight()
