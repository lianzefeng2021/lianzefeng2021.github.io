---
title: dayjs
---

<h1>{{ now }}</h1>

<el-button @click="changeTime">change</el-button>


```js
<script>
    var dayjs = require('dayjs')
    //import dayjs from 'dayjs' // ES 2015
  export default {
    data() {
      return {
        now: dayjs().format('YYYY-MM-DD hh:mm:ss')
      }
    },
    methods: {
        changeTime () {
            this.now = dayjs().format('YYYY-MM-DD hh:mm:ss')
        }
    }
  }
</script>
```

<script>
    var dayjs = require('dayjs')
    //import dayjs from 'dayjs' // ES 2015
  export default {
    data() {
      return {
        now: dayjs().format('YYYY-MM-DD hh:mm:ss')
      }
    },
    methods: {
        changeTime () {
            this.now = dayjs().format('YYYY-MM-DD hh:mm:ss')
        }
    }
  }
</script>
