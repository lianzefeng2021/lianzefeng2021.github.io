# 12. Symbol
## 概述
> ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

```js
let s = Symbol();
typeof s
// "symbol"
```

> Symbol 值不能与其他类型的值进行运算，会报错。
```js
let sym = Symbol('My symbol');
"your symbol is " + sym
// TypeError: can't convert symbol to string
`your symbol is ${sym}`
// TypeError: can't convert symbol to string
```

> 但是，Symbol 值可以显式转为字符串。
```js
let sym = Symbol('My symbol');
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```

> 另外，Symbol 值也可以转为布尔值，但是不能转为数值。
```js
let sym = Symbol();
Boolean(sym) // true
!sym  // false
if (sym) {
  // ...
}
Number(sym) // TypeError
sym + 2 // TypeError
```

## Symbol.prototype.description
> 创建 Symbol 的时候，可以添加一个描述。
```js
const sym = Symbol('foo');
```
> 上面代码中，sym的描述就是字符串foo。
> 但是，读取这个描述需要将 Symbol 显式转为字符串，即下面的写法。
```js
const sym = Symbol('foo');
String(sym) // "Symbol(foo)"
sym.toString() // "Symbol(foo)"
```
> 上面的用法不是很方便。ES2019 提供了一个实例属性description，直接返回 Symbol 的描述。
```js
const sym = Symbol('foo');
sym.description // "foo"
```

## 作为属性名的 Symbol
> --

## 实例：消除魔术字符串
> 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

## 属性名的遍历
> --

## Symbol.for()，Symbol.keyFor()
> 有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

> Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。