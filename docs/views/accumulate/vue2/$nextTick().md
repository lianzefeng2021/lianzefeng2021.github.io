---
title: this.$nextTick()
---
> vuejs中使用this.$nextTick()
>> 
>> Vue更新DOM-异步的

```js
methods: {
    Fn(){
         this.$nextTick(() => {
         	...
            console.log("DOM更新后触发$nextTick函数");
        })
    }
}
```

>> 另外 $nextTick()支持promise,还可以写以下语法

```js
methods: {
    async Fn(){
     ...
     const res = await this.$nextTick()// this.$nextTick()返回的是一个promise对象
     ...
    }
}
```

>> dom更新是异步的,直接获取内容,是拿不到更新后的值的,用$nextTick解决

``` js
<template>
  <div>
    <p id="num">数字: {{ count }}</p>
    <button @click="btn">点击+1, 观察打印</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btn() {
        this.count++; // 数字添加后, 异步更新DOM, 所以马上获取标签的值还是0
        console.log(document.getElementById('num').innerHTML); // 0
        this.$nextTick(() => {
            console.log("DOM更新后触发$nextTick函数");
            console.log(document.getElementById('num').innerHTML); // 1
        })
    },
  },
};
</script>
```


> 总结:dom是异步更新的, $nextTick可以等待dom更新后触发此方法

::: tip
https://juejin.cn/post/7095737482666311710
:::