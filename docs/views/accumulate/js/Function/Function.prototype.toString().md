---
title: Function.prototype.toString()
---

The toString() method returns a string representing the source code of the specified Function.

toString() 方法返回一个表示当前函数源代码的字符串。

``` js
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// expected output: "function abs() { [native code] }"
```