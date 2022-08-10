---
title: JSON 方法
---

## JSON.parse()

JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换 (操作)。

``` js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

// json: 要被解析成 JavaScript 值的字符串

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

// 返回值
// Object 类型，对应给定 JSON 文本的对象/值。
```

使用 JSON.parse():
``` js
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```

## JSON.stringify()

JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。

::: tip
JSON.stringify()将值转换为相应的 JSON 格式：
- 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined).
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
- Date 日期调用了 toJSON() 将其转换为了 string 字符串（同 Date.toISOString()），因此会被当做字符串处理。
- NaN 和 Infinity 格式的数值及 null 都会被当做 null。
- 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
:::

``` js
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""
```

> 参数
>
> value
>
>> 将要序列化成 一个 JSON 字符串的值。

> 返回值
>
>> 一个表示给定值的 JSON 字符串。

使用 JSON.stringify
``` js
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")});
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);
// '[null,null,null]'

JSON.stringify({[Symbol("foo")]: "foo"});
// '{}'

JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);
// '{}'

JSON.stringify(
    {[Symbol.for("foo")]: "foo"},
    function (k, v) {
        if (typeof k === "symbol"){
            return "a symbol";
        }
    }
);


// undefined

// 不可枚举的属性默认会被忽略：
JSON.stringify(
    Object.create(
        null,
        {
            x: { value: 'x', enumerable: false },
            y: { value: 'y', enumerable: true }
        }
    )
);

// "{"y":"y"}"

```

## JSON.parse(JSON.stringify(obj))实现深拷贝
- JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象

::: tip
1、如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象；

2、如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；

3、如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；

4、如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null

5、JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；

6、如果对象中存在循环引用的情况也无法正确实现深拷贝；
:::

以上，如果拷贝的对象不涉及上面讲的情况，可以使用JSON.parse(JSON.stringify(obj))实现深拷贝，但是涉及到上面的情况，可以考虑使用如下方法实现深拷贝：

``` js
 function  deepClone(data) {
      const type = this.judgeType(data);
      let obj;
      if (type === 'array') {
        obj = [];
      } else if (type === 'object') {
        obj = {};
      } else {
    // 不再具有下一层次
        return data;
      }
      if (type === 'array') {
        // eslint-disable-next-line
        for (let i = 0, len = data.length; i < len; i++) {
          obj.push(this.deepClone(data[i]));
        }
      } else if (type === 'object') {
        // 对原型上的方法也拷贝了....
        // eslint-disable-next-line
        for (const key in data) {
          obj[key] = this.deepClone(data[key]);
        }
      }
      return obj;
    },


function  judgeType(obj) {
  // tostring会返回对应不同的标签的构造函数
      const toString = Object.prototype.toString;
      const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
      };
      if (obj instanceof Element) {
        return 'element';
      }
      return map[toString.call(obj)];
    },
```