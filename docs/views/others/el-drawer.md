---
title: el-drawer
---
> 抽屉

> 有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验.



<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</el-button>

<el-drawer
  title="我是外面的 Drawer"
  :visible.sync="drawer"
  size="50%">
  <div>
   <el-button @click="innerDrawer = true">打开里面的!</el-button>
   <el-drawer
     title="我是里面的"
     :append-to-body="true"
     :before-close="handleClose"
     :visible.sync="innerDrawer">
     <p>_(:зゝ∠)_</p>
   </el-drawer>
  </div>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>