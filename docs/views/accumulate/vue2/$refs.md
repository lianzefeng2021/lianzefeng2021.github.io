---
title: this.$refs 的使用
---

- this.$refs是一个对象，持有当前组件中注册过 ref特性的所有 DOM 元素和子组件实例

> 注意： $refs只有在组件渲染完成后才填充，在初始渲染的时候不能访问它们，并且它是非响应式的，因此不能用它在模板中做数据绑定

- 当ref和v-for一起使用时，获取到的引用将会是一个数组，包含循环数组源

```js
// html
<div ref="myDiv" v-for="(item, index) in arr" :key="index">{{item}}</div>
// js
this.$refs.myDiv
// 输出
myDiv:[]
```

::: tip 基本用法①
> 本页面-获取dom元素

```js
// html
<div ref="testDom">11111</div>
// js
console.log(this.$refs.testDom)
// 输出
<div>11111</div>
```
:::

> 其实ref除了可以获取本页面的dom元素，还可以拿到子组件中的data和去调用子组件中的方法

::: tip 基本用法②
> 获取子组件中的data

```js
// html
<child ref="childRefName"></child>
// js
console.log(this.$refs.childRefName.dataValue)
// 输出
```
:::

> 

::: tip 基本用法③
> 调用子组件中的方法

```js
// html
<child ref="childRefName"></child>
// js
console.log(this.$refs.childRefName.functionName())
// 输出
```
:::

> 

::: tip 基本用法④
> 子组件调用父组件方法

```js
// html
<child ref="childRefName" @fatherFunctionName="fatherFunction" />
// js
console.log(this.$emit("fatherFunctionName",childDataValue))
// 输出
```
:::