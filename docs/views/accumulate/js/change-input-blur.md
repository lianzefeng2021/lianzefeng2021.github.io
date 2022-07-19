---
title: input框事件触发顺序
---


> 事件触发顺序

```js
              @input="deletComma"
              @change="changeBudgetValue"
              @blur="onBudgetBlur"
```


> 输入

<el-input v-model="inputValue" @blur="onBudgetBlur"  @change="changeBudgetValue"  @input="deletComma" @keydown="keydown" @keyup="keyup" @keypress="keypress"></el-input>

---
> 触发事件

<el-input v-model="resuleValue"></el-input>

<script>
  export default{
    data() {
        return {
            inputValue: '',
            resuleValue: '',
        }
    },
    methods: {
      onBudgetBlur() {
        this.resuleValue = this.resuleValue + 'blur__'
      },
      changeBudgetValue() {
        this.resuleValue = this.resuleValue + 'change__'
      },
      deletComma() {
        this.resuleValue = this.resuleValue + 'input__'
      },
      keydown() {
        this.resuleValue = this.resuleValue + 'keydown__'
      },
      keyup() {
        this.resuleValue = this.resuleValue + 'keyup__'
      },
      keypress() {
        this.resuleValue = this.resuleValue + 'keypress__'
      },
    },
  }
</script>