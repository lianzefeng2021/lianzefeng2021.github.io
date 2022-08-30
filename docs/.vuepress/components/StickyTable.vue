<!-- position: sticky;  固定首行与表头，同时使用 z-index 防止遮挡数据 -->
<template>
  <div ref="form">
    <table border="1">
      <tr>
        <th v-for="item in headerData" v-bind:key="item.index">
          {{ item.headerName }}
        </th>
      </tr>
      <tr v-for="item in tableData" v-bind:key="item.index">
        <td>{{ item.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data () {
    return {
      headerData: [
        {
          index: 0,
          headerName: header0
        },
        {
          index: 1,
          headerName: header1
        },
        {
          index: 2,
          headerName: header2
        },
        {
          index: 3,
          headerName: header3
        }
      ],
      tableData: [
        {
          index: 0,
          name: echo_0
        },
        {
          index: 1,
          name: echo_1
        },
        {
          index: 2,
          name: echo_2
        },
        {
          index: 3,
          name: echo_3
        }
      ]
    }
  },
  methods: {}
}
</script>
