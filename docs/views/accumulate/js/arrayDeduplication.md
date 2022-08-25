---
title: Array Deduplication
---

> Array Deduplication

the deduplication of array

数组去重

> first method from es6

```js
Array.from(new Set(array))
```

> second method of es5

```js
function unLink (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
```

> third method of indexOf

```js
function unlink (arr) {
  if (!Array.isArray(arr)) {
    console.log('error!')
    return
  }
  var array = []
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array
}
```

> the fourth method of includes

```js
function unique (arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  var array = []
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      //includes check array have some one or not
      array.push(arr[i])
    }
  }
  return array
}
```

> the fifth method of filter

``` js
function unlink(arr) {
    return arr.filter(function (item, index, arr) {
        //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
        return arr.indexOf(item, 0) === index;
    });
}
```