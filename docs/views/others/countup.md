---
title: ConutUp
---
::: tip
一个让数字在初次出现时以递增的方式伪动态加载
:::
> 下方数字为组件效果展示

<CountUp :endVal="endVal" :key="`key_`+key"/>

---

<el-button @click="plus">变大</el-button>
<el-button @click="subtract">变小</el-button>

> npm install countup.js

<script>
  export default{
    data() {
        return {
            endVal: 2022,
            key:2022
        }
    },
    methods: {
      plus() {
        this.endVal++
        this.key++
      },
      subtract() {
        this.endVal--
        this.key--
      },
    },
  }
</script>