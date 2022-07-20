---
title: input框事件触发顺序
---


> 事件触发顺序

```js
              @input="input"
              @change="change"
              @blur="blur"
```


> 输入

<el-input v-model="inputValue" @blur="blur" @focus="focus" @change="change"  @input="input" @keydown.native="keydown" @keyup.native="keyup" @keypress.native="keypress" @paste.native="paste"></el-input>

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
      blur() {
        this.resuleValue = this.resuleValue + 'blur__'
      },
      focus() {
        this.resuleValue = this.resuleValue + 'focus__'
      },
      change() {
        this.resuleValue = this.resuleValue + 'change__'
      },
      input() {
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
      paste() {
        this.resuleValue = this.resuleValue + 'paste__'
      },
    },
  }
</script>

``` js
// 在 input 框中 输入东西,删除逗号等无关字符
deleteComma (value) {
  this.data.value1 = value.replace(/,+/g, '').match(/^\d*(\.?\d{0,2})/g)[0] || null
}

// 将数值显示为千分符且保留两位小数 change事件
if (Number(value)) {
  const val = Number(value).toFixed(2)
  this.queryInfos.data1 = val
  this.queryInfos.data2 = Number(val).toLocaleString()
}

// 将逗号等无关的去掉后，Number()将其保留两位小数后放入所需数据对象中
onBudgetBlur (val) {
  const reg = /^[1-9]\d*$/
  const budgetValue = val.target.value.replace(/,+/g, '')
  if (reg.test(budgetValue)) {
    const budget = Number(budgetValue)
    const settingTableData = this.settingTableData.map(item => {
      return {
        ...item,
        budget: Number(new Big(Number(item.budgetRatio) / 100).times(budget).valueOf()).toFixed(
          2
        )
      }
    })
    this.settingTableData = settingTableData
  }
  // 修改了budget，将其上浮配置开关重置为 关闭
  this.isFloatUp = '0'
},
```