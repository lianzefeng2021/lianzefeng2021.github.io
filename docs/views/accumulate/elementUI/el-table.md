---
title: el-table
---

> @sort-change="sortChange"
>
> // 当表格的排序条件发生变化的时候会触发该事件
> sortChange () {},

> 表格多选实现翻页勾选 翻页有记忆选择功能
>
> :row-key="getRowKey"
>
> :reserve-selection="true"

```js
<el-table
      ref="table"
      :data="tablesData"
      @selection-change="handleSelectionChange"
      :row-key="getRowKey"
>
      <el-table-column
            type="selection"
            width="55"
            :reserve-selection="true"
      ></el-table-column>
</el-table>

methods: {
      // 指定一个key标识这一行的数据
      getRowKey(row) {
            return row.id
      },

      // val表示选中的表格行数据
      handleSelectionChange(val) {
            console.log(val)
      },
}
```