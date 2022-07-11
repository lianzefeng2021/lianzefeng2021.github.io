# Array

## Array.prototype.reduce()

<el-button @click="clickMe">click</el-button>

<span>{{ data }}</span>


```js
            data: [
                {
                    id: 1,
                    data: { 
                        name: 111
                    }
                },
                {
                    id: 666,
                    data: {}
                },
                {
                    id: 222,
                    data: { 
                        name: 222
                    }
                },
            ]

        this.data = this.data.reduce((acc, item) => {
          acc[item.id] = item.data || {}
          return acc
        }, {})

        Array.reduce((previous, current, index, array)=>{},initValue)
```

<script>
  export default{
    data() {
        return {
            data: [
                {
                    id: 1,
                    data: { 
                        name: 111
                    }
                },
                {
                    id: 666,
                    data: {}
                },
                {
                    id: 222,
                    data: { 
                        name: 222
                    }
                },
            ]
        }
    },
    methods: {
      clickMe() {
        this.data = this.data.reduce((acc, item) => {
          acc[item.id] = item.data || {}
          return acc
        }, {})
      },
    },
  }
</script>
