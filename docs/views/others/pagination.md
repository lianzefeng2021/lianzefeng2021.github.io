---
title: pagination
---

<Pagination :total="total"
:page.sync="pageNum"
:limit.sync="pageSize"
@pagination="itemClick" />

total：<el-input v-model="total" placeholder="total"></el-input>

pageNum：<el-input v-model="pageNum" placeholder="pageNum"></el-input>

pageSize：<el-input v-model="pageSize" placeholder="pageSize"></el-input>

<script>
  export default{
    data() {
        return {
            total: 33,
            pageNum: 1,
            pageSize: 10
        }
    },
    watch: {
        total: {
            handler () {
                this.total = Number(this.total)
            },
        // deep: true
        },
        pageNum: {
            handler () {
                this.pageNum = Number(this.pageNum)
            },
        },
        pageSize: {
            handler () {
                this.pageSize = Number(this.pageSize)
            },
        },
    },
//       computed: {
//         total: {
//         get () {
//             return Number(this.total)
//         },
//         set (newVal) {
//             this.total = Number(newVal)
//         }
//         }
//   },
    methods: {
      itemClick() {
        // this.$message()
      },
    },
  }
</script>
