---
title: js遍历数组的十种方法
---

## 1. some()
遍历数组，只要有一个以上的元素满足条件就返回 true，否则返回 false ，退出循环

对数组中每个元素执行一次 ok 函数，直到某个元素返回 true，则直接返回 true。如果都返回 false,则返回 false

检查整个数组中是否 有 满足元素。

``` js
const emailList = [{email:'123@163.com'},{email:'aaa@163.com'}]
const tmpEmail = 'aaa@163.com'
const emailFlag = emailList.some(email => email.email === tmpEmail)
console.log(emailFlag, 'emailFlag') // true
```

## 2. every()
遍历数组，每一个元素都满足条件 则返回 true，否则返回 false

``` ts
private every() {
    const arr = [1,2,3,4,5]
    let result = arr.every((item: any) => {
    return item > 0
    })
    console.log(`结果:${result}`) // true
}
```

``` ts
private every() {
    const arr = [1,2,3,4,5]
    let result = arr.every((item: any) => {
    return item > 10
    })
    console.log(`结果:${result}`) // false
}
```

## 3. forEach()
-  数组里的元素个数有几个，该方法里的回调就会执行几次
-  第一个参数是数组里的当前元素，第二个参数为数组里当前元素的索引值，第三个参数则是它自己
- 没有返回值，本质上等同于 for 循环，对每一项执行 function 函数。即 map 是返回一个新数组，原数组不变，forEach 是改变原数组。
- 不支持 continue，用 return false 或 return true 代替。
- 不支持 break，用 try catch/every/some 代替
- 数组自带的遍历方法，虽然使用频率略高，但是性能仍然比普通循环略低

``` ts
private forEach() {
    type itemType = {
        cityId: number,
        cityName: string
    }
    const arr = [
        { cityId: 195, cityName: '深圳'},
        { cityId: 196, cityName: '北京'},
        { cityId: 197, cityName: '上海'}
    ]
    arr.forEach((item: itemType, index: number, arr: any) => {

    console.log(`index:${index}，item:${JSON.stringify(item)}，arr:${JSON.stringify(arr)}`)
    })
}
```

## 4. map()
- map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
- map() 方法按照原始数组元素顺序依次处理元素。
- 使用比较广泛，但其性能还不如 forEach
- 不会改变原始数组。

``` ts
let arr = [1, 2, 3, 4, 5, 6]
let newArr = arr.map((item: any) => {
    return item * item
})
console.log(newArr)
```

## 5. filter()
- 方法创建一个 __新的数组__，新数组中的元素是通过检查指定数组中符合条件的所有元素。
- 不会改变原始数组。

``` js
private filter(id: number): string {
    const arr = [
        { cityId: 195, cityName: '深圳'},
        { cityId: 196, cityName: '北京'},
        { cityId: 197, cityName: '上海'}
    ]
    let name: string = ''
    arr.filter((item: any) => {
    if(item.cityId === id) {
        name = item.cityName
    }
    })
    console.log(`传入:${id}，结果:${name}`)
    return name
}
```

## 6. find()
遍历数组，返回符合条件的第一个元素，如果没有符合条件的元素则返回 undefined

``` ts
let arr = [1,2,2,3,3,3,3,4,4,5,6]
let num = arr.find((item:any) => {
    return item === 3
})
console.log(num) // 3
```

``` ts
let arr = [1,2,2,3,3,3,3,4,4,5,6]
let num = arr.find((item:any) => {
    return item === 10
})
console.log(num) // undefined
```

## 7. findIndex()
遍历数组，返回符合条件的第一个元素的 __索引__，如果没有符合条件的元素则返回 -1

``` ts
let arr = [1,2,2,3,3,3,3,4,4,5,6]
let num = arr.findIndex((item:any) => {
    return item === 2
})
console.log(num) // 1
```

``` ts
let arr = [1,2,2,3,3,3,3,4,4,5,6]
let num = arr.findIndex((item:any) => {
    return item === 10
})
console.log(num) // -1
```

## 8. for…of…（ES6）
自动解构

__for of不能对象用__

``` ts
const arr = [
    { cityId: 195, cityName: '深圳'},
    { cityId: 196, cityName: '北京'},
    { cityId: 197, cityName: '上海'}
]
for(const {cityId, cityName} of arr) {
    console.log(cityId, cityName)
}
```

## 9. for…in…
for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
for in 得到对对象的 key 或数组,字符串的下标

``` ts
const arr = [
    { cityId: 195, cityName: '深圳'},
    { cityId: 196, cityName: '北京'},
    { cityId: 197, cityName: '上海'}
]
const obj = { cityId: 195, cityName: '深圳'}

for(const key in arr) {
    console.log(`数组key-${key}`)
}
for(const key in obj) {
    console.log(`对象key-${key}`)
}
```

## 10. for
最简单的一种循环遍历方法，也是使用频率最高的一种，可优化

``` ts
const arr = [
    { cityId: 195, cityName: '深圳'},
    { cityId: 196, cityName: '北京'},
    { cityId: 197, cityName: '上海'}
]
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
```

## compared
for 最快，但可读性比较差

forEach 比较快，能够控制内容

for....of 比较慢，香

for...in 比较慢，不方便