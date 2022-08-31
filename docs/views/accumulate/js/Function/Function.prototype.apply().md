---
title: Function.prototype.apply()
---

> apply() 方法 __调用__ 一个具有给定 this 值的函数，以及以一个数组（或一个类数组对象）的形式提供的参数。

``` js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
```

## 语法

``` js
apply(thisArg)
apply(thisArg, argsArray)
```

## 参数
__thisArg__
在 func 函数运行时使用的 this 值。请注意，this 可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

__argsArray__ 可选
一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或 undefined，则表示不需要传入任何参数。从 ECMAScript 5 开始可以使用类数组对象。浏览器兼容性请参阅本文底部内容。

## 返回值
调用有指定 this 值和参数的函数的结果。

## 描述
::: tip
备注： 虽然这个函数的语法与 call() 几乎相同，但根本区别在于，call() 接受一个参数列表，而 apply() 接受一个参数的单数组。
:::
::: tip
备注： 当第一个参数为 null 或 undefined 时，可以使用数组展开语法实现类似的结果。
:::

## 示例
- 用 apply 将数组各项添加到另一个数组

我们可以使用 push 将元素追加到数组中。由于 push 接受可变数量的参数，所以也可以一次追加多个元素。

但是，如果 push 的参数是数组，它会将该数组作为单个元素添加，而不是将这个数组内的每个元素添加进去，因此我们最终会得到一个数组内的数组。如果不想这样呢？concat 符合我们的需求，但它并不是将元素添加到现有数组，而是创建并返回一个新数组。然而我们需要将元素追加到现有数组......那么怎么做好？难道要写一个循环吗？别当然不是！

apply 正派上用场！

``` js
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

- 使用 apply 和内置函数
对于一些需要写循环以遍历数组各项的需求，我们可以用 apply 完成以避免循环。

下面是示例，我们将用 Math.max/Math.min 求得数组中的最大/小值。

``` js
// 找出数组中最大/小的数字
const numbers = [5, 6, 2, 3, 7];

// 使用 Math.min/Math.max 以及 apply 函数时的代码
let max = Math.max.apply(null, numbers); // 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..)
let min = Math.min.apply(null, numbers);

// 对比：简单循环算法
max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min)
    min = numbers[i];
}
```

注意：如果按上面方式调用 apply，有超出 JavaScript 引擎参数长度上限的风险。一个方法传入过多参数（比如一万个）时的后果在不同 JavaScript 引擎中表现不同。（JavaScriptCore 引擎中有被硬编码的参数个数上限：65536）。

这是因为此限制（实际上也是任何用到超大栈空间的行为的自然表现）是不明确的。一些引擎会抛出异常，更糟糕的是其他引擎会直接限制传入到方法的参数个数，导致参数丢失。比如：假设某个引擎的方法参数上限为 4（实际上限当然要高得多），这种情况下，上面的代码执行后，真正被传递到 apply的参数为 5, 6, 2, 3 ，而不是完整的数组。

::: tip
如果你的参数数组可能非常大，那么推荐使用下面这种混合策略：将数组切块后循环传入目标方法：
:::

``` js
function minOfArray(arr) {
  let min = Infinity;
  let QUANTUM = 32768; // JavaScriptCore 引擎中被硬编码的参数个数上限 的一半

  for (let i = 0, len = arr.length; i < len; i += QUANTUM) {
    const submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

let min = minOfArray([5, 6, 2, 3, 7]);
```

- 使用 apply 来链接构造器
你可以使用 apply 来链接一个对象构造器，类似于 Java。在接下来的例子中我们会创建一个全局 Global_Objects/Function 对象的 construct 方法 ，来使你能够在构造器中使用一个类数组对象而非参数列表。

``` js
Function.prototype.construct = function (aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

