---
home: true
heroImage: /images/photo.jpg
# actionText: 搭建个人博客
# actionLink: guide.html
features:
  - title: 技术栈
    details: 晓锋主要技术栈为vue2,正在努力学习vue3，尚未阅读过vue源码，会尝试自己解读源码，理解其编程思想与方法。常用UI组件库为elementUI,并以此为出发点学习包括elementPlus、ant-design等组件库，并以所学，尝试在此建立自己常用组件库
  - title: 定义
    details: 个人觉得，一个能成长，不给自己设限的人，才能在其道路上愈走愈远，总结与沉淀过去，立足与专注现在，才有资格展望与期待未来。投身于it行业，不仅仅需要过硬的技术支持，在与pm、后端、客户、架构沟通，理解需求，分配时间，分析自身技术去满足业务需求的过程同样重要，而不是一味埋头敲代码，才能成长，才能成为行业'前端'。所以不必把自己局限在前端，或许你才是天生的领导者呢~
  - title: 方向
    details: 在前端领域有所领悟，未来会学习小程序，并以此为基础学习产品相关知识领域，并逐渐向业务方面，即产品经理方面过渡，当然，前端架构师更是长远目标，每个it从业者都会为自己完成的作品感到骄傲！
footer: 李晓锋 | 一个想被富婆包养的练块程序员
---

<el-button type="primary" @click="clickMe">我是 Element-UI</el-button>
:tada: :100:

::: tip 提示
he is a single man
:icon="Edit"
:::

::: warning 注意
he is a doubi
:::

::: danger 警告
he is danger
:::

```js
<script>console.log('welcome to my word~')</script>
```

<script>
  export default{
    methods: {
      clickMe() {
        this.$message.error('痛...太痛了...')
      }
    },
  }
</script>
