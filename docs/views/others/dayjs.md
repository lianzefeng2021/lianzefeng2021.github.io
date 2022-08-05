---
title: dayjs
---

<h1>{{ now }}</h1>

<el-button @click="changeTime">change</el-button>

<el-input v-model='testNum'></el-input>

<el-button @click="change">changeInput</el-button>

<el-input v-model='testNum2' :disabled='true'></el-input>

``` js
<script>
  var dayjs = require('dayjs')
  import Big from 'big.js'
  //import dayjs from 'dayjs' // ES 2015
  export default {
    data() {
      return {
        now: dayjs().format('YYYY-MM-DD hh:mm:ss'),
        testNum: null,
        testNum2: null
      }
    },
    methods: {
        changeTime () {
            this.now = dayjs().format('YYYY-MM-DD hh:mm:ss')
        },
        change () {
          try {
            this.testNum2 = Number(new Big(this.testNum ? this.testNum : 0).div(100))
          } catch (e) {
            console.error(e)
            this.$message({
              message: '输入非纯数字',
              type: 'warning'
            });
          } finally {}
        }
    }
  }
</script>
```

<script>
  var dayjs = require('dayjs')
  import Big from 'big.js'
  //import dayjs from 'dayjs' // ES 2015
  export default {
    data() {
      return {
        now: dayjs().format('YYYY-MM-DD hh:mm:ss'),
        testNum: null,
        testNum2: null
      }
    },
    methods: {
        changeTime () {
            this.now = dayjs().format('YYYY-MM-DD hh:mm:ss')
        },
        change () {
          try {
            this.testNum2 = Number(new Big(this.testNum ? this.testNum : 0).div(100))
          } catch (e) {
            console.error(e)
            this.$message({
              message: '输入非纯数字',
              type: 'warning'
            });
          } finally {}
        }
    }
  }
</script>
